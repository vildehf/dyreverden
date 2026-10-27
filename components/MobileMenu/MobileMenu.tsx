"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../MobileMenu/MobileMenu.module.css";
import SearchBar from "../SearchBar/SearchBar";

// Viser mobilmenyen og håndterer åpning og lukking.
export default function MobilMenu() {
  const [isOpen, setIsOpen] = useState(false);
  // Bytter mellom åpen og lukket meny.
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  // Lukker menyen når brukeren velger en lenke eller trykker utenfor.
  function closeMenu() {
    setIsOpen(false);
  }
  // Lar brukeren lukke mobilmenyen med Escape-tasten.
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <button
        className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
        onClick={toggleMenu}
        aria-label={isOpen ? "Lukk meny" : "Åpne meny"}
        aria-expanded={isOpen}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <div
        className={`${styles["hamburger-backdrop"]} ${
          isOpen ? styles.active : ""
        }`}
        onClick={closeMenu}
      ></div>
      {/* Hindrer tastaturnavigasjon i menyen når den er lukket. */}
      <nav
        className={`${styles["mobile-nav"]} ${isOpen ? styles.active : ""}`}
        aria-label="Mobilmeny"
        inert={!isOpen}
      >
        <Link href="/" onClick={closeMenu}>
          Hjem
        </Link>

        <Link href="/animals" onClick={closeMenu}>
          Utforsk dyr
        </Link>

        <Link href="/about" onClick={closeMenu}>
          Om
        </Link>

        <SearchBar />
      </nav>
    </>
  );
}
