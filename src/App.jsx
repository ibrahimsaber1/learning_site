import React, { useState } from 'react';


import HomePage from './Pages/HomePage'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SubscriptionPage from './Pages/SubscriptionPage'
import PaymentPage from './Pages/PaymentPage'
import CongratulationsPage from './Pages/CongratulationsPage'

import './styles/style.css';
import './styles/PaymentPage.css';

function App() {
  const [isSignIn, setIsSignIn] = useState(true); // State to track the current page

  // Toggle between sign-in and sign-up pages
  const togglePage = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="App">
        <SignIn />
        <SignUp />
        <SubscriptionPage />
        <PaymentPage />
        <CongratulationsPage />
        <HomePage />
    </div>
  );
}

export default App;
