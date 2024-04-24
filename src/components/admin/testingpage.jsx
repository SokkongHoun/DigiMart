import { useState, useContext, useEffect } from "react";
import { FirebaseData } from "../../contexts/productData";

const color = [
  {
    class: "bg-black",
    name: "Black",
    selectedClass: "ring-gray-900",
  },
  {
    class: "bg-gray-100",
    name: "White",
    selectedClass: "ring-gray-400",
  },
  {
    class: "bg-gray-400",
    name: "Gray",
    selectedClass: "ring-gray-400",
  },
  {
    class: "bg-blue-600",
    name: "Blue",
    selectedClass: "ring-gray-900",
  },
  {
    class: "bg-red-700",
    name: "Red",
    selectedClass: "ring-gray-900",
  },
  {
    class: "bg-yellow-400",
    name: "Yellow",
    selectedClass: "ring-gray-400",
  },
  {
    class: "bg-green-700",
    name: "Green",
    selectedClass: "ring-gray-900",
  },
  {
    class: "bg-pink-600",
    name: "Pink",
    selectedClass: "ring-gray-900",
  },
  {
    class: "bg-yellow-600",
    name: "Orange",
    selectedClass: "ring-gray-900",
  },
];

export default function Testingpage() {
  const { productData } = useContext(FirebaseData);
  const [choosenColor, setChoosenColor] = useState();
  const [colorData, setColorData] = useState(null);
  const [firebaseData, setFirebaseData] = useState(null);

  function handleColorChecker(e) {
    const selectedColor = e.target.value;
    setColorData(selectedColor);
    const allColors = productData.flatMap((product) => product.colors);
    setChoosenColor(allColors.find((color) => color.name === selectedColor));
  }

  const handleSubmitColor = () => {
    setFirebaseData(choosenColor);
  };

  useEffect(() => {
    console.log(firebaseData);
  }, [firebaseData]);

  return (
    <div>
      <select
        className="select w-full max-w-xs"
        value={colorData}
        onChange={(e) => handleColorChecker(e)}
      >
        <option disabled selected>
          Pick your favorite Simpson
        </option>
        <option value="Black">Black</option>
        <option value="White">White</option>
        <option value="Gray">Gray</option>
        <option value="Blue">Blue</option>
        <option value="Yellow">Yellow</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Orange">Orange</option>
        <option value="Pink">Pink</option>
      </select>
      <button onClick={handleSubmitColor}>Submit</button>
    </div>
  );
}
