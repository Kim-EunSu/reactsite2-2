import React from "react";

function Header() {
  return (
    <header id="headerType">
      <div className="header_inner">
        <h1 className="header_logo">
          <a href="/">EunSu's Site</a>
        </h1>
        <nav className="header_menu">
          <h2 className="ir_so">메뉴 영역</h2>
          <ul>
            <li>
              <a href="/">헤더 영역</a>
            </li>
            <li>
              <a href="/">슬라이드 영역</a>
            </li>
            <li>
              <a href="/">이미지 영역</a>
            </li>
            <li>
              <a href="/">컨텐츠 영역</a>
            </li>
            <li>
              <a href="/">푸터 영역</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
