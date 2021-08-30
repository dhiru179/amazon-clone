import React from 'react'
import './users.css'
export default function Login() {
    return (
        <div className="login">
            <div className='card' style={{width:'25rem',marginTop:'73px'}}>
                <div className="card-header">
                    <h3 className='text-center text-warning'>Login</h3>
                </div>
                
                <form className='px-3'>
                    <div class="form-group ">
                        <label for="staticEmail" class="col-form-label">Email</label>

                        <input type="email" readonly class="form-control" id="staticEmail" value="email@example.com" />

                    </div>
                    <div class="form-group ">
                        <label for="inputPassword" class=" col-form-label">Password</label>

                        <input type="password" class="form-control" id="inputPassword" placeholder="Password" />

                    </div>
                    <div class="form-group py-3">
                       
                        <input type="submit" class="form-control btn btn-warning" id="" value="submit" />

                    </div>
                    <div class="form-group ">
                        <span className="text-right text-primary d-block">forgat Password</span>
                

                    </div>
                </form>
                
              
            </div>
        </div>
    )
}
