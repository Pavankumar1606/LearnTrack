import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Modal } from "@mui/material";
import { FaFolder, FaLink } from "react-icons/fa";


const Resources = () => {

      const [activeIndex, setActiveIndex] =useState(null);
      const [showInput, setShowInput] = useState(false);
      const [resource, setResource] = useState("");
      const[open, setOpen] = useState(false);
      const [activeOption, setActiveOption] = useState(null);

      const handlemodalbtnClick = (option) => { 
        setActiveOption(option);
      }
      const handleClicking = () => {
        setOpen(true);
      }

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
        
        <button className="AddResource" onClick={handleClicking}>
        {/* <NavLink to="/AddResources" className={({ isActive }) => (isActive ? "active" : "")} id='addbtn'></NavLink> */}
        Add Resource
        </button>
        
        
      </div>
      <Modal
        
        open={open}
        >
       <div className='modalContent'>
        <div className="modelHeader">
          <h1>Add new Resource</h1>
          <button className="saveBtn" onClick={()=>setOpen(false)}>close</button>
        </div>
        <div className="modalBody">
        <h3>Resource Type</h3>
        <div className="modalResourceType">
          
          {["Online Class", "Video Tutorial", "Documentation", "Book", "Article", "Github Repository"].map((option) => (
            <button
              key={option}
              className={`modalResourceOption ${activeOption === option ? "active" : ""}`}
              onClick={() => handlemodalbtnClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
          <div className="modalResourceUrl">
          
           <div className="modalResourceUrlBody">
           <h3>Resource URL</h3>
           <FaLink className='Modalicon'/>
           <input type="text" placeholder="Enter Resource URL" className="modalInput" />
           </div>
            
          </div>

            <div className="category">
              
              <div className="categoryBody">
              <div className="categoryOne">
              <h3>Category</h3>
              <select name="" id="" className='modalSelect'>
                <option value="">Web Development</option>
                <option value="">Machine Learning</option>
                <option value="">UI/UX Design</option>
                <option value="">Mobile Development</option>
              </select>
              </div>
              <div className="categoryTwo">
                <h3>Estimated Time</h3>
              <input type="text" className='modalInput2'/>
              </div>
              </div>
            </div>


            <div className="modalResourceDescription">
              <h3>Resource Description</h3>
              <textarea name="" id="" className='modaltextarea'/>
            </div>

            <div className="sendbtn">
              <button className='sendbtn'>Add Resource</button>
            </div>
        </div>
       </div>
        </Modal>


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