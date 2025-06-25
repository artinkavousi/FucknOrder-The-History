import React from 'react';
import { useTimelineStore } from '../lib/store';

export default function CitationPanel() {
  const { events, currentIndex } = useTimelineStore();
  const event = events[currentIndex];

  return (
    <div className="citation-panel" aria-label="Citations">
      {event ? (
        <ul>
          {event.citations.map((c) => (
            <li key={c.url}>
              <a href={c.url} target="_blank" rel="noopener noreferrer">
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No citations</p>
      )}
    </div>
  );
}
