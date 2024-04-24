import { useState, useEffect } from "react";
import "./App.css";

const url = "http://localhost:3000/posts";
const url2 = "http://localhost:3000/lasts";
function fetchData() {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error("Error fetching data:", error);
      return [];
    });
}

function App() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    fetchData(url).then((data) => setData(data));
    fetchData(url2).then((data) => setData2(data));
  }, []);
  const firstItemTitle = data.length > 0 ? data[0].title : "";
  const firstItemitem = data.length > 0 ? data[0].item : "";
  const firstitemimage = data.length > 0 ? data[0].image : "";
  const secondItemTitle = data.length > 0 ? data[1].title : "";
  const secondItemitem = data.length > 0 ? data[1].item : "";
  const seconditemimage = data.length > 0 ? data[1].image : "";
  const adamsekli = data.length > 0 ? data[5].image : "";
  const adamadi = data.length > 0 ? data[5].name : "";
  return (
    <main className="Main-container">
      <div className="container">
        <img
          className="image-logo"
          src="src\files\logo\Group 40.svg"
          alt="logo"
        />
        <h1 className="cards">Cards</h1>
      </div>
      <div className="container-cards">
        <div className="container-cards-first-cards">
          <img
            className="container-cards-first-cards-image"
            src={firstitemimage}
            alt="image"
          />

          <h3 className="container-cards-first-cards-title">
            {firstItemTitle}
          </h3>
          <p className="container-cards-first-cards-item">{firstItemitem}</p>
        </div>

        <div className="container-cards-second-cards">
          <img
            className="container-cards-second-cards-image"
            src={seconditemimage}
            alt="image"
          />
          <div>
            <div className="basliq">
              <h4 className="basliq-food">FOOD</h4>
              <p className="basliq-food">1 month ago</p>
            </div>
            <h3 className="container-cards-first-cards-title">
              {secondItemTitle}
            </h3>
            <p className="container-cards-first-cards-item">{secondItemitem}</p>
            <div className="basliq">
              <div className="adam">
                <img className="basliq-food" src={adamsekli} />
                <h4 className="adamadi">{adamadi}</h4>
              </div>

              <a href="#" className="link">
                Read more
              </a>
            </div>
          </div>
        </div>
        <div>
          {/* {data2.map((item, index) => (
            <div className="container-cards-last-cards" key={index}>
              <img src={item.image} alt="image" />
              <h3 className="container-cards-last-cards-title">{item.title}</h3>
              <p className="container-cards-last-cards-item">{item.item}</p>
            </div>
          ))} */}
        </div>
      </div>
    </main>
  );
}

export default App;
