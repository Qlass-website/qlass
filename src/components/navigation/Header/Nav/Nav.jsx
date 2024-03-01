import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "Home" },
  { path: "/ai-homework", name: "AI Homework" },
  { path: "/our-work", name: "Our Work" },
  { path: "/contact", name: "Contact" },
];

export default function Nav({ containerStyles, linkStyles, underlineStyles }) {
  const location = useLocation();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link to={link.path} key={index} className={`capitalize ${linkStyles}`}>
          {link.path === location.pathname && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlineStyles}`}
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
