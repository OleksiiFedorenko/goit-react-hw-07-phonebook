import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import NoContacts from 'components/NoContacts/NoContacts';
import { ContactsContainer } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter).toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  if (filteredContacts.length === 0) {
    return (
      <NoContacts
        message={contacts.length > 0 ? `No contacts found` : `No contacts yet`}
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
