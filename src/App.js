import * as React from 'react';
import s from './App.module.css';
import Input from './components/Input/Input';
import Title from './components/Title/Title';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import { useGetContactsQuery } from './redux/contacts/contactsSlise';

export default function App() {
  const { data, error, isLoading } = useGetContactsQuery();
  console.log(data);

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
