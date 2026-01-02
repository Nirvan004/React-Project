interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="search">
      <span className="sr-only">Search for a country</span>
      <input
        type="search"
        placeholder="Search for a country..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search__input"
      />
    </label>
  )
}