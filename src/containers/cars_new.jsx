import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(this.props.garage, values, (car) => {
      this.props.history.push('/');
      return car;
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="garage-container">
        <div className="garage-infos">
          <h1>{this.props.garage}</h1>
        </div>
        <div className="form-container">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              label="Brand"
              name="brand"
              type="text"
              component={this.renderField}
            />
            <Field
              label="Model"
              name="model"
              type="text"
              component={this.renderField}
            />
            <Field
              label="Owner"
              name="owner"
              type="text"
              component={this.renderField}
            />
            <Field
              label="Plate"
              name="plate"
              type="text"
              component={this.renderField}
            />
            <button className="btn btn-primary" type="submit" disabled={this.props.pristine || this.props.submitting}>
              Create Car
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createCar }, dispatch);
}

const form = reduxForm({ form: 'createCar' });
export default connect(mapStateToProps, mapDispatchToProps)(form(CarsNew));
