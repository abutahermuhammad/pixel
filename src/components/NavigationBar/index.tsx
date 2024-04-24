import React from 'react'
import PrimaryNav from './PrimaryNav'
import Style from './navigationBar.module.scss'
import SecondaryNav from './SecondaryNav'
import MegaMenu from './MegaMenu'


const NavigationBar = () => {
    return (
        <header className={Style.__header}>
            <PrimaryNav />
            <SecondaryNav />
        </header>
    )
}

export default NavigationBar