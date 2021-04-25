import AppLayout from 'components/AppLayout';
import { RootStateInterface } from 'interfaces/RootState';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';

function mycommunity() {
  const me = useSelector((state: RootStateInterface) => state.user.me);

  useEffect(() => {
    if (!me) {
      Router.push('/');
    }
  }, [me]);

  return (
    <AppLayout>
      <div>mycommu</div>
    </AppLayout>
  );
}

export default mycommunity;
