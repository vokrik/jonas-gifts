import ProductsPage from "@components/ProductsPage";

const products = [
    {
        id: "jerab",
        image: "/jerab.webp",
        title: "Lego Jeřáb",
        price: 1400,
        link: 'https://www.alza.cz/hracky/lego-technic-42146-pasovy-jerab-liebherr-lr-13000-d7744563.htm?kampan=adwhr_hracky_pla_all_vendor-vykonnostni-lego_c_c_9219649__LO42146&gclid=Cj0KCQiAlsy5BhDeARIsABRc6Zu9Bc19VIiWbqCHvhyUCXa8AR2Exeu8hHGd1mMvAddSXJDI8LVl8JYaAiWpEALw_wcB'
    },
    {
        id: "stavebnice",
        image: "/stavebnice.png",
        title: "Stavebnice dopravních prostředků",
        price: 3700,
        link: 'https://lavly.cz/products/stavebnice-v-zivotni-velikosti-modu-curiosity-kit-deep-blue-sky-blue?variant=47008860799299&sfdr_ptcid=15631_422_698717238&sfdr_hash=3da28e3cba4b053efc4ed50027e54c79&srsltid=AfmBOooPNWpnBSE1txTx392bTAfyMxvgYyLzZMz_DzuNP4LoINOezvvYAPU'
    }
]
export default function DelameRadost() {
    return <ProductsPage title="Taťkova volba" products={products}/>
}
