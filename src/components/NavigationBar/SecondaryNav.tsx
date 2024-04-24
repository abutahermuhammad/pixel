"use client"
import React, { useEffect } from 'react'
import Style from './navigationBar.module.scss'
import Container from '../Container';
import Link from 'next/link';
import clsx from 'clsx';
import MegaMenu from './MegaMenu';

const LINKS = [
    {
        label: "Brands",
        url: "/brands"
    },
    {
        label: "Cameras",
        url: "/cameras",
        menu: <MegaMenu />
    },
    {
        label: "Lenses",
        url: "/lenses"
    },
    {
        label: "Accessories",
        url: "/accessories"
    },
    {
        label: "Studio",
        url: "/studio"
    },
    {
        label: "Extreme",
        url: "/extreme"
    },
    {
        label: "Used",
        url: "/used"
    }
]

const SecondaryNav: React.FC = () => {

    return (
        <nav className={Style.__secondaryNav}>
            <Container className={Style.__container}>
                <ul className={Style.__menu}>
                    {LINKS.map((link, index) => (
                        <li key={index} className={clsx(Style.__menuItem)} data-menu={link.menu}>
                            <Link className={Style.__menuLink} href={link.url}>
                                {link.label}
                            </Link>
                            {link.menu}
                        </li>
                    ))}
                </ul>
            </Container>
        </nav>
    )
}

export default SecondaryNav;