import { getAllBooks } from "@/src/lib/books"
import BookGrid from "@/src/components/BookGrid"

export default function BooksPage() {
    const books = getAllBooks()

    return (
        <BookGrid title={"Books"} books={books}/>
    )
}