import React, { useState } from "react";
import { useProductOperations } from "../hooks/useProducts";
import { useToast } from "../hooks/useToast";

const CreatePage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const { createProduct, loading } = useProductOperations();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProduct({ name, price, image });

      // Reset form
      setName("");
      setPrice("");
      setImage("");

      toast.success("Product created successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create product");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Create New Product
          </h1>
          <p className="text-gray-600">Add a new product to your inventory</p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <form
            className="bg-white shadow-xl rounded-3xl p-8 border border-gray-100"
            onSubmit={handleSubmit}
          >
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Product Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                  placeholder="Enter product name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Price Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Price ($)
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                  placeholder="0.00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  min="0"
                  step="0.01"
                />
              </div>

              {/* Image URL Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Image URL
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                  placeholder="https://example.com/image.jpg"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
                {image && (
                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Preview:
                    </p>
                    <img
                      src={image}
                      alt="Preview"
                      className="w-full h-40 object-cover rounded-xl border border-gray-200"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Creating Product...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      ></path>
                    </svg>
                    Create Product
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
