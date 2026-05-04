import "./globals.css";
import Header from "@/src/components/Header"
import { Nunito_Sans, Lato } from "next/font/google"

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap"
})

// Lato is only used for headings, so by defining a variable name in its configuration, it can be used to set the value of all headers (h1-h6) to the Lato font in globals.css
const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato"
})

type RootLayoutProps = Readonly<{children: React.ReactNode;}>

// Nunito Sans is applied to the body and thus inherited by every element
export default function RootLayout( {children}: RootLayoutProps ) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className} ${lato.variable}`}>
        <Header /> 
        {children}
      </body>
    </html>
  )
}

// Routes
// /
// /books
// /books/[id]
// /books/categories/[categoryName]
// /about
// /about/contact