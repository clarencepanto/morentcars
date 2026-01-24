import { useState, useEffect, useRef } from "react";
import carsData from "../../data/cars.json";

function Sidebar({ isOpen }) {
  const items = carsData;
  const sliderRef = useRef(null);

  // get cheapest and most expensive car prices
  const minPrice = Math.min(...items.map((item) => item.price));
  const maxPrice = Math.max(...items.map((item) => item.price));

  const [filters, setFilters] = useState({
    types: [],
    capacities: [],
    priceRange: [minPrice, maxPrice],
  });

  useEffect(() => {}, [filters]);

  useEffect(() => {
    if (sliderRef.current) {
      const percent =
        ((filters.priceRange[1] - minPrice) / (maxPrice - minPrice)) * 100;
      sliderRef.current.style.setProperty("--slider-value", `${percent}%`);
    }
  }, []); // Empty array = runs once on mount

  // console.log("3. Selected types:", filters.types);
  // console.log("4. Selected capacities:", filters.capacities);
  // console.log("5. Selected price range", filters.priceRange);

  // Categories to show as checkboxes
  const types = ["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"];
  const capacity = ["2 Person", "4 Person", "6 Person", "8 or More"];

  // One handler
  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const currentValues = prevFilters[filterType];

      if (currentValues.includes(value)) {
        return {
          ...prevFilters,
          [filterType]: currentValues.filter((v) => v !== value),
        };
      } else {
        return {
          ...prevFilters,
          [filterType]: [...currentValues, value],
        };
      }
    });
  };

  // handler slider
  const handlePriceChange = (event) => {
    const value = Number(event.target.value);

    const percent = ((value - minPrice) / (maxPrice - minPrice)) * 100;
    event.target.style.setProperty("--slider-value", `${percent}%`);

    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: [prevFilters.priceRange[0], value],
    }));
  };

  // apply both filters
  const getFilteredItems = () => {
    let result = items;

    // filter by types

    if (filters.types.length > 0) {
      result = result.filter((item) => {
        return filters.types.includes(item.type);
      });
    }

    // filter by capacity
    if (filters.capacities.length > 0) {
      result = result.filter((item) => {
        return filters.capacities.includes(item.capacity);
      });
    }

    // filter by price range
    result = result.filter((item) => {
      return (
        item.price >= filters.priceRange[0] &&
        item.price <= filters.priceRange[1]
      );
    });

    return result;
  };

  // const filteredItems = getFilteredItems();

  // count all available types

  const getTypeCount = (type) => {
    return items.filter((item) => item.type === type).length;
  };

  // count all available capacity

  const getCapacityCount = (capacity) => {
    return items.filter((item) => item.capacity === capacity).length;
  };

  return (
    <section className={`sidebar ${isOpen ? "" : "sidebar-mobile"} `}>
      <div className="sidebar__type">
        <h4>TYPE</h4>
        {types.map((type) => {
          return (
            <label key={type}>
              <input
                type="checkbox"
                checked={filters.types.includes(type)}
                onChange={() => handleFilterChange("types", type)}
              />
              <span>
                {type} <span>({getTypeCount(type)})</span>
              </span>
            </label>
          );
        })}
      </div>
      <div className="sidebar__capacity">
        <h4>CAPACITY</h4>
        {capacity.map((capacity) => {
          return (
            <label key={capacity}>
              <input
                type="checkbox"
                checked={filters.capacities.includes(capacity)}
                onChange={() => handleFilterChange("capacities", capacity)}
              />
              <span>
                {capacity} <span>({getCapacityCount(capacity)})</span>
              </span>
            </label>
          );
        })}
      </div>
      <div>
        {/* will setup later for cars */}
        {/* {filteredItems.map((item) => {
          return (
            <div key={item.id}>
              <h2>
                {item.name} ${item.price}
              </h2>
            </div>
          );
        })} */}
      </div>
      {/* PRICE SLIDER */}
      <div className="sidebar__price">
        <h4>PRICE</h4>

        <input
          ref={sliderRef}
          type="range"
          min={minPrice}
          max={maxPrice}
          value={filters.priceRange[1]}
          onChange={handlePriceChange}
          className="price-slider"
        />
        <div className="price-display">
          Max: ${filters.priceRange[1].toFixed(2)}
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
