/* eslint-disable @next/next/no-img-element */
import DashRoot from "@/components/Dashboard/Navegation/DashRoot";
import Navegation from "@/components/Dashboard/search/Navegation";
import TableUsers from "@/components/Dashboard/search/players/TableUsers";
import UserPages from "@/components/Dashboard/search/players/UserPages";
import { getUser, getUsers } from "@/Utils/user";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface playerProps {
  user?: any;
  users?: any;
}

export default function Players({ user, users }: playerProps) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [usersList] = useState(users);
  const [page, setPage] = useState(1);

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
    if (e.target.value.length > 0) {
      const results = usersList.filter((user: any) =>
        user.username.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    const results = usersList.filter((user: any) =>
      user.username.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(results);
  }, [search, usersList]);

  // Limit the number of users to 10 per page
  const limit = 10;
  const totalUsers = usersList.length;
  const totalPages = Math.ceil(totalUsers / limit);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <DashRoot
      user={user}
      title="Search Players"
      desc="On the dashboard you can see your profile, your earnings, your referrals and much more. You can also withdraw your earnings to your PayPal account. And participate in tournaments and events."
    >
      <div className="w-full mt-10">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-bold text-white text-opacity-75 uppercase">
              Search
            </span>
            <input
              type="text"
              className="w-full rounded-md p-2 bg-secondary outline-none text-white"
              placeholder="Search"
              value={search}
              onChange={handleSearch}
            />
          </div>

          <div className="flex">
            <Navegation usersCount={searchResults.length} />
          </div>

          <div className="w-full">
            <div className="mt-5">
              <TableUsers searchResults={searchResults} />
            </div>
            <UserPages
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
              page={page}
              searchResults={searchResults}
              totalPages={totalPages}
            />
          </div>
        </div>
      </div>
    </DashRoot>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  const user = await getUser(`${session?.user?.email}`);
  const users = await getUsers();

  return {
    props: {
      user,
      users,
    },
  };
};
