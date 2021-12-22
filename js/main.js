$(document).ready(function () {
  // 풀페이지 js
  $("#fullpage").fullpage({
    autoScrolling: true,
  });

  // 팝업창 닫기
  $(".popup__main--close").click(function () {
    $(".popup").fadeOut();
  });

  $(".header__go--apply").mouseenter(function () {
    $(".menu__apply").slideDown();
  });

  $(".header").mouseleave(function () {
    $(".menu__apply").slideUp();
  });

  // 퀵 메뉴 열기
  $(".header__qnb").mouseenter(() => {
    $(".header__qnb ul").slideDown();
  });

  $(".header__qnb").mouseleave(() => {
    $(".header__qnb ul").slideUp();
  });
});
