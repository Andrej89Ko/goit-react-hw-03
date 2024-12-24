import s from '../ContactForm/ContactForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

const ContactForm = ({ addContact }) => {
  const nameId = useId();
  const numberId = useId();
  const phoneValid = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

  const initShema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Too short')
      .max(50, 'Too long')
      .required('Is required'),
    number: Yup.string()
      .matches(phoneValid, 'Phone number is not valid!')
      .min(9, 'Too short')
      .max(9, 'Too long')
      .required('Is required'),
  });

  const handleSubmit = (values, actions) => {
    addContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={initShema}
      initialValues={{
        username: '',
        number: '',
      }}
    >
      <Form className={s.form}>
        <label htmlFor={nameId} className={s.label}>
          <span className={s.name}>Name:</span>
        </label>
        <div className={s.wrapper}>
          <Field
            type="text"
            name="username"
            className={s.input}
            id={nameId}
            placeholder="Enter contact name..."
          />
          <ErrorMessage
            name="username"
            component="span"
            className={s.errorMessage}
          />
        </div>
        <label htmlFor={numberId} className={s.label}>
          <span className={s.name}>Number</span>:
        </label>
        <div className={s.wrapper}>
          <Field
            type="tel"
            name="number"
            className={s.input}
            id={numberId}
            placeholder="Enter as: xxx-xx-xx"
          />
          <ErrorMessage
            name="number"
            component="span"
            className={s.errorMessage}
          />
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
