import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actions from '../store/actions';

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onPersonAddedHandler} />
        {this.props.prs.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onPersonDeletedHandler(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    prs: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPersonAddedHandler: (name, age) =>
      dispatch({ type: actions.ADD_PERSON, personData: { name, age: age } }),
    onPersonDeletedHandler: id =>
      dispatch({ type: actions.REMOVE_PERSON, personId: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
