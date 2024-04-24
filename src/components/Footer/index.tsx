import React from 'react'
import Style from './footer.module.scss'
import FooterTop from './FooterTop'
import FooterMiddle from './FooterMiddle'
import FooterBar from './FooterBar'

const Footer = () => {
    return (
        <footer className={Style.__area}>
            <FooterTop />
            <FooterMiddle />
            <FooterBar />
        </footer>
    )
}

export default Footer