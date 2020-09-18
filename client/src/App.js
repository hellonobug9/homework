import React, { useMemo, memo } from 'react';
import { FullPageSpinner } from './components';

const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));
const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));

function App() {
  const authenticated = useMemo(
    () => (false ? <AuthenticatedApp /> : <UnauthenticatedApp />),
    [],
  );
  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      {authenticated}
    </React.Suspense>
  );
}

export default memo(App);
