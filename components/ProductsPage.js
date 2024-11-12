import {useReservations} from "../hooks/useReservations";
import Head from "next/head";
import ProductList from "@components/ProductList";
import {useReserve} from "../hooks/useReserve";
import {Grid2 as Grid, Typography} from "@mui/material";
import Link from "next/link";
import React from "react";

export default function ProductsPage({title, products}) {
    const {data, isPending, isFetching} = useReservations()
    const mutation = useReserve()
    if (isPending || isFetching) return <div>Loading</div>
    const reserved = data.map((item) => item.data.id)
    return <>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Grid container spacing={2} minHeight={160}>
            <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
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
        <Grid container spacing={2} >
            <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
                <Link href="/"> Zpět na seznam </Link>
            </Grid>
        </Grid>
        <ProductList products={products.map((product) => {
            return {
                ...product,
                isReserved: reserved.includes(product.id),
                onReserve: (name) => mutation.mutate({id: product.id, name})
            }
        })}/>
    </>
}