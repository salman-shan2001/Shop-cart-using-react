import React from 'react'
import Navebar from './Navebar'

const AddShop = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <Navebar/>
            <center><h1>ADD Here</h1></center>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-o6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">code</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-o6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">name</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-o6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Brand</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-o6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Prize</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-o6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">model</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-o6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success">ADD</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddShop
