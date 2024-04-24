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

const SOCIAL_LINKS = [
    {
        name: "Instagram",
        icon: <Instagram />,
        url: "/"
    },
    {
        name: "Facebook",
        icon: <Facebook />,
        url: "/"
    },
    {
        name: "Twitter",
        icon: <Twitter />,
        url: "/"
    }
];

const NewsLetter = () => {
    return (
        <div className={Style.__newsletter}>
            <h3 className={Style.__newsletter_title}>Join our newsletter for exclusive offers!</h3>

            <form className={Style.__newsletter_form}>
                <input className={Style.__newsletter_name} type="text" name='name' placeholder='Name' />
                <input className={Style.__newsletter_email} type="email" name='email' placeholder='Email Address' />
            </form>

            <div className={Style.__socialLinks}>
                {SOCIAL_LINKS.map((item, index) => (
                    <Link className={Style.__socialLink} href={item.url} key={index}>
                        {item.icon}
                    </Link>
                ))}
            </div>
        </div>
    )
}

const FooterTop = () => {
    return (
        <Container className={Style.__top_container}>
            <div className={Style.__contact}>

                <iframe className={Style.__mapBox} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2685855351046!2d-0.15669102292928347!3d51.50828831063786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760531c05a0ab5%3A0x630962e0dcbbe7aa!2s71%20Park%20Ln%2C%20London%2C%20UK!5e0!3m2!1sen!2sbd!4v1713922793373!5m2!1sen!2sbd" width="219" height="163" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                <div className={Style.__address}>
                    <h3 className={Style.__title}>Come visit us!</h3>

                    <div className={Style.__address_line}>
                        <div className={Style.__icon}>
                            <Address />
                        </div>
                        <p className={Style.__address_text}>71 Park Lane, London <br />SW43 2LW</p>
                    </div>

                    <div className={Style.__address_line}>
                        <div className={Style.__icon}>
                            <Clock />
                        </div>
                        <p className={Style.__address_text}>Sunday to Friday<br /> 8:00 - 21:00</p>
                    </div>
                </div>
            </div>

            <div className={Style.__brand}>
                <Image src={LOGO} width={100} height={26} alt="PIXEL" />
            </div>

            <NewsLetter />
        </Container>
    )
}

export default FooterTop