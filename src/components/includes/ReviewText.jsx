import axios from "axios";
import React from "react";

class ReviewText extends React.Component {
  state = {
    reviewcont: [],
  };

  getReviewCont = async () => {
    const {
      data: { reviewtext2 },
    } = await axios.get(
      "https://kim-eunsu.github.io/JsonFile/reviewtext2.json"
    );
    // console.log(data);
    this.setState({ reviewcont: reviewtext2 });
  };

  componentDidMount() {
    this.getReviewCont();
  }

  render() {
    const { reviewcont } = this.state;
    return (
      <section id="ReviewType">
        <div className="review_container">
          <div className="review_title">
            <h2>소금빵 Review</h2>
            <span>“겉바속촉 100% 정석 소금빵을 먹으려면 맛집에 가야지!”</span>
          </div>
          <div className="review_cont">
            {reviewcont.map((elem) => (
              <div className="review_info" key={elem.id}>
                <span className="review_txt">{elem.desc}</span>
                <div className="profile">
                  <img src={elem.image1} alt={elem.title} />
                  <span className="name">{elem.title}</span>
                  <span className="address">{elem.address} </span>
                  <img src={elem.image2} alt={elem.title} className="star" />
                </div>
                <div className="button">
                  <a href="/">{elem.button}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default ReviewText;
