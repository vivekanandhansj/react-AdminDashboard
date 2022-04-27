import React from 'react'

function AddProduct() {
  return (
    <div><div className='container'>
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Add Product</h1></div>
       <form>
        <div className='row'>
            <div className='col-lg-12'>
                <label>Name</label>
                <input type ={"text"} className="form-control"/>
            </div>
            <div className='col-lg-12'>
                <label>Price</label>
                <input type ={"text"} className="form-control"/>
            </div>
            <div className='col-lg-12'>
                <label>Category</label>
                <input type ={"text"} className="form-control"/>
            </div>
            <div className='col-lg-12'>
                <label>Offer</label>
                <input type ={"number"} className="form-control"/>
            </div>
            <div className='col-lg-12'>
                <label>Model</label>
                <input type ={"text"} className="form-control"/>
            </div>
           
            <div className='col mt-3'>
               
                <input type ={"submit"} className="btn btn-primary"/>
            </div>
        </div>
        </form>
    </div>
    </div>
  )
}

export default AddProduct