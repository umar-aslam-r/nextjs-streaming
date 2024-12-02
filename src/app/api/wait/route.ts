import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const wait = Number(searchParams.get('wait'))

  let res = `waited ${wait}ms`;
  if (wait === 10000) {
    res = await (
      await fetch('https://int-www.seekyoursound.com/wp-json/ang/v1/radio_stations', {
        cache: 'no-store',
      })
    ).json()
  }

  await new Promise((resolve) => setTimeout(resolve, wait))

  return NextResponse.json(res);
}