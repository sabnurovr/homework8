import React from 'react';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function App(){

        return (
            <>
                <div style={{
                    margin: '0 auto',
                    maxWidth: '1200px'
                }}>
                    <Header/>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        style={{
                            marginTop: '20px'
                        }}
                    >
                        {cards.map((item) =>
                            <SwiperSlide key={item}><img src={`https://picsum.photos/1200/500?random=${item}`}/></SwiperSlide>)}
                    </Swiper>
                    <Footer/>
                </div>

            </>



    )
}