import React from 'react';
import s from './Contacts.module.css';
import { connect } from 'react-redux';
import inputActions from '../../redux/input/input-actions';

const Contacts = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.contact_list}>
      {contacts.map(contact => (
        <li className={s.contact_item} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={s.delete}
            type="button"
            id={contact.id}
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const filteredContacts = (contacts, filter) => {
  const normFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normFilter),
  );
};

const mapStateToProps = ({ app: { filter, contacts } }) => ({
  contacts: filteredContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(inputActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
