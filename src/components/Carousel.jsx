import React, { useEffect, useLayoutEffect, useMemo, useState, useRef } from 'react'
import IMAGES from '../images/ProductImgs'
import '../styles/Carousel.css'

export default function Carousel(props) {
    const gallery_name = props.gallery_name
    const [Arrayimg, setArrayimg] = useState([])
    const [dimensions, setDimensions] = useState()
    const [Positionimg, SetPositionimg] = useState(1)
    const [X, setX] = useState(0)
    const containerRef = useRef()
    const ctranslateX = 'translateX(-'+X+'px)'
    var css = {
        transform: ctranslateX
    }

    function setGallery(name){
        // Verificar si 'name' es undefined
       
        if (name === undefined) {
          console.error("El nombre no puede ser undefined.");
          return;
        }

        let [element] = IMAGES.filter((elements) => elements.name === name)
        
        // Verificar si el elemento existe y tiene la propiedad 'gallery'
        if (element && element.gallery) {
          // Destructurar la propiedad 'gallery'
          let { gallery } = element;

          // Asegurarse de que gallery sea un array antes de actualizar el estado
          if (Array.isArray(gallery)) {
            // Actualizar el estado
            setArrayimg((prevState) => [...prevState, ...gallery]);
          } else {
            console.error(`El elemento "${name}" no tiene un array 'gallery' válido.`);
          }
        } else {
          console.error(`No se encontró un elemento con el nombre "${name}" o no tiene la propiedad 'gallery'.`);
        } 
    }

    useEffect(() => {
        const transitionEnd = () => {
          if(Positionimg <= 1){
            containerRef.current.style.transitionDuration = '0ms'
            setX(dimensions * Positionimg)
          }
    
          if(Positionimg >= Arrayimg.length){
            containerRef.current.style.transitionDuration = '0ms'
            setX(dimensions * Arrayimg.length)
          }
    
        }
        
        document.addEventListener('transitionend', transitionEnd)
        return () => {
          document.removeEventListener('transitionend', transitionEnd)
        }
        
    }, [Positionimg, Arrayimg])

    useLayoutEffect(() => {
        //console.log(gallery_name)
        if(screen.width < 900){
          setX(325* 1)
          setDimensions(325);
        }else{
          setX(650* 1)
          setDimensions(650);
        }   
    },[])

    useEffect(() => {
      setGallery(gallery_name)
  },[gallery_name])

    const ShowCarousel = useMemo(() => {
        if(Arrayimg.length > 1){
          let items = Arrayimg?.map((img, id) => 
          
            <img className='carousel__img' key={id} src={img} alt="" />
      
          )
    
          return [
            <img  className='carousel__img'  key={Arrayimg.length + 1} src={Arrayimg[Arrayimg.length-1]} alt="" />,
            ...items,
           <img  className='carousel__img' key={Arrayimg.length + 2} src={Arrayimg[0]} alt="" />,
          ]
        }
    
        return <img src={Arrayimg[0]} alt="" />
    
    },[Arrayimg])

    const nextImg = () => {
        containerRef.current.style.transitionDuration = '400ms'
        if(Positionimg >= Arrayimg.length){
          setX(dimensions * (Arrayimg.length + 1))
          SetPositionimg(1)  
        }else{
          setX(dimensions * (Positionimg + 1))
          SetPositionimg((prev) =>  ++prev)
        }
    }
    
    
    const previousImg = () => {
        containerRef.current.style.transitionDuration = '400ms'
        if(Positionimg <= 1){
          setX(0)
          SetPositionimg(Arrayimg.length)
        }else{
          setX(dimensions * (Positionimg - 1))
          SetPositionimg((prev) =>  --prev)
        }
    }

  return (
    <div className='carousel'>
        <span className='carousel__control carousel__control--left' onClick={previousImg}></span>
            
            <div className='carousel__imgs-box' ref={containerRef} style={css}>
            {
              ShowCarousel
            }
            </div>
           
        <span className='carousel__control carousel__control--right' onClick={nextImg}></span>
    </div>
  )
}
