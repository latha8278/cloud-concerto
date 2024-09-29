import React, { useState, useEffect } from 'react';
import EventList from './components/EventList';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const [events, setEvents] = useState([]);
  const [language, setLanguage] = useState('en'); // Default to English
  
  useEffect(() => {
    // Fetch events from backend (Node.js API)
    fetch(`/api/events?lang=${language}`)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error(err));
  }, [language]);

  return (
    <div className="App">
      <h1>Cloud Concerto Music Events</h1>
      <LanguageSelector setLanguage={setLanguage} />
      <EventList events={events} />
    </div>
  );
}

export default App;
