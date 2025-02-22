import React, { useState, useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    description: "",
    imageFile: null,
    imageUrl: "",
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    // Load sample recipes on initial render
    const sampleRecipes = [
      {
        id: 1,
        name: "Gulab Jamun",
        description: "Soft milk solids soaked in flavored sugar syrup",
        imageUrl: "/download.jpeg", // Relative path from public
      },
      {
        id: 2,
        name: "Chicken Biryani",
        description:
          "A flavorful rice dish cooked with marinated chicken and spices.",
        imageUrl: "/download (1).jpeg", // Relative path from public
      },
      {
        id: 3,
        name: "Chocolate Cake",
        description: "A decadent and moist chocolate cake.",
        imageUrl:"/download (2).jpeg",
      },
    ];
    setRecipes(sampleRecipes);
    setFilteredRecipes(sampleRecipes);
  }, []);

  useEffect(() => {
    const filtered = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(filtered);
  }, [searchTerm, recipes]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewRecipe({ ...newRecipe, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewRecipe({
        ...newRecipe,
        imageFile: file,
        imageUrl: URL.createObjectURL(file),
      });
    }
  };

  const handleAddRecipe = () => {
    if (newRecipe.name.trim() === "" || newRecipe.description.trim() === "") {
      alert("Please fill in all recipe details.");
      return;
    }
    const id = recipes.length > 0 ? Math.max(...recipes.map((r) => r.id)) + 1 : 1;
    const recipeToAdd = { ...newRecipe, id };

    const { imageFile, ...recipeData } = recipeToAdd;
    setRecipes([...recipes, recipeData]);
    setNewRecipe({ name: "", description: "", imageFile: null, imageUrl: "" });
    setShowAddForm(false);
  };

  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="home-container">
        <div className="home-header">
            <div className="home-search-container">
                <input
                  type="text"
                  placeholder="Search recipes..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
            </div>
        </div>

      <div className="features"></div>

      <button className="add-recipe-button" onClick={toggleAddForm}>
        {showAddForm ? "Cancel" : "Add Recipe"}
      </button>
        
      {showAddForm && (
        <div className="add-recipe-form">
          <h2>Add New Recipe</h2>
          <input
            type="text"
            name="name"
            placeholder="Recipe Name"
            value={newRecipe.name}
            onChange={handleInputChange}
          />
          <textarea
            name="description"
            placeholder="Recipe Description"
            value={newRecipe.description}
            onChange={handleInputChange}
          />
          <input
            type="file"
            name="imageFile"
            accept="image/*"
            onChange={handleImageChange}
          />
          {newRecipe.imageUrl && (
            <img
              src={newRecipe.imageUrl}
              alt="Recipe Preview"
              className="recipe-image-preview"
            />
          )}

          <button onClick={handleAddRecipe}>Add</button>
        </div>
      )}


      <div className="recipe-cart">
        <h2>Your Recipes</h2>
        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <div className="recipe-card" key={recipe.id}>
              {recipe.imageUrl && (
                <img
                  src={recipe.imageUrl}
                  alt={recipe.name}
                  className="recipe-image"
                />
              )}
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
              <button onClick={() => handleDeleteRecipe(recipe.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
