//受注ボタンクリック時のイベント
function clickButton() {
      if(document.querySelectorAll(".char41")[0].textContent === "受注"){
        document.getElementById("yWindow").classList.remove("active");
      }else if(document.querySelectorAll(".char41")[0].textContent === "受注済"){
        document.getElementById("nWindow").classList.remove("active");
    }
}

//緑の点
const button1 = document.getElementById("button");

button1.addEventListener("mouseover", function() {
  document.getElementById("circle").classList.remove("active");
});

button1.addEventListener("mouseleave", function() {
  document.getElementById("circle").classList.add("active");
});

function clickButtonY() {
  document.getElementById("yWindow").classList.add("active");
  document.querySelectorAll(".char41")[0].textContent = "受注済";
}

function clickButtonN() {
  document.getElementById("yWindow").classList.add("active");
}

function clickButtonY2() {
  document.getElementById("nWindow").classList.add("active");
  document.querySelectorAll(".char41")[0].textContent = "受注";
}

function clickButtonN2() {
  document.getElementById("nWindow").classList.add("active");
}
