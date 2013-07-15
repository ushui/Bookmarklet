// is Bookmarklet, please copy this.
/*
javascript:(function(){d=document;c=d.charset||0;s=getSelection();if(s&&s.rangeCount>0){o=d.createElement("div");o.appendChild(s.getRangeAt(0).cloneContents());h=o.innerHTML;}else{h=d.documentElement.outerHTML;}d=window.open().document.open();d.write("<pre>"+h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")+"</pre>");c?d.charset=c:0;void(d.close());}());
*/

// Original Source
/*
javascript:(function(){
  d=document;
  c=d.charset||0;
  s=getSelection();
  if(s&&s.rangeCount>0){
    o=d.createElement("div"); // ダミー
    o.appendChild(s.getRangeAt(0).cloneContents());
    h=o.innerHTML; // outerHTMLではダミーのdiv要素も表示されてしまう
  } else {
    h=d.documentElement.outerHTML; // innerHTMLでは最も外側の要素が表示されない
  }
  d=window.open().document.open(); // 既存の変数はいらなくなったので上書きしてリサイクル
  d.write("<pre>"+h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")+"</pre>");
  c?d.charset=c:0;
  void(d.close());
}());
*/
