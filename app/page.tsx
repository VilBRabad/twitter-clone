"use client"
import React from "react";
import HomePage from "./Home";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";
// import ReactQueryProvider from "./ReactQueryProvider";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function Home() {

  return (
    <QueryClientProvider client={queryClient}>
    <GoogleOAuthProvider clientId="792923753754-euf2eti6tismhthbat1i97qsv478b4e6.apps.googleusercontent.com">
      {/* <ReactQueryProvider> */}
        <Toaster />
        <HomePage /> 
        <ReactQueryDevtools/>
      {/* </ReactQueryProvider> */}
    </GoogleOAuthProvider>
    </QueryClientProvider>
  );
}
