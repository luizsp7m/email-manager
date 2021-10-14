import { database } from '../services/firebase';

import useAuth from '../hooks/useAuth';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

export function useProduct() {

  const { user, loadingUser } = useAuth();

  const { query } = useRouter();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!loadingUser && user && query.idEmail) {
      const emailRef = database.ref(`/emails/${user.id}/${query.idEmail}/products`);

      emailRef.on('value', snapshot => {
        const data = snapshot.val();

        const productList = new Array();

        for (let id in data) {
          productList.push({ id, ...data[id] });
        }

        setProducts(productList);

        return () => {
          emailRef.off('value');
        }
      });
    }
  }, [loadingUser]);

  return products;
}