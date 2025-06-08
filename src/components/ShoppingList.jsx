import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [formData, setFormData] = useState('') 

  function handleChange(event) {
    setSelectedCategory(event.target.value);
  }
  const [newItems, setNewItems] = useState(items)

  const [searchInfo, setSearchInfo] = useState('')

  const itemsToDisplay = newItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchInfo.toLowerCase());

    return matchesCategory && matchesSearch;
  });  
 

  return (
    <div className="ShoppingList">
      <ItemForm 
        formData={formData} 
        setFormData={setFormData} 
        setNewItems={setNewItems} />
      <Filter 
        onCategoryChange={handleChange} 
        searchInfo={searchInfo} 
        setSearchInfo={setSearchInfo}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;