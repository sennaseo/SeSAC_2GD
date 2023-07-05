const mint = document.getElementById("mint");
console.log(mint);

mint.innerText = "민트 초코는 맛없다!!";

const 푸 = document.querySelector("#pooh");

푸.setAttribute("src", "../CSS/img/eeyore.png");
푸.alt = "이요르";

console.log(pooh.src);
console.log(pooh.alt);

for (let img of list) {
  console.log(img);
  img.style.width = "150px";
}
