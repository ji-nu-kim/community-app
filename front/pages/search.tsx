import AppLayout from 'components/AppLayout';
import SearchSection from 'components/SearchSection';
import React from 'react';
import { PopularCategories, AllCategories } from 'utils/categories';

function search() {
  return (
    <AppLayout>
      <SearchSection
        title="가장 인기있는 취미"
        categories={PopularCategories}
      />
      <SearchSection title="모든 취미" categories={AllCategories} />
    </AppLayout>
  );
}

export default search;
