"use client"
import React, { memo } from 'react'
import Style from "./products.module.scss";
import PRODUCT1 from "@/assets/images/p1.jpg";
import PRODUCT2 from "@/assets/images/p2.jpg";
import PRODUCT3 from "@/assets/images/p3.jpg";
import PRODUCT4 from "@/assets/images/p4.jpg";
import PRODUCT5 from "@/assets/images/p5.jpg";
import Container from '../Container';
import ProductCard, { TProduct } from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Virtual } from 'swiper/modules';


const PRODUCTS: TProduct[] = [
    {
        id: "P1",
        thumbnail: PRODUCT1.src,
        title: "2 Lens kit",
        brand: "Canon",
        rating: "4.8",
        details: [
            `45MP Full-Frame CMOS Sensor`,
            `Sensor-Shift Image Stabilization`,
            `DIGIC X Image Processor`,
            `8K30 Raw Video`],
        duration: "17h 31m",
        packages: [
            {
                title: "1Len",
                price: {
                    regular: 1799.00,
                }
            },
            {
                title: "2Lens Kit",
                price: {
                    regular: 3000.00
                }
            }
        ]
    },
    {
        id: "P2",
        thumbnail: PRODUCT2.src,
        title: "EOS R5",
        brand: "Canon",
        rating: "4.6",
        details: [
            `45MP Full - Frame CMOS Sensor`,
            `Sensor - Shift Image Stabilization`,
            `DIGIC X Image Processor`,
            `8K30 Raw Video`
        ],
        duration: "2h 27m",
        packages: [
            {
                title: "Body",
                price: {
                    regular: 3899.00,
                    sale: 3699.00
                }
            },
        ]
    },
    {
        id: "P3",
        thumbnail: PRODUCT3.src,
        title: "Mavic 3",
        brand: "DJI",
        rating: "4.7",
        details: [
            `20MP 4 / 3" CMOS Hasselblad`,
            `4K Slow Motion at 120 fps`,
            `f/2.8 to f/11 Adjustable Aperture`,
            `DJI RC Remote Included`,
        ],
        duration: "21h 3m",
        packages: [
            {
                title: "Drone",
                price: {
                    regular: 1749.00,
                    sale: 1599.00
                }
            },
        ]
    },
    {
        id: "P4",
        thumbnail: PRODUCT4.src,
        title: "Carbon Fiber Tripod",
        brand: "Benro",
        rating: "4.2",
        details: [
            `Load Capacity: 26.4 lb`,
            `Max Height: 64.2"`,
            `Min Height: 16.1"`,
            `Folded Length: 16.1"`,
        ],
        duration: "3h 45m",
        packages: [
            {
                title: "Tripod",
                price: {
                    regular: 369.00,
                    sale: 319.00
                }
            },
        ]
    },
    {
        id: "P5",
        thumbnail: PRODUCT5.src,
        title: "HERO 11 Black Mini",
        brand: "GoPro",
        rating: "4.4",
        details: [
            `24.7MP Improved Performance`,
            `Smooth 5.0 Image Stabilization`,
            `8x Slow-Motion Video`,
            `5.3K60/2.7K240 Video`,
        ],
        duration: "7h 38m",
        packages: [
            {
                title: "Camera",
                price: {
                    regular: 349.00,
                    sale: 289.00
                }
            }
        ]
    }
];

const SectionProducts = () => {
    return (
        <section className={Style.__area}>
            <Container className={Style.__area_container}>
                <Swiper
                    className=''
                    spaceBetween={35}
                    slidesPerView={5}
                    virtual
                    modules={[Virtual]}
                >
                    {PRODUCTS.map((product) => (
                        <SwiperSlide className='w-[256px]' id={product.id} key={product.id} >
                            <div className={Style.__card_wrapper}>
                                <ProductCard {...product} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section >
    )
}

export default memo(SectionProducts)