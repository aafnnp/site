import { NextResponse } from 'next/server';

export default function _middleware(req, ev) {
  const { ua, nextUrl: url } = req;

  // url.searchParams.set('country', country)
  // url.searchParams.set('city', city)
  // url.searchParams.set('region', region)
  // url.searchParams.set('currencyCode', currencyCode)
  // url.searchParams.set('currencySymbol', currency.symbol)
  // url.searchParams.set('name', currency.name)
  // url.searchParams.set('languages', languages)
  url.searchParams.set('os', ua.os.name);
  console.log(url, 'url');
  return NextResponse.rewrite(url);
}
