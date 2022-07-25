import React from "react";

function Footer() {
  return (
    <footer id="footerType">
      <div className="footer_container">
        <div className="footer_info">
          <h3>EunSu</h3>
          <span>
            안녕하세요!
            <br />더 다양한 정보 확인
            <br />
            kes73640@naver.com
          </span>
          <ul>
            <li>
              <img
                className="footer_img"
                src="assets/img/Facebook.png"
                alt="페이스북"
              />
            </li>
            <li>
              <img
                className="footer_img"
                src="assets/img/Instagram.png"
                alt="인스타그램"
              />
            </li>
            <li>
              <img
                className="footer_img"
                src="assets/img/YouTube.png"
                alt="유튜브"
              />
            </li>
            <li>
              <img className="footer_img" src="assets/img/Link.png" alt="깃" />
            </li>
            <li>
              <img
                className="footer_img"
                src="assets/img/Link-1.png"
                alt="디스코드"
              />
            </li>
          </ul>
        </div>
        <div className="footer_nav">
          <div>
            <h3>사이트</h3>
            <ul>
              <li>
                <a href="/">웹표준 사이트</a>
              </li>
              <li>
                <a href="/">반응형 사이트</a>
              </li>
              <li>
                <a href="/">페럴렉스 사이트 </a>
              </li>
              <li>
                <a href="/">포토폴리오 사이트</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>유형</h3>
            <ul>
              <li>
                <a href="/">이미지 유형</a>
              </li>
              <li>
                <a href="/">카드 유형</a>
              </li>
              <li>
                <a href="/">이미지 /텍스트 유형 </a>
              </li>
              <li>
                <a href="/">배너 유형 </a>
              </li>
              <li>
                <a href="/">텍스트 유형 </a>
              </li>
              <li>
                <a href="/">푸터 유형 </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>스크립</h3>
            <ul>
              <li>
                <a href="/">검색 이펙트</a>
              </li>
              <li>
                <a href="/">퀴즈 이펙트</a>
              </li>
              <li>
                <a href="/">마우스 이펙트</a>
              </li>
              <li>
                <a href="/">슬라이드 이펙트</a>
              </li>
              <li>
                <a href="/">패랠랙스 이펙트</a>
              </li>
              <li>
                <a href="/">게임 이펙트</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>레퍼런스</h3>
            <ul>
              <li>
                <a href="/">css </a>
              </li>
              <li>
                <a href="/">fonts </a>
              </li>
              <li>
                <a href="/">blog</a>
              </li>
              <li>
                <a href="/">reference</a>
              </li>
              <li>
                <a href="/">tutoral</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <address className="address">
        ©2022 Kim EunSu. All rights reserved.
      </address>
    </footer>
  );
}

export default Footer;
