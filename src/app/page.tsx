import Hero from "./components/Hero"
import Search from "./components/Search"
import TourPackages from "./components/TourPackages"
import Gallery from "./components/Gallery"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Search />
      <TourPackages />
      <Gallery />
    </main>
  )
}

