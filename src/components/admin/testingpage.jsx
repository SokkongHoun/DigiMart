import { useState, useContext, useEffect } from "react";
import { FirebaseData } from "../../contexts/productData";

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
