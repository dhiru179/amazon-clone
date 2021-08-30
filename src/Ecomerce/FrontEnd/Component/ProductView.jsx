import React, { useState, useEffect, useRef } from 'react';
import './productview.css';
import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';

export default function ProductView() {

    const [state, setstate] = useState({});
    let imgItem = [img1, img2, img3, img4, img5];
    let x, y, xperc, yperc, w1, h1, w2, h2;
    let preSelect = 0;
    let num=0;
    let ratio = 3;
    const imgContainer = useRef(null);
    const mainPicture = useRef(null);
    const react = useRef(null);
    const zoom = useRef(null);
    useEffect(() => {
        setstate({
            imgContainer: imgContainer.current,
            mainPicture: mainPicture.current,
            react: react.current,
            zoom: zoom.current,
        });
        //first image by default active 
        let imgItem = document.getElementById('img'+0);
        imgItem.classList.add('img-active');
        
    }, []);

function zoomBox(img){
   
    w1 = state.imgContainer.offsetWidth;
    h1 = state.imgContainer.offsetHeight;

    state.zoom.style.backgroundSize = w1 * ratio + 'px' + ',' + h1 * ratio + 'px';
    console.log(img,imgItem[0]);
    if(img==0){
        state.zoom.style.backgroundImage=`url(${imgItem[0]})`;
    }
    else{

        state.zoom.style.backgroundImage=`url(${img})`;
    }

    // //width and height of selector
    w2 = state.react.offsetWidth;
    h2 = state.react.offsetHeight;


    // set width and height of zoom image conatiner
    state.zoom.style.width = w2 * ratio + 'px';

    // we divide w2 and h2 by 2 for half react outside box,
    w2 = w2 / 2;
    h2 = h2 / 2;

}

   
    function overImage(e, elem, index) {
        zoomBox(elem);
        console.log(preSelect);
        let imgItem = document.getElementById('img' + preSelect);
        state.mainPicture.setAttribute('src', elem);
        imgItem.classList.remove('img-active');
        e.target.classList.add('img-active');
        preSelect = index;
        console.log(preSelect);

    }
    function moveing(e) {
        x = e.nativeEvent.offsetX;
        y = e.nativeEvent.offsetY;
        // percentage in cursor pointer
        xperc = (x / w1) * 100;
        yperc = (y / h1) * 100;

        //    left of picture
        if (x < w2) {
            x = w2;

        }
        // // right of main picture
        if (x > (w1 - w2)) {
            x = (w1 - w2);

        }
        // //    top of main picture
        if (y < h2) {
            y = h2;

        }
        // //    bottom of main picture
        if (y > (h1 - h2)) {
            y = (h1 - h2);

        }

        state.react.style.left = x + 'px';
        state.react.style.top = y + 'px';

        state.zoom.style.backgroundPosition = xperc + '%' + yperc + '%';
    }
    function moveOnPicture(e) {
        console.log(num);
        if(num===0){
            
            zoomBox(num)
        }
        moveing(e);
        state.zoom.style.display = 'block';
    }
    function leaveToPicture() {

        state.zoom.style.display = 'none';
        num=1;
    }

    return (
        <div className="zoom-box" >
            <div className="pictures">

                {
                    imgItem.map((elem, index) => {
                        return <img src={elem} key={index} alt="" id='pic1' onMouseOver={(e) => overImage(e, elem, index)} id={'img' + index} />
                    })
                }
            </div>
            <div className="picture" ref={imgContainer} onMouseMove={moveOnPicture} onMouseLeave={leaveToPicture}>
                <img src={imgItem[0]} alt="" ref={mainPicture} />
                <div className="react" ref={react}></div>
            </div>
            <div className="zoom" ref={zoom}></div>
        </div>

        // <div
        //     ref={el => { console.log(el);observed.current}} // or setState(el)
        //     className="App"
        // ></div>
    )
}