import { loadCategoriesReqeustAction } from 'actions/actionCommunity';
import AppLayout from 'components/AppLayout';
import SearchSection from 'components/SearchSection';
import { RootStateInterface } from 'interfaces/RootState';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function search() {
  const dispatch = useDispatch();
  const mainCategories = useSelector(
    (state: RootStateInterface) => state.community.mainCategories
  );

  useEffect(() => {
    dispatch(loadCategoriesReqeustAction());
  }, []);

  return (
    <AppLayout>
      <SearchSection
        title="가장 인기있는 취미"
        categories={mainCategories.slice(0, 5)}
      />
      <SearchSection title="모든 취미" categories={mainCategories} />
    </AppLayout>
  );
}

export default search;
