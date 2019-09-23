<template>
  <div>
    <div id="coffin">
      <header id="header">
        <div class="wrap">
          <header id="headCredit">
            <h1 class="logo" id="logo-header">
              <nuxt-link to="/">有限会社インビジブル</nuxt-link>
            </h1>
            <p id="headP">大阪・バンコクのホームページ制作会社</p>
          </header>
          <nav id="gNav">
            <div>
              <ul class="topNav">
                <li>
                  <nuxt-link active-class="is-active" to="/services/">SERVICE</nuxt-link>
                </li>
                <li>
                  <nuxt-link active-class="is-active" to="/works/">WORKS</nuxt-link>
                </li>
                <li>
                  <nuxt-link active-class="is-active" to="/company/">COMPANY</nuxt-link>
                </li>
                <li>
                  <nuxt-link active-class="is-active" to="/inquiry/etc/">INQUIRY</nuxt-link>
                </li>
                <li>
                  <nuxt-link active-class="is-active" to="/blog/">BLOG</nuxt-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <div id="contents">
        <nuxt />
        <section class="contentArea" id="blog"></section>
      </div>
      <!-- contents -->
      <footer id="footer">
        <div class="wrap">
          <h3 id="logo-footer" class="logo">
            <nuxt-link to="/">有限会社インビジブル</nuxt-link>
          </h3>
          <div class="company-info">
            <p>有限会社インビジブル</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style lang="scss">
html {
  height: 100%;
  font-size: 62.5%;
  @include font-smoothing(on);
  // background-color: $bodyColor;
  overflow: auto;
}

body {
  color: $txtColor;
  background-color: #616063;
  font-family: "游ゴシック", YuGothic, "ヒラギノ角ゴ Pro W3",
    "Hiragino Kaku Gothic Pro", Verdana, "メイリオ", Meiryo, Osaka,
    "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto !important;
  font-weight: 500;
  line-height: 1.8;
  font-size: 14px;
  font-size: 1.4rem;
  @include MQ(laptop) {
    font-size: 16px;
    font-size: 1.6rem;
  }

  &.in-active {
    height: 100%;
    overflow: hidden;

    #site-contents {
      opacity: 0.3;
      zoom: 1;
    }
  }
}
.wrap {
  width: 100%;
  max-width: $maxWindow;
  position: relative;
  display: block;
  height: 100%;
  z-index: 10;
  @include inner($pc: true) {
    margin: auto;
  }
}

#header {
  position: sticky;
  top: 0;
  width: 100%;
  max-width: 1500px;
  min-height: 2.5rem;
  margin: 0 auto !important;
  padding: 0;
  z-index: 90;
  color: #fff;
  background: #25242c;
  border-bottom: 1px solid #666;
}

#headCredit {
  position: relative;
  // height: 2.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid #333;
  overflow: hidden;
  display: -webkit-flex;
  display: flex;
  -js-display: flex;
  @include MQ(lower-tablet) {
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;
    text-align: center;

    & > * {
      width: 100%;
    }
  }
  @include MQ(laptop) {
    height: 6rem;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    align-items: center;

    .wrap {
      border-bottom: 1px solid #837254;
    }

    #headP {
      margin-left: 2rem;
    }
  }
}

#headCredit:after {
  content: "";
  display: block;
  width: 100%;
  position: absolute;
  bottom: 0;
  border-bottom: 1px solid #000;
}

.logo {
  position: relative;
  padding: 1rem 0;

  a {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: block;
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
    background: url("/images/logo.svg") no-repeat center center;
    background-size: auto 80%;
  }
  @include MQ(laptop) {
    padding: 2rem 0;
    width: 10rem;

    a {
      background-size: contain;
    }
  }
}

#headP {
  @include MQ(lower-tablet) {
    margin: 1em 0 0;
    font-size: 80%;
    transition: all 0.5s ease-out;

    .fixed & {
      margin: 0;
      height: 0;
      opacity: 0;
      zoom: 1;
    }
  }
}
/* footer */
#footer {
  padding: 3vh 0;
  color: #f0f0f0;
  background: #25242c;
  text-align: center;

  .logo {
    margin: auto;
  }

  .company-info {
    margin-top: 2rem;
  }
}

#bottomInfo {
  //display:none;
  //position:fixed;
  //bottom:0;
  width: 100%;
  height: 40px;
  font-size: 90%;
  color: #fafafa;
  background-color: #a9976d;
}
/* controls */
#control a {
  display: block;
  width: 5rem;
  height: 5rem;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
  background-size: contain !important;
}

#pageTop {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 50;

  a {
    background: url("/images/bg-historyBack.svg") no-repeat center center;
  }
}

#toggle {
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  z-index: 90;

  a {
    background: url("/images/bg-toggleMenu.svg") no-repeat center center;
  }
  @include MQ(laptop) {
    display: none;
  }
}
/* 20181018 */
/* nav */
nav a {
  color: #999;
  text-decoration: none;
}

#gNav {
  @include MQ(lower-tablet) {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #111;
  }
}

.topNav {
  & > li {
    position: relative;
    letter-spacing: 0.06em;
    text-align: center;
    vertical-align: top;

    & > a {
      display: block;
      width: 100%;
      // height: 2rem;
      // line-height: 2rem;
      margin: 0.5rem 0;
      padding: 1rem 0;
      text-align: center;
      border-right: 1px solid #111;
    }
  }

  .selected,
  a:hover {
    color: $mainColor;
  }
  @include MQ(laptop) {
    display: table;
    table-layout: fixed;
    width: 100%;

    li {
      display: table-cell;

      &:first-child > a {
        border-left: 1px solid #111;
      }
    }
  }
}

.sub-menu {
  width: 100%;
  //margin-top:-1px;
  //border:1px solid #837254;
  border-top: none;
  @include MQ(laptop) {
    display: none;
    position: absolute;
  }
}

.sub-menu li {
  display: block;
  margin: 0;
}

.sub-menu li a {
  display: block;
  width: 100%;
  padding: 0.75em 0;
  color: #fafafa;
  background-color: lighten($bodyColor, 5%);
  border-bottom: 1px solid #111;
}

.sub-menu .sub-menu {
  top: -1px;
  left: 100%;
  border: 1px solid $bodyColor;
}

.sub-menu li .sub-menu li a {
  color: #fff;
  background-color: #4f4d5d;
}

#fNav {
  .sub-menu {
    display: none;
  }
}
/* main */
#newsTickerTitle {
  position: absolute;
  top: 0;
  left: 0;
  height: 40px;
}

#newsTickerList {
  padding-left: 270px;
}

#newsTickerList li {
  padding: 0;
  overflow: hidden;
}

#newsTickerList a {
  height: 40px;
  line-height: 40px;
  color: #fafafa;
  text-decoration: none;
}

#newsTickerList a:hover {
  color: #fafafa;
}

#newsTickerList .postType {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  color: #111;
  background-color: #fafafa;
  font-size: 80%;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
}

article {
  font-size: 16px;
}

#contents {
  position: relative;
  background: #fff;
  transition: all 0.5s ease-out;
}

.headerDefaultTitle {
  margin: 0;
  padding: 0.5em 0;
  // height: 3rem;
  // line-height: 3rem;
  font-size: 150%;
  background-color: #353442;
  color: $mainColor;
  border-bottom: 1px solid #000;
  font-weight: normal;
  @include MQ(laptop) {
    font-size: 125%;
    padding: 1em 0;
  }
}

.headerTitle-bg {
  padding: 1.5rem 0;
  background-color: #353442;
  border-bottom: 1px solid #d6cebc;
  text-align: center;

  .headerTitleMain {
    color: $mainColor;
    background: none;
    border: none;
    // font-size: 80%;
    font-weight: normal;
    padding: 0;
  }
}

.headerTitle {
  text-align: center;
  margin: 3vh 0;
  @include MQ(laptop) {
    margin: 5vh 0;
  }
}

.headerTitleMain {
  display: inline-block;
  margin: 0;
  padding: 0.75rem 0.5rem;
  // font-size: 1rem;
  font-weight: 900;
  background-color: rgba(255, 255, 255, 0.5);
  border-top: 1px dashed #c0c0c0;
  border-bottom: 1px dashed #c0c0c0;

  & + p {
    margin-top: 2rem;
  }
}

.col {
  @include MQ(sp-only) {
    & > *:not(:first-child) {
      margin-top: 10vh;
    }
  }
}
</style>