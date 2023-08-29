import { useEffect, useState } from "react";

const DogSection = () => {
  // Get dog imgs
  //create a dog state to manage images
  const [dogs, setDogs] = useState([]);
  // create an async function ato fetch dog images via an HTTP GET request
  async function fetchDogs() {
    console.log(`fetching dogs`);
    // storing result of fn in a variable called res
    const res = await fetch("https://dog.ceo/api/breeds/image/random/10");
    // transform the res value to a json obj and storing that value to local
    const info = await res.json();
    // sanity check to see what object we received
    // console.log(info);
    // set state to message property
    setDogs(info.message);
  }
  // useEffect to run api fetch fn (fetchDogs) once
  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <>
      <h2 className="heading">Dogs</h2>
      <p className="text">
        {`Here's an API to fetch 10 random dog images:`}
        <a href="https://dog.ceo/api/breeds/image/random/10"></a>
      </p>
      <div className="container">
        {dogs.map((dog, index) => (
          <div key={index}>
            <img src={dog}></img>
          </div>
        ))}
      </div>
    </>
  );
};

export { DogSection };
