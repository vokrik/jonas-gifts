import ProductsPage from "@components/ProductsPage";
import {useEventData} from "../hooks/useEventData";

export default function Rozmazlujeme() {
    const {data, isPending, isFetching} = useEventData()
    if (isPending || isFetching) return <div>Loading</div>
    const page = data.pages.find(p => p.slug === 'rozmazlujeme')
    return <ProductsPage title={page.title} products={page.products}/>
}
