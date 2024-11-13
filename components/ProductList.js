import Head from "next/head";
import {Container, Grid2 as Grid} from "@mui/material";
import ProductCard from "@components/ProductCard";

export default function ProductList({products}) {

    return (
        <div>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    {products.map(product => (
                        <Grid size={{xs: 12, sm:6, md:4}}>
                            <ProductCard {...product}
                                         isReserved={product.isReserved} onReserve={product.onReserve}/>
                        </Grid>))}

                </Grid>
            </Container>
        </div>
    )
}