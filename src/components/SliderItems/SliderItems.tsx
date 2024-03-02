
import ShopItem from "../ShopItem/ShopItem"
import useFetch from "../../firebase/useFetch"
import { useEffect, useState } from "react"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const SliderItems = () => { 

    const { data, loading, error  } = useFetch()

    const [items, setItems] = useState(data)

    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
          }
        },
      ]
    }

    useEffect( () => {
      if(data) {
        setItems(data)
      }
    }, [data] )

  return ( 
    <section className="h-[50vh] overflow-hidden"> 

      <Slider {...settings}>
        {items && items.map( (x) => <ShopItem key={x.id} {...x} /> )} 
      </Slider>


    </section>
  ) 
} 

export default SliderItems

