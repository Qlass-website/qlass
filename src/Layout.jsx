import React from "react";
import Header from "./components/navigation/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/navigation/Footer/Footer";
import { motion } from "framer-motion";
import useScroll from "./hooks/useScroll";
import Footer2 from "./components/navigation/Footer/Footer2";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

export default function Layout() {
  const completion = useScroll();
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        <Header />
        <Outlet />
        {/* <Footer /> */}
        <Footer2 />
      </motion.main>
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed bottom-0 right-0 top-0 z-50 w-1 bg-[#2E23B8] transition-all duration-700"
      ></span>
      <div className="h-auto"></div>
    </>
  );
}
