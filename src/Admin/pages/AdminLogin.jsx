import React from 'react'

function AdminLogin() {
    return (
        <>
            <div className='h-screen w-screen flex items-center justify-center'>

                <div className="adminLogin-box border-2 rounded-md shadow-md p-6 w-80">
                    <h3 className='text-2xl text-center mb-4'>Admin Login</h3>
                    <form action="">
                        <div className="form-group mb-3">
                            <label htmlFor="" className='form-label'>Email</label>
                            <input type="text" className='form-control' />
                            <span className='text-danger'></span>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="" className='form-label'>Password</label>
                            <input type="password" className='form-control' />
                            <span className='text-danger'></span>
                        </div>
                        <div className='w-full flex justify-end'>

                            <button className='btn btn-primary ml-auto'>
                                Login
                            </button>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}

export default AdminLogin