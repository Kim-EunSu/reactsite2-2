import React from "react";
import axios from "axios";

class Image extends React.Component {
  state = {
    contents: [],
  };

  getContents = async () => {
    const {
      data: { image2 },
    } = await axios.get("https://kim-eunsu.github.io/JsonFile/image2.json");

    this.setState({ contents: image2 });
  };

  componentDidMount() {
    this.getContents();
  }

  render() {
    const { contents } = this.state;
    return (
      <section id="ImageType">
        <div className="image_container">
          <div className="image_title">
            <h2>크로와상 맛집 Best</h2>
            <span>“진짜 맛있는 크로와상, 어디서 파는지 궁금하세요??”</span>
          </div>
          <div className="image_cont">
            {contents.map((elem) => (
              <div className="imgae_inner" key={elem.id}>
                <img src={elem.image} alt={elem.title} />
                <div className="image_text">
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

export default Image;
