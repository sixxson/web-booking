import SearchForm from "./SearchForm";


export default function Hero() {
    return (
        <main className=" bg-[#013B94]">
            < section className="max-w-7xl mx-auto p-6" >
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

            <section className="mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-lg">
                <div className="pt-5">
                    <h3 className="text-xl font-bold">Trending Destinations</h3>
                    <p className="font-light">
                        Most popular choices for travellers from around the world
                    </p>
                </div>
            </section>

            <section className="min-h-screen bg-white w-full mx-auto p-6">

            </section>
        </main >
    )
}
