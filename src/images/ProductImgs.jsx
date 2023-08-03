/*const IMAGES = {
    first_product : {
        image1 :  new URL('../assets/ImgF4.svg', import.meta.url).href,
        image2 :  new URL('../assets/ImgF2.svg', import.meta.url).href,
        image3 :  new URL('../assets/ImgF3.svg', import.meta.url).href
    },
    second_product : {
        image1 :  new URL('../assets/Floorwash_5000.jpg', import.meta.url).href,
        image2 :  new URL('../assets/ImgF1.svg', import.meta.url).href,
        image3 :  new URL('../assets/ImgF3.svg', import.meta.url).href
    },
    third_product : {
        image1 :  new URL('../assets/Floorwash_1000.jpg', import.meta.url).href,
        image2 :  new URL('../assets/ImgF1.svg', import.meta.url).href,
        image3 :  new URL('../assets/ImgF3.svg', import.meta.url).href
    }
}*/


const IMAGES = [
    {
        name: 'test',
        gallery: [
            new URL('../assets/ImgF4.svg', import.meta.url).href,
            new URL('../assets/ImgF2.svg', import.meta.url).href,
            new URL('../assets/ImgF3.svg', import.meta.url).href
        ]
    },
    {
        name: 'floorwash_g1',
        gallery: [
           new URL('../assets/Floorwash_5000.jpg', import.meta.url).href,
           new URL('../assets/Floorwash_5000-2.jpg', import.meta.url).href,
           new URL('../assets/ImgF1.svg', import.meta.url).href
        ]
    },
    {
        name: 'floorwash_g2',
        gallery: [
           new URL('../assets/Floorwash_1000.jpg', import.meta.url).href,
           new URL('../assets/Floorwash_1000-2.jpg', import.meta.url).href,
           new URL('../assets/ImgF1.svg', import.meta.url).href
        ]
    }
]
export default IMAGES