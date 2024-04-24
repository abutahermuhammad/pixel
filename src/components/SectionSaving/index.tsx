import React from 'react'
import Container from '../Container'
import Style from './savings.module.scss';
import Image from 'next/image';
import AREA_IMAGE from '@/assets/images/savings.jpg';
import AVATER1 from '@/assets/images/avatar-1.jpg';
import AVATER2 from '@/assets/images/avatar-2.jpg';
import AVATER3 from '@/assets/images/avatar-3.jpg';
import CheckMark from '@/assets/icons/CheckMark';

const TOP_SELLERS = [
    {
        name: "Sally Smith",
        description: "Handmade Accessories",
        verified: true,
        image: AVATER1.src,
        body: [
            `Camera Bags`,
            `Grips & Rigs`,
            `Professional Straps`,
        ]
    },
    {
        name: "Emily Wong",
        description: "Optics Enthusiast",
        verified: true,
        image: AVATER2.src,
        body: [
            `Unique Lenses`,
            `ND & UV Filters`,
            `Special Effect Filters`,
            `Lens Accessories,`,
        ]
    },
    {
        name: "George Duke",
        description: "Vintage Collector",
        verified: true,
        image: AVATER3.src,
        body: [
            `60s & 70s Film Cameras`,
            `Old Prints`,
            `Disposables`,
        ]
    },
]

type TSeller = typeof TOP_SELLERS[0];

const SectionImage = () => {
    return (
        <div className={Style.__area_image}>
            <Image src={AREA_IMAGE} width={657} height={476} alt="image" />
        </div>
    )
}

const SellerCard: React.FC<TSeller> = ({ name, description, verified, image, body }) => {
    return (
        <div className={Style.__card}>
            <div className={Style.__card_head}>
                <div className={Style.__avatar}>
                    <Image src={image} width={100} height={100} alt={name} />
                </div>

                <div className={Style.__card_info}>
                    <h3 className={Style.__seller_name}>{name}</h3>
                    <p className={Style.__seller_description}>{description}</p>
                    {verified && <div className={Style.__verifiedBadge}>
                        <div className={Style.__badge_icon}>
                            <CheckMark />
                        </div>
                        <div className={Style.__badge_label}>PIXEL Verified</div>
                    </div>}
                </div>
            </div>

            <div className={Style.__seller_body}>
                {body && (
                    <ul className={Style.__body_list}>
                        {body.map((item, index) => (
                            <li className={Style.__body_line} key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div >
    );
}

const SectionContent = () => {
    return (
        <div className={Style.__area_content}>
            <div className={Style.__area_head}>
                <h2 className={Style.__area_title}>Turn used gear into new possibilities</h2>
                <p className={Style.__area_description}>We offer a reliable platform for buying and selling used photography gear. Whether you&apos;re a beginner looking for affordable equipment or a professional photographer in search of high-end gear at a discounted price, we&apos;ve got you covered. </p>
            </div>

            <div className={Style.__topSellers}>
                <h3 className={Style.__topSellers_title}>Top sellers this month</h3>

                <div className={Style.__topSellers_cards}>
                    {TOP_SELLERS.map((seller, index) => (
                        <SellerCard {...seller} key={index} />
                    ))}
                </div>
            </div>

            <div className={Style.__area_actions}>
                <button className={Style.__actions_buy}>Buy</button>
                <button className={Style.__actions_sell}>Sell</button>
            </div>
        </div>
    )
}

const SectionSavings = () => {
    return (
        <section className={Style.__area}>
            <Container className={Style.__area_container}>
                <h2 className={Style.__area_title}>Featured savings</h2>

                <div className={Style.__area_body}>
                    <SectionImage />
                    <SectionContent />
                </div>
            </Container>
        </section>
    )
}

export default SectionSavings