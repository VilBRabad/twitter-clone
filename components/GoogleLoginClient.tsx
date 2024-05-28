'use client';
import React, { useCallback } from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import toast from 'react-hot-toast';
import { graphqlClient } from '@/client/api';
import { verifyUserGoogleTokenQuery } from '@/graphql/query/user';
import { useQueryClient } from '@tanstack/react-query';

const GoogleLoginClient: React.FC = () => {
  const queryClient = useQueryClient();
  
  const handleSuccess = useCallback(async(response: CredentialResponse)=>{
    // console.log(response);
    const googleToken = response.credential;
    if(!googleToken) return toast.error(`Google token not found!`);
    
    // console.log(window.localStorage.getItem("__twitter_token"));
    const data = await graphqlClient.request(
      verifyUserGoogleTokenQuery,
      {token: googleToken},
    );
    console.log(data);
    const verifyGoogleToken = data.verifyGoogleToken;

    // console.log(verifyGoogleToken);

    if(!verifyGoogleToken) return toast.error(`Google token not found!`);

    window.localStorage.setItem("__twitter_token", verifyGoogleToken);
    // console.log(verifyGoogleToken);

    await queryClient.invalidateQueries(['current-user']);
    return toast.success("Verified Success")
  }, [queryClient])

  const handleError = () => {
    return toast.error(`Server Error!`);
    // console.log('error');
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
    />
  );
};

export default GoogleLoginClient;
