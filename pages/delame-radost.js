import ProductsPage from "@components/ProductsPage";

const products = [
    {
        id: "autobus",
        image: "/autobus.jpg",
        title: "Dřevěný autobus",
        price: 400,
        link: 'https://montessorihracky.cz/cs/drevena-auticka/11189-detske-auticko-autobus-8854740057440.html'
    },
    {
        id: "dinosauri",
        image: "/dinosauri.jpg",
        title: "Dinosauří omalovánky",
        price: 500,
        link: 'https://www.utukutu.cz/hracky-do-vody/knizka-do-vany-milujes-dinosaury/'
    },
    {
        id: "tulen",
        image: "/tulen.jpg",
        title: "Tuleň",
        price: 400,
        link: 'https://montessorihracky.cz/cs/Smyslove-hracky-Zrak/10733-tulen-8854740052810.html'
    },
    {
        id: "krtek",
        image: "/krtek.webp",
        title: "Krtek Kamarád ",
        price: 200,
        link: 'https://www.luxor.cz/v/1995674/krtek-kamarad'
    },
    {
        id: "bedary",
        image: "/bedary.webp",
        title: "Mačkadlo beďarů",
        price: 500,
        link: 'https://www.creammy.cz/liewood-pop-up-hracka-cal--faune-green-multi-mix/?gad_source=1&gclid=Cj0KCQiAlsy5BhDeARIsABRc6ZtoBmoQsLnDr4u1oBfGkeX_IK2jr05EgXxD37eMSo3RmpkXnoJE5ToaAnaAEALw_wcB'
    },
    {
        id: "lode",
        image: "/lode.webp",
        title: "Lodě",
        price: 200,
        link: 'https://www.notino.cz/petitemars/water-toys-hracka-do-vody/'
    }
]
export default function DelameRadost() {
    return <ProductsPage title="Děláme Jonášovi radost" products={products}/>
}
