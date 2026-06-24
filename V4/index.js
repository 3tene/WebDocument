// 画面の準備ができたら...
jQuery(function($) {

  window.onhashchange = function() {
    showContents();
  }
  showContents();
  showMenu();

  // ★marked.js の設定
  marked.setOptions({
    // 改行を認識する。（スペース×２は不要）
    breaks : true,
  });

  function showContents() {
// add (S) スクロール位置をトップに戻す。
    $(window).scrollTop(0);
// add (E)
    let url = location.hash.replace('#', '');
    if (url) {
      $.ajax({
        url: url,
        cache: false,
        success: function(md) {
          let html = marked.parse(md);
          $('.st-MainContents').html(html);
/*
// css 用に変換する。
var mdEls = document.querySelectorAll('.st-MainContents');
for(var i in mdEls){
    var mdEl = mdEls[i];
    var converted = document.createElement('div');
    converted.className = 'marked';
    converted.innerHTML = marked(mdEl.value);
    mdEl.parentNode.replaceChild(converted, mdEl);
}
*/
        },
        error: function(xhr, status, err) {
          $('.st-MainContents').html(`<p>⚠️ コンテンツを読み込めませんでした。</p>`);
        }
      });
    }
  }

  function showMenu(){
    // google 翻訳での表示対策が必要。
    // 元サイトへの AJAX 通信が CORS（Cross-Origin Resource Sharing）でブロックされると400。
    // https://3tene-github-io.translate.goog/WebDocument/menu.md は 404。
    let baseDir = '';
    // Chrome ローカルファイルにAjaxリクエストを送るとエラーになる。仕様らしい。
    // ※ ForeFox と EDGE は動作する。
    $.ajax({
      url: baseDir + 'menu.md',
      cache: false,
      success: function(md) {
        let html = marked.parse(md);
        $('.st-SubMenu').html(html);
      },
      error: function(xhr, status, err) {
        $('.st-SubMenu').html(`<p>⚠️ メニューを読み込めませんでした。1-${baseDir}</p>`);
      }
    });
  }

});
