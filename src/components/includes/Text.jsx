import React from "react";
import axios from "axios";

class Text extends React.Component {
  state = {
    constright: [],
  };

  getRightCont = async () => {
    const {
      data: { text2 },
    } = await axios.get("https://kim-eunsu.github.io/JsonFile/text2.json");

    this.setState({ constright: text2 });
  };

  componentDidMount() {
    this.getRightCont();
  }

  render() {
    const { constright } = this.state;
    return (
      <section id="TextType">
        <div className="text_container">
          <div className="text_title">
            <div className="tit">2022</div>
            <h2>인기 베이커리 TOP4 </h2>
            <span>
              "빵순이가 쟁여두고 먹는 맛집,
              <br />
              공개합니다!"
            </span>
          </div>
          <div className="text_inner">
            {constright.map((elem) => (
              <div className="text" key={elem.id}>
                <h3>{elem.title}</h3>
                <span>{elem.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Text;
