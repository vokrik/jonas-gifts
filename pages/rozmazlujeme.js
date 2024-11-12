import ProductsPage from "@components/ProductsPage";

const products = [
    {
        id: "koule",
        image: "/koule.webp",
        title: "Blištivý kulébr",
        price: 800,
        link: 'https://www.spokonozka.cz/hracky-a-hry/tickit-senzoricke-reflexni-barevne-kulicky-4-ks/?gad_source=1&gclid=Cj0KCQiAlsy5BhDeARIsABRc6ZuxzJikHPmOsZrscfsfZUomffhxoi1syyDEG4gsWrUQtCtMxeHEYAgaAn8YEALw_wcB'
    }, {
        id: "kelimky",
        image: "/kelimky.jpg",
        title: "Přísavné kelínky",
        price: 600,
        link: 'https://www.utukutu.cz/senzoricke-hracky/kelimky-s-prisavkou/'
    },
    {
        id: "spinner",
        image: "/spinner.jpg",
        title: "Vrtule",
        price: 800,
        link: 'https://www.utukutu.cz/senzoricke-hracky/fat-brain-spinnery-whirlysquigz/'
    },
    {
        id: "set-knih",
        image: "/set-knih.jpg",
        title: "Set knih",
        price: 900,
        link: 'https://www.martinus.cz/890659-chris-haughton-s-little-library/1740751?utm_source=google&utm_medium=cpc&utm_campaign=CZ-Martinus-D-PLA-tROAS-%CE%B1&utm_content=&utm_term=&utm_id=17439162855&gad_source=1&gclid=Cj0KCQiAlsy5BhDeARIsABRc6Zt8e8JWghyO1LwaPHrkPe7PmJRgceVGq1j_OIMJsNmoesAjXFACutEaAmyrEALw_wcB'
    }
]
export default function DelameRadost() {
    return <ProductsPage title="Rozmazlujeme Jonáše" products={products}/>
}
