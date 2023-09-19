import React from "react";

// @ts-ignore
import avatar from "../icon/Rectangle.png";
// @ts-ignore
import menu from "../icon/menu.png";

export default function Profile() {
  return (
    <div className="content_header_top flex items-center mt-5 pl-5">
      <div className="content_header_top_avatar">
        <img src={avatar} />
      </div>
      <div className="content_header_top_date p-3">
        <h3>Рожков Денис Петрович</h3>
        <h2>30лет, муж</h2>
      </div>
      <div className="content_header_top_menu ml-auto pr-5">
        <img src={menu} />
      </div>
    </div>
  );
}
