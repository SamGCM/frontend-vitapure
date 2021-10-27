import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link"
import { Product, ProductProps } from "../views/product/interface";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import {Container} from '../views/dashboard/style'
import slide1 from '../../public/assets/images/slide-1.jpg'
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import { ProductContainer, Title, Description, Button } from "../views/product/style";



const ProductPage = ({product}: ProductProps) => {

  const proceeds = product

    // const generateSliders = () => {
    //   return Object.keys(slide).map((item, index) => {
    //     // return <p>{slide[item][0].description}</p>
    //     return (
    //       <SwiperSlide key={index}>
    //         <Container>
    //           <Image 
    //           src={`http://localhost:1337` + slide[item][0].background_image[0].url}
    //           width={1200}
    //           height={800}
    //           />
              
    //         </Container>
    //       </SwiperSlide>
    //     )
    //   }) 
    // }

    console.log(proceeds.name)
    
  return (
    <>
      <Navbar/>
        <ProductContainer>
          <div>
            <Title>{proceeds.name}</Title>
            <Description>{proceeds.description}</Description>
            <Link href={`${proceeds.link}`}>
              <a>
                <Button>Comprar Agora</Button>
              </a>
            </Link>
          </div>
          <div>
            <Image 
            src={`http://localhost:1337` + proceeds.image[0].url}
            width={400}
            height={400}
            />
          </div>
        </ProductContainer>
        
      <Footer/>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:1337/products');
  
  const data = await res.json();

  const paths = data.map((product) => ({
    params: { slug: product.slug }
  }))

  return{
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) =>{
  
  const { slug } = params
  const res = await fetch(`http://localhost:1337/products?slug=${slug}`)
  
  const data = await res.json()

  const product = data[0]

  console.log(`----------------`, product)
  
  return{
    props: {product},
  }
}


export default ProductPage
