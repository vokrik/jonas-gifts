import '@styles/globals.css'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import React from "react";
import type { AppProps } from 'next/app'

function Application({ Component, pageProps }: AppProps) {
    const [queryClient] = React.useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
    )
}

export default Application
