import React from "react";

const ImageText = [
  {
    id: 1,
    image: "assets/img/bread1.jpg",
    title: "오헨",
    desc: "여의도 - 베이커리",
  },
  {
    id: 2,
    image: "assets/img/bread2.jpg",
    title: "파네트크루아상팩토리",
    desc: "광화문 - 베이커리",
  },
  {
    id: 3,
    image: "assets/img/bread3.jpg",
    title: "빵의 정석",
    desc: "왕십리/성동 - 베이커리",
  },
];

function ImageInfo({ id, image, title, desc }) {
  return (
    <div className="imgae_inner">
      <img src={image} alt={title} />
      <div className="image_text">
        <h3>{title}</h3>
        <span>{desc}</span>
      </div>
    </div>
  );
}

function Image() {
  return (
    <section id="ImageType">
      <div className="image_container">
        <div className="image_title">
          <h2>크로와상 맛집 Best</h2>
          <span>“진짜 맛있는 크로와상, 어디서 파는지 궁금하세요??”</span>
        </div>
        <div className="image_cont">
          {ImageText.map((text) => (
            <ImageInfo image={text.image} title={text.title} desc={text.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Image;
