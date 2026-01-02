import { useEffect, useState } from "react"
import type { Country } from "../types/Country"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import RegionFilter from "../components/RegionFilter"
import CountryGrid from "../components/CountryGrid"

export default function HomePage() {
  const [countries, setCountries] = useState<Country[]>([])
  const [search, setSearch] = useState("")
  const [region, setRegion] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all")
        if (!res.ok) throw new Error("Failed to fetch countries")
        const data: Country[] = await res.json()
        setCountries(data)
      } catch (err: any) {
        setError(err.message || "Something went wrong")
      } finally {
        setLoading(false)
      }
    }

    fetchCountries()
  }, [])

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(search.toLowerCase())
    const matchesRegion = region ? country.region === region : true
    return matchesSearch && matchesRegion
  })

  if (loading) return <p>Loading countries...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="home-page">
      <Header />
      <div className="controls">
        <SearchBar value={search} onChange={setSearch} />
        <RegionFilter value={region} onChange={setRegion} />
      </div>

      <CountryGrid countries={filteredCountries} />
    </div>
  )
}