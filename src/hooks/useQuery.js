import { useLocation } from "@reach/router";

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}