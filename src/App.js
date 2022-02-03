import s from './App.module.css';
import Input from './components/Input/Input';
import Title from './components/Title/Title';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';

function App() {
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

export default App;
