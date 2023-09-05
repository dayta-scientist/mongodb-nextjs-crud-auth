import { NextResponse } from "next/server";

export function GET (request, {params}) {
  console.log(params)
  return NextResponse.json({
    message: `getting task ${params.id}`
  })
}

export function DELETE (request, {params}) {
  console.log(params)
  return NextResponse.json({
    message: `deletting task ${params.id}`
  })
}

export function PUT (request, {params}) {
  console.log(params)
  return NextResponse.json({
    message: `updating task ${params.id}`
  })
}