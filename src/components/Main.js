import React from 'react';
import '../styles/main.css';

const Main = () => {
  return (
    <main className="main">
      <section className="main-content">
        <h1>Онкологическое заболевание</h1>
        <p>
          2 ноября Миргуль диагностировали рак нервных клеток. Миргуль необходим курс
          специальной химиотерапии в Турции. За это от нас требуют $50,000. Спасибо за любую
          помощь.
        </p>
        <div className="progress-container">
          <span className="time-left">осталось 4 дня</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '84.8%' }}></div>
          </div>
          <div className="progress-details">
            <span>Собрано $42,417</span>
            <span>Необходимо $50,000</span>
          </div>
        </div>
        <button className="donate-button">Пожертвовать</button>
      </section>
    </main>
  );
};

export default Main;
