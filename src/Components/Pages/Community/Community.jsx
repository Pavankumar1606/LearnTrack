import { Modal } from "@mui/material";
import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Community = () => {
  const[open, setOpen] = useState(false);
  

  const handleClick = () => {
    setOpen(true);
  }

  return (
    <>
      <div className="DasboardBody">
        <div className="ResourcesHeader">
          <h1>Community</h1>

          <button className="AddResource" onClick={handleClick}>Start Discussion</button>
        </div>
        <Modal
        onClose={() => setOpen(false)}
        open={open}
        style={{
          position: "absolute",
          border: "2px solid #000",
          backgroundColor: "lightgray",
          boxShadow: "2px solid black",
          height: 150,
          width: 240,
          margin: "auto",
          padding: "2%",
          color: "white",
      }}
        ><h1>Pavan</h1>
        </Modal>
        <div className="center-div">
          <div className="Communitysections-cards">
            <div className="Communitycard">
              <div className="cardtop">
                {/* <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      
                     
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                    </svg> */}
                <h3>Total Members</h3>
              </div>

              <div className="cardbottom">
                <h2>1,234</h2>
              </div>
            </div>

            <div className="Communitycard">
              <div className="cardtop">
                {/* <FaRegClock className="icon"/> */}
                <h3>Active Discussions</h3>
              </div>

              <div className="cardbottom">
                <h2>85</h2>
              </div>
            </div>

            <div className="Communitycard">
              <div className="cardtop">
                {/* <FaFolder className="icon"/> */}

                <h3>Study Groups</h3>
              </div>

              <div className="cardbottom">
                <h2>32</h2>
              </div>
            </div>

            <div className="Communitycard">
              <div className="cardtop">
                {/* <FaRegStar className="icon"/> */}

                <h3>Your Contribution</h3>
              </div>

              <div className="cardbottom">
                <h2>47</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="CommunityBottomdiv">
          <div className="RecenetDiscussion">
            <div className="BottomdivHeader">
              <h2>Recent Discussion</h2>
              <div className="BottomdivHeadertag">
              <NavLink to="/AllDiscussions" className={({ isActive }) => (isActive ? "active" : "")}>View all</NavLink>

              </div>
            </div>

            <div className="CommunityBottomdivBody">
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
          <div className="ActivestydyGroups">
            <div className="BottomdivHeader">
              <h3>Active study Groups</h3>
              <div className="BottomdivHeadertag">
                <p>View all</p>
              </div>
            </div>

            <div className="ActivestydyGroupsCards">
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

export default Community;
