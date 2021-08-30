import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Carousel from './Component/Carousel'
import Login from './Users/Login'
import ProductCard from './Component/ProductCard'
import ProductView from './Component/ProductView'

export default function Front() {
    return (
        <>
            <Navbar />
            <div className="">
                <div className=''>
                {/* <Carousel/> */}
                {/* <ProductCard/> */}
                <ProductView/>
                </div>
                
                <Switch>

                    <Route exact path='/login' component={Login} />
                </Switch>
            </div>

        </>
    )
}
