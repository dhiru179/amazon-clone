import React, {useState, useEffect } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { FetchApi } from '../../../UsefullFile/FetchApi';


export default function ProductList() {

  
    const [productlist, setProductList] = useState([])
    const [modal, setModal] = useState({});
    useEffect(() => {
        const url = 'http://127.0.0.1:8000/api/product';
        FetchApi(url)
            .then((data) => {
                if (data.status === 'success') {
                    setProductList(data.data);
                }
                else {
                    setProductList([]);
                }
            }).catch(err => console.log(err));

    }, [])



    function popover(elem,status=true) {
        
        if(status===true){
            let table_row = document.getElementById(`table_row` + elem.id);
            table_row.style.background = 'orange';
            setModal(elem);
            // console.log(modal,table_row);
           
        }
        else{
            let table_row = document.getElementById(`table_row` + elem);
            table_row.style.background = 'white';
            // console.log(elem,status)
        }
       
    }
 
    return (
        <div className="row">
            <div className="col-12">
                <div className="card card-primary">
                    <div className="bg-primary p-2 d-flex align-items-center  justify-content-between">
                        <div className="d-flex justify-content-center align-items-center">
                            <h4 className="m-0 p-0">Product List</h4>
                        </div>
                        <div className="d-flex" style={{ width: '50%' }}>
                            <input type="search" className="form-control rounded-0" placeholder="Type your keywords here" />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-lg rounded-0 btn-default d-flex aligin-item-center justify-content-center" style={{ height: '38px' }}>
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <div className="">

                            <Link to={{ pathname: '/products' }} className="btn btn-success"><i className="fa fa-plus"></i>&nbsp;&nbsp;Add Product</Link>
                        </div>
                    </div>

                    <div className="card-body table-responsive p-0">
                        <table className="table table-hover text-nowrap ">
                            <thead>
                                <tr>
                                    <th>#id</th>
                                    <th>Product Title</th>
                                    <th>Description</th>
                                    <th>Status</th>

                                </tr>
                            </thead>
                            <tbody>

                                {
                                    productlist.map((elem, index) => {
                                        return (
                                            <tr key={index} id={'table_row' + elem.id}>
                                                <td className="p-1"><div className="text-center">{elem.id}</div></td>
                                                <td className="p-1" >

                                                    <div className="" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '155px', overflow: 'hidden' }}>
                                                        <span>{elem.title}</span>

                                                    </div>



                                                </td>
                                                <td className="p-1">
                                                    <div className='' style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '250px', overflow: 'hidden' }}>
                                                        <span> {elem.description}</span>

                                                    </div>

                                                </td>
                                                <td className="p-1">
                                                    <button className="btn btn-sm btn-primary mx-1" data-toggle="modal" data-target="#exampleModalLong" onClick={(e) => popover(elem)}>View</button>
                                                    <button className="btn btn-sm btn-secondary mx-1">Edit</button>
                                                    <button className="btn btn-sm btn-success mx-1">Active</button>
                                                    <button className="btn btn-sm btn-danger mx-1">Deactive</button>

                                                </td>

                                            </tr>
                                        );
                                    })
                                }



                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">{modal.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={()=>popover(modal.id,false)} >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            {modal.description}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
