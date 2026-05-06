import categories from "@/src/data/categories.json"

type Category = {
    displayName: string,
    slug: string
}

export function getAllCategories(): Category[] {
    return categories
}

export function getDisplayNameBySlug(slug: string): string {
    const targetCategory = categories.filter( (category) => category.slug === slug)
    return targetCategory[0].displayName
}