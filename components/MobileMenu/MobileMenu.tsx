'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from '../MobileMenu/MobileMenu.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { usePathname } from 'next/navigation'

// Viser mobilmenyen og håndterer åpning og lukking.
export default function MobilMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const menuButtonRef = useRef<HTMLButtonElement>(null)
  // Bytter mellom åpen og lukket meny.
  function toggleMenu() {
    setIsOpen(!isOpen)
  }
  // Lukker menyen når brukeren velger en lenke eller trykker utenfor.
  function closeMenu() {
    setIsOpen(false)
  }
  // Lar brukeren lukke mobilmenyen med Escape-tasten.
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && isOpen) {
        menuButtonRef.current?.focus()
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <button
        ref={menuButtonRef}
        className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Lukk meny' : 'Åpne meny'}
        aria-expanded={isOpen}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <div
        className={`${styles['hamburger-backdrop']} ${isOpen ? styles.active : ''}`}
        onClick={closeMenu}
      ></div>
      {/* Hindrer tastaturnavigasjon i menyen når den er lukket. */}
      <nav
        className={`${styles['mobile-nav']} ${isOpen ? styles.active : ''}`}
        aria-label="Mobilmeny"
        inert={!isOpen}
      >
        <Link href="/" onClick={closeMenu} aria-current={pathname === '/' ? 'page' : undefined}>
          Hjem
        </Link>

        <Link
          href="/animals"
          onClick={closeMenu}
          aria-current={pathname.startsWith('/animals') ? 'page' : undefined}
        >
          Utforsk dyr
        </Link>

        <Link
          href="/about"
          onClick={closeMenu}
          aria-current={pathname === '/about' ? 'page' : undefined}
        >
          Om
        </Link>

        <SearchBar />
      </nav>
    </>
  )
}
