import { getUsers } from "@/Utils/user";
import { User } from "@/common.types";
import pb from "@/lib/database";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

interface GeolocationResponse {
  status: string;
  country: string;
  countryCode: string;
}

// ---------------------------------------------------------------

type ResponseData = {
  status?: number;
  message?: string;
  data?: any;
  error?: Object | string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.json({ message: "Method not allowed" });
  }

  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  const response = await axios.get<GeolocationResponse>(
    `http://ip-api.com/json/${ip === "::1" ? "89.141.89.17" : ip}`
  );
  const country = response.data.country;
  const countryCode = response.data.countryCode;

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.json({
      status: 400,
      message: "Please fill all the fields",
    });
  }

  if (username.length < 3) {
    return res.json({
      status: 400,
      message: "Username must be at least 3 characters long",
    });
  }

  const data = {
    display: `${username}`,
    username: `${username.toLowerCase()}`,
    email: `${email}`,
    emailVisibility: true,
    password: `${password}`,
    passwordConfirm: `${password}`,
    role: "user",
    private: false,
    banned: false,
    bio: "New on Arconix Studio!",
    socials: {
      twitter: "null",
      instagram: "null",
      youtube: "null",
      twitch: "null",
    },
    badges: {},
    stats: { wins: 0, defeats: 0, tournaments: 0, events: 0 },
    coins: 0,
    tokens: 0,
    country: `${country}, ${countryCode}`,
  };

  const users = await getUsers();
  const isUsernameTaken = users.some(
    (user: User) => user.username === data.username.toLowerCase()
  );

  if (isUsernameTaken) {
    return res.json({
      status: 400,
      message: "This username needs to be unique",
    });
  }

  const isEmailTaken = users.some((user: User) => user.email === data.email);

  if (isEmailTaken) {
    return res.json({
      status: 400,
      message: "This email is already in use",
    });
  }

  try {
    const record = await pb.collection("users").create(data);
    console.log(data);
    return res.json({
      status: 200,
      message: "User created",
      data: record,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      status: 400,
      message: "This user already exists",
      error: error!,
    });
  }
}
