"use strict";

const btn = document.querySelector(".btn");
let input = document.querySelector("#input");
const ul = document.querySelector(".list");

btn.addEventListener("click", function (e) {
  const li = document.createElement("li");
  let value = input.value;
  const dltBtn = document.createElement("button");
  const span = document.createElement("span");
  span.textContent = value;
  dltBtn.style.padding = "5px 10px";
  dltBtn.style.backgroundColor = "rgb(182, 180, 180)";
  dltBtn.style.border = "3px solid rgb(182, 180, 180)";
  dltBtn.style.margin = "10px";
  dltBtn.textContent = "Delete";
  dltBtn.addEventListener("click", function () {
    span.remove();
    li.remove();
    dltBtn.remove();
  });

  li.appendChild(span);
  li.appendChild(dltBtn);
  ul.appendChild(li);

  e.preventDefault();
  input.focus();
});
