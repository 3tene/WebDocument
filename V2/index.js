// 画面の準備ができたら...
jQuery(function($){

  window.onhashchange = function(){
    showContents();
  }
  showContents();
  showMenu()

  // ★marked.js の設定
  marked.setOptions({
    // 改行を認識する。（スペース×２は不要）
    breaks : true,
  });

  function showContents(){
// add (S) スクロール位置をトップに戻す。
    $(window).scrollTop(0);
// add (E)
    var url = location.hash.replace('#', '');
    if(url){
      $.ajax({
        url: url,
        cache: false,
        success: function(md){
          var html = marked(md);
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
        }
      });
    }
  }

  function showMenu(){
    // Chrome ローカルファイルにAjaxリクエストを送るとエラーになる。仕様らしい。
    // ※ ForeFox と EDGE は動作する。
    $.ajax({
      url: 'menu.md',
      cache: false,
      success: function(md){
        var html = marked(md);
        $('.st-SubMenu').html(html);
      }
    });
  }

});
