import { useState } from "react";
import ReactDOM from "react-dom/client";
import Component1 from "./Component1";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
        return{...previousState,color : "Blue"}
    });
  }

  return (
    <>
      {/* <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button> */}

      <Component1 />

    </>
  )
}

export default Car