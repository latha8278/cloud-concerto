import React from 'react';

function EventList({ events }) {
  return (
    <div className="event-list">
      {events.length > 0 ? (
        events.map((event) => (
          <div key={event.id} className="event">
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            <p>Genre: {event.genre}</p>
            <button onClick={() => window.open(event.livestream_url)}>Join Livestream</button>
          </div>
        ))
      ) : (
        <p>No events available.</p>
      )}
    </div>
  );
}

export default EventList;
