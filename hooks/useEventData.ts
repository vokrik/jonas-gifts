import { useQuery } from '@tanstack/react-query'
import type { EventData } from '../types/event'

// Mocked unified API response. Replace with a real fetch later.
const fetchEventData = async (): Promise<EventData> => {
    // Hardcoded data structure for now
    // You can swap this with: const res = await fetch('/api/event'); return res.json();
    return {
        eventTitle: 'Jonášovy Narozeniny',
        pages: [
            {
                slug: 'delame-radost',
                title: 'Děláme Jonášovi radost',
                price: '1-500',
                period: 'kč',
                features: [
                    'Jonáš si bude mít s čím hrát',
                    'Naplňuje filosofii méně je více',
                    'Karma +10 bodů',
                ],
                isPopular: false,
                products: [
                    {
                        id: 'malovanky',
                        image: '/malovanky.jpg',
                        title: 'Vodopicasso',
                        price: 400,
                        link: 'https://www.ceskykoutek.cz/wee-gallery-colour-me-knizka-do-vody-ocean/',
                        isReserved: false,
                    },
                    {
                        id: 'delnik',
                        image: '/delnik.webp',
                        title: 'Malý dělňas',
                        price: 200,
                        link: 'https://www.alza.cz/media/objevujeme-svet-na-stavbe-minipedie-d5210715.htm?kampan=adweok_eo-a-knihy_pla_all_top-produkty_roihunter_c__FKP240366_9062877&gad_source=1&gad_campaignid=2074570793&gbraid=0AAAAAD2xsm5pu-zXZacJ_b6Q3BY9FKlhF&gclid=CjwKCAjwtfvEBhAmEiwA-DsKjmfgmOIFCzHArwVayGwutPZaCnrWMDyQZUoGvRvs34D_W5QJV60FORoCDtIQAvD_BwE',
                        isReserved: false,
                    },
                    {
                        id: 'zoo',
                        image: '/zoo.webp',
                        title: 'Zoo čtení',
                        price: 50,
                        link: 'https://www.svojtka.cz/uplne-male-kroky-zvirata/',
                        isReserved: true,
                    },
                    {
                        id: 'srouby',
                        image: '/srouby.webp',
                        title: 'Šroubozvěř',
                        price: 400,
                        link: 'https://www.agatinsvet.cz/drevene-sroubovani-kralik-konik-kachna/',
                        isReserved: false,
                    },
                    {
                        id: 'diry',
                        image: '/diry.webp',
                        title: 'Tref správnou díru',
                        price: 400,
                        link: 'https://www.agatinsvet.cz/drevena-vkladacka-tvary/?_gl=1*9zjbuu*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwwZDFBhCpARIsAB95qO2jDdJlMLazX4s_jDA0VNKl5EeWNb12gs45uCbz6HQQHm5wPHIeOnAaAtD9EALw_wcB&gbraid=0AAAAAD-ZHJPOvFmOWdIWwTCFpCnAcfTA0',
                        isReserved: false,
                    },
                ],
            },
            {
                slug: 'rozmazlujeme',
                title: 'Rozmazlujeme Jonáše',
                price: '500+',
                period: 'kč',
                features: [
                    'Foto se štastným Jonášem a vybranou hračkou',
                    'Jonáš bude o krok blíže k tomu být rozmazlené dítě',
                    'Karma +100 bodů',
                ],
                isPopular: false,
                products: [
                    {
                        id: 'kruhy',
                        image: '/kruhy.webp',
                        title: 'Malý gymnasta',
                        price: 800,
                        link: 'https://www.piccolino.cz/zavesne-kruhy-drevene/',
                        isReserved: false,
                    },
                    {
                        id: 'kameny',
                        image: '/kameny.webp',
                        title: 'Blištivé kameny',
                        price: 600,
                        link: 'https://www.utukutu.cz/senzoricke-hracky/zvukove-senzoricke-oblazky/',
                        isReserved: false,
                    },
                    {
                        id: 'bubny',
                        image: '/bubny.webp',
                        title: 'Jonáš malý bubeník',
                        price: 1000,
                        link: 'https://www.nejenhra.cz/tambu-baby-sediva/',
                        isReserved: true,
                    },
                    {
                        id: 'zoomix',
                        image: '/zoomix.png',
                        title: 'Zoo mixák',
                        price: 700,
                        link: 'https://www.littledutch-eshop.cz/farma/little-dutch-hraci-pult-se-zviratky-farma',
                        isReserved: false,
                    },
                    {
                        id: 'kulodraha',
                        image: '/kulodraha.jpeg',
                        title: 'Kulodráha do vany',
                        price: 600,
                        link: 'https://www.littledutch-eshop.cz/hracky-do-vany/little-dutch-kulickova-draha-do-vany-pink',
                        isReserved: false,
                    },
                ],
            },
            {
                slug: 'daddy',
                title: 'Taťkova volba',
                price: '😅',
                period: 'kč',
                features: [
                    'Daddy approves!',
                    'Jonáše naučíme vaše jméno mezi prvními',
                    'Foto se štastným Jonášem a Taťkou',
                    'Karma +1000 bodů',
                ],
                isPopular: true,
                products: [
                    {
                        id: 'jerab',
                        image: '/jerab.webp',
                        title: 'Lego Jeřáb',
                        price: 14000,
                        link: 'https://www.alza.cz/hracky/lego-technic-42146-pasovy-jerab-liebherr-lr-13000-d7744563.htm?kampan=adwhr_hracky_pla_all_vendor-vykonnostni-lego_c_c_9219649__LO42146&gclid=Cj0KCQiAlsy5BhDeARIsABRc6Zu9Bc19VIiWbqCHvhyUCXa8AR2Exeu8hHGd1mMvAddSXJDI8LVl8JYaAiWpEALw_wcB',
                        isReserved: false,
                    },
                ],
            },
        ],
    }
}

// Unified event data query hook
const useEventData = () => {
    return useQuery<EventData>({
        queryKey: ['event'],
        queryFn: () => fetchEventData(),
    })
}

export { useEventData, fetchEventData }
