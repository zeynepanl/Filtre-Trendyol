"use client"; // Bu satırı en üste ekleyin

import React, { useState } from "react";
import SearchResultHeader from "../components/SearchResultHeader";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      setProducts(data);
      setFilteredProducts(data);

      const uniqueCategories = [...new Set(data.map((item) => item.category))];
      setCategories(uniqueCategories);
    }

    fetchData();
  }, []);

  const handleFilter = (category) => {
    if (category) {
      setFilteredProducts(products.filter((product) => product.category === category));
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div>
      <SearchResultHeader categories={categories} onFilter={handleFilter} />
      <div className="bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-2 mt-4 lg:ml-2 lg:mr-36">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
