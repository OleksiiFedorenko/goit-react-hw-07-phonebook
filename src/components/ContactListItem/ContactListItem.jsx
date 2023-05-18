import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { toast } from 'react-toastify';
import { Button } from './ContactListItem.styled';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;
  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.error(`${name} was removed from contacts.`);
  };

  return (
    <>
      {name}: {number}
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactListItem;
