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

const SHOP_MENU = {
    title: "Shop",
    col1: [
        {
            label: "Cameras",
            url: "/"
        },
        {
            label: "Lenses",
            url: "/"
        },
        {
            label: "Accessories",
            url: "/"
        }
    ],
    col2: [
        {
            label: "Studio",
            url: "/"
        },
        {
            label: "Brands",
            url: "/"
        },
        {
            label: "Extreme",
            url: "/"
        }
    ],

};

const USED_MENU = {
    title: "Used",
    links: [
        {
            label: "Buy & Sell",
            url: "/"
        },
        {
            label: "Policy",
            url: "/"
        },
        {
            label: "Report",
            url: "/"
        }
    ]
};

const ABOUT_MENU = {
    title: "About",
    links: [
        {
            label: "Contact",
            url: "/"
        },
        {
            label: "Our story",
            url: "/"
        },
        {
            label: "Blog",
            url: "/"
        }
    ]
};

const CURRENCIES = [
    {
        name: "USD",
        icon: "$"
    },
    {
        name: "EUR",
        icon: "€"
    }
]

const CONTACTS = [
    {
        label: "+972 123-456-78",
        icon: <Phone />,
        url: "/"
    },
    {
        label: "name@camera.com",
        icon: <Email />,
        url: "/"
    },
];

type TLinks = {
    label: string,
    icon?: React.ReactNode | string;
    url: string
}
const MenuWidget: React.FC<{ title?: string, links: TLinks[] }> = ({ title, links }) => {
    return (
        <div className={Style.__menu}>
            {title && <h3 className={Style.__menu_title}>{title}</h3>}
            <div className={Style.__menu_links}>
                {links.map((item, index) => (
                    <Link className={Style.__menu_link} key={index} href={item.url}>
                        {item.icon && <span className={Style.__icon}>
                            {item.icon}
                        </span>}
                        <span className={Style.__link_text}>{item.label}</span>
                    </Link>
                ))}
            </div>
        </div>

    )
}

const Currencies = () => {
    return (
        <div className={Style.__currencies}>
            {CURRENCIES.map((item, index) => (
                <button className={Style.__currency} key={index}>{item.name}{" "}{item.icon}</button>
            ))}
        </div>
    )
}

const FooterMiddle = () => {
    return (
        <Container className={Style.__middle_container}>
            <div className={Style.__menus}>
                <div className={Style.__shop}>
                    <MenuWidget title="Shop" links={SHOP_MENU.col1} />
                    <MenuWidget links={SHOP_MENU.col2} />
                </div>
                <MenuWidget title="Used" links={USED_MENU.links} />
                <MenuWidget title="About" links={ABOUT_MENU.links} />
            </div>

            <Currencies />

            <div className={Style.__contacts}>
                <MenuWidget title="Contact Information" links={CONTACTS} />
            </div>
        </Container>
    )
}

export default FooterMiddle;