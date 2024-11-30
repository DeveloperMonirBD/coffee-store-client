import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard"
import { useState } from "react";

function App() {
    const loadedCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(loadedCoffees);

  return (
      <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-6xl text-purple-600 text-center mt-20 font-bold">Hot Hot Coffee: {coffees.length}</h1>
          <div className="grid md:grid-cols-2 gap-6 mt-16">
              {coffees.map(coffee => (
                  <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees} />
              ))}
          </div>
      </div>
  );
}

export default App
