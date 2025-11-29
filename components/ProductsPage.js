import Head from "next/head";
import ProductList from "@components/ProductList";
import {useReserve} from "../hooks/useReserve";
import {Grid2 as Grid, Typography} from "@mui/material";
import React from "react";

export default function ProductsPage({title, products, onBack}) {
    const mutation = useReserve()
    return <>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Grid container spacing={2} minHeight={130}>
            <Grid display="flex" justifyContent="center" alignItems="center" size="grow" >
                <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
                    sx={{mb: 4, fontWeight: "bold"}}
                >
                    {title}
                </Typography>
            </Grid>
        </Grid>
        <Grid container spacing={2} minHeight={80}>
            <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
                <a href="#" onClick={(e) => { e.preventDefault(); onBack && onBack(); }}>Zpět na seznam</a>
            </Grid>
        </Grid>
        <ProductList products={products.map((product) => ({
            ...product,
            onReserve: (name) => mutation.mutate({id: product.id, name})
        }))}/>
    </>
}
