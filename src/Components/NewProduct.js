import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createNewProductAction } from "../actions/productActions";

const NewProduct = () => {
  const [name, saveName] = useState("");
  const [price, savePrice] = useState(0);

  const dispatch = useDispatch();
  const addProduct = (product) => dispatch(createNewProductAction(product));

  const submitNewProduct = (e) => {
    e.preventDefault();

    //validate form
    if (name.trim() === "" || price <= 0) {
      return;
    }
    //check errors
    //create new prduct
    addProduct({
      name,
      price,
    });
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
                  value={name}
                  onChange={(e) => saveName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Product Price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Product Price"
                  name="price"
                  value={price}
                  onChange={(e) => savePrice(Number(e.target.value))}
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
