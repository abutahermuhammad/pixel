"use client"
import React, { memo, useEffect, useState } from 'react'
import Style from "./products.module.scss";
import Image from 'next/image';
import HeartOutlone from '@/assets/icons/HeartOutlone';
import CompareArrows from '@/assets/icons/CompareArrows';
import Star from '@/assets/icons/Star';
import Clock from '@/assets/icons/Clock';
import clsx from 'clsx';

export type TProduct = {
    id: string;
    thumbnail: string;
    title: string;
    brand: string;
    rating: string;
    details: string[];
    duration: string;
    packages: ({
        title: string;
        price: {
            regular: number;
            sale?: number;
        };
    })[]
};

const ProductCard: React.FC<TProduct> = (product) => {
    const [bundle, setBundle] = useState(0);
    const [price, setPrice] = useState(product.packages[bundle]?.price.sale || product.packages[bundle]?.price.regular);
    const [quantity, setQuantity] = useState(1);

    // Observing the changes in happens in the packages, quantity, bundle and price.
    // If any of these changes happens, the price will be updated.
    useEffect(() => {
        const tempPrice = (product.packages[bundle].price.sale || product.packages[bundle].price.regular) * quantity;
        setPrice(tempPrice);
    }, [bundle, price, quantity, product.packages]);


    // useEffect(() => {
    //     initMouseAnimation();
    // }, []);

    // const initMouseAnimation = () => {
    //     // When user will choose a package from the packages. there will be an slide animation.
    //     // By default the first package button will be selected. Selected button has a red background.
    //     // When user will selects a different package other then the selected one, the selected color will slide over to the selected package.
    //     const buttonArea = document.querySelector(`.${Style.__packages}`);
    //     const buttons = buttonArea?.querySelectorAll(`.${Style.__package}`);

    //     if (buttons) {
    //         console.log(buttons[0]);
    //         buttons.forEach((button) => {
    //             button.addEventListener("click", () => {
    //                 button.classList.toggle(Style.__package_selected);
    //             })
    //         })

    //     }
    // }

    return (
        <div className={Style.__card} >
            <div className={Style.__card_thumbnail}>
                <Image src={product.thumbnail} width={253} height={237} alt={product.title} />
            </div>

            <div className={Style.__card_action}>
                <div className={Style.__action_wishlist}>
                    <HeartOutlone />
                </div>
                <div className={Style.__action_compare}>
                    <CompareArrows />
                </div>
            </div>

            <div className={Style.__card_body}>

                <div className={Style.__header}>
                    <div className={Style.__header_heading}>
                        <h3 className={Style.__title}>{product.title}</h3>
                        <p className={Style.__brand}>{product.brand}</p>
                    </div>

                    <div className={Style.__rating}>
                        <span className={Style.__rating_icon}><Star /></span>
                        <span className={Style.__rating_text}>{product.rating}</span>
                    </div>
                </div>

                <div className={Style.__details}>
                    <div className={Style.__info}>
                        {product.details.length === 1 && <p className={Style.__description}>{product.details[0]}</p>}

                        {product.details.length > 1 && (
                            <ul className={Style.__info_list}>
                                {product.details.map((detail, index) => <li key={index} className={Style.__info_lisListItem}>{detail}</li>)}
                            </ul>
                        )}
                    </div>

                    <div className={Style.__extraAction}>

                        {/* Bundle packages Form */}
                        <div className={Style.__packages}>
                            <span className={Style.__animationBg}></span>
                            {product.packages.map((packageItem, index) => (
                                <button
                                    key={index}
                                    className={clsx(Style.__package, index === bundle && Style.__package_selected)}
                                    onClick={() => setBundle(index)}
                                >
                                    {packageItem.title}
                                </button>
                            ))}
                        </div>

                        {/* Cart Quantity Form */}
                        <div className={Style.__quantityForm}>
                            <div className={Style.__quantityControllerWrapper}>
                                <button
                                    className={Style.__quantityController}
                                    disabled={quantity <= 1}
                                    onClick={() => setQuantity(quantity - 1)}
                                >-</button>
                                <p className={Style.__quantityValue}>{quantity}</p>
                                <button
                                    className={Style.__quantityController}
                                    disabled={quantity >= 10}
                                    onClick={() => setQuantity(quantity + 1)}
                                >+</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={Style.__footer}>
                    <div className={Style.__duration}>
                        <span className={Style.__duration_icon}><Clock /></span>
                        <span className={Style.__duration_value}>{product.duration}</span>
                    </div>

                    <div className={Style.__price}>
                        {product.packages[0].price.sale && <p className={Style.__price_regular}>{product.packages[0].price.regular}</p>}
                        <p className={Style.__price_sale}>{price ? price : product.packages[0].price.sale || product.packages[0].price.regular}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default memo(ProductCard)