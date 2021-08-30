import React from 'react'
import { Link } from "react-router-dom";

export default function Asidebar() {
    let opacity = {
        opacity: "0.8",
    }
    return (
        // <>hi</>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* <!-- Brand Logo --> */}
            <Link to="/#" className="brand-link">
                <img src="Admin/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" alt="..." style={opacity} />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </Link>


            {/* <!-- Sidebar --> */}
            <div className="sidebar">
                {/* <!-- Sidebar user panel (optional) --> */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="Admin/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="..." />
                    </div>
                    <div className="info">
                        <Link to="#" className="d-block">Alexander Pierce</Link>
                    </div>
                </div>

                {/* <!-- SidebarSearch Form --> */}
                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Sidebar Menu --> */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* <!-- Add icons to the links using the .nav-icon class
                   with font-awesome or any other icon font library --> */}
                        <li className="nav-item menu-open">
                            <Link to={{pathname:'/'}} className="nav-link active">
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Dashboard

                                </p>
                            </Link>

                        </li>


                        <li className="nav-item">
                            <Link to="/categories" className="nav-link">
                                <i className="nav-icon fas fa-chart-pie"></i>
                                <p>
                                    Categories
                                    {/* <i className="right fas fa-angle-left"></i> */}
                                </p>
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link  className="nav-link">
                                <i className="nav-icon fas fa-tree"></i>
                                <p>
                                    Product
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to="/products" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Add Product</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="productslist" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Product List</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link">
                                <i className="nav-icon fas fa-edit"></i>
                                <p>
                                    Demo
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to="pages/forms/general.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>General Elements</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="pages/forms/advanced.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Advanced Elements</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="pages/forms/editors.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Editors</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="pages/forms/validation.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Validation</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-header">EXAMPLES</li>
                        <li className="nav-item">
                            <Link to="pages/calendar.html" className="nav-link">
                                <i className="nav-icon fas fa-calendar-alt"></i>
                                <p>
                                    Calendar
                                    <span className="badge badge-info right">2</span>
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="pages/gallery.html" className="nav-link">
                                <i className="nav-icon far fa-image"></i>
                                <p>
                                    Gallery
                                </p>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="#" className="nav-link">
                                <i className="nav-icon far fa-envelope"></i>
                                <p>
                                    Mailbox
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to="pages/mailbox/mailbox.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Inbox</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="pages/mailbox/compose.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Compose</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="pages/mailbox/read-mail.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Read</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-header">MISCELLANEOUS</li>
                        <li className="nav-item">
                            <Link to="iframe.html" className="nav-link">
                                <i className="nav-icon fas fa-ellipsis-h"></i>
                                <p>Tabbed IFrame Plugin</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="https://adminlte.io/docs/3.1/" className="nav-link">
                                <i className="nav-icon fas fa-file"></i>
                                <p>Documentation</p>
                            </Link>
                        </li>


                    </ul>
                </nav>
                {/* <!-- /.sidebar-menu --> */}
            </div>
            {/* <!-- /.sidebar --> */}
        </aside>
    )
}
