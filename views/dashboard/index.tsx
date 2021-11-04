import Footer from "../../components/footer"
import Navbar from "../../components/navbar"
import Slide from "../../components/slider"

import Image from 'next/image'
import Link from 'next/link'

import {Container, Title, Button} from './style'

import energy from '../../public/assets/images/energy.jpg'
import force from '../../public/assets/images/force.jpg'
import train from '../../public/assets/images/train.jpg'



const Dashboard = () => {

  return (
    <>
        <Navbar/>
            <Slide/>
            <Container>
                <div className='container-energy box-image'>
                  <Image
                    src={energy.src}
                    width={1200}
                    height={800}
                  />
                  <div className='container-info' >
                    <Title>Para energia</Title>
                    <Link href='/categories/energia'>
                      <Button>Ver mais</Button>
                    </Link>
                  </div>
                </div>
                <div className='container-force box-image'>
                  <Image
                    src={force.src}
                    width={1200}
                    height={800}
                  />
                  <div className="container-info">
                    <Title>Para força</Title>
                    <Link href='/categories/forca'>
                      <Button>Ver mais</Button>
                    </Link>
                  </div>
                </div>
                <div className='container-train box-image'>
                  <Image
                    src={train.src}
                    width={1200}
                    height={800}
                  />
                  <div className="container-info">
                    <Title>Para treinos</Title>
                    <Link href='/categories/treino'>
                      <Button>Ver mais</Button>
                    </Link>
                  </div>
                </div>
            </Container>
        <Footer/>
    </>
  )
}



export default Dashboard

