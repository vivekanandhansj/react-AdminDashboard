import React from "react";
import { Link } from "react-router-dom";

function Product() {
  let product = [
    {
      id: 1,
      name: "Fridge",
      price: 33000,
      category: "Electronics",
      offer:10,
      model: "a23",
     
    },
    {
        id: 2,
        name: "Recliner",
        price: 60000,
        category: "Furniture",
        offer:20,
        model: "er34",
    },
    {
        id: 3,
        name: "Coffee table",
        price: 20000,
        category: "Furniture",
        offer:10,
        model: "F23",
    },
    {
        id: 4,
        name: "TV",
        price: 30000,
        category: "Electronics",
        offer:40,
        model: "f123",
    },
    {

        id: 5,
        name: "Lamp",
        price: 3000,
        category: "Electronics",
        offer:10,
        model: "g61",
    }
  ];
  return (
    <>
      {" "}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Products</h1>
        <Link
          to={"/add-product"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i>Add Product
        </Link>
      </div>
      {/* <!-- DataTales Example --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Product List</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Offer</th>
                  <th>Model</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Offer</th>
                  <th>Model</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {product.map((product) => {
                  return (
                    <tr>
                      <td>{product.name}</td>
                      <td>Rs{" "}{product.price}</td>
                      <td>{product.category}</td>
                      <td>{product.offer}%</td>
                      <td>{product.model}</td>
                    
                      <td>
                        <Link
                          to={`/product-view/${product.id}`}
                          className="btn btn-secondary btn-sm"
                        >
                          View
                        </Link>{" "}
                        <Link
                          to={`/product-edit/${product.id}`}
                          className="btn btn-primary btn-sm"
                        >
                          {" "}
                          Edit
                        </Link>{" "}
                        <button className="btn btn-danger btn-sm">
                          {" "}
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
