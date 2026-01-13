$(function(){
  /*-------------------------------
  ハンバーガーメニュー
  ---------------------------------*/
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $("#header .navi").toggleClass("active");
    $("#header .mask").toggleClass("active");
  });
  
  $(".navi a").click(function () {
    $(".hamburger").removeClass("active");
    $("#header .navi").removeClass("active");
    $("#header .mask").removeClass("active");
  });
  
  $(".mask").click(function () {
    $(".hamburger").removeClass("active");
    $("#header .navi").removeClass("active");
    $("#header .mask").removeClass("active");
  });
  
  /*-------------------------------
  ドロップダウンメニュー
  ---------------------------------*/
  $(".navi .menu .menu-first span").click(function () {
    $(this).toggleClass("active");
    $(this).next().slideToggle();
  });
  
  $(".navi .menu .menu-second").click(function () {
    $(this).prev().toggleClass("active");
    $(this).slideToggle();
  });

  /*-------------------------------
  Inview
  ---------------------------------*/
  $(".fadein").on("inview", function () {
    $(this).addClass("inview");
  });

  /*-------------------------------
  タブ切り替え
  ---------------------------------*/
  $(".tab-list .tab-all").addClass("active");
  $(".products-list.all").addClass("active");
  $(".drink-panel").removeClass("active");

  $(".tab-all").click(function () {
    $(".tab-list li").removeClass("active");
    $(".products-list").removeClass("active");
    $(".drink-panel").removeClass("active");
    $(this).addClass("active");
    $(".products-list.all").addClass("active");
  });
  
  $(".tab-lunch").click(function () {
    $(".tab-list li").removeClass("active");
    $(".products-list").removeClass("active");
    $(".drink-panel").removeClass("active");
    $(this).addClass("active");
    $(".products-list.lunch").addClass("active");
  });
  
  $(".tab-oyster").click(function () {
    $(".tab-list li").removeClass("active");
    $(".products-list").removeClass("active");
    $(".drink-panel").removeClass("active");
    $(this).addClass("active");
    $(".products-list.oyster").addClass("active");
  });
  
  $(".tab-main").click(function () {
    $(".tab-list li").removeClass("active");
    $(".products-list").removeClass("active");
    $(".drink-panel").removeClass("active");
    $(this).addClass("active");
    $(".products-list.main").addClass("active");
  });
  
  $(".tab-appetizer").click(function () {
    $(".tab-list li").removeClass("active");
    $(".products-list").removeClass("active");
    $(".drink-panel").removeClass("active");
    $(this).addClass("active");
    $(".products-list.appetizer").addClass("active");
  });

  $(".tab-drink").click(function () {
    $(".tab-list li").removeClass("active");
    $(".products-list").removeClass("active");
    $(".drink-panel").removeClass("active");
    $(this).addClass("active");
    $(".drink-panel").addClass("active");
  });

  /*-------------------------------
  モーダルウィンドウ
  ---------------------------------*/
  // オープン
  $(".work1 .modal-open").click(function () {
    $("body").css("overflow-y", "hidden");
    $(".work1 .modal-container").addClass("active");
  });
  
  $(".work2 .modal-open").click(function () {
    $("body").css("overflow-y", "hidden");
    $(".work2 .modal-container").addClass("active");
  });
  
  $(".work3 .modal-open").click(function () {
    $("body").css("overflow-y", "hidden");
    $(".work3 .modal-container").addClass("active");
  });

  // クローズ
  $(".modal-close").click(function () {
    $("body").css("overflow-y", "auto");
    $(".modal-container").removeClass("active");
  });

  /*-------------------------------
  アコーディオン
  ---------------------------------*/
  $(".faq-list dd").hide();
  $(".faq-list dt").click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass("active");
  });

  /*-------------------------------
  フォーム バリデーション（予約・お問い合わせ）
  ---------------------------------*/
  function validateForm($form) {
    var ok = true;
    $form.find('[required]').each(function(){
      var el = this;
      var $el = $(el);
      var valid = true;
      if (el.type === 'checkbox') {
        valid = el.checked;
      } else {
        valid = !!el.value;
      }
      if (!valid) {
        ok = false;
        $el.addClass('has-error');
      } else {
        $el.removeClass('has-error');
      }
    });
    return ok;
  }

  $(document).on('input change', '#reserve-form [required], #contact-form [required]', function(){
    $(this).removeClass('has-error');
  });

  $(document).on('submit', '#reserve-form, #contact-form', function(e){
    var $form = $(this);
    if (!validateForm($form)) {
      e.preventDefault();
      alert('未入力の項目があります。ご確認ください。');
      return;
    }
    // デモ用のため送信は行わず、完了アラートを表示します。
    e.preventDefault();
    alert('送信が完了しました。店舗より確認のご連絡をいたします。');
    this.reset();
  });

  /*-------------------------------
  スムーススクロール（予約/お問い合わせ 選択）
  ---------------------------------*/
  $(document).on('click', '.action-choice .choice-btn', function(e){
    var href = $(this).attr('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      var $target = $(href);
      if ($target.length) {
        var top = $target.offset().top - 10; // 少し余白
        $('html, body').animate({ scrollTop: top }, 500);
      }
    }
  });
});