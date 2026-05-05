import type { Book } from "@/src/types/types"
import type { JSX } from "react"
import Link from "next/link"
import { CiHeart } from "react-icons/ci"
import { albertSans } from "@/src/styles/fonts"

type BookCardProps = {
    book: Book
}

export default function BookCard( {book}: BookCardProps ): JSX.Element {
    return (
        <Link href={`/books/${book.id}`}>
            <div className="text-neutral-950 transition hover:scale-101 hover:shadow-lg">
                <img
                    className="w-full rounded-tl-lg rounded-tr-lg"
                    src={book.image}
                    alt={book.name}
                />

                <div className="flex flex-col items-start gap-y-4.5 p-4 border border-t-0 border-light-gray rounded-bl-lg rounded-br-lg">
                    <h2 className="text-[1.5rem] font-bold">{book.name}</h2>
                    <p className="text-[1.25rem]">{book.author}</p>

                    <p className="border border-light-gray rounded-full px-2 py-1 hover:border-neutral-950 hover:bg-[#F2F2F2]">{book.category}</p>

                    <div className="flex items-center gap-x-1">
                        <CiHeart className="fill-gray w-7 h-7 cursor-pointer transition hover:fill-neutral-950 hover:scale-115"/>
                        <p className={`text-gray ${albertSans.className}`}>{book.likes}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}