import { Nunito_Sans, Lato, Albert_Sans } from "next/font/google"

export const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap"
})

// Lato is only used for headings, so by defining a variable name in its configuration, it can be used to set the value of all headers (h1-h6) to the Lato font in globals.css
export const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato"
})

export const albertSans = Albert_Sans({
  subsets: ['latin'],
  weight: ['400']
});