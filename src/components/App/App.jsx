import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from './App.styled';
import Title from 'components/Title/Title';
import NewContactForm from 'components/NewContactForm/NewContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

const App = () => {
  return (
    <Container>
      <Title mainTitle="Phonebook" />
      <NewContactForm />

      <Title title="Contacts" />
      <Filter />
      <ContactList />

      <ToastContainer />
    </Container>
  );
};

export default App;
