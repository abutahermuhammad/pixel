import React from 'react'
import Style from './navigationBar.module.scss'
import Image from 'next/image';
import Logo from "@/assets/images/logo.svg";
import Container from '../Container';
import Link from 'next/link';
import MenuIcon from '@/assets/icons/MenuIcon';
import Avater from '@/assets/icons/Avater';
import Cart from '@/assets/icons/Cart';
import Search from '@/assets/icons/Search';

const LINKS = [
    {
        name: "Profile",
        link: "/",
        icon: <Avater />
    },
    {
        name: "Cart",
        link: "/",
        icon: <Cart />
    },
    {
        name: "Search",
        link: "/",
        icon: <Search />
    }
]

const PrimaryNav: React.FC = () => {
    return (
        <nav className={Style.__primaryNav}>
            <Container className={Style.__primaryNav__container}>
                <div className={Style.__menuIcon}>
                    <MenuIcon />
                </div>

                {/* Brand Logo */}
                <div className={Style.__logo}>
                    <Link href={"/"}>
                        <Image src={Logo} alt="logo" width={116} height={30} />
                    </Link>
                </div>

                {/* Action Menu */}
                <div className={Style.__actionMenu}>
                    {LINKS.map((link, index) => (
                        <Link key={index} className={Style.__menuLink} href={link.link}>
                            {link.icon}
                        </Link>
                    ))}
                </div>
            </Container>
        </nav>
    )
}

export default PrimaryNav;