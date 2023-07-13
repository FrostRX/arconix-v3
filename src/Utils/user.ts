import { Clan, User } from "@/common.types";
import { API_URI } from "./variables";

export const getUser = async (email: string) => {
  const response = await fetch(`${API_URI}/api/collections/users/records`);
  const data = await response.json();
  const users = data.items;
  const user = users.find((user: any) => user.email === email);
  return user;
};

export const getUsers = async () => {
  const response = await fetch(`${API_URI}/api/collections/users/records`);
  const data = await response.json();
  const users = data.items;
  return users;
};

export const getClans = async () => {
  const response = await fetch(`${API_URI}/api/collections/clan/records`);
  const data = await response.json();
  const clans = data.items;
  return clans;
};

export const getUserClans = async (user: User) => {
  const clans = await getClans();
  const userClans = clans.filter((clan: Clan) => {
    return clan.members.includes(user.id) || clan.owner === user.id;
  });

  const usersMembersID = userClans.map((clan: Clan) => clan.members);
  const usersMembers = usersMembersID.flat();
  const users = await getUsers();
  const usersInClans = users.filter((user: User) =>
    usersMembers.includes(user.id)
  );

  const clansWithUsers = userClans.map((clan: Clan) => {
    const clanMembers = clan.members.map((member: string) => {
      const user = usersInClans.find((user: User) => user.id === member);
      return user;
    });
    return { ...clan, members: clanMembers };
  });

  return clansWithUsers;
};
