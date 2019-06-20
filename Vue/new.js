var tasks = [];
function doFirst() {
  document.getElementById("theForm").onsubmit = addTask;
}
function addTask() {
  var task = document.getElementById("task");
  var output = "";
  tasks.push(task.value);

  output += "<h3>Hihi List</h3>";
  output += "<ol><li>";
  output += tasks.join("</li><li>"); //join() 方法會將陣列（或一個類陣列（array-like）物件）中所有的元素連接、合併成一個字串，並回傳此字串。 //["111","222","333"]
  output += "</li></ol>";
  document.getElementById("output").innerHTML = output;

  return false;
}
window.addEventListener("load", doFirst);
