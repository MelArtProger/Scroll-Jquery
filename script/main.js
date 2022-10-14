function slowScroll(id) {
  var offset = 0; /* Устанавливаем значение от верха, например плавующая шапка
   20px, значит ставим offset 20, при scrolle не будет заезжать на текст */
  $('html, body').animate({
    scrollTop: $(id).offset().top - offset
  }, 2000);
  return false;
}
