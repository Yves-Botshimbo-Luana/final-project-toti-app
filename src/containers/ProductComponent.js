import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const produtcs = useSelector((state) => state.allProducts.product);
    const renderList = produtcs.map((product) => {
        const { id, title, image, price, category } = product;
        return (
        <div className="four column wide" key={id}>
        <Link to={`/product/${id}`}>
        <div className="ui link card">
            <div className="card">
                <div className="image">
                    <img src={ image} alt={ title} />
                </div>
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta price">$ {price}</div>
                    <div className="meta">{category}</div>
                </div>
            </div>
        </div>
      </Link>
    </div>
  );
})
   
return <>{renderList}</>;
};
export default ProductComponent;