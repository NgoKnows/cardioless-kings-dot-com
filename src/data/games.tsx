import groupBy from "lodash/groupBy";
import keyBy from "lodash/keyBy";

const games = [
  {
    id: 0,
    season: 7,
    teamName: "Supersonics WED",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=r3zMMwHYY0g&t=3266s",
        name: "Link",
      },
    ],
  },
  {
    id: 1,
    season: 7,
    teamName: "Harjit N Friends Rematch",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=sQgtMvmkUvk&t=1947s",
        name: "Link",
      },
    ],
  },
  {
    id: 2,
    season: 7,
    teamName: "Indy CORNER THREE",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=T-QxO1_FFUc&t=2878s",
        name: "Link",
      },
    ],
  },
  {
    id: 3,
    season: 7,
    teamName: "Indy Durant Durant",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=QEefnzI9N7Y",
        name: "Pt.2",
      },
      {
        href: "https://www.youtube.com/watch?v=QEefnzI9N7Y",
        name: "Pt.2",
      },
    ],
  },
  {
    id: 4,
    season: 7,
    teamName: "Double Stacks",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=_aldj4w-zek&t=1416s",
        name: "Link",
      },
    ],
  },
  {
    id: 5,
    season: 7,
    teamName: "Harjit N Friends",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=xjIdVnnxEgA&t=966s",
        name: "Link",
      },
    ],
  },
  {
    id: 6,
    season: 6,
    teamName: "Dave's House",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=HkFHEgA9tBA&t=3054s",
        name: "Link",
      },
    ],
  },
  {
    id: 7,
    season: 6,
    teamName: "Sleepy Joes",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=oYk-ItiAUO4",
        name: "Link",
      },
    ],
  },
  {
    id: 8,
    season: 6,
    teamName: "Ring Chasers",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=80IPIlJ4pNk",
        name: "Link",
      },
    ],
  },
  {
    id: 9,
    season: 6,
    teamName: "OnniHeads",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=GUacmmr4uDA&t=1162s",
        name: "Link",
      },
    ],
  },
  {
    id: 10,
    season: 6,
    teamName: "Double Stacks",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=3CKte-uLKb0&t=2902s",
        name: "Link",
      },
    ],
  },
  {
    id: 11,
    season: 5,
    teamName: "SKYPG",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=cipJrkHAcGc&t=2950s",
        name: "Link",
      },
    ],
  },
  {
    id: 12,
    season: 5,
    teamName: "Still Below the Rim",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=s3-Jodvwgs0&t=465s",
        name: "Link",
      },
    ],
  },
  {
    id: 13,
    season: 5,
    teamName: "Indy Shish Kabob",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=Bw3C4elp99I&t=3002s",
        name: "Link",
      },
    ],
  },
  {
    id: 14,
    season: 5,
    teamName: "Supersonics (WED)",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=UySWZiVoVu4&t=3110s",
        name: "Link",
      },
    ],
  },
  {
    id: 15,
    season: 5,
    teamName: "The Double Stacks",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=5qb64CUOwVU&t=3877s",
        name: "Link",
      },
    ],
  },
  {
    id: 16,
    season: 4,
    teamName: "Unknown",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=Ill0d6VofLk&t=33s",
        name: "Link",
      },
    ],
  },
  {
    id: 17,
    season: 4,
    teamName: "Unknown",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=k7H7NZa6Rx8&t=703s",
        name: "Link",
      },
    ],
  },
  {
    id: 18,
    season: 4,
    teamName: "Unknown",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=oqURgacutUs",
        name: "Link",
      },
    ],
  },
  {
    id: 19,
    season: 5,
    teamName: "99 Problems (But A Swish Ain't One)",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=nf0azJKpWbY",
        name: "Link",
      },
    ],
  },
  {
    id: 20,
    season: 5,
    teamName: "Checks Over Stripes",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=5PKGoONJvZ8&t=1842s",
        name: "Link",
      },
    ],
  },
  {
    id: 21,
    season: 4,
    teamName: "Ben Simmons Jumpshot Full",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=v0ILnMNIuF0&t=434s",
        name: "Link",
      },
    ],
  },
  {
    id: 22,
    season: 3,
    teamName: "Brick for Vick",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=2SD33eOuRHw&t=183s",
        name: "Part 2",
      },
      {
        href: "https://www.youtube.com/watch?v=2SD33eOuRHw&t=183s",
        name: "Part 2",
      },
    ],
  },
  {
    id: 23,
    season: 3,
    teamName: "Indy Providence Steamrollers",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=ucp4RK0pxok",
        name: "Part 2",
      },
      {
        href: "https://www.youtube.com/watch?v=ucp4RK0pxok",
        name: "Part 2",
      },
    ],
  },
  {
    id: 24,
    season: 3,
    teamName: "Atomic Supermen",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=orgg6OWu8XA&t=2s",
        name: "Part 2",
      },
      {
        href: "https://www.youtube.com/watch?v=orgg6OWu8XA&t=2s",
        name: "Part 2",
      },
    ],
  },
  {
    id: 25,
    season: 4,
    teamName: "Hoops I Did It Again",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=E0w7M9fdanE&t=615s",
        name: "Link",
      },
    ],
  },
  {
    id: 26,
    season: 3,
    teamName: "Korean Fish",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=RE9zD0uxUe4",
        name: "Link",
      },
    ],
  },
  {
    id: 27,
    season: 4,
    teamName: "Old Guys",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=QGIk_sMzsoA&t=2873s",
        name: "Link",
      },
    ],
  },
  {
    id: 28,
    season: 4,
    teamName: "Vamos Locos",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=44OplldCg_A&t=2438s",
        name: "Link",
      },
    ],
  },
  {
    id: 29,
    season: 1,
    teamName: "Unknown",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=XvhKaXdReBo&t=3s",
        name: "(Raj's Phone)",
      },
      {
        href: "https://www.youtube.com/watch?v=XvhKaXdReBo&t=3s",
        name: "(Raj's Phone)",
      },
    ],
  },
  {
    id: 30,
    season: 1,
    teamName: "Unknown",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=1QDcuwOcrzY&t=1936s",
        name: "Link",
      },
    ],
  },
  {
    id: 31,
    season: 1,
    teamName: "Unknown",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=QrNxU53j5Oc&t=2540s",
        name: "Link",
      },
    ],
  },
  {
    id: 32,
    season: 1,
    teamName: "Unknown",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=6OX_r9ZyY2Q&t=203s",
        name: "(Mike's Phone)",
      },
      {
        href: "https://www.youtube.com/watch?v=6OX_r9ZyY2Q&t=203s",
        name: "(Mike's Phone)",
      },
    ],
  },
  {
    id: 33,
    season: 1,
    teamName: "Unknown (Raj's Phone)",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=1nun8ihCdwU",
        name: "Link",
      },
      {
        href: "https://www.youtube.com/watch?v=1nun8ihCdwU",
        name: "Link",
      },
    ],
  },
  {
    id: 34,
    season: 1,
    teamName: "Unknown",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=s0Ol9rzaneA",
        name: "(Raj's Phone)",
      },
      {
        href: "https://www.youtube.com/watch?v=s0Ol9rzaneA",
        name: "(Raj's Phone)",
      },
    ],
  },
  {
    id: 35,
    season: 1,
    teamName: "Korean Fish",
    videoUrls: [
      {
        href: "https://www.youtube.com/watch?v=N5k9zkQPZdM&t=10s",
        name: "Part 2",
      },
      {
        href: "https://www.youtube.com/watch?v=N5k9zkQPZdM&t=10s",
        name: "Part 2",
      },
    ],
  },
];

export const gamesGroupedBySeason = groupBy(games, (game) => game.season);
export const gamesById = keyBy(games, (game) => game.id);

export default games;
