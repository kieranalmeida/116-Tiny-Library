import CategoriesNav from "@/src/components/CategoriesNav"

type RootLayoutProps = Readonly<{children: React.ReactNode;}>

export default function BooksLayout( {children}: RootLayoutProps ) {
  return (
    <>
        <CategoriesNav />
        {children}
    </>
  ) 
}