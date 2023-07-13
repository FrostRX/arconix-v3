export type Clan = {
  id: string;
  collectionName: string;
  collectionId: string;
  created: string;
  updated: string;
  image: string;
  name: string;
  tag: string;
  desc: string;
  owner: string;
  lang: string;
  private: boolean;
  verified: boolean;
  members: string[];
  games: string[];
  max: number;
  applications: string[];
};

export type User = {
  avatar: string;
  badges: object;
  banned: boolean;
  bio: string;
  coins: number;
  collectionId: string;
  collectionName: string;
  created: string;
  display: string;
  email: string;
  emailVisibility: boolean;
  id: string;
  private: boolean;
  role: "user" | "premium" | "streamer" | "partner" | "mod" | "admin";
  socials: {
    instagram: string;
    twitter: string;
    twitch: string;
    youtube: string;
  };
  stats: {
    defeats: number;
    events: number;
    tournaments: number;
    wins: number;
  };
  tokens: number;
  updated: string;
  username: string;
  verified: boolean;
  country: string;
};

export type ShopItem = {
  category: string;
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  name: string;
  price: number;
  subname: string;
  updated: string;
};

export type ShopCategory = {
  name: string;
  subname: string;
  validNote: string;
  url: string;
  alert: string;
};

export type Tournament = {
  author: string;
  collectionId: string;
  collectionName: string;
  created: string;
  date: string;
  desc: string;
  game: string;
  id: string;
  max: number;
  name: string;
  participants: string[];
  price: number;
  status: string;
  thumb: string;
  tutorial: string;
  type: string;
  updated: string;
  winner: string;
};

export type keys = {
  product: string;
  code: string;
  cat: string;
};
