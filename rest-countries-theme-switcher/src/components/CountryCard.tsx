import type { Country } from "../types/Country"

interface CountryCardProps {
  country: Country
  onClick?: () => void
}

export default function CountryCard({ country, onClick }: CountryCardProps) {
  return (
    <article
      className="country-card"
      onClick={onClick}
      tabIndex={0}
      role="button"
    >
      <img
        src={country.flags.svg}
        alt={country.flags.alt || `Flag of ${country.name.common}`}
        className="country-card__flag"
      />

      <div className="country-card__content">
        <h2>{country.name.common}</h2>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> {country.region}</p>
        {country.capital && (
          <p><strong>Capital:</strong> {country.capital[0]}</p>
        )}
      </div>
    </article>
  )
}