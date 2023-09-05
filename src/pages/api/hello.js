//Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }


// import { NextResponse } from "next/server";
import { NextApiResponse } from "next"

export function GET (request, {params}) {
  console.log(params)
  return NextApiResponse.json({
    message: "getting task"
  })
}