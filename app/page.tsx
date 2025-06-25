import React from 'react';
import ChatPanel from '../components/ChatPanel';
import TimelineRail from '../components/TimelineRail';
import CitationPanel from '../components/CitationPanel';
import CharacterList from '../components/CharacterList';

export default function HomePage() {
  return (
    <main className="app-container">
      <CharacterList />
      <ChatPanel />
      <TimelineRail />
      <CitationPanel />
    </main>
  );
}
