export type PhotoEntry = {
  src: string;
  author: string;
  title?: string;
  alt: string;
};

export type WeekEntry = {
  id: string;
  label: string;
  dateRange: string;
  theme?: string;
  winner?: { author: string; src: string };
  photos: PhotoEntry[];
};

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const cleaned = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${cleaned}`;
}

export const weeks: WeekEntry[] = [
  {
    id: "2026-w03",
    label: "Week 3",
    dateRange: "10th - 17th January 2026",
    theme: "Theme: None",
    winner: {
      author: "DiscoHippie",
      src: "photos/2026-w03/DiscoHippie.jpg",
    },
    photos: [
      {
        src: "photos/2026-w03/Calix.png",
        author: "Calix",
        alt: "Weekly photo contest entry by Calix",
      },
      {
        src: "photos/2026-w03/DiscoHippie.jpg",
        author: "DiscoHippie",
        alt: "Weekly photo contest entry by DiscoHippie",
      },
      {
        src: "photos/2026-w03/juno.png",
        author: "juno",
        alt: "Weekly photo contest entry by juno",
      },
      {
        src: "photos/2026-w03/Lichen598.png",
        author: "Lichen598",
        alt: "Weekly photo contest entry by Lichen598",
      },
      {
        src: "photos/2026-w03/MistaMx5.png",
        author: "MistaMx5",
        alt: "Weekly photo contest entry by MistaMx5",
      },
      {
        src: "photos/2026-w03/randomner.png",
        author: "randomner",
        alt: "Weekly photo contest entry by randomner",
      },
      {
        src: "photos/2026-w03/someone.jpg",
        author: "someone",
        alt: "Weekly photo contest entry by someone",
      },
    ],
  },
  {
    id: "2026-w04",
    label: "Week 4",
    dateRange: "17th - 24th January 2026",
    theme: "Theme: None",
    winner: {
      author: "Travars",
      src: "photos/2026-w04/Travars.jpg",
    },
    photos: [
      {
        src: "photos/2026-w04/calix.png",
        author: "calix",
        alt: "Weekly photo contest entry by calix",
      },
      {
        src: "photos/2026-w04/DiscoHippie.jpg",
        author: "DiscoHippie",
        alt: "Weekly photo contest entry by DiscoHippie",
      },
      {
        src: "photos/2026-w04/MistaMx5.png",
        author: "MistaMx5",
        alt: "Weekly photo contest entry by MistaMx5",
      },
      {
        src: "photos/2026-w04/ScrapperBee.png",
        author: "ScrapperBee",
        alt: "Weekly photo contest entry by ScrapperBee",
      },
      {
        src: "photos/2026-w04/someone.png",
        author: "someone",
        alt: "Weekly photo contest entry by someone",
      },
      {
        src: "photos/2026-w04/Travars.jpg",
        author: "Travars",
        alt: "Weekly photo contest entry by Travars",
      },
      {
        src: "photos/2026-w04/vosinigr.png",
        author: "vosinigr",
        alt: "Weekly photo contest entry by vosinigr",
      },
    ],
  },
  {
    id: "2026-w05",
    label: "Week 5",
    dateRange: "24th - 31st January 2026",
    theme: "Theme: None",
    photos: [
      {
        src: "photos/2026-w05/calix.png",
        author: "calix",
        alt: "Weekly photo contest entry by calix",
      },
      {
        src: "photos/2026-w05/madamepandoraX.png",
        author: "madamepandoraX",
        alt: "Weekly photo contest entry by madamepandoraX",
      },
      {
        src: "photos/2026-w05/nyek.png",
        author: "nyek",
        alt: "Weekly photo contest entry by nyek",
      },
      {
        src: "photos/2026-w05/randomner.png",
        author: "randomner",
        alt: "Weekly photo contest entry by randomner",
      },
      {
        src: "photos/2026-w05/ScrapperBee.png",
        author: "ScrapperBee",
        alt: "Weekly photo contest entry by ScrapperBee",
      },
      {
        src: "photos/2026-w05/someone.png",
        author: "someone",
        alt: "Weekly photo contest entry by someone",
      },
      {
        src: "photos/2026-w05/Vosinigr.png",
        author: "Vosinigr",
        alt: "Weekly photo contest entry by Vosinigr",
      },
    ],
  },
  {
    id: "2026-w06",
    label: "Week 6",
    dateRange: "31st January - 7th February 2026",
    theme: "Theme: None",
    photos: [
      {
        src: "photos/2026-w06/aqualungXIV.jpg",
        author: "aqualungXIV",
        alt: "Weekly photo contest entry by aqualungXIV",
      },
      {
        src: "photos/2026-w06/Calix.png",
        author: "Calix",
        alt: "Weekly photo contest entry by Calix",
      },
      {
        src: "photos/2026-w06/DiscoHippie.jpg",
        author: "DiscoHippie",
        alt: "Weekly photo contest entry by DiscoHippie",
      },
      {
        src: "photos/2026-w06/Nyek.png",
        author: "Nyek",
        alt: "Weekly photo contest entry by Nyek",
      },
      {
        src: "photos/2026-w06/Randomner.JPG",
        author: "Randomner",
        alt: "Weekly photo contest entry by Randomner",
      },
      {
        src: "photos/2026-w06/someone.jpg",
        author: "someone",
        alt: "Weekly photo contest entry by someone",
      },
    ],
  },
];
export function getWeekById(id: string): WeekEntry | undefined {
  return weeks.find((w) => w.id === id);
}
