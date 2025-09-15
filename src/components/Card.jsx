import React from "react";

const Card = ({shoe}) => {
    const{name,brand,price,color,inStock}=shoe;
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{brand}</div>
          </h2>
          {/* <h1>{inStock}</h1> */}
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{price}</div>
            <div className="badge badge-outline">{color} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
