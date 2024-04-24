import React from 'react'
import Style from './navigationBar.module.scss'
import Image from 'next/image';
import Logo from "@/assets/images/logo.svg";
import Container from '../Container';
import AVATAR_ICON from '@/assets/icons/avater.svg'
import CART_ICON from '@/assets/icons/cart.svg'
import SEARCH_ICON from '@/assets/icons/search.svg'
import Link from 'next/link';

const Links = [
    {
        name: "Profile",
        link: "/",
        icon: AVATAR_ICON
    },
    {
        name: "Cart",
        link: "/",
        icon: CART_ICON
    },
    {
        name: "Search",
        link: "/",
        icon: SEARCH_ICON
    }
]

const PrimaryNav: React.FC = () => {
    return (
        <nav className={Style.__primaryNav}>
            <Container className={Style.__primaryNav__container}>
                <div className={Style.__logo}>
                    <Image src={Logo} alt="logo" width={116} height={30} />
                </div>

                <div className={Style.__actionMenu}>
                    <ul className={Style.__menu}>
                        {Links.map((link, index) => (
                            <li key={index} className={Style.__menuItem}>
                                <Link className={Style.__menuLink} href={link.link}>
                                    <Image className={Style.__menuIcon} src={link.icon} alt="logo" width={30} height={30} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </Container>
        </nav>
    )
}

export default PrimaryNav;