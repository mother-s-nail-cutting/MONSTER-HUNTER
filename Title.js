//ロード画面
window.addEventListener("load", function() {
  //タイトルとボタン
  this.setTimeout(function() {
    this.document.getElementById("text").classList.remove("active");
  }, 550)
  //loading画面
  setTimeout(function() {
    document.getElementById("loading").classList.remove("active");
  }, 500)
})



//最大

//タイトルとボタン
this.setTimeout(function() {
  this.document.getElementById("text").classList.remove("active");
}, 5050)
//loading画面
setTimeout(function() {
  document.getElementById("loading").classList.remove("active");
}, 5000)



/*タイトルのアニメーション*/
const animationTargetElement = document.querySelectorAll(".main");//class名がmainの要素を取得

const texts = animationTargetElement[0].textContent;//要素から文字列を取得

const textsArray = [];

animationTargetElement[0].textContent = "";//表示する文字列を空にする

//文字列を分割
for(let i = 0; i < texts.split("").length; i++){
  //空白は含めない
  if(texts.split("")[i] === " "){
    textsArray.push(" ");
  }else{
    textsArray.push('<span style="animation-delay: ' + (i * 0.1) + 's;">' + texts.split("")[i] + '</span>');//一文字ずつ遅延
  }
}
//文字列を元に戻す
for(let i = 0; i < textsArray.length; i++){
  animationTargetElement[0].innerHTML += textsArray[i];
}