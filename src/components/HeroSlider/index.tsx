"use client"
import React, { memo } from 'react'
import Style from "./hero-slider.module.scss"
import Image from 'next/image'
import SLIDE1 from "@/assets/images/slide-1.jpg";
import SLIDE2 from "@/assets/images/slide-2.jpg";
import SLIDE3 from "@/assets/images/slide-3.jpg";
import Container from '../Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Virtual } from 'swiper/modules';
import Link from 'next/link';
import ArrowRight from '@/assets/icons/ArrowRight';

// Images


const SLIDES = [
    {
        image: SLIDE1.src,
        title: "MAKE BELIEVE",
        linkLabel: "Sales on selected SONY products",
        url: "/"
    },
    {
        image: SLIDE2.src,
        title: "PICTURE PERFECT DEALS",
        linkLabel: "Browse our second-hand gear market",
        url: "/"
    },
    {
        image: SLIDE3.src,
        title: "NEW ARRIVALS",
        linkLabel: "The newest and latest advances in technology",
        url: "/"
    }
];


const Slide: React.FC<{
    image: string,
    title: string,
    linkLabel: string,
    url: string
}> = ({ image, title, linkLabel, url }) => {
    return (
        <div className={Style.__slide}>
            <div className={Style.__slide__image}>
                <Image src={image} width={1968} height={727} alt={title} />
            </div>
            <div className={Style.__slide__container}>
                <Container>
                    <div className={Style.__slide__content}>
                        {title && <h2 className={Style.__slide__title}>{title}</h2>}

                        <Link href={url} className={Style.__slide__link}>
                            <span className={Style.__link_text}>{linkLabel}</span>

                            <span className={Style.__link__icon}>
                                <ArrowRight />
                            </span>
                        </Link>
                    </div>
                </Container>
            </div>
        </div>
    )
}

const HeroSlider = () => {
    return (
        <section className={Style.__slider} >
            <Swiper slidesPerView={1} pagination={{ clickable: true }} virtual modules={[Virtual, Pagination]}>
                {
                    SLIDES.map((slide, index) => (
                        <SwiperSlide key={index} virtualIndex={index}>
                            <Slide {...slide} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section >
    )
}

export default memo(HeroSlider)