import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];

  const handleLocationOnChange = (e) => {
    setLocation(e.target.value);
  };

  const handleAnimalOnChange = (e) => {
    setAnimal(e.target.value);
    setBreed("");
  };

  const handleBreedOnChange = (e) => {
    setBreed(e.target.value);
  };

  return (
    <div className="searchParams">
      {" "}
      {/* onSubmit={...}*/}
      <form htmlFor="location">
        <label htmlFor="location">
          Location {location}
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={handleLocationOnChange}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={handleAnimalOnChange}
            onBlur={handleAnimalOnChange}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={handleBreedOnChange}
            onBlur={handleBreedOnChange}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

/*
  Any time you change the animal you have to change the
  breed as well.

  Do onChange and onBlur because sometimes browsers 
  navigate away from a select or via a different tool
  like screen reader (or accessibility tool) they will 
  not fire the change event. This means we will not
  capture it sometimes

  Map: Array of animal will take a list of string and transform it 
  to a list of react component

 */

export default SearchParams;
