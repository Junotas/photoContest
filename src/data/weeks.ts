export type PhotoEntry = {
  src: string; // ex: 'photos/2026-w10/01-something.webp' (utan leading slash)
  author: string;
  title?: string;
  alt: string;
};

export type WeekEntry = {
  id: string; // '2026-w10'
  label: string; // 'Week 10'
  dateRange: string;
  theme?: string;
  winner?: { author: string; src: string };
  photos: PhotoEntry[];
};

// Gör länkar säkra för GitHub Pages base path
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL; // ex '/my-repo/'
  const cleaned = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${cleaned}`;
}

// Lägg nyaste först
export const weeks: WeekEntry[] = [
  {
    id: "2026-w10",
    label: "Week 10",
    dateRange: "Mar 2 – Mar 8, 2026",
    theme: "Your theme",
    winner: { author: "WinnerName", src: "photos/2026-w10/01-winner.webp" },
    photos: [
      {
        src: "photos/2026-w10/01-winner.webp",
        author: "WinnerName",
        title: "Title",
        alt: "Describe the image briefly",
      },
    ],
  },
  // ...
];
export function getWeekById(id: string): WeekEntry | undefined {
  return weeks.find((w) => w.id === id);
}
