"use client"
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

const ProductList = () => {
  const [productData, setProductData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        if (!response.ok) throw new Error("network response was not ok")
        const data = await response.json()
        setProductData(data)

        const uniqueCategories = [...new Set(data.map((product) => product.category))]
        setCategories(uniqueCategories)
        const maxPrice = Math.max(...data.map((product) => product.price))
        setPriceRange([0, Math.ceil(maxPrice)])

        setIsLoading(false)
      } catch (err) {
        console.log(err)
        setIsError(true)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredProducts = productData.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)

    return matchesSearch && matchesPrice && matchesCategory
  })

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    const maxPrice = Math.max(...productData.map((product) => product.price))
    setPriceRange([0, Math.ceil(maxPrice)])
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>Error fetching data</h2>
  }

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-4xl font-bold mb-4 mt-12 text-center">Products</h2>
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="search products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 flex-1"
          />
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Filters (
            {selectedCategories.length > 0 ||
            priceRange[0] > 0 ||
            priceRange[1] < Math.max(...productData.map((p) => p.price))
              ? "Active"
              : "None"}
            )
          </button>
        </div>
      </section>

      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-transparent bg-opacity-50" onClick={() => setIsDrawerOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button onClick={() => setIsDrawerOpen(false)} className="text-gray-500 hover:text-gray-700">
                  ✕
                </button>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max={Math.max(...productData.map((p) => p.price))}
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-full"
                  />
                  <input
                    type="range"
                    min="0"
                    max={Math.max(...productData.map((p) => p.price))}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>R{priceRange[0]}</span>
                    <span>R{priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="mr-2"
                      />
                      <span className="text-sm capitalize">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={clearFilters}
                  className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition-colors"
                >
                  Clear Filters
                </button>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 p-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="pl-12">
            <ProductCard {...product} />
          </div>
        ))}
      </section>
    </>
  )
}

export default ProductList
