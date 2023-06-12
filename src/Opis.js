import React from 'react';
import './Opis.css';

export default function Opis() {
  return (
    <div className='c1'>
      <p className='container1'>
        <h1>Formularz rejestracyjny na szkołę letnią</h1>
      </p>
      <div className="opis-container slide-in-horizontal">
        <p>
          Nasz bootcamp jest intensywnym programem szkoleniowym, który skupia się na nauce programowania HTML, CSS, JavaScript oraz React - popularnej biblioteki JavaScript do tworzenia interaktywnych interfejsów użytkownika. Podczas trwania bootcampu zapoznasz się z podstawami tych języków programowania i zdobędziesz umiejętności, które pozwolą Ci tworzyć wspaniałe strony internetowe, w tym strony z dynamicznymi formularzami.
          Podczas pierwszej części bootcampu skupimy się na nauce HTML i CSS, które są podstawowymi językami do tworzenia struktur i stylizacji stron internetowych. Nauczysz się, jak tworzyć semantyczne znaczniki HTML i jak używać CSS, aby nadać swoim stroną unikalny wygląd i układ.

          W drugiej części skoncentrujemy się na nauce JavaScript, który jest niezbędny do tworzenia interaktywnych i dynamicznych elementów na stronach internetowych. Nauczysz się podstaw programowania w JavaScript, manipulowania elementami strony, walidacji formularzy i zarządzania zdarzeniami.

          Ostatnia część będzie przeznaczona na naukę React. React to biblioteka JavaScript, która pozwala tworzyć interaktywne interfejsy użytkownika.
        </p>
        <p className='nauka'>
          Nauczysz się, jak tworzyć komponenty React, zarządzać stanem aplikacji i tworzyć dynamiczne formularze.
        </p>

        <p className='trwanie-kursu trwanie-kursu slide-in-task'>
            Czas trwania kursu, łącznie to 48h, w tym:
            <ul>
                <li>
                <p className='t1'>
                <input type="checkbox" id="html-css" checked disabled />
                     - HTML/CSS: 17h
                 </p>
                 </li>
                 <li>
            <p className='t2'>
            <input type="checkbox" id="javascript" checked disabled />
          - JavaScript: 15h
            </p>
            </li>
            <li>
            <p className='t3'>
            <input type="checkbox" id="react" checked disabled />
          - React: 16h
          </p>
          </li>
          </ul>
        </p>
      </div>
    </div>
  );
}
