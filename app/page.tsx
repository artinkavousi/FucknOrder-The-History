import React from 'react';
import ChatPanel from '../components/ChatPanel';
import TimelineRail from '../components/TimelineRail';
import CitationPanel from '../components/CitationPanel';

export default function HomePage() {
  return (
    <main className="app-container">
      <ChatPanel />
      <TimelineRail />
      <CitationPanel />
    </main>
  );
}
