import React from "react";

const TextText = [
  {
    id: 1,
    title: "폴앤폴리나",
    desc: " 담백한 식사빵류의 강자로 이미 유명한 빵집! 코로나로 인해 요즘은 코로나로 인해 시식은 불가능합니다ㅜㅜ",
  },
  {
    id: 2,
    title: "밀곳간",
    desc: "  요즘 빵돌순이 사이에서 가장 핫한 아이템은 역시 황치즈와 소금빵. 이젠 전국의 빵돌순이들이 눈에 불을 켜고 소금을 캐러 다니고 있으니 참 감개무량하다.",
  },
  {
    id: 3,
    title: "소울브레드",
    desc: " ‘동지섣달 팥깜’. 시큼한 발효향이 나는 깜빠뉴를 그릇 삼아 밤이 들어간 팥죽을 부어서 굳힌 느낌이다. 평소 자신이 빵돌이, 빵순이이고 할아버지, 할머니 입맛이라 여긴다면 분명 이 빵이 이상형에 가까울거라 생각한다",
  },
  {
    id: 4,
    title: "르뱅룰즈",
    desc: " - 무화크림치즈 바게트 (Fig Cream Cheese Baguette) 시그니쳐가 괜히 시그니쳐가 아닌 듯 하다. 달지 않은 크림치즈로 바게트를 서포트 하나 싶더니 무화과 젤리가 단맛의 액샌트를 주는 터치가 미쳤다.",
  },
];

function TextInfo({ id, title, desc }) {
  return (
    <div className="text">
      <h3>{title}</h3>
      <span>{desc}</span>
    </div>
  );
}

function Text() {
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
          {TextText.map((text) => (
            <TextInfo key={text.id} title={text.title} desc={text.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Text;
