import type { Book } from "@/src/types/types"
import books from "@/src/data/books.json"

// Would be an async function if fetching from an actual database
export function getAllBooks(): Book[] {
    return books
}

export function getBookById(id: string) {
    console.log(id)
    const targetBook = books.filter( (book) => book.id.toString() === id)[0]
    console.log("Target book:", targetBook)
    return targetBook
}