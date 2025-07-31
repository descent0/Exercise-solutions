import React, { useState } from 'react';

function BookingForm() {
  const [flight, setFlight] = useState('');
  const [name, setName] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    alert(`Ticket booked for ${name} on flight ${flight}`);
    setFlight('');
    setName('');
  };

  return (
    <form onSubmit={handleBooking}>
      <h3>Book Your Ticket</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Flight Number"
        value={flight}
        required
        onChange={(e) => setFlight(e.target.value)}
      />
      <br />
      <button type="submit">Book Ticket</button>
    </form>
  );
}

export default BookingForm;
