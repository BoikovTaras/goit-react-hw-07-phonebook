import React from 'react';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import filterActions from '../../redux/input/input-actions';

const Filter = ({ value, filterContact }) => {
  return (
    <label className={s.find_form}>
      Find contact by Name
      <input
        className={s.find_input}
        type="text"
        value={value}
        onChange={filterContact}
        placeholder="Enter searching name"
      />
    </label>
  );
};

const mapStateToProps = state => ({
  filter: state.app.filter,
});

const mapDispatchToProps = dispatch => ({
  filterContact: text =>
    dispatch(filterActions.filterContact(text.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
