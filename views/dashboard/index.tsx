import Footer from "../../components/footer"
import Navbar from "../../components/navbar"
import Slide from "../../components/slider"

import Image from 'next/image'

import {Container} from './style'

import energy from '../../public/assets/images/energy.png'
import force from '../../public/assets/images/force.png'
import train from '../../public/assets/images/train.png'



const Dashboard = () => {

  return (
    <>
        <Navbar/>
            <Slide/>
            <Container>
                <Image
                  src={energy.src}
                  width={1200}
                  height={800}
                />
                <Image
                  src={force.src}
                  width={1200}
                  height={800}
                />
                <Image
                  src={train.src}
                  width={1200}
                  height={800}
                />
            </Container>
        <Footer/>
    </>
  )
}



export default Dashboard

