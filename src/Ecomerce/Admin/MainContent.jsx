import React from 'react';
import Home from './Dashboard/Home';
import Categories from './Categories/Categories';
import {  Switch, Route} from "react-router-dom";
import Product from './Product/Product';
import Error from './Error';
import ProductForm from './Product/ProductForm';
import ProductList from './Product/ProductList';

export default function MainContent() {
    let height = {
        minHeight: "196px"
    }
    // console.log('main content')
    return (
        <div className="content-wrapper" style={height}>
            {/* <!-- Content Header (Page header) --> */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Dashboard v2</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/#">Home</a></li>
                                <li className="breadcrumb-item active">Dashboard v2</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        
            {/* <!-- Main content --> */}
            <section className="content">
                <div className="container-fluid">
          

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/categories" component={Categories}/>
                        <Route  exact path="/products" component={Product}/>
                        <Route  exact path="/addproduct" component={ProductForm}/>
                        <Route exact path='/productslist' component={ProductList}/>
                        <Route component={Error}/>
                       
                    </Switch>
        
        

                </div>
                
            </section>
            {/* <!-- /.content --> */}
        </div >
    )
}
