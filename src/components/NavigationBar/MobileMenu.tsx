"use client"
import React from 'react'
import { LINKS } from './SecondaryNav'
import Link from 'next/link'
import { MENU } from './MegaMenu'
import clsx from 'clsx'

const MenuItem = ({ label, url }: { label: string, url: string }) => {
    return (
        <Link
            className='w-full h-[69px] flex justify-center items-center uppercase hover:bg-primary focus:bg-primary'
            href={url}
        >
            {label}
        </Link>
    )
}

const MegaMenu = ({ className }: { className?: string }) => {
    return (
        <div className={clsx('w-[calc(100%-170px)] h-[calc(100vh-68px)] fixed left-[170px] top-[68px] bg-white overflow-y-auto', className)}>
            <div className='px-10 py-4 w-full h-full text-black'>
                {MENU.map((menu, index) => (
                    <div key={index} className="">
                        <h3 className="h3 text-black underline">{menu.category}</h3>
                        <div className="">
                            {menu.links.map((link, index) => (
                                <Link
                                    key={index}
                                    className='w-full h-[69px] flex justify-left items-center'
                                    href={link.url}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

const MobileMenu = () => {
    return (
        <nav className='fixed left-0 top-[68px] z-30 w-full h-[calc(100vh-68px)] flex transition-all ease-out duration-300'>
            <div className='w-full max-w-[170px] bg-black'>
                <div className='w-full h-full text-white'>
                    {LINKS.map((link, index) => (
                        <div key={index} className='active:[.megamenu]:bg-primary'>
                            <MenuItem key={index} {...link} />
                            <MegaMenu className='megamenu' />
                        </div>
                    ))}

                </div>
            </div>
        </nav >
    )
}

export default MobileMenu