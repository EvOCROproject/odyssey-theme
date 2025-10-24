// src/data/publications.ts
export type Publication = {
  title: string;
  authors: string;          // "Cognome N., Cognome N., …"
  year: number;
  venue?: string;           // rivista/conference/book
  doi?: string;             // es. "10.1038/xxxx"
  url?: string;             // link libero o al PDF
  note?: string;            // opzionale: in press, preprint, etc.
  type?: 'journal' | 'conference' | 'book' | 'chapter' | 'preprint' | 'thesis' | 'other';
};

export const publications: Publication[] = [
  {
    title: "Cognitive ecology of crocodilians: new insights from field observations",
    authors: "Rossi A., Smith J., Bianchi L.",
    year: 2024,
    venue: "Journal of Comparative Cognition",
    doi: "10.1234/jcc.2024.001",
    url: "https://doi.org/10.1234/jcc.2024.001",
    type: "journal",
  },
  {
    title: "Tool-use–like behaviors in juvenile Morelet’s crocodile",
    authors: "Rossi A., Doe P.",
    year: 2023,
    venue: "Proceedings of the Croc Research Meeting",
    url: "https://example.org/preprint.pdf",
    note: "Open access",
    type: "conference",
  },
  {
    title: "Evolutionary origins of cognition in crocodiles",
    authors: "Rossi A.",
    year: 2022,
    venue: "Preprint",
    url: "https://osf.io/abcd1",
    type: "preprint",
  },
];
