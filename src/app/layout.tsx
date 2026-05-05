import "./globals.css";
import { nunitoSans, lato } from "@/src/styles/fonts"
import Header from "@/src/components/Header"

type RootLayoutProps = Readonly<{children: React.ReactNode;}>

export default function RootLayout( {children}: RootLayoutProps ) {
  return (
    <html lang="en">
      <body className={`box-border ${nunitoSans.className} ${lato.variable}`}>
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