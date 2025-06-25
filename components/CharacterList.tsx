import React, { useEffect, useState } from 'react';
import personasData from '../data/personas.json';

interface Character { id: string; displayName: string; }

export default function CharacterList() {
  const [chars, setChars] = useState<Character[]>([]);

  useEffect(() => {
    if (chars.length === 0) {
      setChars(personasData as any);
    }
  }, [chars.length]);

  return (
    <aside className="character-list" aria-label="Characters">
      <h2>Characters</h2>
      <ul>
        {chars.map(c => (
          <li key={c.id}>{c.displayName}</li>
        ))}
      </ul>
    </aside>
  );
}
