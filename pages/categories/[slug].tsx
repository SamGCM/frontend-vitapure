import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link"
import Image from 'next/image'
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useRouter } from 'next/router'

import {
  Quantity, Container, 
  ContainerPrice, TitlePage, 
  ContainerTitle, ButtonBuy, 
  Description, TitleProduct, 
  Card, Price, ContainerProducts
} from '../../views/categories/style'

// Interface
import { CategoriesProps } from "../../views/categories/interface";
import { Product } from "../../views/product/interface";


const ProductPage = ({category}: CategoriesProps) => {

  const router = useRouter()
  // console.log(category)

  const generateCards = () => {
    return category.products.map((item: Product) => {
      return (
        <Card key={item.id}>
          <Link 
            href={`/products/${item.slug}`}
          >
            <a>
              <Image 
                src={`https://vitapure.herokuapp.com` + item.image}
                width={270}
                height={270}
                alt={item.image.alternativeText}
              />
              <ContainerTitle>
                <TitleProduct>
                  {item.name}
                </TitleProduct>
                <Quantity>
                  {item.quantity}
                </Quantity>
              </ContainerTitle>
              {/* <Description>
                {item.description}
              </Description> */}
            </a>
          </Link>
          <ContainerPrice>
            <Price>
              R$ {item.price}
            </Price>
            <Link href={item.link}>
              <a>
                <ButtonBuy>
                  Comprar
                </ButtonBuy>
              </a>
            </Link>
          </ContainerPrice>

        </Card>
      )
    })
  }

  return (
    <>
      <Navbar/>
      <Container>
        <TitlePage>Para {category.name}</TitlePage>
        <ContainerProducts>
          {generateCards()}
        </ContainerProducts>
      </Container>
      <Footer/>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://vitapure.herokuapp.com/categories');
  const data = await res.json();

  const paths = data.map((categories) => ({
    params: { slug: categories.slug }
  }))

  return{
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) =>{
  const { slug } = params
  
  const res = await fetch(
    `https://vitapure.herokuapp.com/categories?slug=${slug}`
    ) // https://vitapure.herokuapp.com/
    const data = await res.json()
    const category = data[0]
    
    // console.log(`----------------`, category)
  return{
    props: {category},
  }
}

export default ProductPage