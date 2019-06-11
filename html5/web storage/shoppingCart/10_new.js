var storage = sessionStorage;
function doFirst() {
  if (storage["addItemList"] == null) {
    storage["addItemList"] = ""; //storage.setItem('addItemList','');
  }

  // 幫每個Add Cart建事件聆聽功能
  var list = document.querySelectorAll(".addButton"); //list是陣列

  for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function() {
      var teddyInfo = document.querySelector("#" + this.id + " input").value;
      addItem(this.id, teddyInfo);
    });
  }
}
function addItem(itemId, itemValue) {
  //   alert(itemId + " : " + itemValue);
  var image = document.createElement("img");
  image.src = "imgs/" + itemValue.split("|")[1]; //字串 --> 陣列

  var title = document.createElement("span");
  title.innerText = itemValue.split("|")[0];

  var price = document.createElement("span");
  price.innerText = itemValue.split("|")[2];

  var newItem = document.getElementById("newItem");
  while (newItem.childNodes.length >= 1) {
    newItem.removeChild(newItem.firstChild);
  }

  newItem.appendChild(image);
  newItem.appendChild(title);
  newItem.appendChild(price);
}
window.addEventListener("load", doFirst);
