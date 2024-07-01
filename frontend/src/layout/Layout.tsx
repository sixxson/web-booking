import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Layout() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <Hero />
            <Footer />
        </div>
    )
}
