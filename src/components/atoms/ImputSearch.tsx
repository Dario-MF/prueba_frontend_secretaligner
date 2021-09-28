
const ImputSearch = ({ onSearch }: any) => {
    return (
        <div className="search__field">
            <i className="bi bi-search"></i>
            <input
                type="text"
                className="search__field__input"
                placeholder="Buscar..."
                onChange={e => onSearch(e)}
            />
        </div>
    )
};

export default ImputSearch;
