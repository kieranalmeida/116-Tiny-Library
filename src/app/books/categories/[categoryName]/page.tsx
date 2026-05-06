import { getAllBooks } from "@/src/lib/books"
import { getDisplayNameBySlug } from "@/src/lib/categories"
import BookGrid from "@/src/components/BookGrid"

type CategoryPageProps = {
    params: {
        categoryName: string
    }
}

export default async function CategoryPage( {params}: CategoryPageProps ) {
    const books = getAllBooks()
    const value = await params

    // Get category title
    const displayName = getDisplayNameBySlug(value.categoryName)

    // Filter books by category
    const filteredBooks = value?.categoryName? 
    books.filter( (book) => book.category === value.categoryName)
    : books

    return (
        <BookGrid title={displayName} books={filteredBooks}/>
    )
}