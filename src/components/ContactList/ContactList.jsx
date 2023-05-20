import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilteredContacts,
} from 'redux/selectors';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import Loader from 'components/Loader/Loader';
import NoContacts from 'components/NoContacts/NoContacts';
import { ContactsContainer } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  if (isLoading) return <Loader />;

  if (error) {
    return (
      <NoContacts message="Something went wrong, please try again later" />
    );
  }

  if (filteredContacts.length === 0) {
    return (
      <NoContacts
        message={contacts.length > 0 ? 'No contacts found' : 'No contacts yet'}
      />
    );
  }

  return (
    <ContactsContainer>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <ContactListItem contact={contact} />
        </li>
      ))}
    </ContactsContainer>
  );
};

export default ContactList;
