import { dispatch } from '@store/hooks';
import { coreThunks } from '@store/slices/core';
import { useEffect } from 'react';
import { RoutesProvider } from 'src/routes/RoutesProvider';

const App = () => {
  useEffect(() => {
    dispatch(coreThunks.initialize());
  }, []);
  return <RoutesProvider />;
};

export default App;
