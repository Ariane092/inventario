function ColumnFilter({ column}){
    const { filterValue, setFilter} = column
    return(
        <input 
        value={filterValue || ''} 
        onChange={(e) => setFilter(e.target.value)}/>
    );
}

export default ColumnFilter;