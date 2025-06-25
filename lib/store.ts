import { create } from 'zustand';

export interface EventNode {
  id: string;
  dateIso: string;
  title: string;
  summary: string;
  importance: 0 | 1;
  gemShape: 'star' | 'pentagon' | 'heptagon';
  sceneRef: string;
  citations: { url: string; label: string }[];
  tags?: string[];
  geo?: { lat: number; lon: number };
}

interface TimelineState {
  events: EventNode[];
  currentIndex: number;
  next: () => void;
  prev: () => void;
  setEvents: (events: EventNode[]) => void;
}

export const useTimelineStore = create<TimelineState>((set, get) => ({
  events: [],
  currentIndex: 0,
  next: () => set(state => ({ currentIndex: Math.min(state.currentIndex + 1, state.events.length - 1) })),
  prev: () => set(state => ({ currentIndex: Math.max(state.currentIndex - 1, 0) })),
  setEvents: (events) => set({ events, currentIndex: 0 }),
}));
