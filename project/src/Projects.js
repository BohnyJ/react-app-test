import React from "react";
import Button from "./Button";
import "./Projects.css";
import logo from "./img/scilogo.png";
import gif from "./img/gif.gif";

function Projects(props) {
  return (
    <div className="container section dark-flat">
      <h2 id="projects" tabIndex="-1">
        Проєкти
      </h2>
      <div className="project">
        <div className="proj-info">
          <span className="subtitle">Science Mentoring</span>
          <span className="txt">
            ScienceMentoring – це стратегічний проєкт неприбуткової молодіжної
            громадської організації UkrTeenScience, який допомагає здібним
            українським школярам з маленьких міст проводити висококласні наукові
            дослідження та ставати вченими.
          </span>
          <Button txt="Більше" />
        </div>
        <img src={logo} alt="" />
      </div>
      <div className="project">
        <div className="proj-info">
          <span className="subtitle">Femtochel </span>
          <span className="txt">
            Femtochel - вектор роботи та пул розробок і технологій, що можуть
            стати корисними при створенні фемтозондів майбутнього, один із яких
            колись долетить до сусідньої зоряної системи. Пріоритетом є
            досягнення маси супутника до 10 г.
          </span>
          <img src={gif} alt="GIF" className="fullGif" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
