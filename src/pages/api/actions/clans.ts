import { API_URI } from "@/Utils/variables";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);
  console.log(body.image);

  // const res_user = await fetch(
  //   `${API_URI}/api/collections/users/records/${body.owner}`,
  //   {
  //     method: "PATCH",
  //     body: JSON.stringify({
  //       coins: body.cost,
  //     }),
  //   }
  // );

  // if (body.action === "create") {
  //   const res_clan = await fetch(`${API_URI}/api/collections/clan/records`, {
  //     method: "POST",
  //     body: JSON.stringify({

  //     }),
  //   });
  // }
}
