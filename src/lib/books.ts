import type { Book } from "@/src/types/types"
import books from "@/src/data/books.json"

// Would be an async function if fetching from an actual database
export function getAllBooks(): Book[] {
    return books
}