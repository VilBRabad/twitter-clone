// GoogleLoginClient.tsx
'use client'; // This directive tells Next.js this is a Client Component

import React, { useCallback } from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import toast from 'react-hot-toast';
import { graphqlClient } from '@/client/api';
import { verifyUserGoogleTokenQuery } from '@/graphql/query/user';

const GoogleLoginClient: React.FC = () => {
  const handleSuccess = useCallback(async(response: CredentialResponse)=>{
    const googleToken = response.credential;
    if(!googleToken) return toast.error(`Google token not found!`);

    const {verifyGoogleToken} = await graphqlClient.request(
      verifyUserGoogleTokenQuery,
      {token: googleToken},
    );

    if(!verifyGoogleToken) return toast.error(`Google token not found!`);

    window.localStorage.setItem("__twitter_token", verifyGoogleToken);
    console.log(verifyGoogleToken);
    return toast.success("Verified Success")
  }, [])

  const handleError = () => {
    console.log('error');
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
    />
  );
};

export default GoogleLoginClient;
