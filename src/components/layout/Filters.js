import { BsSearch } from "react-icons/bs";

function Filters() {
  return (
    <div>
      <div className="input-group">
        <inputLefElement>
          <BsSearch className="search-icon" />
        </inputLefElement>
        <input tpe="text" variant="filled" placeholder="Pesquisar"/>
      </div>
    </div>
  );
}

export default Filters;