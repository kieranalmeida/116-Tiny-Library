import type { JSX } from "react"
import Link from "next/link"
import { CiHeart } from "react-icons/ci"
import { albertSans } from "@/src/styles/fonts"

type Book = {
    id: number
    name: string
    author: string
    likes: number
    image: string
    category: string
    dateAdded: string
}

type BookCardProps = {
    book: Book
}

export default function BookCard( {book}: BookCardProps ): JSX.Element {
    return (
        <Link href={`/books/${book.id}`}>
            <div className="text-neutral-950">
                <img
                    className="w-full"
                    src={book.image}
                    alt={book.name}
                />

                <div className="flex flex-col items-start gap-y-4.5 p-4 border border-t-0 border-[#A1A1A1] rounded-bl-lg rounded-br-lg">
                    <h2 className="text-[1.5rem] font-bold">{book.name}</h2>
                    <p className="text-[1.25rem]">{book.author}</p>
                    <p className=" border rounded-full px-2 py-1">{book.category}</p>

                    <div className="flex items-center">
                        <CiHeart className="fill-gray w-7 h-7 cursor-pointer"/>
                        <p className={`text-gray ${albertSans.className}`}>{book.likes}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}