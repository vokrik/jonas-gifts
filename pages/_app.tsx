// @ts-check
import '@styles/globals.css'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import React from "react";
/**
 * @param {import('next/app').AppProps} props
 */
function Application({Component, pageProps}) {
    const [queryClient] = React.useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
    )
}

export default Application
