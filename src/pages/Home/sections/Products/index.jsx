import React, { useEffect, useState } from "react";
import axios from "axios";
import configs from "../../../../config";

export default function SectionProducts() {
  const [products, setProducts] = useState([]);
  const { getProductsAll, getImages } = configs;

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    const res = await axios.get(getProductsAll);
    const data = res.data;
    console.log(data);
    setProducts(data);
  };

  return (
    <>
      <h2 className="title">Các sản phẩm nổi bật.</h2>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div className="product__image">
              {product.image.map((image, i) => (
                <img src={getImages(image)} alt={product.name} key={i} />
              ))}
            </div>
            <div className="product__info">
              <h3 className="product__name">{product.name}</h3>
              <div className="product__price">
                <span className="product__price--old">
                  {product.price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
                <span className="product__price--new">
                  {product.price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </div>
              <div className="product__rating">
                <span className="product__rating--count">
                  {product.ratings.length} đánh giá
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
