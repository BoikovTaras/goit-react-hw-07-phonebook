import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import inputActions from '../../redux/input/input-actions';

import { nanoid } from 'nanoid';
import s from './Input.module.css';

function Input({ contacts, addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contactsArray = useSelector(state => state.app.contacts);

  useEffect(() => {
    const getContacts = localStorage.getItem('contacts');
    const contactArr = JSON.parse(getContacts);
    if (contactArr) {
      contactArr.map(localContacts => {
        if (
          contacts.some(contact => {
            return contact.name === localContacts.name;
          })
        ) {
          return true;
        }
        return dispatch(addContact(localContacts));
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contactsArray]);

  const addName = v => setName(v.currentTarget.value);
  const addNumber = v => setNumber(v.currentTarget.value);

  const reset = () => {
    setName('');
    setNumber('');
  };

  const addNewContact = () => {
    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      return window.alert(`${name} is alredy in contacts`, 2500);
    } else {
      addContact(renderContact());
      reset();
    }
  };

  const renderContact = () => {
    return { id: nanoid(), name, number };
  };

  return (
    <form className={s.form}>
      <h3 className={s.title}>Name</h3>
      <label>
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={addName}
          placeholder="Enter name"
        />
        <h3 className={s.title}>Number</h3>
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={addNumber}
          placeholder="Enter phone number"
        />
      </label>
      <button className={s.button} type="button" onClick={addNewContact}>
        Add contact
      </button>
    </form>
  );
}

const mapStateToProps = state => ({
  contacts: state.app.contacts,
});

const mapDispatchToProps = dispatch => ({
  addContact: event => dispatch(inputActions.addContact(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);

Input.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
