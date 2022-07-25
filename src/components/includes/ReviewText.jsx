import React from "react";

const ReviewTextText = [
  {
    id: 1,
    desc: " 제주의 작지만 알찬 빵집 빵의 종류나 맛, 가격, 아기자기한 분위기까지 정말 마음에 드는 곳이에요! 오전에 갔는데 웨이팅이 매장밖까지.. 내부가 좁아서 밖에 줄 서야 해요. 다들 빵을 쓸어가시는데 괜히 많이 사면 남길까봐 간단히만 샀다가 후회. 제주도 가야만 먹을 수 있다니 ㅠㅠ",
    image1: "assets/img/smile.jpg",
    title: "빵귿",
    image2: "assets/img/star5.png",
    address: "제주특별자치도 제주시",
    button: "자세히보기",
  },
  {
    id: 2,
    desc: "유럽 감성 가득한 브런치 카페 겸 베이커리 무려 아침 8시부터 영업을 하는 곳으로 특히나 이른 시간부터 매진이 되는 소금빵으로 유명하다. 소금빵 외에도 사워도우, 바게트, 식빵, 까눌레, 피낭시에도 판매하고 있다. 브런치 메뉴 역시 매장에서 직접 만든 빵과 잼으로 요리하는데 그래서 그런가?!",
    image1: "assets/img/smile.jpg",
    title: "오파토",
    image2: "assets/img/star5.png",
    address: "용산구 신흥로12길 1",
    button: "자세히보기",
  },
  {
    id: 3,
    desc: " 괜찮은 빵 신흥강자를 느껴보고 먹고싶다면 로와이드 오랜만에 빵다운 빵을 먹은것 같아서 너무 기분이 좋았다 소금빵의 성지라는데 소금빵은 다른곳이 더 괜찮은 느낌이었다 밀도 베이크스튜디오 등등 성수에서 꽉 자리를 잡고있는 곳들이 즐비한대 새로운 도전을 하고싶다면 추천",
    image1: "assets/img/smile.jpg",
    title: "빵의 정석",
    image2: "assets/img/star5.png",
    address: "성동구 서울숲2길 22-1",
    button: "자세히보기",
  },
];

function ReviewTextInfo({ id, desc, image1, title, image2, address, button }) {
  return (
    <div className="review_info">
      <span className="review_txt">{desc}</span>
      <div className="profile">
        <img src={image1} alt={title} />
        <span className="name">{title}</span>
        <img src={image2} alt={title} />
        <span className="study">{address} </span>
      </div>
      <div className="button">
        <a href="/">{button}</a>
      </div>
    </div>
  );
}

function ReviewText() {
  return (
    <section id="ReviewType">
      <div className="review_container">
        <div className="review_title">
          <h2>소금빵 Review</h2>
          <span>“겉바속촉 100% 정석 소금빵을 먹으려면 맛집에 가야지!”</span>
        </div>
        <div className="review_cont">
          {ReviewTextText.map((text) => (
            <ReviewTextInfo
              key={text.id}
              desc={text.desc}
              image1={text.image1}
              title={text.title}
              image2={text.image2}
              address={text.address}
              button={text.button}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewText;
