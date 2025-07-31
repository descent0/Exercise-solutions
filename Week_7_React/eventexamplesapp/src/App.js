import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(5);

  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);


  const handleIncrement = () => {
    setCounter(prevCounter => prevCounter + 1);
    sayHello();
  };

  const handleDecrement = () => {
    setCounter(prevCounter => prevCounter - 1);
  };

  const sayHello = () => {
    alert('Hello Members');
  };

  const sayWelcome = (message) => {
    alert(`${message}`);
  };

  
  const handleClick = () => {
    alert('I was clicked');
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const euroToRupees = 90;
    
      const convertedValue = parseFloat(amount) * euroToRupees;
     setConvertedAmount(convertedValue.toFixed(2));
    

    alert(`Converting to Euro Amount is ${convertedAmount}`)
  };

  return (
    <div className="App">
      
      <div>
        <h2>{counter}</h2>
        <div>   <button onClick={handleIncrement}>Increment</button></div>
        <div>  <button onClick={handleDecrement}>Decrement</button></div>
      </div>
      <div>
        <button onClick={() => sayWelcome('welcome')}>Say Welcome</button>
      </div>

      <div>
        <button onClick={handleClick}>Click on me</button>
      </div>

      <div>
        <h2 style={{color:"green"}}>Currency Convertor!!!</h2>
        <form onSubmit={handleSubmit}>
          <div > 
            <label htmlFor="">{"Amount:    "}</label>
             <input 
             style={{marginLeft:"10px"}}
            type="number" 
            placeholder="Amount" 
            value={amount}
            onChange={handleAmountChange}
          /></div>
          <div>
              <label htmlFor="">Currency: </label>
              <input 
              
            type="text" 
            placeholder="Currency (Euro/INR)" 
            value={currency}
            onChange={handleCurrencyChange}
          />
          </div>
          <button style={{marginLeft: "76px"}} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;