import ProductsPage from "@components/ProductsPage";

const products = [
    {
        id: "kruhy",
        image: "/kruhy.webp",
        title: "Malý gymnasta",
        price: 800,
        link: 'https://www.piccolino.cz/zavesne-kruhy-drevene/'
    }, {
        id: "kameny",
        image: "/kameny.webp",
        title: "Blištivé kameny",
        price: 600,
        link: 'https://www.utukutu.cz/senzoricke-hracky/zvukove-senzoricke-oblazky/'
    },
    {
        id: "bubny",
        image: "/bubny.webp",
        title: "Jonáš malý bubeník",
        price: 1000,
        link: 'https://www.nejenhra.cz/tambu-baby-sediva/'
    },
    {
        id: "zoomix",
        image: "/zoomix.png",
        title: "Zoo mixák",
        price: 700,
        link: 'https://www.littledutch-eshop.cz/farma/little-dutch-hraci-pult-se-zviratky-farma'
    },
    {
        id: "kulodraha",
        image: "/kulodraha.jpeg",
        title: "Kulodráha do vany",
        price: 600,
        link: 'https://www.littledutch-eshop.cz/hracky-do-vany/little-dutch-kulickova-draha-do-vany-pink'
    },
    
]
export default function DelameRadost() {
    return <ProductsPage title="Rozmazlujeme Jonáše" products={products}/>
}
