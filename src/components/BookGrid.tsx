import type { Book } from "@/src/types/types"
import type { JSX } from "react"
import BookCard from "@/src/components/BookCard"

type BookGridProps = {
    title: string
    books: Book[]
}

export default function BookGrid( {title, books}: BookGridProps ): JSX.Element {
    return (
        <main className="p-5 lg:p-0" aria-live="polite">
            <h1 className="hidden text-[2rem] font-bold mb-10 lg:block">{title}</h1>

            <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-10 md:grid-cols-4">
                {books.map( (book) =>
                    <BookCard key={book.id} book={book}/>
                )}
            </div>
        </main>
    )
}