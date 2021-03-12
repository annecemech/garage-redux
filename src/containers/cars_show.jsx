import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCar, deleteCar } from '../actions/index';

class CarsShow extends Component {

  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  handleClick = () => {
    this.props.deleteCar(this.props.history, this.props.car);
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }
    return (
      <div className="cars-container">
        <div className="card-product">
          <img src="https://source.unsplash.com/1600x900/?car" alt="car" />
          <div className="card-product-infos">
            <h2>{this.props.car.brand} - {this.props.car.model}</h2>
            <p>{this.props.car.owner} : <strong>{this.props.car.plate}</strong></p>
            <button className="btn btn-danger" onClick={this.handleClick}>
              Delete
            </button>
          </div>
        </div>
        <Link to="/">
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(c => c.id === idFromUrl);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar, deleteCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
