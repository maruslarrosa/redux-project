import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { createNewProductAction } from "../actions/productActions";

const NewProduct = () => {
  const dispatch = useDispatch();
  const addProduct = dispatch(createNewProductAction);

  const submitNewProduct = (e) => {
    e.preventDefault();

    //validate form
    //check errors
    //create new prduct
    addProduct();
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="body mx-3 my-3">
            <h2 className="text-center mb-4 font-weigh-bold">
              Add New Product
            </h2>
            <form onSubmit={submitNewProduct}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Name"
                  name="name"
                />
              </div>
              <div className="form-group">
                <label>Product Price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Product Price"
                  name="price"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                ADD
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
