function start() {
  document.location.href = /os.html/;
}
function dark() {
   document.getElementById("body").classList.remove('background');
  document.getElementById("body").classList.remove('dark');
  document.getElementById("body").classList.remove('light');
   document.getElementById("body").classList.add('dark');
   document.getElementById("header").classList.add('dark');
  document.getElementById("continue").classList.add('dark');
}
function light() {
  document.getElementById("body").classList.remove('dark');
  document.getElementById("body").classList.remove('light');
  document.getElementById("body").classList.add('background');
  document.getElementById("header").classList.remove('dark');
  document.getElementById("continue").classList.remove('dark');
}
function bright() {
  document.getElementById("body").classList.remove('dark');
  document.getElementById("body").classList.remove('background');
  document.getElementById("body").classList.add('light');
  document.getElementById("header").classList.remove('dark');
  document.getElementById("body").classList.add('light');
  document.getElementById("continue").classList.remove('dark');
}
