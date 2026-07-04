import { useEffect, useState } from "react";

export type Route =
  | "home"
  | "deals"
  | "deal"
  | "tools"
  | "tool"
  | "affiliate"
  | "category"
  | "compare"
  | "reviews"
  | "review"
  | "blog"
  | "news"
  | "search"
  | "dashboard"
  | "profile"
  | "product";

const VALID: Route[] = [
  "home",
  "deals",
  "deal",
  "tools",
  "tool",
  "affiliate",
  "category",
  "compare",
  "reviews",
  "review",
  "blog",
  "news",
  "search",
  "dashboard",
  "profile",
  "product",
];

export type RouteState = {
  route: Route;
  id?: string;
};

function getRoute(): RouteState {
  const h = window.location.hash.replace(/^#\/?/, "");
  const parts = h.split("/");
  const route = parts[0] as Route;
  if (VALID.includes(route)) {
    return { route, id: parts[1] || undefined };
  }
  return { route: "home" };
}

export function navigate(r: Route, id?: string) {
  window.location.hash = id ? `/${r}/${id}` : `/${r}`;
}

export function useRoute(): RouteState {
  const [state, setState] = useState<RouteState>(getRoute);
  useEffect(() => {
    const onHash = () => {
      setState(getRoute());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return state;
}
