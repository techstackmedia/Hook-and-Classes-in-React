import SearchParams from "./SearchParams";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
}

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

 */
