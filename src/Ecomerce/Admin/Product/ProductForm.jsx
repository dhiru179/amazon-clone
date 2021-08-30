import React, { useState, useEffect, useContext } from 'react'
import { FetchApi } from '../../../UsefullFile/FetchApi';

// import { context } from '../Admin';

export default function ProductForm(props) {
    console.log(props);
    // const getApi = useContext(context);
    const [brand, setbrand] = useState([]);
    const [model, setmodel] = useState([]);
    const [file, setfile] = useState({})
    const [productData, setproductData] = useState({});
    function getFile(e) {
        setfile({
            ...file,
            [e.target.name]: e.target.files[0],
        })
    }
    function getData(e) {
        setproductData({
            ...productData,
            [e.target.name]: e.target.value,
            // image: e.target.files,
        });
        /* this console check live how to work ...productData and useState */
        // console.log(productData, e.target.name, e.target.value, e.target.files[0]);

        brand.map((elem, index) => {
            if (elem.brand_name === e.target.value) {
                const url = "http://127.0.0.1:8000/api/model/" + elem.id;
                FetchApi(url).then((data) => {
                    // console.log(data);
                    if (data.status === 'success') {
                        setmodel(data.data);
                    }
                    else {
                        setmodel([]);
                    }
                }).catch(err => console.log("error_01 :", err));
            }
        })
    }


    useEffect(() => {
        const url = "http://127.0.0.1:8000/api/brand";
        FetchApi(url).then((data) => {
            // console.log(data);
            if (data.status === 'success') {
                setbrand(data.data);
            }
            else {
                setbrand([]);
            }
        }).catch(err => console.log("error_01 :", err));
        return function cleanup(){
            
        }

    }, []);

    function submit(e) {
        e.preventDefault();
        const url = 'http://127.0.0.1:8000/api/product';
        const method = 'post';
        const formData = new FormData();
        for (const [key, value] of Object.entries(productData)) {
            formData.append(key, value);
        }
        formData.append('image', file.image);
        FetchApi(url, method, formData).then((data) => {
            console.log(data);
        }).catch((error) => {
            console.log(error);
        });


        console.log(productData);
    }

    return (
        <div className="container-fluid card p-0 rounded-0">
            <div className="card-header rounded-0 bg-secondary">
                <h4 className="m-0 p-0">Add Products {props.location.state}</h4>
            </div>
            <nav aria-label="breadcrumb" className="">
                <ol className="breadcrumb my-0 rounded-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
            </nav>
            <div className="" style={{ height: "" }}>
                <form className="form-horizontal col-6 offset-3 my-3" id='form'>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Brand</label>
                        <select className="form-control col-sm-9" name="brand" onChange={getData}>
                            <option value="" className="text-muted">Select Brand</option>
                            {
                                brand.map((elem, index) => {
                                    return <option value={elem.brand_name} key={index}>{elem.brand_name}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Model</label>
                        <select className="form-control col-sm-9" name="model" onChange={getData}>
                            <option value="" className="text-muted">Select Model</option>
                            {
                                model.map((elem, index) => {
                                    return <option value={elem.model_name} key={index}>{elem.model_name}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Title</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" name="title" id="inputPassword" placeholder="Title" onChange={getData} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Descriptions</label>
                        <div className="col-sm-9">
                            <textarea className="form-control" id="inputPassword" name="descriptions" placeholder="Descriptions" onChange={getData}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Color</label>
                        <select className="form-control col-sm-9" name="color" onChange={getData}>
                            <option value="" className="text-mute">Select Color</option>
                            <option value="black">Black</option>
                            <option value="lightblue">Light Blue</option>
                            <option value="red">Red</option>
                            <option value="redish">Radish</option>
                        </select>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Mrp</label>
                        <div className="col-sm-9">
                            <input type="number" className="form-control" name="mrp" id="inputPassword" placeholder="Mrp" onChange={getData} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Selling Price</label>
                        <div className="col-sm-9">
                            <input type="number" className="form-control" name="selling_price" id="inputPassword" placeholder="Selling Price" onChange={getData} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Image</label>
                        <div className="col-sm-9">
                            <input type="file" className="form-control p-1" id="inputPassword" name="image" placeholder="product images" onChange={getFile} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <button className="form-control btn btn-primary" onClick={submit}>Submit</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
