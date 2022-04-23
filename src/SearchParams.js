const SearchParams = () => {
  const location = "Seatle, WA";
  return (
    <div className="searchParams">
      {" "}
      {/* onSubmit={...}*/}
      <form htmlFor="location">
        <label htmlFor="">
          Location
          <input id="location" value={location} placeholder="Location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

/*

With on submit, we could capture the entire event, 
pull out everything in the form and submit it 
(like normal HTML form). It is called uncontrolled form 
or uncontrolled input.

The uncontrolled is not controlled by React that is why the name

*/

export default SearchParams;
