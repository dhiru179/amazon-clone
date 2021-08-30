import React, { useState } from 'react';
// import img from '../images/1.jpg';
import './component.css';

export default function Carousel() {
    const [count, setCount] = useState(0);
    let item = [1,2,3,4,5,6,7,8,9,10,11,12,12,1,1,2,5,4,6,4,55,45,47,545,744,449,4,94,4,64,6,46];
    // let show_item = 5;
    // let marginX = 10;//margin left + margin right(5+5)
    // let item_width = (100/show_item - marginX);
    // let total_width = item_width + total_item;
    let total_width = 500;
    console.log('count', count);
    function left(e) {
        let item_box = document.getElementById('item_box');
        if (count < 0) {
            let num = count + 100;
            setCount(num);
            item_box.style.transform = `translateX(${num}%)`;
            item_box.style.transition = `0.3s ease-in-out`;
            console.log('left', count)
        }
        else {
   
            console.log('count', count, 'left');
        }

    }
    function right(e) {
        if (count > -(total_width)) {

            let item_box = document.getElementById('item_box');
            let num = count - 100;
            setCount(num);
            item_box.style.transform = `translateX(${num}%)`;
            item_box.style.transition = `0.3s ease-in-out`;
            console.log('right', count, num)
        }
        else {
            // e.target.style.background='red';
            console.log('count', count, 'right');
        }
    }
    return (
        <div className='mt-3 card carousel'>
            <div className="card-header">
                <h3 className='m-0 p-0'>Product Categories</h3>
            </div>

            <span className='leftBtn ' onClick={left}><i class="fas fa-angle-left"></i></span>
            <span className='rightBtn' onClick={right}><i class="fas fa-angle-right"></i></span>

            <div className='box'>
                <ul className='item_box' id='item_box'>
                  {
                      item.map(index=><li className='item'>{index}</li>)
                  }
                </ul>
            </div>
        </div>

    )
}
