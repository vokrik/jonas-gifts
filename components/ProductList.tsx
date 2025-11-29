import { Container, Grid } from "@mui/material";
import ProductCard from "@components/ProductCard";
import type { Product } from "../types/event";

type ProductWithAction = Product & { onReserve: (name: string) => void };

interface ProductListProps {
    products: ProductWithAction[];
}

export default function ProductList({ products }: ProductListProps) {

    return (
        <div>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4}>
                            <ProductCard {...product}
                                         isReserved={product.isReserved} onReserve={product.onReserve}/>
                        </Grid>))}

                </Grid>
            </Container>
        </div>
    )
}
