import { getAllBooks } from "@/src/lib/books"
import BookGrid from "@/src/components/BookGrid"

export default async function CategoryPage( {params}: {params: any} ) {
    const books = getAllBooks()
    const value = await params

    const filteredBooks = value?.categoryName? 
    books.filter( (book) => book.category === value.categoryName)
    : books

    return (
        <BookGrid books={filteredBooks}/>
    )
}