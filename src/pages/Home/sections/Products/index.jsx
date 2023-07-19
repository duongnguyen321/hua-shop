import React, { useCallback, useLayoutEffect, useMemo, useState } from "react";
import axios from "axios";
import configs from "../../../../config";
import productsStyles from "./styles/products.module.scss";

export default function SectionProducts() {
  const [products, setProducts] = useState([]);
  const { getProductsAll, getImages } = useMemo(() => configs, []);
  const { img } = productsStyles;

  useLayoutEffect(() => {
    getProducts();
  }, []);

  const getProducts = useCallback(async () => {
    const res = await axios.get(getProductsAll);
    const { data } = await res.data;
    setProducts(data);
  }, [getProductsAll]);

  return (
    <>
      <h2 className="title">Các sản phẩm nổi bật.</h2>
      <div className="products">
        {products.length > 0 &&
          products?.map((product) => (
            <div className="product" key={product.id}>
              <div className="product__image">
                {product?.images.map((image, i) => (
                  <img
                    src={getImages(image)}
                    className={img}
                    alt={product.name}
                    key={i}
                  />
                ))}
              </div>
              <div className="product__info">
                <h3 className="product__name">{product.name}</h3>
                <span className="product__price">
                  {(+product.price * 23500).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
                <div className="product__rating">
                  <span className="product__rating-count">
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
