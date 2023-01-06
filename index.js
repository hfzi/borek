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

/* Methods */

// Fastermap
module.exports.fasterMap = Array.prototype.fasterMap = function(transform) {
  const len = this.length
  const newArr = new Array(len);
  for (let i = 0; i < len; i++) {
    newArr[i] = transform(this[i]);
  }
  return newArr;
};

// Remove
module.exports.remove = Array.prototype.remove = function(value) {
  var index = this.indexOf(value);
  if (index > -1) {
    this.splice(index, 1);
  }
  return this;
};

// Remove All
module.exports.removeAll = Array.prototype.removeAll = function(value) {
  var i = 0;
  while (i < this.length) {
    if (this[i] === value) {
      this.splice(i, 1);
    } else {
      ++i;
    }
  }
  return this;
};

