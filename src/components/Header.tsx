import SearchBox from "./SearchBox"
import SelectType from "./SelectType"
import SelectYear from "./SelectYear"

const Header = ({type}:any) => {
  return (
      <div className="d-flex flex-column align-items-start justify-content-start w-100 gap-3 py-4">
        <div className="text-light">
          <h1>Movies</h1>
        </div>
        {type && (
          <>
            <div className="d-flex gap-4 flex-md-nowrap w-100 row">
              <div className="col-xl-9 col-md-8 col-xs-12">
                <SearchBox />
              </div>
              <div className="col-xl-3 col-md-4 col-xs-12">
                <SelectYear/>
              </div>
            </div>
            <div>
              <SelectType />
            </div>
          </>
        )}
    </div>
  )
}

export default Header