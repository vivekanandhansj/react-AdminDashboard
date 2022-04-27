import React from "react";


function UserForm() { return (
    <div><div className='container'>
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">User Form</h1></div>
       <form>
        <div className='row'>
            <div className='col-lg-6'>
                <label>Name</label>
                <input type ={"text"} className="form-control"/>
            </div>
            <div className='col-lg-6'>
                <label>Position</label>
                <input type ={"text"} className="form-control"/>
            </div>
            <div className='col-lg-6'>
                <label>Office</label>
                <input type ={"text"} className="form-control"/>
            </div>
            <div className='col-lg-6'>
                <label>Age</label>
                <input type ={"number"} className="form-control"/>
            </div>
            <div className='col-lg-6'>
                <label>Start date</label>
                <input type ={"date"} className="form-control"/>
            </div>
            <div className='col-lg-6'>
                <label>Salary</label>
                <input type ={"number"} className="form-control"/>
            </div>
            <div className='col-lg-6 mt-3'>
               
                <input type ={"submit"} className="btn btn-primary"/>
            </div>
        </div>
        </form>
    </div>
    </div>
    )
}

export default UserForm;
