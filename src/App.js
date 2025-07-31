import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState('');
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(true);

  const generatePassword = () => {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let chars = '';

    if (includeUpper) chars += upper;
    if (includeLower) chars += lower;
    if (includeNumber) chars += numbers;
    if (includeSymbol) chars += symbols;

    if (chars.length === 0) return setPassword('');

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(newPassword);
  };

  return (
    <div className="container">
      <h1>Password Generator 🔐</h1>
      <div className="password-box">{password || 'Click Generate'}</div>
      <div className="settings">
        <label>
          Length: {length}
          <input
            type="range"
            min="6"
            max="32"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </label>
        <label><input type="checkbox" checked={includeUpper} onChange={() => setIncludeUpper(!includeUpper)} /> Uppercase</label>
        <label><input type="checkbox" checked={includeLower} onChange={() => setIncludeLower(!includeLower)} /> Lowercase</label>
        <label><input type="checkbox" checked={includeNumber} onChange={() => setIncludeNumber(!includeNumber)} /> Numbers</label>
        <label><input type="checkbox" checked={includeSymbol} onChange={() => setIncludeSymbol(!includeSymbol)} /> Symbols</label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
    </div>
  );
};

export default App;
