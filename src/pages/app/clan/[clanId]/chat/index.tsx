/* eslint-disable @next/next/no-img-element */
import { Clan, User } from "@/common.types";
import DashRoot from "@/components/Dashboard/Navegation/DashRoot";
import { getUser, getUserClans } from "@/Utils/user";
import { VscVerifiedFilled } from "react-icons/vsc";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { MdGroups } from "react-icons/md";
import { FaCrown } from "react-icons/fa";
import Link from "next/link";

interface Props {
  user: User;
  clan: Clan;
  clanMembers: User[];
}

export default function ClanChat({ user, clan, clanMembers }: Props) {
  return (
    <DashRoot
      user={user}
      title={"Clan Home"}
      desc="On the dashboard you can see your profile, your earnings, your referrals and much more. You can also withdraw your earnings to your PayPal account. And participate in tournaments and events."
    >
      <div className="w-full flex flex-col gap-3 mt-10">
        <div className="w-[90%] mx-auto">
          <div className="bg-secondary min-h-[150px] p-3 flex items-center relative rounded-md">
            <div className="w-[95%] mx-auto flex justify-between items-center">
              <div className="flex gap-3">
                <div>
                  {clan.image ? (
                    <img
                      src={`https://api.arconixstudio.com/api/files/clan/${clan.id}/${clan.image}`}
                      alt={clan.name}
                      className="w-[5rem] h-[5rem] bg-tertiary rounded-[24px] object-contain p-1"
                    />
                  ) : (
                    <div className="w-[5rem] h-[5rem] bg-tertiary rounded-[24px] object-contain p-1 flex items-center justify-center">
                      <MdGroups className="text-white text-opacity-40 text-6xl" />
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white text-2xl md:text-5xl font-bold uppercase flex items-center gap-2">
                    [{clan.tag}] {clan.name}
                    {clan.verified && (
                      <VscVerifiedFilled className="text-yellow-400 text-2xl md:text-3xl inline-block" />
                    )}
                  </span>
                  <div className="flex gap-2 items-center">
                    <span className={`text-white text-sm uppercase`}>
                      Lang:{" "}
                    </span>
                    <img
                      src={`https://flagcdn.com/${clan.lang}.svg`}
                      alt={clan.lang}
                      className="w-6 h-6"
                    />
                  </div>
                </div>
              </div>
              {clan.owner === user.id && (
                <button className="bg-primary text-white p-1 rounded-md absolute bottom-3 md:bottom-auto right-3 top-auto md:top-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="w-[90%] h-full mx-auto">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <div className="bg-secondary h-[350px] p-3 flex flex-col rounded-md">
                <span className="text-white text-2xl font-bold uppercase">
                  Members
                </span>

                <div className="w-full h-[90%] p-2 overflow-y-scroll">
                  {clanMembers.map((member) => (
                    <div
                      key={member.id}
                      className="bg-secondary border border-white border-opacity-10 p-2 rounded-md w-full flex items-center gap-2 hover:scale-[1.01] group/userClan relative transition-all ease-in duration-200"
                    >
                      <div className="absolute inset-0 bg-background/50 hidden group-hover/userClan:flex rounded-md backdrop-blur-[2px]">
                        <div className="flex justify-center items-center gap-2 p-2 w-full">
                          <Link
                            href={`/app/player/${member.id}`}
                            className="bg-primary text-white p-1 rounded-md h-8 w-8 flex items-center justify-center"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                              />
                            </svg>
                          </Link>
                          {user.id === clan.owner && (
                            <button className="bg-red-600 text-white p-1 rounded-md h-8 w-8 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>
                          )}
                          )
                        </div>
                      </div>
                      <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-2">
                          {member.avatar ? (
                            <img
                              src={`https://api.arconixstudio.com/api/files/user/${member.id}/${member.avatar}`}
                              alt={member.display}
                              className="w-10 h-10 bg-tertiary rounded-full object-contain p-1"
                            />
                          ) : (
                            <div className="w-10 h-10 bg-tertiary rounded-full object-contain p-1"></div>
                          )}
                          <span className="text-white text-lg font-bold">
                            {member.display}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1">
                          {clan.owner === member.id && (
                            <span className="text-yellow-400 text-sm font-bold">
                              <FaCrown className="w-5 h-5" />
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashRoot>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const clanid = context.params?.clanId;
  const session = await getSession({ req: context.req });
  const user = await getUser(`${session?.user?.email}`);
  const userClan: Clan[] = await getUserClans(user);

  if (!userClan.find((clan) => clan.id === clanid)) {
    return {
      redirect: {
        destination: `/app/clan/${clanid}/about`,
        permanent: false,
      },
    };
  }

  const clan = userClan.find((clan) => clan.id === clanid);

  let members: any = [];

  userClan.forEach((clan) => {
    clan.members.forEach((member) => {
      if (member !== undefined && member !== null) {
        members.push(member);
      }
    });
  });

  return {
    props: {
      user,
      clan,
      clanMembers: members,
    },
  };
};
