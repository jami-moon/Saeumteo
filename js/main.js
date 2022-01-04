$(document).ready(function () {
  // 팝업창 닫기
  $(".popup__main--close").click(function () {
    $(".popup").fadeOut();
  });

  // 헤더 gnb 마우스오버
  $(".header__gnb-item").mouseenter(function () {
    const targetIdx = $(this).index();
    $(".lnb__item").hide();
    $(".lnb__item").eq(targetIdx).show();
  });

  $(".header").mouseleave(function () {
    $(".lnb__item").hide();
  });

  // 퀵 메뉴 열기
  $(".header__qnb").mouseenter(() => {
    $(".header__qnb ul").slideDown();
  });

  $(".header__qnb").mouseleave(() => {
    $(".header__qnb ul").slideUp();
  });

  // collusion 슬라이드
  $(".collusion__slides").slick({
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    appendArrows: $(".slide-arrow"),
    prevArrow: `<button class="slide-arrow--pre" type="button">이전</button>`,
    nextArrow: `<button class="slide-arrow--next" type="button">다음</button>`,
    dots: true,
    dotsClass: "slide-controller",
    customPaging: function (slider, i) {
      return `<button class="tab" type="button">
        ${$(slider.$slides[i]).attr("data-dot-content")}
        </button>`;
    },
  });

  // service tab 메뉴
  $(".service__slide--number li").click(function () {
    const idx = $(this).index();
    $(".service__item").removeClass("on");
    $(".service__item").eq(idx).addClass("on");
  });
});
