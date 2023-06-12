import React, { useState } from 'react';
import './App.css';
import Opis from './Opis';

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [school, setSchool] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value.replace(/[^0-9]/g, '');
    let formattedPhoneNumber = '';

    if (inputPhoneNumber.length > 0) {
      formattedPhoneNumber += inputPhoneNumber.slice(0, 3);

      if (inputPhoneNumber.length > 3) {
        formattedPhoneNumber += '-' + inputPhoneNumber.slice(3, 6);
      }

      if (inputPhoneNumber.length > 6) {
        formattedPhoneNumber += '-' + inputPhoneNumber.slice(6, 9);
      }
    }
    setPhoneNumber(formattedPhoneNumber);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Tworzenie łańcucha znaków z danymi do zapisu
    const data = `Imię i nazwisko: ${name}\nAdres e-mail: ${email}\nNumer telefonu: ${phoneNumber}\nWiek: ${age}\nPłeć: ${gender}\nNazwa szkoły: ${school}\nMiasto: ${city}\nKraj: ${country}\n`;

    // Tworzenie elementu do pobrania pliku txt
    const element = document.createElement('a');
    const file = new Blob([data], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'dane.txt';
    document.body.appendChild(element);
    element.click();

    // Resetowanie formularza po zapisie danych
    setName('');
    setEmail('');
    setPhoneNumber('');
    setAge('');
    setGender('');
    setSchool('');
    setCity('');
    setCountry('');
  };

  return (
    <div className="container">
      {/* <div className="form-header"> */}
      {/* <h1>Formularz rejestracyjny na szkołę letnią</h1>
      </div> */}
      <div>
        <Opis></Opis>
      </div>

      <form action="#" method="post" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Imię i nazwisko:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Adres e-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tel">Numer telefonu:</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="xxx-xxx-xxx"
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Wiek:</label>
          <input
            type="number"
            id="age"
            name="age"
            min="18"
            max="28"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Płeć:</label>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            required
          >
            <option value="">Wybierz</option>
            <option value="male">Mężczyzna</option>
            <option value="female">Kobieta</option>
            <option value="other">Inna</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="school">Nazwa szkoły:</label>
          <input
            type="text"
            id="school"
            name="school"
            value={school}
            onChange={(event) => setSchool(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">Miasto:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Kraj:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Zapisz się</button>
          <button type="reset">Resetuj</button>
        </div>
      </form>
      <footer className="contact-info">
        <h3>Kontakt</h3>
        <p>Telefon: +48 221 666 212</p>
        <p>Email: Bootcamp@gmail.com</p>
        <h2>IT Bootcamp &copy; 2023</h2>
      </footer>
    </div>
  );
};

export default App;
