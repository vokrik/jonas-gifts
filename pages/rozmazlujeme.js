import ProductsPage from "@components/ProductsPage";

const products = [
    {
        id: "koule",
        image: "/koule.png",
        title: "Blištivý kulébr",
        price: 800,
        link: 'https://www.utukutu.cz/senzoricke-hracky/barevne-tajuplne-senzoricke-koule/'
    }, {
        id: "kelimky",
        image: "/kelimky.png",
        title: "Přísavné kelínky",
        price: 600,
        link: 'https://www.utukutu.cz/senzoricke-hracky/kelimky-s-prisavkou/'
    },
    {
        id: "spinner",
        image: "/spinner.png",
        title: "Vrtule",
        price: 800,
        link: 'https://www.utukutu.cz/senzoricke-hracky/fat-brain-spinnery-whirlysquigz/'
    },
    {
        id: "set-knih",
        image: "/set-knih.jpg",
        title: "Set knih",
        price: 1200,
        link: 'https://www.martinus.cz/890659-chris-haughton-s-little-library/1740751?utm_source=google&utm_medium=cpc&utm_campaign=CZ-Martinus-D-PLA-tROAS-%CE%B1&utm_content=&utm_term=&utm_id=17439162855&gad_source=1&gclid=Cj0KCQiAlsy5BhDeARIsABRc6Zt8e8JWghyO1LwaPHrkPe7PmJRgceVGq1j_OIMJsNmoesAjXFACutEaAmyrEALw_wcB'
    },
    {
        id: "nabytek",
        image: "/nabytek.png",
        title: "Multifunkční nábytek",
        price: 2300,
        link: 'https://www.bonami.cz/p/set-detskeho-nabytku-roba-2'
    }
]
export default function DelameRadost() {
    return <ProductsPage title="Rozmazlujeme Jonáše" products={products}/>
}
