import categories from "@/src/data/categories.json"

type Category = {
    displayName: string,
    slug: string
}

export function getAllCategories(): Category[] {
    return categories
}