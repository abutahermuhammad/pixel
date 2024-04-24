"use client"
import React, { useEffect, useState } from 'react'
import PrimaryNav from './PrimaryNav'
import Style from './navigationBar.module.scss'
import SecondaryNav from './SecondaryNav'
import MegaMenu from './MegaMenu'
import MobileMenu from './MobileMenu'


const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = isOpen ? "hidden" : "auto";
        }
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className={Style.__header}>
            <PrimaryNav toggleMenu={toggleMenu} isOpen={isOpen} />
            <SecondaryNav />

            {isOpen && <MobileMenu />}
        </header>
    )
}

export default NavigationBar