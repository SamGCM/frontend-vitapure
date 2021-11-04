import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { Swiper, SwiperSlide } from "swiper/react";


import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import {Container} from './style'
import "swiper/css";
import "swiper/css/navigation"

import slide1 from '../../public/assets/images/slide-1.jpg'
import slide2 from '../../public/assets/images/slide-2.jpg'

export default function Slide () {

  SwiperCore.use([Navigation]);

  return (
    <>
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
    >
      <SwiperSlide>
        <Container>
            <Link href='#'>
            <a>
              <Image 
                src={slide1}
              />
            </a>
            </Link>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container>
        <Image src={slide2} />
        </Container>
      </SwiperSlide>
    </Swiper>
    </>
  );
};