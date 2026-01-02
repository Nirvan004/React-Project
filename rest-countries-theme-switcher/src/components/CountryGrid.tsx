import type { Country } from "../types/Country"
import CountryCard from "./CountryCard"

interface CountryGridProps {
  countries: Country[]
  onSelectCountry?: (code: string) => void
}

export default function CountryGrid({
  countries,
  onSelectCountry,
}: CountryGridProps) {
  if (countries.length === 0) {
    return <p>No countries found.</p>
  }

  return (
    <section className="country-grid">
      {countries.map((country) => (
        <CountryCard
          key={country.cca3}
          country={country}
          onClick={() => onSelectCountry?.(country.cca3)}
        />
      ))}
    </section>
  )
}