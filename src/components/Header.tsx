import SearchBox from "./SearchBox"
import SelectYear from "./SelectYear"

const Header = () => {
  return (
      <div className="d-flex flex-column align-items-start justify-content-start w-100 gap-3 py-4">
        <div className="text-light">
          <h1>Movies</h1>
        </div>
        <div className="d-flex gap-4 flex-nowrap w-100 ">
          <SearchBox />
          <SelectYear/>
        </div>
    </div>
  )
}

export default Header