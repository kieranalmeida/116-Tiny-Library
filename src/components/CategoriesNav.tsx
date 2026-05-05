"use client"
import type { JSX } from "react"
import { usePathname } from "next/navigation"
import { getAllCategories } from "@/src/lib/categories"
import NavLink from "@/src/components/NavLink"

export default function CategoriesNav(): JSX.Element {
    const pathname = usePathname()
    const categories = getAllCategories()

    return (
        <nav className="p-5">
            <ul className="flex flex-row gap-x-5 overflow-x-scroll lg:flex-col lg:gap-y-5 lg:overflow-hidden">
                <NavLink href="/books" isActive={pathname === "/books"}>All</NavLink>

                {categories.map( (category) => 
                    <NavLink key={category.slug} href={`/books/categories/${category.slug}`} isActive={pathname === `/books/categories/${category.slug}`}>{category.displayName}</NavLink>
                )}
            </ul>
        </nav>
    )
}