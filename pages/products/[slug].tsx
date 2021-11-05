import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link"
import Image from 'next/image'
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

// Interface
import { ProductProps } from "../../views/product/interface";

// Assets
import Circles from '../../public/assets/images/circles.svg'
import Bolt from '../../public/assets/icons/bolt.png'
import Exercise from '../../public/assets/icons/exercise.png'
import Heart from '../../public/assets/icons/heart.png'
import Muscle from '../../public/assets/icons/muscle.png'
import Protection from '../../public/assets/icons/protection.png'

import { SubLegend, ProductContainer, Title, Description, Button, 
  SubTitleSection, TitleSection, ContainerBenefits, Container } from "../../views/product/style";

const benefits = {
  energy: {
    text: "Mais energia",
    icon: Bolt,
  },
  heart: {
    text: "Melhora cardio",
    icon: Heart
  },
  muscle: {
    text: "Mais energia",
    icon: Muscle,
  },
  protection: {
    text: "Mais energia",
    icon: Protection,
  },
  exercise: {
    text: "Mais energia",
    icon: Exercise,
  },
}

const ProductPage = ({product}: ProductProps) => {
  const proceeds = product

  return (
    <>
      <Navbar/>
        <ProductContainer>
          <div>
            <Title>{proceeds.name}</Title>
            <Description>{proceeds.description}</Description>
            <Link href={`${proceeds.link}`}>
              <a>
                <Button>Comprar</Button>
              </a>
            </Link>
          </div>
          <div>
            <Image className='product'
            src={`https://vitapure.herokuapp.com` + proceeds.image[0].url}
            width={400}
            height={400}
            alt={proceeds.image.alternativeText}
            />
            <img className='circles'
              src={Circles.src}
            />
          </div>
        </ProductContainer>
        <Container>
          <SubTitleSection>BENEFÍCIOS</SubTitleSection>
          <TitleSection>PARA SUA SAÚDE</TitleSection>
          <ContainerBenefits>
            {proceeds.benefit?.map((item) => {
              return (
                <div className='flex flex-col items-center justify-center'>
                  <div className='containerIcon mb-5'>
                    <img className='m-0 p-0' src={benefits[item].icon.src} />
                  </div>
                  <SubLegend>{benefits[item].text}</SubLegend>
                </div>
              )
            })}
          </ContainerBenefits>
        </Container>
        
      <Footer/>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://vitapure.herokuapp.com/products');
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
  const res = await fetch(
    `https://vitapure.herokuapp.com/products?slug=${slug}`
    ) // https://vitapure.herokuapp.com/
  const data = await res.json()
  const product = data[0]

  // console.log(`----------------`, product)
  return{
    props: {product},
  }
}

export default ProductPage
