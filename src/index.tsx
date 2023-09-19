import React, { useState, ChangeEvent } from "react";
import ReactDOM from "react-dom";
// @ts-ignore
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "./style.scss";

import NotesComponent from "./Components/MainContent/NotesComponent";
import СonsultationComponent from "./Components/MainContent/СonsultationComponent";
import VideoComponent from "./Components/MainContent/VideoComponent";
import EventsComponent from "./Components/MainContent/EventsComponent";
import Profile from "./Components/Profile";
// @ts-ignorel;
import { Date_friends } from "../dateUser";
// @ts-ignore
import iconAdd from "./icon/plus.svg";
// @ts-ignore
import iconSearch from "./icon/search.svg";
// @ts-ignore
import iconFilter from "./icon/filter.svg";
// @ts-ignore

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState(
    Date_friends.map(() => false)
  );

  const handleCheckboxChange = (index: any) => {
    setCheckboxStates((prevStates: any) =>
      prevStates.map((state: any, i: any) => (i === index ? !state : state))
    );
  };

  const handleSelectAll = () => {
    setCheckboxStates((prevStates: any) => prevStates.map(() => !isChecked));
    setIsChecked(!isChecked);
  };

  const handleMouseOver = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="wrapper container m-auto">
      <div className="wrapper_container flex">
        <div className="siteBar p-5">
          <div className="searchBlock flex justify-between items-center pl-1 pr-1 ">
            <div className="searchBlock_img ">
              <img
                className="icon"
                src={iconSearch}
                onClick={handleMouseOver}
              />
              <input
                type="text"
                className={`searchInput ${isActive ? "active" : ""}`}
                placeholder="поиск..."
              />
            </div>
            <div className="flex">
              <div className="searchBlock_addFriends p-1">
                <img className="icon" src={iconFilter} />
              </div>
              <div className="searchBlock_addFriends p-1">
                <img className="icon" src={iconAdd} />
              </div>
            </div>
          </div>
          <div className="coountFriends flex justify-between items-center p-3">
            <div className="countFriends_number">{Date_friends.length}</div>
            <div
              className="countFriends_select"
              onClick={handleSelectAll}
              style={{ cursor: "pointer" }}
            >
              {isChecked ? "Снять выбор" : "Выбрать все"}
            </div>
          </div>
          <div className="itemsFriends">
            <ul>
              {Date_friends.map((user: any, index: number) => (
                <li
                  className="itemsFriends_friend flex items-center justify-between mb-5 p-1"
                  key={index}
                >
                  <input
                    type="checkbox"
                    checked={checkboxStates[index]}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <img src={user.img_profile} />
                  <span className="pl-3">{user.name_user}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="content container">
          <div className="content_header ">
            <Profile />
            <div className="wrapper_content_menu">
              <div className="content_menu flex justify-between pt-2 pr-5 pb-2">
                <div className="menu_left">
                  <ul className="flex justify-between pl-5">
                    <li className="item">
                      <Link to="/">Заметки</Link>
                    </li>
                    <li className="item">
                      <Link to="/consultationComponent">Консультация</Link>
                    </li>
                    <li className="item">
                      <Link to="/videoComponent">Видео</Link>
                    </li>
                    <li className="item">
                      <Link to="/eventsComponent">Мероприятия</Link>
                    </li>
                  </ul>
                </div>
                <div className="menu_right flex justify-end">
                  <div className="menu_right_item mr-5">Новая заметка</div>
                  <div className="menu_right_item flex justify-center items-center border border-gray-400 w-6 rounded-full">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content_main p-5">
            <Routes>
              {/* @ts-ignore */}
              <Route path="/" element={<NotesComponent />} />
              {/* @ts-ignore */}
              <Route path="/consultationComponent" element={<СonsultationComponent />}/>
              {/* @ts-ignore */}
              <Route path="/videoComponent" element={<VideoComponent />} />
              {/* @ts-ignore */}
              <Route path="/eventsComponent" element={<EventsComponent />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
