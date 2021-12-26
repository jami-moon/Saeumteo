$(document).ready(function () {
  // 풀페이지 js
  $("#fullpage").fullpage({
    autoScrolling: true,
  });

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
});
