const SearchInput = () => {
  return (
    <div className="p-5 w-full border-b-2 border-gray-200 flex justify-center">
      <input
        className="bg-gray-100 rounded-full px-24 py-2 outline-none flex justify-center"
        type="text"
        placeholder="Search contacts"
      />
    </div>
  );
};

export default SearchInput;
