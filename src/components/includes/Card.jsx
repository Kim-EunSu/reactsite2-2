import React from "react";

const CardText = [
  {
    id: 1,
    image: "assets/img/cafe1.jpg",
    title: "로우커피스탠드",
    desc: "서울특별시 성동구 왕십리로4길 28-2 1F",
  },
  {
    id: 2,
    image: "assets/img/cafe2.jpg",
    title: "프롤라",
    desc: "서울특별시 성동구 성수일로4길 49-1",
  },
  {
    id: 3,
    image: "assets/img/cafe3.jpg",
    title: "로우키",
    desc: "서울특별시 성동구 연무장3길 6",
  },
  {
    id: 4,
    image: "assets/img/cafe4.jpg",
    title: "아우프글렛",
    desc: "서울특별시 성동구 독서당로51길 7 1F",
  },
];

function CardInfo({ id, image, title, desc }) {
  return (
    <div className="card_inner">
      <img src={image} alt={title} />
      <div className="card_desc">
        <h3>{title}</h3>
        <span>{desc}</span>
      </div>
    </div>
  );
}

function Card() {
  return (
    <section id="CardType">
      <div className="card_container">
        <div className="card_title">
          <h2>성동구 카페 Best</h2>
          <span>“성동구 베스트 카페에서 커피 한잔할래요~?”</span>
        </div>
        <div className="card_cont">
          {CardText.map((text) => (
            <CardInfo
              key={text.id}
              image={text.image}
              title={text.title}
              desc={text.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Card;
