import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import "bootstrap/dist/css/bootstrap.min.css";
import cross_icon from "../../assets/cross_icon.png";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (_id) => {
    console.log(_id);
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: _id }),
    });
    fetchInfo();
  };

  return (
    <div className="listProduct">
      <h1>All Product List</h1>
      <div className="listproduct-format-main panel-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Products</th>
              <th scope="col">Title</th>
              <th scope="col">Old Price</th>
              <th scope="col">New Price</th>
              <th scope="col">Category</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody className="listproduct-allproducts">
            {allproducts.map((product, index) => {
              console.log(product);
              return (
                <tr key={index} className="listproduct-format-main">
                  <td>
                    <img
                      src={product.image}
                      alt=""
                      className="listproduct-product-img"
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>$ {product.old_price}</td>
                  <td>$ {product.new_price}</td>
                  <td>{product.category}</td>
                  <td>
                    <img
                      onClick={() => {
                        remove_product(product.id);
                      }}
                      src={cross_icon}
                      alt=""
                      className="listproduct-remove-icon"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProduct;
