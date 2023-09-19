import React from "react";
// @ts-ignore
import menu from "../../icon/menu.png";
function NotesComponent() {
  return (
    <div>
      <div className="notes_post flex  justify-between">
        <div>
          <div className="notes_post_text">
            <span>20.12.2019 </span>
            Физические упражнения способствуют активизации мышечных сокращений,
            кровотока в тканях, снимают отечность, повышают энергетические
            возможности мышц. Улучшенное питание мышечной ткани ускоряет
            замещение различных посттравматических дефектов в самих мышцах,
            костной ткани, связках и сухожилиях.
          </div>
        </div>
        <div>
          {" "}
          <img src={menu} />
        </div>
      </div>

      <div className="notes_post flex justify-between pt-5">
        <div>
          <div className="notes_post_text">
            <span>20.12.2019</span>
            Улучшенное питание мышечной ткани ускоряет замещение различных
            посттравматических дефектов в самих мышцах, костной ткани, связках и
            сухожилиях.
          </div>
        </div>
        <div>
          <img src={menu} />
        </div>
      </div>
    </div>
  );
}

export default NotesComponent;
