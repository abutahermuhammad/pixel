import React from 'react'
import Style from "./container.module.scss"
import clsx from 'clsx'

const Container: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    return (
        <div className={clsx(Style.__container, className)}>{children}</div>
    )
}

export default Container