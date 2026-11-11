const appOrigin = (
  process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:1818"
).replace(/\/$/, "");

export function appHref(path: string) {
  return `${appOrigin}${path.startsWith("/") ? path : `/${path}`}`;
}
