import React from 'react';
import './productCard.css';
import img from '../images/1.jpg';

export default function ProductCard() {

    return (
        <div className='product_card'>
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="information">
                <div className="product_information">
                    <div className="name">Lenovo Tab M8 HD Tablet (8-inch, 2GB, 32GB, Wi-Fi Only), Grey</div>
                    <span className="brand">by Lenvo</span>
                </div>
                <div className="rating">
                    <div className='star'>
                        <span class="fas fa-star checked"></span>
                        <span class="fas fa-star checked"></span>
                        <span class="fas fa-star checked"></span>
                        <span class="fas fa-star"></span>
                        <span class="fas fa-star"></span>
                    </div>
                    {/* <span className='link'><i className='fas fa-angle-down'></i></span> */}
                    <span className='total'>16,325</span>
                </div>
                <div className="price">
                    <span className="current_price">&#8377;10,999</span>
                    <span className="market_price">&#8377;9,999</span>
                </div>
                <div className="status">Delivery by: Thursday, <strong>Aug 26</strong></div>
            </div>
        </div>
    )
}
