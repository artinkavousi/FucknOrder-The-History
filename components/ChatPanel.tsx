import React, { useEffect } from 'react';
import { useTimelineStore } from '../lib/store';
import eventsData from '../data/events.json';

function getYear(dateIso: string) {
  return new Date(dateIso).getUTCFullYear();
}

export default function ChatPanel() {
  const { events, currentIndex, next, prev, setEvents } = useTimelineStore();

  useEffect(() => {
    if (events.length === 0) {
      setEvents(eventsData as any);
    }
  }, [events.length, setEvents]);

  const event = events[currentIndex];
  return (
    <section className="chat-panel" aria-label="Chat panel">
      {event ? (
        <>
          <h2>{getYear(event.dateIso)} – {event.title}</h2>
          <p>{event.summary}</p>
          <div className="chat-controls">
            <button onClick={prev} aria-label="Previous event">Prev</button>
            <button onClick={next} aria-label="Next event">Next</button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}
