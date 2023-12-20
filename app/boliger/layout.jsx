import Range from "../components/Range";
import Dropdown from "../components/dropdown";

export default async function RootLayout({ children }) {
  let smallestPrice, biggestPrice;
  const uniqueTypes = new Set();
  const dropdownOptions = [{value: 'element', label: 'element'},];
  let homes
  const uniquePrices = new Set();
  const priceArr = [];
  const res = await fetch(`https://dinmaegler.onrender.com/homes`);
  homes = await res.json();
  homes.forEach((element) => {
    uniqueTypes.add(element.type);
    uniquePrices.add(element.price);
  });
  Array.from(uniqueTypes).forEach((element) => {
    dropdownOptions.push({ value: element, label: element });
  });
  Array.from(uniquePrices).forEach((element) => {
    priceArr.push(element);
  });
  [smallestPrice, biggestPrice] = [
    Math.min(...priceArr),
    Math.max(...priceArr),
  ];
  
  return (
    <main>
    <Dropdown options={dropdownOptions} />
      <Range
        valueInit={smallestPrice}
        min={smallestPrice}
        max={biggestPrice}
        id="From"
      />
      <Range
        valueInit={biggestPrice}
        min={smallestPrice}
        max={biggestPrice}
        id="To"
      />
      {children}
    </main>
  );
}
