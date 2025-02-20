import React from "react";
import { FaRegClock } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

const Dashboard = () => {
  return (
    <>
      <div className="DasboardBody">
        <div className="top-nav">
          <div className="searchbar">
            <input
              type="text"
              className="inputsearchbar"
              placeholder="Search"
            />
          </div>
          <div className="notifi">
            {/* <p>icon</p> */}
            <h2>Pavan</h2>
          </div>
        </div>

        <div className="center-div">
          <div className="sections-cards">
            <div className="card">
              <div className="cardtop">
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  
                 
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
                <h3>Total Resources</h3>
              </div>

              <div className="cardbottom">
                <h2>245</h2>
              </div>
            </div>

            <div className="card">
              <div className="cardtop">
                <FaRegClock className="icon"/>
                <h3>Time Spent</h3>
              </div>

              <div className="cardbottom">
                <h2>245</h2>
              </div>
            </div>

            <div className="card">
              <div className="cardtop">
                <FaFolder className="icon"/>

                <h3>Categories</h3>
              </div>

              <div className="cardbottom">
                <h2>245</h2>
              </div>
            </div>

            <div className="card">
              <div className="cardtop">
                <FaRegStar className="icon"/>

                <h3>Completed</h3>
              </div>

              <div className="cardbottom">
                <h2>245</h2>
              </div>
            </div>
          </div>
        </div>

        
        <div className="Bottomdiv">
         <div className="Bottomdivone">
         <div className="BottomdivHeader">
         <h1>Your Activity</h1>
         <div className="BottomdivHeadertag">
         <p >View all</p>
         </div>
         
         </div>

          
            
            <div className="BottomdivBody">
            <div className="BottomdivBodycard">
              <div className="BottomdivBodyCardTop">
              <h3>Web Development</h3>
              <p>icon</p>
              </div>
              <div className="BottomdivBodyCardBottom">
              <p>12 resources</p>
              <p>Completed 50%</p>
            </div>


            
          </div>

          <div className="BottomdivBodycard">
              <div className="BottomdivBodyCardTop">
              <h3>Web Development</h3>
              <p>icon</p>
              </div>
              <div className="BottomdivBodyCardBottom">
              <p>12 resources</p>
              <p>Completed 50%</p>
            </div>


            
          </div>
          <div className="BottomdivBodycard">
              <div className="BottomdivBodyCardTop">
              <h3>Web Development</h3>
              <p>icon</p>
              </div>
              <div className="BottomdivBodyCardBottom">
              <p>12 resources</p>
              <p>Completed 50%</p>
            </div>


            
          </div>
          <div className="BottomdivBodycard">
              <div className="BottomdivBodyCardTop">
              <h3>Web Development</h3>
              <p>icon</p>
              </div>
              <div className="BottomdivBodyCardBottom">
              <p>12 resources</p>
              <p>Completed 50%</p>
            </div>


            
          </div>
         </div>
            
         
          
         </div>
         <div className="BottomdivTwo">
         <div className="BottomdivHeader">

          <h1>Recent Notes</h1>
          <div className="BottomdivHeadertag">
           <p>+ New Note</p>
         </div>
         </div>

          <div className="BottomdivNoteBody">
          <div className="BottomdivBodyNotecard">
              <div className="BottomdivBodyNoteCardTop">
              <h3>React Hooks Best Practices</h3>
              <p>From: Advanced React Patterns</p>
              <p>Important patterns for managing side effects...</p>
              </div>
              <div className="BottomdivBodyNoteCardBottom">
              <p>Feb 18 25</p>
              <p>read more</p>
            </div>
            
          </div>
          <div className="BottomdivBodyNotecard">
              <div className="BottomdivBodyNoteCardTop">
              <h3>React Hooks Best Practices</h3>
              <p>From: Advanced React Patterns</p>
              <p>Important patterns for managing side effects...</p>
              </div>
              <div className="BottomdivBodyNoteCardBottom">
              <p>Feb 18 25</p>
              <p>read more</p>
            </div>
            
          </div>
          </div>
         </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
