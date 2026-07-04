export type PhotoEntry = {
  src: string;
  author: string;
  title?: string;
  alt: string;
};

export type PlacementEntry = {
  author: string;
  src: string;
};

export type Placement = {
  place: number;
  entries: PlacementEntry[];
};
export function getWeekById(id: string): WeekEntry | undefined {
  return weeks.find((w) => w.id === id);
}

export function getFirstPlaceEntries(week: WeekEntry): PlacementEntry[] {
  return week.placements?.find((p) => p.place === 1)?.entries ?? [];
}

export type WeekEntry = {
  id: string;
  label: string;
  dateRange: string;
  theme?: string;
  placements?: Placement[];
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
    placements: [
      {
        place: 1,
        entries: [
          {
            author: "Disco",
            src: "photos/2026-w03/DiscoHippie.jpg",
          },
        ],
      },
    ],
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
    placements: [
      {
        place: 1,
        entries: [
          {
            author: "Travars",
            src: "photos/2026-w04/Travars.jpg",
          },
        ],
      },
    ],
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
    placements: [
      {
        place: 1,
        entries: [
          {
            author: "Calix",
            src: "photos/2026-w05/calix.png",
          },
        ],
      },
    ],
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
    placements: [
      {
        place: 1,
        entries: [
          {
            author: "SaltRiverEagle",
            src: "photos/2026-w06/SaltRiverEagle.png",
          },
        ],
      },
    ],
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
    placements: [
      {
        place: 1,
        entries: [
          {
            author: "Calix",
            src: "photos/2026-w07/calix.png",
          },
        ],
      },
    ],
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
    placements: [
      {
        place: 1,
        entries: [
          {
            author: "BiddydaKid",
            src: "photos/2026-w08/BiddydaKid.png",
          },
        ],
      },
    ],
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
    placements: [
      {
        place: 1,
        entries: [
          {
            author: "Disco",
            src: "photos/2026-w09/Disco.jpg",
          },
        ],
      },
    ],
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
    placements: [
      {
        place: 1,
        entries: [
          {
            author: "Calix",
            src: "photos/2026-w10/Calix.png",
          },
        ],
      },
    ],
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
    placements: [
      {
        place: 1,
        entries: [
          {
            author: "SaltRiverEagle",
            src: "photos/2026-w11/SaltRiverEagle.png",
          },
        ],
      },
    ],
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
      },
    ],
  },
  {
    id: "2026-w12",
    label: "Week 12",
    dateRange: "14th - 21st March 2026",
    theme: "None",
    placements: [
      {
        place: 1,
        entries: [
          {
            author: "Disco",
            src: "photos/2026-w12/Disco.jpg",
          },
        ],
      },
    ],
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
        src: "photos/2026-w12/RafaelM.jpg",
        author: "Rafael M",
        alt: "Weekly photo contest entry by Rafael M",
      },
      {
        src: "photos/2026-w12/Disco.jpg",
        author: "Disco",
        alt: "Weekly photo contest entry by Disco",
      },
    ],
  },
  {
    id: "2026-w13",
    label: "Week 13",
    dateRange: "21st - 28th March 2026",
    theme: "Storms",
    placements: [
      {
        place: 1,
        entries: [
          {
            author: "Calix",
            src: "photos/2026-w13/Calix.png",
          },
          {
            author: "Nyek",
            src: "photos/2026-w13/Nyek.png",
          },
          {
            author: "Maxpower",
            src: "photos/2026-w13/Maxpower.png",
          },
        ],
      },
    ],
    photos: [
      {
        src: "photos/2026-w13/Calix.png",
        author: "Calix",
        alt: "Weekly photo contest entry by Calix",
      },
      {
        src: "photos/2026-w13/Nyek.png",
        author: "Nyek",
        alt: "Weekly photo contest entry by Nyek",
      },
      {
        src: "photos/2026-w13/Maxpower.png",
        author: "Maxpower",
        alt: "Weekly photo contest entry by Maxpower",
      },
    ],
  },
  {
    id: "2026-w14",
    label: "Week 14",
    dateRange: "28th March - 4th April 2026",
    theme: "None",
    placements: [
      {
        place: 1,
        entries: [
          {
            author: "Nyek",
            src: "photos/2026-w14/Nyek.png",
          },
        ],
      },
    ],
    photos: [
      {
        src: "photos/2026-w14/Calix.png",
        author: "Calix",
        alt: "Weekly photo contest entry by Calix",
      },
      {
        src: "photos/2026-w14/Vosinigr.png",
        author: "Vosinigr",
        alt: "Weekly photo contest entry by Vosinigr",
      },
      {
        src: "photos/2026-w14/Nyek.png",
        author: "Nyek",
        alt: "Weekly photo contest entry by Nyek",
      },
      {
        src: "photos/2026-w14/Randomner.png",
        author: "Randomner",
        alt: "Weekly photo contest entry by Randomner",
      },
      {
        src: "photos/2026-w14/Disco.jpg",
        author: "Disco",
        alt: "Weekly photo contest entry by Disco",
      },
      {
        src: "photos/2026-w14/madamepandoraX.png",
        author: "MadamepandoraX",
        alt: "Weekly photo contest entry by MadamepandoraX",
      },
    ],
  },
  {
    id: "2026-w15",
    label: "Week 15",
    dateRange: "4th - 11th April 2026",
    theme: "Visit someone else's base",
    placements: [
      {
        place: 1,
        entries: [
          { author: "ScrapperBee", src: "photos/2026-w15/ScrapperBee.png" },
        ],
      },
    ],
    photos: [
      {
        src: "photos/2026-w15/Calix.png",
        author: "Calix",
        alt: "Weekly photo contest entry by Calix",
      },
      {
        src: "photos/2026-w15/ScrapperBee.png",
        author: "ScrapperBee",
        alt: "Weekly photo contest entry by ScrapperBee",
      },
      {
        src: "photos/2026-w15/Nyek.png",
        author: "Nyek",
        alt: "Weekly photo contest entry by Nyek",
      },
      {
        src: "photos/2026-w15/Disco.jpg",
        author: "Disco",
        alt: "Weekly photo contest entry by Disco",
      },
    ],
  },
  {
    id: "2026-w16",
    label: "Week 16",
    dateRange: "11th - 18th April 2026",
    theme: "PokeSean/Companions!",
    placements: [
      {
        place: 1,
        entries: [{ author: "Disco", src: "photos/2026-w16/Disco.jpg" }],
      },
    ],
    photos: [
      {
        src: "photos/2026-w16/Nyek.png",
        author: "Nyek",
        alt: "Weekly photo contest entry by Nyek",
      },
      {
        src: "photos/2026-w16/Randomner.png",
        author: "Randomner",
        alt: "Weekly photo contest entry by Randomner",
      },
      {
        src: "photos/2026-w16/Vosinigr.png",
        author: "Vosinigr",
        alt: "Weekly photo contest entry by Vosinigr",
      },
      {
        src: "photos/2026-w16/MaxPower.png",
        author: "MaxPower",
        alt: "Weekly photo contest entry by MaxPower",
      },
      {
        src: "photos/2026-w16/Crimson.jpg",
        author: "Crimson",
        alt: "Weekly photo contest entry by Crimson",
      },
      {
        src: "photos/2026-w16/Disco.jpg",
        author: "Disco",
        alt: "Weekly photo contest entry by Disco",
      },
    ],
  },
  {
    id: "2026-w17",
    label: "Week 17",
    dateRange: "18th - 25th April 2026",
    theme: "oceans / water / coastlines",
    placements: [
      {
        place: 1,
        entries: [
          { author: "Randomner", src: "photos/2026-w17/Randomner.png" },
        ],
      },
    ],
    photos: [
      {
        src: "photos/2026-w17/Calix.png",
        author: "Calix",
        alt: "Weekly photo contest entry by Calix",
      },
      {
        src: "photos/2026-w17/Randomner.png",
        author: "Randomner",
        alt: "Weekly photo contest entry by Randomner",
      },
      {
        src: "photos/2026-w17/Vosinigr.png",
        author: "Vosinigr",
        alt: "Weekly photo contest entry by Vosinigr",
      },
      {
        src: "photos/2026-w17/Nyek.png",
        author: "Nyek",
        alt: "Weekly photo contest entry by Nyek",
      },
      {
        src: "photos/2026-w17/plugNplay97.jpg",
        author: "plugNplay97",
        alt: "Weekly photo contest entry by plugNplay97",
      },
      {
        src: "photos/2026-w17/User.jpg",
        author: "User",
        alt: "Weekly photo contest entry by User",
      },
      {
        src: "photos/2026-w17/ScrapperBee.png",
        author: "ScrapperBee",
        alt: "Weekly photo contest entry by ScrapperBee",
      },
    ],
  },
  {
    id: "2026-w18",
    label: "Week 18",
    dateRange: "25th April - 2nd May 2026",
    theme: "Multiplayer / Exploring together",
    placements: [
      {
        place: 1,
        entries: [
          {
            author: "Calix",
            src: "photos/2026-w18/calix.png",
          },
          {
            author: "Disco",
            src: "photos/2026-w18/Disco.jpg",
          },
        ],
      },
    ],
    photos: [
      {
        src: "photos/2026-w18/calix.png",
        author: "Calix",
        alt: "Weekly photo contest entry by Calix",
      },
      {
        src: "photos/2026-w18/MadamepandoraX.png",
        author: "MadamepandoraX",
        alt: "Weekly photo contest entry by MadamepandoraX",
      },
      {
        src: "photos/2026-w18/Nyek.png",
        author: "Nyek",
        alt: "Weekly photo contest entry by Nyek",
      },
      {
        src: "photos/2026-w18/jelloonthego.jpg",
        author: "Jelloonthego",
        alt: "Weekly photo contest entry by jelloonthego",
      },
      {
        src: "photos/2026-w18/Disco.jpg",
        author: "Disco",
        alt: "Weekly photo contest entry by Disco",
      },
      {
        src: "photos/2026-w18/Vosinigr.png",
        author: "Vosinigr",
        alt: "Weekly photo contest entry by Vosinigr",
      },
    ],
  },
  {
    id: "2026-w19",
    label: "Week 19",
    dateRange: "2nd - 9th May 2026",
    theme: "Multi-Tools!",
    placements: [
      {
        place: 1,
        entries: [
          {
            author: "Calix",
            src: "photos/2026-w19/Calix.png",
          },
        ],
      },
    ],
    photos: [
      {
        src: "photos/2026-w19/Calix.png",
        author: "Calix",
        alt: "Weekly photo contest entry by Calix",
      },
      {
        src: "photos/2026-w19/Nyek.png",
        author: "Nyek",
        alt: "Weekly photo contest entry by Nyek",
      },
    ],
  },
  {
    id: "2026-w20",
    label: "Week 20",
    dateRange: "9th - 16th May 2026",
    theme: "Green!",
    placements: [
      {
        place: 1,
        entries: [
          {
            author: "Calix",
            src: "photos/2026-w20/Calix.png",
          },
          {
            author: "Someone",
            src: "photos/2026-w20/Someone.png",
          },
        ],
      },
    ],
    photos: [
      {
        src: "photos/2026-w20/Calix.png",
        author: "Calix",
        alt: "Weekly photo contest entry by Calix",
      },
      {
        src: "photos/2026-w20/Crimson.jpg",
        author: "Crimson",
        alt: "Weekly photo contest entry by Crimson",
      },
      {
        src: "photos/2026-w20/sleepycadet.png",
        author: "Sleepycadet",
        alt: "Weekly photo contest entry by Sleepycadet",
      },
      {
        src: "photos/2026-w20/Someone.png",
        author: "Someone",
        alt: "Weekly photo contest entry by Someone",
      },
      {
        src: "photos/2026-w20/Vosinigr.png",
        author: "Vosinigr",
        alt: "Weekly photo contest entry by Vosinigr",
      },
      {
        src: "photos/2026-w20/TheArchitect.jpg",
        author: "TheArchitect",
        alt: "Weekly photo contest entry by TheArchitect",
      },
      {
        src: "photos/2026-w20/Disco.jpg",
        author: "Disco",
        alt: "Weekly photo contest entry by Disco",
      },
      {
        src: "photos/2026-w20/Nyek.png",
        author: "Nyek",
        alt: "Weekly photo contest entry by Nyek",
      },
    ],
  },
  {
    id: "2026-w21",
    label: "Week 21",
    dateRange: "16th - 23rd May 2026",
    theme: "Purple!",
    placements: [
      {
        place: 1,
        entries: [
          {
            author: "Disco",
            src: "photos/2026-w21/Disco.jpg",
          },
        ],
      },
    ],
    photos: [
      {
        src: "photos/2026-w21/Calix.png",
        author: "Calix",
        alt: "Weekly photo contest entry by Calix",
      },
      {
        src: "photos/2026-w21/Disco.jpg",
        author: "Disco",
        alt: "Weekly photo contest entry by Disco",
      },
      {
        src: "photos/2026-w21/Vosinigr.png",
        author: "Vosinigr",
        alt: "Weekly photo contest entry by Vosinigr",
      },
      {
        src: "photos/2026-w21/Sleepycadet.jpg",
        author: "Sleepycadet",
        alt: "Weekly photo contest entry by Sleepycadet",
      },
      {
        src: "photos/2026-w21/Nyek.png",
        author: "Nyek",
        alt: "Weekly photo contest entry by Nyek",
      },
    ],
  },
  {
    id: "2026-w22",
    label: "Week 22",
    dateRange: "23rd - 30th May 2026",
    theme: "None",
    placements: [
      {
        place: 1,
        entries: [{ author: "Nyek", src: "photos/2026-w22/Nyek.png" }],
      },
    ],
    photos: [
      {
        author: "Calix",
        src: "photos/2026-w22/Calix.png",
        alt: "Weekly photo contest entry by Calix",
      },
      {
        author: "Nyek",
        src: "photos/2026-w22/Nyek.png",
        alt: "Weekly photo contest entry by Nyek",
      },
      {
        author: "Vosinigr",
        src: "photos/2026-w22/Vosinigr.png",
        alt: "Weekly photo contest entry by Vosinigr",
      },
    ],
  },
  {
    id: "2026-w23",
    label: "Week 23",
    dateRange: "30th May - 7th June 2026",
    theme: "None",
    placements: [
      {
        place: 1,
        entries: [{ author: "Disco", src: "photos/2026-w23/Disco.jpg" }],
      },
    ],
    photos: [
      {
        author: "Calix",
        src: "photos/2026-w23/Calix.png",
        alt: "Weekly photo contest entry by Calix",
      },
      {
        author: "Nyek",
        src: "photos/2026-w23/Nyek.png",
        alt: "Weekly photo contest entry by Nyek",
      },
      {
        author: "Vosinigr",
        src: "photos/2026-w23/Vosinigr.png",
        alt: "Weekly photo contest entry by Vosinigr",
      },
      {
        author: "ScrapperBee",
        src: "photos/2026-w23/ScrapperBee.png",
        alt: "Weekly photo contest entry by ScrapperBee",
      },
      {
        author: "Disco",
        src: "photos/2026-w23/Disco.jpg",
        alt: "Weekly photo contest entry by Disco",
      },
    ],
  },
  {
    id: "2026-w24",
    label: "Week 24",
    dateRange: "7th - 14th June 2026",
    theme: "None",
    placements: [
      {
        place: 1,
        entries: [
          { author: "scrapperBee", src: "photos/2026-w24/ScrapperBee.png" },
        ],
      },
    ],
    photos: [
      {
        author: "ScrapperBee",
        src: "photos/2026-w24/ScrapperBee.png",
        alt: "Weekly photo contest entry by ScrapperBee",
      },
      {
        author: "Calix",
        src: "photos/2026-w24/Calix.png",
        alt: "Weekly photo contest entry by Calix",
      },
      {
        author: "Nyek",
        src: "photos/2026-w24/Nyek.png",
        alt: "Weekly photo contest entry by Nyek",
      },
      {
        author: "Disco",
        src: "photos/2026-w24/Disco.jpg",
        alt: "Weekly photo contest entry by Disco",
      },
      {
        author: "Sleepycadet",
        src: "photos/2026-w24/Sleepycadet.png",
        alt: "Weekly photo contest entry by Sleepycadet",
      },
      {
        author: "Biddy",
        src: "photos/2026-w24/Biddy.png",
        alt: "Weekly photo contest entry by Biddy",
      },
    ],
  },
  {
    id: "2026-w25",
    label: "Week 25",
    dateRange: "14th - 21st June 2026",
    theme: "Diplos",
    placements: [
      {
        place: 1,
        entries: [{ author: "Nyek", src: "photos/2026-w25/Nyek.png" }],
      },
    ],
    photos: [
      {
        author: "Calix",
        src: "photos/2026-w25/Calix.png",
        alt: "Weekly photo contest entry by Calix",
      },
      {
        author: "Nyek",
        src: "photos/2026-w25/Nyek.png",
        alt: "Weekly photo contest entry by Nyek",
      },
    ],
  },
  {
    id: "2026-w26",
    label: "Week 26",
    dateRange: "21st - 28th June 2026",
    theme: "None",
    placements: [
      {
        place: 1,
        entries: [{ author: "Nyek", src: "photos/2026-w26/Nyek.png" }],
      },
    ],
    photos: [
      {
        author: "Disco",
        src: "photos/2026-w26/Disco.jpg",
        alt: "Weekly photo contest entry by Disco",
      },
      {
        author: "Gwap",
        src: "photos/2026-w26/Gwap.png",
        alt: "Weekly photo contest entry by Gwap",
      },
      {
        author: "Keylor",
        src: "photos/2026-w26/Keylor.png",
        alt: "Weekly photo contest entry by Keylor",
      },
      {
        author: "ScrapperBee",
        src: "photos/2026-w26/ScrapperBee.png",
        alt: "Weekly photo contest entry by ScrapperBee",
      },
      {
        author: "Nyek",
        src: "photos/2026-w26/Nyek.png",
        alt: "Weekly photo contest entry by Nyek",
      },
    ],
  },
  {
    id: "2026-w27",
    label: "Week 27",
    dateRange: "28th June - 5th July 2026",
    theme: "TBD",
    photos: [
      {
        author: "Nyek",
        src: "photos/2026-w27/Nyek.png",
        alt: "Weekly photo contest entry by Nyek",
      },
      {
        author: "Keylor",
        src: "photos/2026-w27/Keylor.png",
        alt: "Weekly photo contest entry by Keylor",
      },
      {
        author: "PSNplugNplay97",
        src: "photos/2026-w27/PSNplugNplay97.jpg",
        alt: "Weekly photo contest entry by PSNplugNplay97",
      }
    ],
  },
  {
    id: "2026-w28",
    label: "Week 28",
    dateRange: "5th - 12th July 2026",
    theme: "TBD",
    photos: [],
  },
  {
    id: "2026-w29",
    label: "Week 29",
    dateRange: "12th - 19th July 2026",
    theme: "TBD",
    photos: [],
  },
  {
    id: "2026-w30",
    label: "Week 30",
    dateRange: "19th - 26th July 2026",
    theme: "TBD",
    photos: [],
  },
];
