export default function ContactPage() {
    return (
        <main className="flex flex-col gap-y-5 p-5 text-neutral-950 md:max-w-150 md:mx-auto">
            <p className="text-[0.875rem] font-medium uppercase">Ways to reach us</p>
            <h1 className="text-[2.5rem] font-bold">Contact</h1>
            <ul className="text-[1.5rem] list-disc px-5">
                <li>Book suggestions: Tell us what we should add to the shelf.</li>
                <li>Corrections: Spotted an error? Let us know so we can fix it.</li>
                <li>Careers: Interested in joining Tiny Library? Send a short note and we'll get back to you.</li>
            </ul>
            <p className="text-[1.5rem]">Email: hello@tinylibrary.example <br/><br/> We're a small team, so we don't list a phone number—email is best.</p>
        </main>
    )
}