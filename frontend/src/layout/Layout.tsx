import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import SearchForm from '../components/SearchForm';

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <body className='flex flex-col min-h-screen'>
            <Header />

            <main className=' bg-[#013B94]'>
                <Hero />
                <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">
                    <SearchForm />
                </section>
                <section className="min-h-screen bg-white w-full mx-auto p-6 mt-9">
                    {children}
                </section>
            </main>
            <Footer />
        </body>
    )
}
