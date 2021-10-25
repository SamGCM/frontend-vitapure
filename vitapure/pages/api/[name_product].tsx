import { GetStaticPaths, GetStaticProps } from "next";
import { Product, ProductProps } from "../../views/product/interface";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import {Container} from '../../views/dashboard/style'
import slide1 from '../../public/assets/images/slide-1.jpg'



const Dashboard = (slide: ProductProps) => {

    const generateSliders = () => {
      return Object.keys(slide).map((item, index) => {
        // return <p>{slide[item][0].description}</p>
        return (
          <SwiperSlide key={index}>
            <Container>
              <Image 
              src={`http://localhost:1337` + slide[item][0].background_image[0].url}
              width={1200}
              height={800}
              />
              
            </Container>
          </SwiperSlide>
        )
      }) 
    }
    
  return (
    <>
    
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
    >
      <p>{slide.products.description}</p>
      {generateSliders()}
      <SwiperSlide>
        <Container>
        
        Slide Funcionou ôh
        </Container>
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:1337/slides');
  
  const slides = await res.json();

  const paths = slides.map((slide) => ({
    params: { name_product: slide.name_product }
  }))

  return{
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) =>{
  
  const { name_product } = params
  const res = await fetch(`http://localhost:1337/slides?name_product=${name_product}`)
  
  
  
  const data = await res.json()

  

  const slide = data

  console.log(`----------------`, slide)

  return{
    props: {slide},
  }
}


export default Dashboard
