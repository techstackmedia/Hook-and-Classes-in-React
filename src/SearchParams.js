const SearchParams = () => {
  const location = "Seatle, WA";
  return (
    <div className="searchParams">
      {" "}
      {/* onSubmit={...} */}
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

when a change event happens on the input, setLocation 
will take e and pull out the target(input) and will 
pull out what the value of the input is and it will 
call setLocation which will update  the state the 
React will serenader the component with a new state. 
It is a one way data binding

useState depend heavily on the order it is called.
Do not have conditional hooks
If (something) {
	const [location, setLocation] = useState(“”)
}

onChange, onMouse are react statistical events. 
That is React imitates what the normal event looks like 
then intercept all of that so that react can handle before 
the browser does. Because React can do it faster than the 
Browser. That is hey imitate the normal API. We created the 
controlled form. If we had no change handler, and no value. 
Next repo.

With on submit, we could capture the entire event, 
pull out everything in the form and submit it 
(like normal HTML form). It is called uncontrolled form 
or uncontrolled input.

The uncontrolled is not controlled by React that is why the name.

 */

export default SearchParams;
