import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      const { products } = response.data; 
      setProducts(products || []); 
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (formValues.id) {
        await axios.put(`/api/products/${formValues.id}`, formValues);
      } else {
        await axios.post("/api/products", formValues);
      }

      fetchProducts();
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const resetForm = () => {
    setFormValues({
      title: "",
      description: "",
      price: "",
      stock: "",
      category: "",
      image: "",
    });
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <h1>Products</h1>

      <h2>Add/Update Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formValues.title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formValues.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formValues.price}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Stock:
          <input
            type="number"
            name="stock"
            value={formValues.stock}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formValues.category}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            value={formValues.image}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={resetForm}>
          Cancel
        </button>
      </form>

      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.title}</span>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


