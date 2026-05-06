import { getBookById } from "@/src/lib/books"
import Link from "next/link"
import { albertSans } from "@/src/styles/fonts"
import { CiHeart } from "react-icons/ci"

type BookDetailPageProps = {
    params: {
        id: string
    }
}

export default async function BookDetailPage( {params}: BookDetailPageProps ) {
    const value = await params
    const targetBook = getBookById(value.id)

    return (
        <div className="flex flex-col items-center p-5 md:flex-row md:gap-x-10 md:ml-5 md:w-9/12">
            <Link href="/books" className={`text-[0.875rem] text-gray ${albertSans.className} font-semibold tracking-[5%] uppercase mb-5 md:hidden`}>Back to overview</Link>

            <img
                className="w-full" 
                src={targetBook.image}
                alt={targetBook.name}
            />

            <div className="flex flex-col items-start md:w-full">
                <div className="flex items-center gap-x-1 mt-5 mb-1.5">
                    <CiHeart className="fill-gray w-8.5 h-8.5 cursor-pointer transition hover:fill-neutral-950 hover:scale-115"/>
                    <p className={`text-[1.25rem] text-gray md:text-[1.5rem]`}>{targetBook.likes}</p>
                </div>

                <h2 className="text-[2rem] font-bold">{targetBook.name}</h2>
                <p className="border border-light-gray rounded-full my-4.5 px-2 py-1 hover:border-neutral-950 hover:bg-[#F2F2F2]">{targetBook.category}</p>
                <p className="text-[1.5rem]">{targetBook.author}</p>
                <p className="mt-35">Added on {targetBook.dateAdded}</p>

            </div>

        </div>
    )
}