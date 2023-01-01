const cookie = require("borek")

module.exports.set = function(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";path=/";
}

module.exports.get = function(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';') ? document.cookie.split(';') : "" 
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

module.exports.check = function() {
  let user = get("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      set("username", user, 365);
    }
  }
}

module.exports.update = function() {}

String.prototype.fasterMap = (arr, transform) => {
  const len = arr.length;
  const newArr = new Array(len);
  for (let i = 0; i < len; i++) {
    newArr[i] = transform(arr[i]);
  }
  return newArr;
};