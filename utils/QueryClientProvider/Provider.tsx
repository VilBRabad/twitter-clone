"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const queryClient = new QueryClient();

interface ProviderProps{
    children: React.ReactNode;
}


export const Provider: React.FC<ProviderProps> = ({children})=>{
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

