"use client"
import type { JSX } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import NavLink from "@/src/components/NavLink"

export default function Header(): JSX.Element {
    const pathname: string = usePathname()

    return (
        <header className="mb-10 px-5 py-2.5 lg:px-10">
            <nav className="flex justify-between items-center">
                <Link href="/">
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
                </Link>

                <ul className="flex gap-x-10">
                    <li>
                        <NavLink href="/books" isActive={pathname.startsWith("/books") }>Books</NavLink>
                    </li>
                    <li>
                        <NavLink href="/about" isActive={pathname.startsWith("/about")}>{pathname === "/about/contact" ? "About: Contact" : "About"}</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}