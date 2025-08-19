import ProductsPage from "@components/ProductsPage";

const products = [
    {
        id: "malovanky",
        image: "/malovanky.jpg",
        title: "Vodopicasso",
        price: 400,
        link: 'https://www.ceskykoutek.cz/wee-gallery-colour-me-knizka-do-vody-ocean/'
    },
    {
        id: "dinosauri",
        image: "/dinosauri.jpg",
        title: "Omalovánkosaurus",
        price: 500,
        link: 'https://www.utukutu.cz/hracky-do-vody/knizka-do-vany-milujes-dinosaury/'
    },
    {
        id: "delnik",
        image: "/delnik.webp",
        title: "Malý dělňas",
        price: 200,
        link: 'https://www.alza.cz/media/objevujeme-svet-na-stavbe-minipedie-d5210715.htm?kampan=adweok_eo-a-knihy_pla_all_top-produkty_roihunter_c__FKP240366_9062877&gad_source=1&gad_campaignid=2074570793&gbraid=0AAAAAD2xsm5pu-zXZacJ_b6Q3BY9FKlhF&gclid=CjwKCAjwtfvEBhAmEiwA-DsKjmfgmOIFCzHArwVayGwutPZaCnrWMDyQZUoGvRvs34D_W5QJV60FORoCDtIQAvD_BwE'
    },
    {
        id: "zoo",
        image: "/zoo.webp",
        title: "Zoo čtení",
        price: 50,
        link: 'https://www.svojtka.cz/uplne-male-kroky-zvirata/'
    },
        {
        id: "srouby",
        image: "/srouby.webp",
        title: "Šroubozvěř",
        price: 400,
        link: 'https://www.agatinsvet.cz/drevene-sroubovani-kralik-konik-kachna/'
    },
    {
        id: "diry",
        image: "/diry.webp",
        title: "Tref správnou díru",
        price: 400,
        link: 'https://www.agatinsvet.cz/drevena-vkladacka-tvary/?_gl=1*9zjbuu*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwwZDFBhCpARIsAB95qO2jDdJlMLazX4s_jDA0VNKl5EeWNb12gs45uCbz6HQQHm5wPHIeOnAaAtD9EALw_wcB&gbraid=0AAAAAD-ZHJPOvFmOWdIWwTCFpCnAcfTA0'
    },
]
export default function DelameRadost() {
    return <ProductsPage title="Děláme Jonášovi radost" products={products}/>
}
