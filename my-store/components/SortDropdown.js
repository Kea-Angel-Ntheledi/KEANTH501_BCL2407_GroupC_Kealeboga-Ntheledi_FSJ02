const SortDropdown = ({ onSort }) => {
  return (
    <select onChange={(e) => onSort(e.target.value)}>
      <option value="">Sort By</option>
      <option value="asc">Name Ascending</option>
      <option value="desc">Name Descending</option>
    </select>
  );
};

export default SortDropdown;
