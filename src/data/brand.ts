import { BRANDS, type Brand } from "../components/ui";
import { EXTRA_BRANDS } from "../components/shared";

export function getBrand(key: string): Brand {
  return (BRANDS as Record<string, Brand>)[key] || (EXTRA_BRANDS as Record<string, Brand>)[key] || { bg: "#64748b", label: "?" };
}
