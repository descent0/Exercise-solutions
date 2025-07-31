import React, { useState } from 'react';
import './App.css';

function App() {
  const [officeSpaces, setOfficeSpaces] = useState([
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      Name: "TCS",
      Rent: 70000,
      Address: "Bangalore",
      Image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]);

  const getRentColor = (rent) => {
    return rent <= 60000 ? 'red' : 'green';
  };

  return (
    <div className="App">
      <h1>Office Space at Affordable Range</h1>
      
      {officeSpaces.map((office, index) => (
        <div key={index} className="office-space-item">
          <img 
            src={office.Image} 
            alt="Office Space" 
            style={{width: '25%', height: '25%'}}
          />
          <h2>Name: {office.Name}</h2>
          <h3 style={{color: getRentColor(office.Rent)}}>
            Rent: Rs. {office.Rent}
          </h3>
          <h3>Address: {office.Address}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;