import React from 'react';

const Car = (props) => {
  return (
    <div className="card-product">
      <img src="https://source.unsplash.com/1600x900/?car" alt="car" />
      <div className="card-product-infos">
        <h2>{props.car.brand} - {props.car.model}</h2>
        <p>{props.car.owner} : <strong>{props.car.plate}</strong></p>
      </div>
    </div>


  );
};

export default Car;
