/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

interface TableUsersProps {
  searchResults: any;
}

export default function TableUsers({ searchResults }: TableUsersProps) {
  return (
    <table className="w-full">
      <thead>
        <tr className="text-white text-opacity-50 text-left uppercase text-sm">
          <th className="p-2">Username</th>
          <th className="p-2">Country</th>
        </tr>
      </thead>
      <tbody>
        {searchResults.length > 0 ? (
          searchResults.map((user: any) => (
            <tr
              key={user.id}
              className="text-white bg-secondary w-full h-16 rounded-md select-none"
            >
              <td className="p-2">
                <Link
                  href={{
                    pathname: `/app/player/${user.id}`,
                  }}
                  className="flex items-center gap-2"
                >
                  {user.avatar ? (
                    <img
                      src={`https://api.arconixstudio.com/api/files/users/${user.id}/${user.avatar}`}
                      alt={`${user.display} avatar`}
                      className="w-8 h-8 rounded-full bg-tertiary"
                    />
                  ) : (
                    <FaUserCircle className="w-8 h-8 text-white text-opacity-50" />
                  )}
                  {user.display}
                </Link>
              </td>
              <td className="p-2 text-white text-opacity-50">
                {user.country || "No set"}
              </td>
            </tr>
          ))
        ) : (
          <tr className="text-white bg-secondary w-full h-16 rounded-md select-none">
            <td className="p-2">No results</td>
            <td className="p-2"></td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
