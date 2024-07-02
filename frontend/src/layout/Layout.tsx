import Header from '../components/Header'
import Footer from '../components/Footer'
interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <body className='flex flex-col min-h-screen'>
            <Header />
            <main className=' bg-[#013B94]'>
                <section className="min-h-screen bg-white w-full mx-auto p-6 mt-9">
                    {children}
                </section>
            </main>
            <Footer />
        </body>
    )
}
