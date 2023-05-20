import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from './App.styled';
import Title from 'components/Title/Title';
import NewContactForm from 'components/NewContactForm/NewContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

const App = () => {
  const [notFirstRender, setNotFirstRender] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setNotFirstRender(true);
  }, []);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title mainTitle="Phonebook" />
      <NewContactForm />

      <Title title="Contacts" />
      <Filter />
      {notFirstRender && <ContactList />}

      <ToastContainer />
    </Container>
  );
};

export default App;
