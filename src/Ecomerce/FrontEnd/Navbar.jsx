import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './front.css';
export default function Navbar() {
    // const [style, setstyle] = useState({ display: { display: 'none' } })

    // function hover(e, status = null) {
    //     e.currentTarget.style.background = '#ffbf00';
    //     e.currentTarget.style.color = 'white';

    //     if (status === true) {
    //         setstyle({ display: { display: 'block' } });
    //     }

    // }
    // function leave(e) {
    //     setstyle({ display: { display: 'none' } });

    //     e.currentTarget.style.background = '#131921';
    //     e.currentTarget.style.color = 'white';
    // }
    // console.log(style.display);
    return (
        <nav class="navbar-light text-nowrap p-0" style={{ background: '#131921', height: '61px' }}>
            <div className='left_nav' >
                logo
            </div>
            {/* search */}
            <div className="middle_nav d-flex align-item-center justify-content-center"  >
                <input type="search" className="form-control rounded-0 border-0" placeholder="Type your keywords here" />
                <div className="input-group-append" style={{}}>
                    <button type="submit" className="btn btn-lg btn-warning rounded-0  d-flex aligin-item-center justify-content-center" style={{}}>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
            {/* right nav */}
            <div className='right_nav'  >
                <div className="users d-flex justify-content-center align-item-center " >
                    <div className='d-flex align-item-center'>

                        <span>Account & List<i className="fas fa-angle-down px-2"></i></span>

                    </div>
                    <div class="card hide_box"   >
                        <div class="card-header p-1 d-flex align-item-center justify-content-center">
                            <Link to={{ pathname: '/login' }} className='btn btn-warning btn-lg w-50 p-1'>Login</Link>
                        </div>
                        <div className="d-flex p-0">
                            <div className='col-6 p-0'>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Cras justo odio</li>
                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                </ul>
                            </div>
                            <div className='col-6 p-0'>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Cras justo odio</li>
                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                </ul>
                            </div>
                        </div>
                        <span className='arrow'></span>
                    </div>
                </div>
                <div className="return d-flex justify-content-center align-item-center mx-3"  >Return & Orders</div>
                <div className="cart d-flex justify-content-center align-item-center">Add Cart</div>
            </div>
        </nav>
    )
}
