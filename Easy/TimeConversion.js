let s = "12:45:54PM";
let format = s.slice(8);
let hours12 = 0;
let hours24 = 0;

if (format === "AM") {
  if (s.indexOf("12") >= 0) {
    s = s.replace("12", "00");
  }
  s = s.slice(0, -2);
} else {
  hours12 = s.split(":");
  if (hours12[0] != "12") {
    hours24 = parseInt(hours12[0]) + 12;
    s = s.replace(hours12[0], hours24);
  }
  s = s.slice(0, -2);
}

console.log(s);
