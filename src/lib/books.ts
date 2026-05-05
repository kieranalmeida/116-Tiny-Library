import books from "@/src/data/books.json"

type Book = {
    id: number
    name: string
    author: string
    likes: number
    image: string
    category: string
    dateAdded: string
}

export function getAllBooks(): Book[] {
    return books
}