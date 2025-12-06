import Head from "next/head";
import ProductList from "@components/ProductList";
import {useReserve} from "../hooks/useReserve";
import {Box, Typography, Link as MuiLink} from "@mui/material";
import React from "react";
import type {Product} from "../types/event";

type ProductsPageProps = {
    isReservable: boolean;
    isPopular?: boolean;
    title: string;
    products: Array<{ data: Product }>;
    onBack?: () => void
};

export default function ProductsPage({title, products, isReservable, isPopular, onBack}: ProductsPageProps) {
    const mutation = useReserve()

    // Fire confetti when navigating to a popular page
    React.useEffect(() => {
        let timeoutIds: Array<number> = []
        if (!isPopular) return

        let isCancelled = false
        ;(async () => {
            try {
                const confettiModule = await import('canvas-confetti')
                if (isCancelled) return
                const confetti = confettiModule.default

                // Initial dual burst from bottom corners
                confetti({
                    particleCount: 120,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0, y: 1 },
                })
                confetti({
                    particleCount: 120,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1, y: 1 },
                })

                // A couple of follow-up smaller bursts for flair
                const t1 = window.setTimeout(() => {
                    confetti({
                        particleCount: 80,
                        angle: 60,
                        spread: 70,
                        startVelocity: 55,
                        origin: { x: 0.05, y: 1 },
                    })
                    confetti({
                        particleCount: 80,
                        angle: 120,
                        spread: 70,
                        startVelocity: 55,
                        origin: { x: 0.95, y: 1 },
                    })
                }, 400)
                const t2 = window.setTimeout(() => {
                    confetti({
                        particleCount: 60,
                        angle: 60,
                        spread: 60,
                        origin: { x: 0.1, y: 1 },
                    })
                    confetti({
                        particleCount: 60,
                        angle: 120,
                        spread: 60,
                        origin: { x: 0.9, y: 1 },
                    })
                }, 900)
                timeoutIds.push(t1, t2)
            } catch (e) {
                // no-op if confetti fails to load
            }
        })()

        return () => {
            isCancelled = true
            timeoutIds.forEach(id => window.clearTimeout(id))
        }
    }, [isPopular])
    return <>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 130}}>
            <Typography
                variant="h3"
                align="center"
                gutterBottom
                sx={{mb: 4, fontWeight: "bold"}}
            >
                {title}
            </Typography>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 80}}>
            <MuiLink href="#" onClick={(e) => {
                e.preventDefault();
                onBack && onBack();
            }}>Zpět na seznam</MuiLink>
        </Box>
        <ProductList
                     products={products.map(({data}) => ({
                         ...data,
                         isReservable,
                         onReserve: (name: string) => mutation.mutate({id: data.id, name})
                     }))}/>
    </>
}
