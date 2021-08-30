import React from 'react'

export default function EditCategories() {
    return (
        <div className="card card-primary">
        <div className="bg-primary p-3 d-flex justify-content-between">
            <h3 className="card-title">Edit Categories</h3>
            <button className="bg-danger"><i className="fas fa-window-close"></i></button>
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
    )
}
