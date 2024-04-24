import React from 'react'
import Style from './navigationBar.module.scss';
import Container from '../Container';
import Link from 'next/link';

export const MENU = [
    {
        category: "DIGITAL",
        links: [
            {
                label: "DSLR",
                url: "/"
            },
            {
                label: "Mirrorless",
                url: "/"
            },
            {
                label: "Compact",
                url: "/"
            },
            {
                label: "Medium Format",
                url: "/"
            },
        ]
    },
    {
        category: "FILM",
        links: [
            {
                label: "35mm",
                url: "/"
            },
            {
                label: "Medium Format",
                url: "/"
            },
            {
                label: "Large Format",
                url: "/"
            },
            {
                label: "Instant",
                url: "/"
            },
            {
                label: "Disposable",
                url: "/"
            },
        ]
    },
    {
        category: "VIDEO",
        links: [
            {
                label: "Camcorder",
                url: "/"
            },
            {
                label: "Pro-Consumer",
                url: "/"
            },
            {
                label: "Super Chip",
                url: "/"
            },
        ]
    }
]


const MegaMenuItem: React.FC<{ label: string, url: string }> = ({ label, url }) => {
    return (
        <div className={Style.__megaMenuItem}>
            <Link href={url} className={Style.__megaMenuLink}>{label}</Link>
        </div>
    )
}

const MegaMenu = () => {
    return (
        <section className={Style.__megaMenu}>
            <Container className={Style.__megaMenu__container}>
                {MENU.map((menu, index) => (
                    <div key={index} className={Style.__megaMenu__category}>
                        <h3 className={Style.__category_title}>{menu.category}</h3>
                        <div className={Style.__category_links}>
                            {menu.links.map((link, index) => (
                                <MegaMenuItem key={index} {...link} />
                            ))}
                        </div>
                    </div>
                ))}
            </Container>
        </section>
    )
}

export default MegaMenu;