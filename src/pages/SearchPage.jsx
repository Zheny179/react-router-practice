import { useSearchParams } from 'react-router-dom'

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const searchQuery = searchParams.get('q') || ''

  function updateSearch(newSearchQuery) {
    setSearchParams(newSearchQuery ? { q: newSearchQuery } : {})
  }

  return (
    <div className="search">
      <h1>Search Results</h1>
      <p>Search term: { searchQuery }</p>

      <input
        className="search__input"
        type="text"
        value={ searchQuery }
        onChange={ (e) => updateSearch(e.target.value) }
      />
    </div>
  )
}

export default SearchPage
