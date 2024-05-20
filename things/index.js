function start() {
  document.location.href = /os.html/;
}
function dark() {
   document.getElementById("body").classList.remove('background');
   document.getElementById("body").classList.add('dark');
   document.getElementById("header").classList.add('dark');
}
function light() {
  document.getElementById("body").classList.remove('dark');
  document.getElementById("body").classList.add('background');
  document.getElementById("header").classList.remove('dark');
}
