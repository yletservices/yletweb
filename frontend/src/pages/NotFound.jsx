import { Link } from "react-router-dom";
import LogoMark from "../components/ui/LogoMark";

export default function NotFound() {
  return (
    <section className="wrap grid min-h-[60vh] place-items-center py-16 text-center">
      <div>
        <LogoMark className="mx-auto w-20 text-violet" />
        <h1 className="mt-6 text-3xl md:text-5xl">This page doesn’t exist</h1>
        <p className="mx-auto mt-3 max-w-[44ch] text-muted">The link may be broken or the page may have moved.</p>
        <Link to="/" className="btn btn-violet mt-7">Back to Home</Link>
      </div>
    </section>
  );
}
