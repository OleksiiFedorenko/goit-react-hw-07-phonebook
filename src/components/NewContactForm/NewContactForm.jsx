import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  ContactForm,
  Label,
  Input,
  FormError,
  Button,
} from './NewContactForm.styled';

const nameRegex =
  /^[a-zA-Zа-яґєіїА-ЯҐЄІЇ]+(([' -][a-zA-Zа-яґєіїА-ЯҐЄІЇ ])?[a-zA-Zа-яґєіїА-ЯҐЄІЇ]*)*$/;
const nameWarningMessage =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const numberRegex =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const numberWarningMessage =
  'Phone number must be at least 5 digits and can contain spaces, dashes, parentheses and can start with +';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegex, nameWarningMessage)
    .required('Please add name'),
  number: yup
    .string()
    .matches(numberRegex, numberWarningMessage)
    .required('Please add number'),
});

const NewContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const normalizedName = name.toLowerCase();
    if (
      contacts.some(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      toast.warn(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(name, number));
    toast.success(`${name} is added to contacts.`);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <ContactForm>
        <Label>
          Name
          <Input type="text" name="name" />
          <FormError name="name" component="div" />
        </Label>

        <Label>
          Number
          <Input type="tel" name="number" />
          <FormError name="number" component="div" />
        </Label>

        <Button type="submit">Add contact</Button>
      </ContactForm>
    </Formik>
  );
};

export default NewContactForm;
