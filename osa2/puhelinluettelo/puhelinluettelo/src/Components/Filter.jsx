
// when writing in to the filter input, filters and shows only valid names
const Filter = ({filter, setFilter}) => {
    return (
        <div>
        Filter shown with name <input value = {filter} 
          onChange={(e) => setFilter(e.target.value)}/>
        </div>
    )
}

export default Filter