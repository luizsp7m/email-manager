import { useEffect, useState } from 'react';

import { database, firebase } from '../services/firebase';

import { useAuth } from '../hooks/useAuth';

export function useEmail() {
  const [emails, setEmails] = useState([]);

  const { user, loadingUser } = useAuth();

  useEffect(() => {
    const emailRef = database.ref('emails');

    emailRef.on('value', snapshot => {
      const data = snapshot.val();
      const emailList = [];
      for (let id in data) {
        emailList.push({ id, ...data[id] });
      }

      if (!loadingUser && user) {
        const emailListFiltered = [];

        emailList.forEach(element => {
          element.userId === user.id && emailListFiltered.push(element);
        })

        setEmails(emailListFiltered);
      }
    })
  }, [loadingUser]);

  return { emails };
}