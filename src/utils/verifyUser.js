import { database } from '../services/firebase';

export async function verifyUser({ user, emailId }) {
  const emailRef = await database.ref(`emails/${emailId}`);

  emailRef.on('value', snapshot => {
    const data = snapshot.val();

    if(data.userId === user.id) {
      return true;
    } else {
      return false;
    }
  });
}