import SearchForm from "./SearchForm";

export default function Hero() {
    return (
        <section>
            < section className="max-w-7xl mx-auto p-6 " >
                <h2 className="font-bold text-5xl text-white">Find your Next Stay</h2>
                <h3 className="text-white py-5 text-xl">
                    Search low prices on hotels, homes and much more...
                </h3>
                <button type="button" className="btn btn-primary bg-blue-600 hover:bg-yellow-500">
                    <span className="text-white">Explore Now</span>
                </button>
            </ section >
            <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">
                <SearchForm />
            </section>
        </section>

    )
}
