import CategoriesNav from "@/src/components/CategoriesNav"

type RootLayoutProps = Readonly<{children: React.ReactNode;}>

export default function BooksLayout( {children}: RootLayoutProps ) {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-x-20 lg:m-10">
        <CategoriesNav />
        {children}
    </div>
  ) 
}