import React, { useState } from 'react'

const Resources = () => {

      const [activeIndex, setActiveIndex] =useState(null);
      const [showInput, setShowInput] = useState(false);
      const [resource, setResource] = useState("");


      const handleClick = (index) => {
        setActiveIndex(index);
      }

        

        const handleAddClick = () => {
          setShowInput(true);
        };

      const handleSave = () => {
        if (resource.trim() !== "") {
          console.log("Added Resource:", resource); 
          setShowInput(false);
          setResource(""); 
        }
      };

      const handleClose = () => {
        setShowInput(false);
        setResource(""); // Reset input field
      };

  return (
    <>
      <div className="ResourcesHeader">
        <h1>Resources</h1>
        
        <button className="AddResource">+ Add Resources</button>
        
      </div>
      <div className="ResourcesBody">
        
      <div className="Categories">
      <h3>Categories</h3>
      {["All Categories", "Web Development", "Machine Learning", "Mobile Development", ].map((category, index) => (
        <button
          key={index}
          className={`CategoryBtn ${activeIndex === index ? "active" : ""}`}
          onClick={() => handleClick(index)}
        >
          {category}
        </button>
      ))}

      <div className='AddResourceBtn'>
        {!showInput ? (
          <button className="addResourceBtn" onClick={handleAddClick}>Add Category</button>
        ) : (
          <div className="inputContainer">
            <input type="text"
            value={resource}
            onChange={(e) => setResource(e.target.value)}
            placeholder="Enter resource Name"
            className='inputField'
            />
            <button className="saveBtn" onClick={handleSave}>Add</button>
            <button className="closeBtn" onClick={handleClose}>Cancel</button>
          </div>
        )
        }
      </div>
    </div>

       
      </div>
    </>
  )
}

export default   Resources;