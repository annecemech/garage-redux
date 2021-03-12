import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Car from '../components/car';

import { fetchCars } from '../actions';

class CarsIndex extends Component {

  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  render() {
    return (
      <div className="garage-container">
        <div className="garage-infos">
          <h1>{this.props.garage}</h1>
          <p>This is an awesome garage with wonderfull cars</p>
          <Link to="/cars/new" className="btn btn-primary">
            Add a new car
          </Link>
        </div>
        <div className="cars-index">
          {
            this.props.cars.map((car) => {
              return (
                <Link to={`/cars/${car.id}`} key={car.id} >
                  <Car car={car} />;
                </Link>
              );
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
