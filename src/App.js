import * as React from 'react';
import s from './App.module.css';
import Input from './components/Input/Input';
import Title from './components/Title/Title';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import { useGetContactsQuery } from './contacts/contactsSlise';

export default function App() {
  const { data, error, isLoading } = useGetContactsQuery();

  return (
    <div className={s.container}>
      <Title title="Phonebook" />
      <Input />
      <Title title="Contacts" />
      <Filter />
      <Contacts />
    </div>
  );
}
