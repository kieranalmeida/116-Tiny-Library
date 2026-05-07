import type { JSX } from "react"
import Link from "next/link"
import { RiStackLine } from "react-icons/ri"
import { CiGlobe } from "react-icons/ci"
import { GrFlag } from "react-icons/gr"
import Image from "next/image"

export default function AboutPage(): JSX.Element {
    return (
        <main className="flex flex-col items-center text-neutral-950 -mt-10 mb-10 lg:mt-0">
            
            {/* Section 1 */}
            <section className="flex flex-col p-5 lg:flex-row lg:items-center lg:gap-x-25" aria-label="How Tiny Library started">
                <Image 
                    className=""
                    src="/hero-image-mobile.svg"
                    alt=""
                    width={650}
                    height={650}
                />

                <div className="flex flex-col items-start mt-5 lg:w-200">
                    <p className="text-[0.875rem] font-medium tracking-[5%] uppercase">About Tiny Library</p>
                    <h1 className="text-[2.5rem] font-bold my-5">Small shelf, big impact</h1>
                    <p className="text-[1.5rem]">Tiny Library started as a simple idea: make it easier for curious readers to actually find books they'll love, not just scroll endless lists. Every title here is chosen with care, not algorithms.</p>
                    <Link 
                        href="/about/contact"
                        className="inline-block text-[1.25rem] font-semibold uppercase mt-18.25 px-7.5 py-2 border-2 border-neutral-950 cursor-pointer hover:text-neutral-50 hover:bg-neutral-950 focus:text-neutral-950 focus:bg-neutral-950" 
                    >
                        Contact Us
                    </Link>
                </div>
            </section>

            {/* Section 2 */}
            <section className="flex flex-col gap-y-12 my-7 py-7 px-5 border-t border-b border-[#DDDDDD] lg:flex-row lg:justify-center lg:gap-x-12 lg:w-full" aria-label="How Tiny Library works">

                <div className="flex flex-col gap-y-4.5 lg:w-87.5 lg:my-11.25">
                    <div className="flex items-center gap-x-1">
                        <RiStackLine size={32} aria-hidden="true"/>
                        <h2 className="text-[1.75rem] font-bold">Curated, not crowded</h2>
                    </div>

                    <p className="text-[1.25rem]">Tiny Library keeps the catalogue intentionally small so every book feels like a recommendation.</p>
                </div>

                <div className="flex flex-col gap-y-4.5 lg:border-l lg:border-r lg:border-[#DDDDDD] lg:px-12 lg:w-111.5 lg:my-11.25">
                    <div className="flex items-center gap-x-1">
                        <CiGlobe size={32} aria-hidden="true"/>
                        <h2 className="text-[1.75rem] font-bold">Easy to browse</h2>
                    </div>

                    <p className="text-[1.25rem]">Clear categories and simple descriptions make it quick to choose what you actually want to read next.</p>
                </div>

                <div className="flex flex-col gap-y-4.5 lg:w-87.5 lg:my-11.25">
                    <div className="flex items-center gap-x-1">
                        <GrFlag size={32} aria-hidden="true"/>
                        <h2 className="text-[1.75rem] font-bold">Readers first</h2>
                    </div>

                    <p className="text-[1.25rem]">Every part of Tiny Library is designed to help you spend less time searching and more time reading.</p>
                </div>

            </section>

            {/* Section 3 */}
            <section className="p-5 lg:w-200" aria-label="Our ethos">
                <div>
                    <h2 className="text-[1.5rem] font-bold mb-5">Our ethos</h2>
                    <p className="text-[1.25rem]">At Tiny Library, we believe a good book shouldn't be hard to find. Our ethos is to create a small, carefully curated space where every title earns its place on the shelf and readers can trust that anything they pick up is worth their time.</p>

                    <hr className="w-61.25 mx-auto my-10" aria-hidden="true"/>

                    <p className="text-[1.25rem]">Instead of overwhelming you with thousands of options, Tiny Library focuses on a modest collection that feels personal and approachable. We want readers to feel like they've stepped into a cosy, well-loved library where someone has already done the hard work of sorting through the noise.</p>
                </div>
            </section>

            {/* Logo */}
            <Image
                className="hidden lg:block lg:mt-15.5" 
                width={178} 
                height={117} 
                src="/tinylibrary-logo-desktop.svg" 
                alt=""
            />

        </main>
    )
}