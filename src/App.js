import React from 'react';
import './App.css';

function App() {

  let toggleCheckMark = (e, i) => {
    debugger;
    let cname = "cardBorderBackground" + i;
    if (document.getElementById(cname)
    .firstChild.firstChild.className === "") {
      document.getElementById(cname)
      .firstChild.firstChild.className += "checkMark";
    } else {
      document.getElementById(cname)
      .firstChild.firstChild.className = "";
    }
  }

  let toggleCheckMark1 = (e) => {
    toggleCheckMark(e, 1);
  }

  let toggleCheckMark2 = (e) => {
    toggleCheckMark(e, 2);
  }

  return (
    <div className="App">
      <p className="title">Ты сегодня покормил кота?</p>
      <div className="cardWrapper">
        <div id="cardBorderBackground1">
          <div className="card catCard1" onClick={toggleCheckMark1}>
            <div></div>
            <p className="cardText">Сказочное заморское яство</p>
            <h1>Нямушка</h1>
            <h2>с фуа-гра</h2>
            <p className="cardText">10 порций
            <br />мышь в подарок</p>
            <div className="circle circle1">
              <p><span className="number">0,5</span><br />кг</p>
            </div>
          </div>
        </div>
        <p className="bottomText">Чего сидишь? Порадуй котэ, <a onClick={toggleCheckMark1}>купи</a>.</p>
      </div>
      <div className="cardWrapper">
        <div id="cardBorderBackground2">
          <div className="card catCard2" onClick={toggleCheckMark2}>
            <div></div>
            <p className="cardText">Сказочное заморское яство</p>
            <h1>Нямушка</h1>
            <h2>с рыбой</h2>
            <p className="cardText">40 порций
            <br/>2 мыши в подарок</p>
            <div className="circle circle2">
              <p><span className="number">2</span><br/>кг</p>
            </div>
          </div>
        </div>
        <p className="bottomText">Головы щучьи с чесноком да свежайшая сёмгушка</p>
      </div>
      <div className="cardWrapper grayCard">
        <div id="cardBorderBackground3">
          <div className="card catCard3">
            <div></div>
            <p className="cardText">Сказочное заморское яство</p>
            <h1>Нямушка</h1>
            <h2>с курой</h2>
            <p className="cardText">100 порций
            <br/>5 мышей в подарок
            <br/>заказчик доволен</p>
            <div className="circle circle3">
              <p><span className="number">5</span><br/>кг</p>
            </div>
          </div>
        </div>
        <p className="bottomText">Печалька, с курой закончился</p>
      </div>
    </div>
  );
}

export default App;
