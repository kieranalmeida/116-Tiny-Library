import type { JSX } from "react"
import BookCard from "@/src/components/BookCard"

type Book = {
    id: number
    name: string
    author: string
    likes: number
    image: string
    category: string
    dateAdded: string
}

type BookGridProps = {
    books: Book[]
}

export default function BookGrid( {books}: BookGridProps ): JSX.Element {
    return (
        <main className="p-5 lg:p-0">
            <h1 className="hidden text-[2rem] font-bold mb-10 lg:block">Books</h1>

            <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-5 md:grid-cols-4">
                {books.map( (book) =>
                    <BookCard key={book.id} book={book}/>
                )}
            </div>
        </main>
    )
}

// Styling
// Type imports
// Fix overflow