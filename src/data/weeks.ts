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
    theme: "None",
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
    theme: "None",
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
    theme: "None",
    winner: {
      author: "Calix",
      src: "photos/2026-w05/calix.png",
    },
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
    theme: "None",
    winner: {
      author: "SaltRiverEagle",
      src: "photos/2026-w06/SaltRiverEagle.png",
    },
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
      {
        src: "photos/2026-w06/SaltRiverEagle.png",
        author: "SaltRiverEagle",
        alt: "Weekly photo contest entry by SaltRiverEagle",
      },
      {
        src: "photos/2026-w06/Vosinigr.png",
        author: "Vosinigr",
        alt: "Weekly photo contest entry by Vosinigr",
      },
      {
        src: "photos/2026-w06/MistaMx5.png",
        author: "MistaMx5",
        alt: "Weekly photo contest entry by MistaMx5",
      },
      {
        src: "photos/2026-w06/madamepandoraX.png",
        author: "madamepandoraX",
        alt: "Weekly photo contest entry by madamepandoraX",
      },
      {
        src: "photos/2026-w06/lichen598.png",
        author: "lichen598",
        alt: "Weekly photo contest entry by lichen598",
      },
    ],
  },
  {
    id: "2026-w07",
    label: "Week 7",
    dateRange: "7th - 14th February 2026",
    theme: "None",
    winner: {
      author: "Calix",
      src: "photos/2026-w07/calix.png",
    },
    photos: [
      {
        src: "photos/2026-w07/madamepandoraX.png",
        author: "madamepandoraX",
        alt: "Weekly photo contest entry by madamepandoraX",
      },
      {
        src: "photos/2026-w07/SaltRiverEagle.png",
        author: "SaltRiverEagle",
        alt: "Weekly photo contest entry by SaltRiverEagle",
      },
      {
        src: "photos/2026-w07/calix.png",
        author: "calix",
        alt: "Weekly photo contest entry by calix",
      },
      {
        src: "photos/2026-w07/nyek.png",
        author: "nyek",
        alt: "Weekly photo contest entry by nyek",
      },
      {
        src: "photos/2026-w07/Randomner.png",
        author: "Randomner",
        alt: "Weekly photo contest entry by Randomner",
      },
      {
        src: "photos/2026-w07/Someone.jpg",
        author: "Someone",
        alt: "Weekly photo contest entry by Someone",
      },
      {
        src: "photos/2026-w07/ScrapperBee.png",
        author: "ScrapperBee",
        alt: "Weekly photo contest entry by ScrapperBee",
      },
      {
        src: "photos/2026-w07/MistaMx5.png",
        author: "MistaMx5",
        alt: "Weekly photo contest entry by MistaMx5",
      },
      {
        src: "photos/2026-w07/Vosinigr.png",
        author: "Vosinigr",
        alt: "Weekly photo contest entry by Vosinigr",
      },
      {
        src: "photos/2026-w07/DiscoHippie.jpg",
        author: "DiscoHippie",
        alt: "Weekly photo contest entry by DiscoHippie",
      },
      {
        src: "photos/2026-w07/GabrielEBV.JPG",
        author: "GabrielEBV",
        alt: "Weekly photo contest entry by GabrielEBV",
      },
    ],
  },
  {
    id: "2026-w08",
    label: "Week 8",
    dateRange: "14th - 21st February 2026",
    theme: "None",
    winner: {
      author: "BiddydaKid",
      src: "photos/2026-w08/BiddydaKid.png",
    },
    photos: [
      {
        src: "photos/2026-w08/madamepandoraX.png",
        author: "madamepandoraX",
        alt: "Weekly photo contest entry by madamepandoraX",
      },
      {
        src: "photos/2026-w08/ScrapperBee.png",
        author: "ScrapperBee",
        alt: "Weekly photo contest entry by ScrapperBee",
      },
      {
        src: "photos/2026-w08/calix.png",
        author: "calix",
        alt: "Weekly photo contest entry by calix",
      },
      {
        src: "photos/2026-w08/nyek.png",
        author: "nyek",
        alt: "Weekly photo contest entry by nyek",
      },
      {
        src: "photos/2026-w08/some_one.png",
        author: "some_one",
        alt: "Weekly photo contest entry by some_one",
      },
      {
        src: "photos/2026-w08/GabrielEBV.JPG",
        author: "GabrielEBV",
        alt: "Weekly photo contest entry by GabrielEBV",
      },
      {
        src: "photos/2026-w08/BiddydaKid.png",
        author: "BiddydaKid",
        alt: "Weekly photo contest entry by BiddydaKid",
      },
      {
        src: "photos/2026-w08/DiscoHippie.jpg",
        author: "DiscoHippie",
        alt: "Weekly photo contest entry by DiscoHippie",
      },
    ],
  },
  {
    id: "2026-w09",
    label: "Week 9",
    dateRange: "21st - 28th February 2026",
    theme: "None",
    winner: {
      author: "Disco",
      src: "photos/2026-w09/Disco.jpg",
    },
    photos: [
      {
        src: "photos/2026-w09/Nyek.png",
        author: "Nyek",
        alt: "Weekly photo contest entry by Nyek",
      },
      {
        src: "photos/2026-w09/Calix.png",
        author: "Calix",
        alt: "Weekly photo contest entry by Calix",
      },
      {
        src: "photos/2026-w09/BiddydaKid.png",
        author: "BiddydaKid",
        alt: "Weekly photo contest entry by BiddydaKid",
      },
      {
        src: "photos/2026-w09/Disco.jpg",
        author: "Disco",
        alt: "Weekly photo contest entry by Disco",
      },
      {
        src: "photos/2026-w09/Vosinigr.png",
        author: "Vosinigr",
        alt: "Weekly photo contest entry by Vosinigr",
      },
      {
        src: "photos/2026-w09/Randomner.png",
        author: "Randomner",
        alt: "Weekly photo contest entry by Randomner",
      },
    ],
  },
  {
    id: "2026-w10",
    label: "Week 10",
    dateRange: "28th February - 7th March 2026",
    theme: "Fauna",
    winner: {
      author: "Calix",
      src: "photos/2026-w10/Calix.png",
    },
    photos: [
      {
        src: "photos/2026-w10/Calix.png",
        author: "Calix",
        alt: "Weekly photo contest entry by Calix",
      },
      {
        src: "photos/2026-w10/Nyek.png",
        author: "Nyek",
        alt: "Weekly photo contest entry by Nyek",
      },
      {
        src: "photos/2026-w10/Disco.jpg",
        author: "Disco",
        alt: "Weekly photo contest entry by Disco",
      },
      {
        src: "photos/2026-w10/ScrapperBee.png",
        author: "ScrapperBee",
        alt: "Weekly photo contest entry by ScrapperBee",
      },
    ],
  },
  {
    id: "2026-w11",
    label: "Week 11",
    dateRange: "7th - 14th March 2026",
    theme: "Spaceships",
    winner: {
      author: "SaltRiverEagle",
      src: "photos/2026-w11/SaltRiverEagle.png",
    },
    photos: [
      {
        src: "photos/2026-w11/Calix.png",
        author: "Calix",
        alt: "Weekly photo contest entry by Calix",
      },
      {
        src: "photos/2026-w11/SaltRiverEagle.png",
        author: "SaltRiverEagle",
        alt: "Weekly photo contest entry by SaltRiverEagle",
      },
      {
        src: "photos/2026-w11/Nyek.png",
        author: "Nyek",
        alt: "Weekly photo contest entry by Nyek",
      },
      {
        src: "photos/2026-w11/Vosinigr.png",
        author: "Vosinigr",
        alt: "Weekly photo contest entry by Vosinigr",
      }
    ],
  },
  {
    id: "2026-w12",
    label: "Week 12",
    dateRange: "14th - 21st March 2026",
    theme: "None",
    photos: [
      {
        src: "photos/2026-w12/aqualungXIV.JPG",
        author: "aqualungXIV",
        alt: "Weekly photo contest entry by AqualungXIV",
      },
      {
        src: "photos/2026-w12/Nyek.png",
        author: "Nyek",
        alt: "Weekly photo contest entry by Nyek",
      },
      {
        src: "photos/2026-w12/Calix.png",
        author: "Calix",
        alt: "Weekly photo contest entry by Calix",
      },
      {
        src: "photos/2026-w12/MadamepandoraX.png",
        author: "MadamepandoraX",
        alt: "Weekly photo contest entry by MadamepandoraX",
      },
      {
        src: "photos/2026-w12/Vosinigr.png",
        author: "Vosinigr",
        alt: "Weekly photo contest entry by Vosinigr",
      },
      {
        src: "photos/2026-w12/Rafael M.png",
        author: "Rafael M",
        alt: "Weekly photo contest entry by Rafael M",
      },
    ],
  },
  {
    id: "2026-w13",
    label: "Week 13",
    dateRange: "21st - 28th March 2026",
    theme: "None",
    photos: [],
  },
  {
    id: "2026-w14",
    label: "Week 14",
    dateRange: "28th March - 4th April 2026",
    theme: "None",
    photos: [],
  },
  {
    id: "2026-w15",
    label: "Week 15",
    dateRange: "4th - 11th April 2026",
    theme: "None",
    photos: [],
  },
  {
    id: "2026-w16",
    label: "Week 16",
    dateRange: "11th - 18th April 2026",
    theme: "None",
    photos: [],
  },
];

export function getWeekById(id: string): WeekEntry | undefined {
  return weeks.find((w) => w.id === id);
}
