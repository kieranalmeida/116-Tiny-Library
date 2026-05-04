"use client"
import type { JSX } from "react"
import { usePathname } from "next/navigation"
import { getAllCategories } from "../lib/categories"
import NavLink from "@/src/components/NavLink"

export default function CategoriesNav(): JSX.Element {
    const pathname = usePathname()
    const categories = getAllCategories()

    return (
        <nav>
            <ul className="flex flex-col gap-y-5">
                <NavLink href="/books" isActive={pathname === "/books"}>All</NavLink>
                
                {categories.map( (category) => 
                    <NavLink key={category.slug} href={`/books/categories/${category.slug}`} isActive={pathname === `/books/categories/${category.slug}`}>{category.displayName}</NavLink>
                )}
            </ul>
        </nav>
    )
}