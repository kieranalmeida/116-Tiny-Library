"use client"
import type { JSX } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export default function Header(): JSX.Element {
    const pathname: string = usePathname()

    return (
        <header className="mb-10 px-5 py-2.5 lg:px-10">
            <nav className="flex justify-between items-center">
                <Image 
                    className="hidden lg:block" 
                    width={178} 
                    height={117} 
                    src="/tinylibrary-logo-desktop.svg" 
                    alt="Tiny Library logo"
                />
                <Image
                    className="lg:hidden" 
                    width={80} 
                    height={53} 
                    src="/tinylibrary-logo-mobile.svg" 
                    alt="Tiny Library logo" 
                />

                <ul className="flex gap-x-10 text-gray text-[0.875rem] font-semibold tracking-[5%] uppercase hover:text-neutral-950">
                    <li>
                        <Link href="/books" className={pathname === "/books" ? "text-orange" : ""}>Books</Link>
                    </li>
                    <li>
                        <Link href="/about" className={pathname === "/about" ? "text-orange" : ""}>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

// NavLink (?)