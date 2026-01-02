import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import type { Country } from "../types/Country"
import Header from "../components/Header"

export default function CountryDetailPage() {
  const { code } = useParams<{ code: string }>()
  const navigate = useNavigate()

  const [country, setCountry] = useState<Country | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchCountry = async () => {
      if (!code) return
      try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        if (!res.ok) throw new Error("Failed to fetch country data")
        const data: Country[] = await res.json()
        setCountry(data[0])
      } catch (err: any) {
        setError(err.message || "Something went wrong")
      } finally {
        setLoading(false)
      }
    }

    fetchCountry()
  }, [code])

  if (loading) return <p>Loading country...</p>
  if (error) return <p>Error: {error}</p>
  if (!country) return <p>Country not found</p>

  const renderLanguages = () =>
    country.languages
      ? Object.values(country.languages).join(", ")
      : "N/A"

  const renderCurrencies = () =>
    country.currencies
      ? Object.values(country.currencies)
          .map((c) => `${c.name} ${c.symbol || ""}`)
          .join(", ")
      : "N/A"

  return (
    <div className="country-detail-page">
      <Header />

      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>

      <div className="country-detail">
        <img
          src={country.flags.svg}
          alt={country.flags.alt || `Flag of ${country.name.common}`}
          className="country-detail__flag"
        />

        <div className="country-detail__info">
          <h2>{country.name.common}</h2>
          <p>
            <strong>Official Name:</strong> {country.name.official}
          </p>
          <p>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          {country.subregion && (
            <p>
              <strong>Subregion:</strong> {country.subregion}
            </p>
          )}
          {country.capital && (
            <p>
              <strong>Capital:</strong> {country.capital[0]}
            </p>
          )}
          <p>
            <strong>Languages:</strong> {renderLanguages()}
          </p>
          <p>
            <strong>Currencies:</strong> {renderCurrencies()}
          </p>

          {country.borders && country.borders.length > 0 && (
            <div className="borders">
              <strong>Border Countries:</strong>
              <div className="borders__list">
                {country.borders.map((border) => (
                  <button
                    key={border}
                    className="border-button"
                    onClick={() => navigate(`/country/${border}`)}
                  >
                    {border}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}