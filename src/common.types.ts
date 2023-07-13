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

export type User = {
  avatar: string;
  badges: Badges;
  banned: boolean;
  bio: string;
  coins: number;
  collectionID: string;
  collectionName: string;
  country: string;
  created: Date;
  display: string;
  email: string;
  emailVisibility: boolean;
  id: string;
  private: boolean;
  role: string;
  socials: Socials;
  stats: Stats;
  tokens: number;
  updated: Date;
  username: string;
  verified: boolean;
};

export type Badges = {};

export type Socials = {
  instagram: string;
  twitch: string;
  twitter: string;
  youtube: string;
};

export type Stats = {
  defeats: number;
  events: number;
  tournaments: number;
  wins: number;
};
