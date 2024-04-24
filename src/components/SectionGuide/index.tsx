import Image from 'next/image'
import React, { memo } from 'react'
import GUIDE_THUMBNAIL from "@/assets/images/guide.jpg";
import Style from "./guide.module.scss";
import SEARCH_ICON from "@/assets/icons/search.svg";
import Container from '../Container';
import THUMB1 from '@/assets/images/thumb-1.jpg'
import THUMB2 from '@/assets/images/thumb-2.jpg'
import Link from 'next/link';
import ArrowRight from '@/assets/icons/ArrowRight';

const GUIDES = [
    {
        image: THUMB1.src,
        title: "Image Edition",
        excerpt: "Learn the basics of Adobe Lightroom and elevate your photos to a new standard.",
        url: "/"
    },
    {
        image: THUMB2.src,
        title: "Composition",
        excerpt: "Master the art of creating visually appealing photography that tells a story, with practical tips and examples.",
        url: "/"
    }
]


const SectionImage = () => {
    return (
        <div className={Style.__section_image}>
            <Image src={GUIDE_THUMBNAIL} width={792} height={470} alt='Photography guide | Pixel' />
        </div >
    )
}

const GuideSearchForm = () => {
    return (
        <form className={Style.__form}>
            <div className={Style.__input_wrapper}>
                <span className={Style.__input_icon} >
                    <Image className={Style.__input_icon_img} src={SEARCH_ICON.src} width={17.6} height={17.58} alt='search' />
                </span>
                <input className={Style.__input_field} type='text' placeholder='Search guides' />
            </div>
        </form>
    )
}

const GuideCard: React.FC<{ image: string, title: string, excerpt: string, url: string }> = ({ image, title, excerpt, url }) => {
    return (
        <div className={Style.__guide_card}>
            <div className={Style.__card_thumbnail} >
                <Image src={image} width={269} height={147} alt={title} />
            </div>

            <div className={Style.__card_content}>
                <div className={Style.__card_info}>
                    <h3 className={Style.__card_title}>{title}</h3>
                    <p className={Style.__card_description}>{excerpt}</p>
                </div>

                <Link className={Style.__card_link} href={url}>
                    <span className={Style.__card_link_text}>Read More</span>
                    <span className={Style.__card_link_icon}><ArrowRight /></span>
                </Link>
            </div>
        </div >
    )
}

const SectionGuideContent = () => {
    return (
        <div className={Style.__section_content}>
            <div className={Style.__section_head}>
                <h2 className={Style.__section_title}>New to Photography? Let us help!</h2>
                <p className={Style.__section_description}>We offer a variety of written & recorded guides for all aspects of photography, ranging from equipment handling to artistic theory.</p>
            </div>

            <GuideSearchForm />

            <div className={Style.__section_guides}>
                {GUIDES.map((guide, index) => {
                    return (
                        <GuideCard key={index} image={guide.image} title={guide.title} excerpt={guide.excerpt} url={guide.url} />
                    )
                })}
            </div>

        </div>
    )
}

const SectionGuide = () => {
    return (
        <section className={Style.__section_guide}>
            <Container className={Style.__section_container}>
                <SectionImage />
                <SectionGuideContent />
            </Container>
        </section>
    )
}

export default memo(SectionGuide)
