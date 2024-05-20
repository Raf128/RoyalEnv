function start() {
  document.location.href = /os.html/;
  if 
}
function dark() {
   document.getElementById("body").classList.remove('background');
  document.getElementById("body").classList.remove('dark');
  document.getElementById("body").classList.remove('light');
   document.getElementById("body").classList.add('dark');
   document.getElementById("header").classList.add('dark');
  let dark = true;
  let light = false;
  let normal = false;
}
function light() {
  document.getElementById("body").classList.remove('dark');
  document.getElementById("body").classList.remove('light');
  document.getElementById("body").classList.add('background');
  document.getElementById("header").classList.remove('dark');
  let dark = false;
  let normal = true;
  let light = false;
}
function bright() {
  document.getElementById("body").classList.remove('dark');
  document.getElementById("body").classList.remove('background');
  document.getElementById("body").classList.add('light');
  document.getElementById("header").classList.remove('dark');
  document.getElementById("body").classList.add('light');
 let dark = false;
 let normal = false;
 let light = true;
}
