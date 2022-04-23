const SearchParams = () => {
  const location = "Seatle, WA";
  return (
    <div className="searchParams">
      <form htmlFor="location">
        <label htmlFor="">
          Location
          <input id="location" value={location} placeholder="Location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
};

/*
React - Frontend

Hooks are for adding statefulness to UI
Give this state and this props, my component will always 
look like this. It is like a snapshot of what my component 
will look like given props and state.

Avoid side effects and have pure functions
Anytime a push a button, React captures that event and then 
tries to the re-render that component (app). That is it 
kicks up a re-render cycle. Nothing changes it for now. 
It is just “Seattle, WA”

*/

export default SearchParams;