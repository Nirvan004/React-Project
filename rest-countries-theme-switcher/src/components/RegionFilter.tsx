interface RegionFilterProps {
  value: string
  onChange: (region: string) => void
}

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

export default function RegionFilter({ value, onChange }: RegionFilterProps) {
  return (
    <label className="filter">
      <span className="sr-only">Filter by region</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="filter__select"
      >
        <option value="">Filter by Region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </label>
  )
}