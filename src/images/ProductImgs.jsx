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
        name: 'haaga_477',
        gallery: [
            new URL('../assets/haaga-477.jpg', import.meta.url).href,
            new URL('../assets/haaga-477.jpg', import.meta.url).href,
            new URL('../assets/haaga-477.jpg', import.meta.url).href
        ]
    },
    {
        name: 'haaga_497',
        gallery: [
            new URL('../assets/haaga-497.jpg', import.meta.url).href,
            new URL('../assets/haaga-497.jpg', import.meta.url).href,
            new URL('../assets/haaga-497.jpg', import.meta.url).href
        ]
    },
    {
        name: 'haaga_677',
        gallery: [
            new URL('../assets/haaga-677.jpg', import.meta.url).href,
            new URL('../assets/haaga-677.jpg', import.meta.url).href,
            new URL('../assets/haaga-677.jpg', import.meta.url).href
        ]
    },
    {
        name: 'floorwash_5000',
        gallery: [
           new URL('../assets/Floorwash_5000.jpg', import.meta.url).href,
           new URL('../assets/Floorwash_5000-2.jpg', import.meta.url).href
        ]
    },
    {
        name: 'floorwash_1000b',
        gallery: [
           new URL('../assets/Floorwash_1000.jpg', import.meta.url).href,
           new URL('../assets/Floorwash_1000-2.jpg', import.meta.url).href
          
        ]
    },
    {
        name: 'floorwash_1400b',
        gallery: [
           new URL('../assets/floorwash_1400b.jpg', import.meta.url).href,
           new URL('../assets/floorwash_1400b.jpg', import.meta.url).href
        
        ]
    },
    {
        name: 'hsc_6000',
        gallery: [
           new URL('../assets/db_hurricone_6000.jpg', import.meta.url).href,
           new URL('../assets/db_hurricone_6000.jpg', import.meta.url).href
        
        ]
    }
]
export default IMAGES