import { Link } from "react-router-dom";
import LogoMark from "./LogoMark";

// Header logo: symbol on top, tagline below.
export default function Logo({ onClick, small = false }) {
  return (
    <Link to="/" onClick={onClick} aria-label="Ylet home" className="group inline-flex min-h-[44px] flex-col items-center justify-center gap-1.5 text-espresso">
      <LogoMark className={`${small ? "w-12" : "w-12 md:w-[58px]"} transition duration-500 ease-brand group-hover:-rotate-3 group-hover:scale-105`} />
      <span className="hidden whitespace-nowrap pl-[.3em] text-[6.5px] font-semibold uppercase tracking-[.3em] text-gold min-[341px]:block md:text-[7.5px]">
        Create · Capture · Build
      </span>
    </Link>
  );
}
