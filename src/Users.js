import React from 'react'
import { Link } from 'react-router-dom'


function Users() {

    let user =[
        {
        id: 1,
        name:"Tiger Nixon",
        position:"System Architect",
        office:"Chennai",
        age:61,
        startdate:"2011/04/25",
        salary:320800 }
  ,
    {
        id: 2,
        name:"Garrett Winters",
        position:"Accountant",
        office:"Tokyo",
        age:63,
        startdate:"2011/07/25",
        salary:170750
       
    },
    {
        id: 3,
        name:"Cedric Kelly",
        position:"Senior Javascript Developer",
        office:"Edinburgh",
        age:22,
        startdate:"2012/03/29",
        salary:433060
       
    },
    {
        id: 4,
        name:"Airi Satou",
        position:"Accountant",
        office:"Tokyo",
        age:33,
        startdate:"2008/11/28",
        salary:162700
      
    },
  ]
  return (
    <>     <div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Users</h1>
    <Link to ={"/Create-user-form"} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
        className="fas fa-download fa-sm text-white-50"></i> Create User</Link>
</div>

    {/* <!-- DataTales Example --> */}
    <div className="card shadow mb-4">
     
      <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Users List</h6>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                        </tr>
                    </tfoot>
                    <tbody>
                     {
                         user.map((user)=>{
                             return    <tr>
                             <td>{user.name}</td>
                             <td>{user.position}</td>
                             <td>{user.office}</td>
                             <td>{user.age}</td>
                             <td>{user.startdate}</td>
                             <td>{user.salary}</td>
                             <td>
                             <Link to={`/user-view/${user.id}`} className="btn btn-secondary btn-sm">View</Link>{" "}
                                 <Link to={`/user-edit/${user.id}`} className="btn btn-primary btn-sm"> Edit</Link>{" "}
                             <button className="btn btn-danger btn-sm"> Delete</button> 
                             </td>
                         </tr>
                         })
                     }
                       
                     
                    </tbody>
                </table>
            </div>
        </div>             
      
    </div></>
  )
}

export default Users