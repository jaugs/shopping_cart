function Sidebar (props) {

    function handleFilter(e) {
        let newFilter = e.target.innerText
        if (newFilter === 'Reset Filters') {
          props.setFilteredProducts(props.products)
          return
        }
        let newProducts = props.products.filter(item => item.category === newFilter)
        props.setFilteredProducts(newProducts)
      }
      function handleChange(e) {
        props.setSearch(e.target.value)
      }
      
      function handleSearch(e) {
        e.preventDefault()
        let searchUpperCase = props.search.toUpperCase()
        let searchProducts = props.products.filter(item => item.name.toUpperCase().includes(searchUpperCase) ||
         item.description.toUpperCase().includes(searchUpperCase) ||
         item.category.toUpperCase().includes(searchUpperCase))
        props.setFilteredProducts(searchProducts)
      }
      

    return (

        <div id="sidebar">
        <h1>Search and Filter</h1>
        <div>
          <form id="search-form" onSubmit={handleSearch}>
            <input
              id="form_input"
              placeholder="Search Products"
              type="search"
              name="lookup"
              onChange={handleChange}
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
             <button className="linkButton" type="submit">Submit</button>
          </form>
           
        </div>
        <nav>
          <ul>
            <li><h1>Categories</h1></li>
            <li>
              <button className="linkButton" onClick={handleFilter}>Clubs</button>
            </li>
            <li>
              <button className="linkButton" onClick={handleFilter}>Bags</button>
            </li>
            <li>
              <button className="linkButton" onClick={handleFilter}>Balls</button>
            </li>
            <li>
              <button className="linkButton" onClick={handleFilter}>Accessories</button>
            </li>
            <li>
              <button className="linkButton" onClick={handleFilter}>Reset Filters</button>
            </li>
          </ul>
        </nav>
      </div>
    )
}
export default Sidebar