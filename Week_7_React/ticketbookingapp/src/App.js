import React, { useState } from 'react';
import LogoutButton from './Components/LogoutButton';
import LoginButton from './Components/LoginButton';
import FlightDetails from './Components/FlightDetails';
import BookingForm from './Components/BookingForm';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  return (
    <div style={{ textAlign: 'center', paddingTop: '40px' }}>
      <h1>{isLoggedIn ? 'Welcome back' : 'Please sign up.'}</h1>
      {isLoggedIn ? (
        <>
        <LogoutButton onClick={handleLogoutClick} />
        <FlightDetails />
        </>
      ) : (
        <LoginButton onClick={handleLoginClick} />
      )}
      {isLoggedIn && <BookingForm />}
    </div>
  );
}

export default App;
