/*import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
        <span className="absolute inset-0 rounded-lg bg-primary/20 blur-md group-hover:bg-primary/40 transition" />
        <span className="relative text-primary font-bold text-sm">V</span>
      </span>
      <span className={`font-semibold tracking-tight text-lg ${light ? "text-surface-foreground" : "text-foreground"}`}>
        Vish<span className="text-primary">Merc</span>
      </span>
    </Link>
  );
} */

import { Link } from "@tanstack/react-router";
import logo from "../assets/logo.jpeg";

export function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img
        src={logo}
        alt="VishMerc Logo"
        className="h-16 w-auto"
      />
    </Link>
  );
}