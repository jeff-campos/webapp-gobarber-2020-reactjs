import React from 'react';
import GlobalStyles from './styles/global';
import ToastContainer from './components/ToastContainer';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import { AuthProvider } from './context/AuthContex';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyles />
    <ToastContainer />
  </>
);

export default App;
