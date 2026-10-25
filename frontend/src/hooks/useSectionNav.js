import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "../utils/scroll";

// Go to a home-page section from anywhere in the app.
export default function useSectionNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return useCallback(
    (id) => (e) => {
      e?.preventDefault();
      if (pathname === "/") {
        scrollToSection(id);
        window.history.replaceState(null, "", id === "home" ? "/" : `/#${id}`);
      } else {
        navigate(id === "home" ? "/" : `/#${id}`);
      }
    },
    [navigate, pathname]
  );
}
