import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />
    </>
  );
}
