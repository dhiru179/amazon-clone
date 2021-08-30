import React, { useState } from 'react'

export default function Categories() {
    let ht38 = {
        height: '38px',

    }

    let width = {
        width: "50%",
    }
    const [addbtn, setaddbtn] = useState();
    const [state, setstate] = useState({ display: "none" })
    console.log('categories');
    function click() {
        setstate({
           
                display: "block",
           
            title: "Add Categories"
        });
        setaddbtn({ display: "none" });
        console.log(state);
    }
    function closed() {
        setstate({ display: "none"});
        setaddbtn({ display: "block" });
    }
    function editCategories() {
 setstate({display: "block",title: "Edit Categories"});
    }

    return (
        <>

            <div className="card card-primary" style={state}>
                <div className="bg-primary p-3 d-flex justify-content-between">
                    <h3 className="card-title">{state.title}</h3>
                    <button className="bg-danger" onClick={closed}><i className="fas fa-window-close"></i></button>
                </div>

                <div className="card-body col-8">
                    <form >
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Product Categories" />
                        </div>

                        <div className="form-group">
                            <label>Discription</label>
                            <textarea className="form-control" rows="2" placeholder="Description"></textarea>
                        </div>

                        <div className="form-group">
                            <button type="button" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>

            </div>

            <div className="row">
                <div className="col-12">
                    <div className="card card-primary">
                        <div className="bg-primary p-2 d-flex align-items-center  justify-content-between">
                            <div className="d-flex justify-content-center align-items-center">Categories List</div>
                            <div className="d-flex" style={width}>
                                <input type="search" className="form-control" placeholder="Type your keywords here" />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-lg btn-default d-flex aligin-item-center justify-content-center" style={ht38}>
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="" style={addbtn}>
                                <button className="btn btn-success" to="/#" onClick={click}><i className="fa fa-plus"></i>&nbsp;&nbsp;Add Categories</button>
                            </div>
                        </div>

                        <div className="card-body table-responsive p-0">
                            <table className="table table-hover text-nowrap text-center">
                                <thead>
                                    <tr>
                                        <th>1</th>
                                        <th>Categories Name</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>183</td>
                                        <td>Electronics</td>
                                        <td>Consumer electronics or home electronics are electronic  electronics or home electronics are electronic</td>
                                        <td>
                                            <button className="btn btn-sm btn-success mx-1">Active</button>
                                            <button className="btn btn-sm btn-danger mx-1">Deactive</button>
                                        </td>
                                        <td> <button className="btn btn-sm btn-primary" onClick={editCategories}>Edit</button></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}
