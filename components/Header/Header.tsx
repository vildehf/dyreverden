'use client'

import Link from 'next/link'
import SearchBar from '../SearchBar/SearchBar'
import MobileMenu from '../MobileMenu/MobileMenu'
import styles from '../Header/Header.module.css'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Dyreverden
      </Link>

      <nav className={styles.nav} aria-label="Hovedmeny">
        <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>
          Hjem
        </Link>

        <Link href="/animals" aria-current={pathname.startsWith('/animals') ? 'page' : undefined}>
          Utforsk dyr
        </Link>

        <Link href="/about" aria-current={pathname === '/about' ? 'page' : undefined}>
          Om
        </Link>
      </nav>

      <div className={styles.search}>
        <SearchBar />
      </div>

      <MobileMenu />
    </header>
  )
}
