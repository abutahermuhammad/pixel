import React from 'react'
import IMG1 from '@/assets/images/cat1.jpg'
import IMG2 from '@/assets/images/cat2.jpg'
import IMG3 from '@/assets/images/cat3.jpg'
import Style from './categories.module.scss';
import Image from 'next/image'
import Link from 'next/link'
import Container from '../Container';
import ArrowRight from '@/assets/icons/ArrowRight';

const CATEGORIES = [
    {
        image: IMG1.src,
        name: "Cameras",
        description: "Browse through our selection of cameras",
        url: "/"
    },
    {
        image: IMG2.src,
        name: "Lenses",
        description: "Find the sharpest lens for your photoshoot",
        url: "/"
    },
    {
        image: IMG3.src,
        name: "Accessories",
        description: "Highest quality accessories to fit your gear",
        url: "/"
    },
]

const Card: React.FC<{
    image: string,
    name: string,
    description: string,
    url: string
}> = ({ image, name, description, url }) => {
    return (
        <div className={Style.__card} >
            <div className={Style.__card_image}>
                <Image src={image} alt="image" layout="fill" />
            </div>

            <div className={Style.__card_container}>
                <div className={Style.__card_details}>
                    <h2 className={Style.__card_title}>{name}</h2>
                    <p className={Style.__card_description}>{description}</p>
                    <div className={Style.__card_icon}>
                        <ArrowRight />
                    </div>
                </div>

                <div className={Style.__card_link}>
                    <Link href={url}>
                        <ArrowRight />
                    </Link>
                </div>
            </div>
        </div >
    )
}

const SectionCategories = () => {
    return (
        <section className={Style.__section}>
            <Container className={Style.__section_container}>
                {CATEGORIES.map((category, index) => (
                    <Card key={index} {...category} />
                ))}
            </Container>
        </section>
    )
}

export default SectionCategories