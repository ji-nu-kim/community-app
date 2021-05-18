import AppLayout from 'components/AppLayout';
import { useRouter } from 'next/router';
import React from 'react';

function Category() {
  const router = useRouter();
  console.log(router.query.name);
  return (
    <AppLayout>
      <div>카테고리입니다</div>
    </AppLayout>
  );
}

export default Category;
