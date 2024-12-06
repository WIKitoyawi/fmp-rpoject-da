import React from "react";
import "../styles/main.css";
import ProgressBar from "./ProgressBar";

const Main = () => {
  return (
    <main className="main">
      <div className="content">
        <h1>Онкологическое заболевание</h1>
        <p>
          2 ноября Миргуль диагностировали рак нервных клеток. Миргуль необходим курс
          специальной химиотерапии в Турции. За это от нас требуют $50,000. Спасибо за
          любую помощь.
        </p>
        <div className="time-left">осталось 4 дня</div>
        <ProgressBar current={42417} goal={50000} />
        <button className="donate-btn">Пожертвовать</button>
      </div>
    </main>
  );
};

export default Main;
