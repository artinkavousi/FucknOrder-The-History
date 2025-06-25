import React from 'react';
import { useTimelineStore } from '../lib/store';

function yearFromIso(dateIso: string) {
  return new Date(dateIso).getUTCFullYear();
}

export default function TimelineRail() {
  const { events, currentIndex, setEvents } = useTimelineStore();

  React.useEffect(() => {
    if (events.length === 0) {
      import('../data/events.json').then(mod => setEvents(mod.default as any));
    }
  }, [events.length, setEvents]);

  return (
    <aside className="timeline-rail" aria-label="Timeline">
      <ul>
        {events.map((ev, idx) => (
          <li key={ev.id} className={idx === currentIndex ? 'active' : ''}>
            <span className="year">{yearFromIso(ev.dateIso)}</span>{' '}
            <span className="shape">{ev.gemShape === 'star' ? '★' : ev.gemShape === 'pentagon' ? '⬟' : '⬣'}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
