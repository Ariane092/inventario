import { BsSearch } from "react-icons/bs";

function Filters({ columnFilters, setColumnFilters }) {
  const id = columnFilters.find(f => f.id === 'id')?.value || '';

  return (
    <div>
      <div className="input-group">
        <inputLefElement>
          <BsSearch className="search-icon" />
        </inputLefElement>
        <input tpe="text" variant="filled" placeholder="Pesquisar" value={id}/>
      </div>
    </div>
  );
}

export default Filters;