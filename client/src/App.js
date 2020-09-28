import React, {useMemo, memo} from 'react';
import {FullPageSpinner} from './components';
import {useAuth} from 'context/Auth';

const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));
const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));

const App = () => {
  const {isSignIn} = useAuth();
  const authenticated = useMemo(
    () => (isSignIn ? <AuthenticatedApp /> : <UnauthenticatedApp />),
    [isSignIn],
  );

  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      {authenticated}
    </React.Suspense>
  );
};

export default memo(App);
