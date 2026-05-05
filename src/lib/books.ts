import type { Book } from "@/src/types/types"
import books from "@/src/data/books.json"

export function getAllBooks(): Book[] {
    return books
}