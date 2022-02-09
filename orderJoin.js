const button1 = document.getElementById("button01");

button1.addEventListener("mouseover", function() {
  document.getElementById("circle1").classList.remove("active");
});

button1.addEventListener("mouseleave", function() {
  document.getElementById("circle1").classList.add("active");
});


const button2 = document.getElementById("button02");

button2.addEventListener("mouseover", function() {
  document.getElementById("circle2").classList.remove("active");
});

button2.addEventListener("mouseleave", function() {
  document.getElementById("circle2").classList.add("active");
});
