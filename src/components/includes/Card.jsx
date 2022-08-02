import React from "react";
import axios from "axios";

class Card extends React.Component {
  state = {
    contents: [],
  };

  getContents = async () => {
    const {
      data: { card2 },
    } = await axios.get("https://kim-eunsu.github.io/JsonFile/card2.json");

    this.setState({ contents: card2 });
  };

  componentDidMount() {
    this.getContents();
  }

  render() {
    const { contents } = this.state;
    return (
      <section id="CardType">
        <div className="card_container">
          <div className="card_title">
            <h2>성동구 카페 Best</h2>
            <span>“성동구 베스트 카페에서 커피 한잔할래요~?”</span>
          </div>
          <div className="card_cont">
            {contents.map((elem) => (
              <div className="card_inner" key={elem.id}>
                <img src={elem.image} alt={elem.title} />
                <div className="card_desc">
                  <h3>{elem.title}</h3>
                  <span>{elem.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

// function Card() {
//   return <div>Card</div>;
// }

export default Card;
