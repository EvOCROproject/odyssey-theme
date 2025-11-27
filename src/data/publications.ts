// src/data/publications.ts
export type Publication = {
  title: string;
  authors: string;
  year: number;
  venue?: string;
  doi?: string;
  url?: string;
  note?: string;
  type?: 'journal' | 'conference' | 'book' | 'chapter' | 'preprint' | 'thesis' | 'other';
};

export const publications: Publication[] = [];
