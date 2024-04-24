import React from 'react'
import Style from './footer.module.scss'
import Container from '../Container'
import Image from 'next/image'
import LOGO from '@/assets/images/logo.svg'
import Address from '@/assets/icons/Address'
import Clock from '@/assets/icons/Clock'
import Link from 'next/link'
import Instagram from '@/assets/icons/Instagram'
import Facebook from '@/assets/icons/Facebook'
import Twitter from '@/assets/icons/Twitter'
import Phone from '@/assets/icons/Phone'
import Email from '@/assets/icons/Email'
import AmerianExpress from '@/assets/icons/AmerianExpress'
import MasterCard from '@/assets/icons/MasterCard'
import PayPal from '@/assets/icons/PayPal'
import Visa from '@/assets/icons/Visa'
import ApplePay from '@/assets/icons/ApplePay'


const CARDS = [
    {
        title: "American Express",
        icon: <AmerianExpress />,
    },
    {
        title: "Master Card",
        icon: <MasterCard />,
    },
    {
        title: "PayPal",
        icon: <PayPal />,
    },
    {
        title: "VISA",
        icon: <Visa />,
    },
    {
        title: "Apple Pay",
        icon: <ApplePay />,
    },
]


const MENU = [
    {
        label: "Return Policy",
        url: "/"
    },
    {
        label: "Accessibility",
        url: "/"
    },
    {
        label: "Terms of Use",
        url: "/"
    },
    {
        label: "Privacy Policy",
        url: "/"
    }
];


const Cards = () => {
    return (
        <div className={Style.__cards}>
            {CARDS.map((item, index) => (
                <div className={Style.__card} key={index} title={item.title}>
                    {item.icon}
                </div>
            ))}
        </div>
    )
}


const FooterBar = () => {
    return (
        <Container className={Style.__footerBar}>
            <p className={Style.__copyright}>
                © 2023 PIXEL.<br />
                All Rights Reserved
            </p>

            <Cards />

            <div className={Style.__links}>
                {MENU.map((item, index) => (
                    <Link href={item.url} key={index} className={Style.__link}>
                        {item.label}
                    </Link>
                ))}
            </div>
        </Container>
    )
}

export default FooterBar;