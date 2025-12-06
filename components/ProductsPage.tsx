import Head from "next/head";
import ProductList from "@components/ProductList";
import {useReserve} from "../hooks/useReserve";
import {Box, Typography, Link as MuiLink} from "@mui/material";
import React from "react";
import type {Product} from "../types/event";

type ProductsPageProps = { isReservable: boolean; title: string; products: Array<{ data: Product }>; onBack?: () => void };

export default function ProductsPage({title, products, onBack}: ProductsPageProps) {
    const mutation = useReserve()
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
        <ProductList products={products.map(({data}) => ({
            ...data,
            onReserve: (name: string) => mutation.mutate({id: data.id, name})
        }))}/>
    </>
}
