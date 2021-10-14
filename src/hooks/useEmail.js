import { database } from '../services/firebase';

import useAuth from '../hooks/useAuth';

import { useEffect, useState } from 'react';

export function useEmail() {

  const { user, loadingUser } = useAuth();

  const [emails, setEmails] = useState([]);

  useEffect(() => {
    if (!loadingUser && user) {
      const emailRef = database.ref(`/emails/${user.id}`);

      emailRef.on('value', snapshot => {
        const data = snapshot.val();

        const emailList = new Array();

        for (let id in data) {
          emailList.push({ id, ...data[id] });
        }

        setEmails(emailList);

        return () => {
          emailRef.off('value');
        }
      });
    }
  }, [loadingUser]);

  return emails;
}