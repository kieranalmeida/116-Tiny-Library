import type { JSX } from "react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage(): JSX.Element {
  return (
    <main className="text-neutral-950 lg:flex lg:justify-center lg:items-center lg:gap-x-25">
      <div className="px-5 lg:max-w-150">
        <p className="hidden text-[1rem] font-medium tracking-[5%] uppercase lg:block">Browse books</p>
        <h1 className="text-[3.375rem] font-bold mb-5 lg:text-[3.5rem] lg:mt-5">Find your next favourite book</h1>
        <p className="text-[1.4375rem] lg:text-[1.75rem]">Tiny Library is a cosy corner of the web where readers discover hand‑picked titles across every genre, from timeless classics to hidden indie gems.</p>
        <Link 
          href="/books" 
          className="inline-block text-[1.25rem] font-semibold uppercase my-10 p-3 border-2 border-neutral-950 cursor-pointer hover:text-neutral-50 hover:bg-neutral-950 focus:outline-none focus:text-neutral-50 focus:bg-neutral-950" 
          aria-label="Browse the books in the Tiny Library collection."
        >
          Browse books
        </Link>
      </div>

      <Image
        className="hidden lg:block"
        width={650}
        height={650}
        src="/hero-image-desktop.svg"
        alt=""
      />
      <Image
        className="w-full lg:hidden mask-[linear-gradient(to_top,black_30%,transparent)]"
        width={465.83}
        height={465.83}
        src="/hero-image-mobile.svg"
        alt=""
      />
    </main>
  )
}