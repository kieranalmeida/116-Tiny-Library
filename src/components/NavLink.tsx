import { JSX } from "react"
import Link from "next/link"

type NavLinkProps = {
    href: string
    isActive: boolean
    children: React.ReactNode
}


export default function NavLink( {href, isActive, children}: NavLinkProps ): JSX.Element {
    return (
        <Link 
            href={href} 
            className={`${isActive ? "text-orange" : "text-gray"} text-[0.875rem] font-semibold tracking-[5%] uppercase hover:text-neutral-950`}
        >
            {children}
        </Link>
    )
}