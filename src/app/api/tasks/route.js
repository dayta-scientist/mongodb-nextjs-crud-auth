import { NextResponse } from "next/server"

export function GET () {
  return NextResponse.json({
    message: "getting tasks"
  })
}

export function POST () {
  return NextResponse.json({
    message: "creating tasks"
  })
}