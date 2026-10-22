/* Phakin Ninson — portfolio interactions */
(function(){
var roles=["Frontend Developer","UX/UI Designer","React · Next.js · TypeScript","Wireframe → Prototype → Code"],el=document.getElementById("type"),i=0,j=0,d=false;
function tick(){var t=roles[i];el.textContent=t.slice(0,j);if(!d&&j++===t.length){d=true;return setTimeout(tick,1500)}if(d&&j--===0){d=false;i=(i+1)%roles.length}setTimeout(tick,d?35:70)}
if(matchMedia("(prefers-reduced-motion:reduce)").matches){el.textContent=roles[0]}else{tick()}
var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.12});
document.querySelectorAll(".rv0").forEach(function(n){io.observe(n)});
var g=document.getElementById("glow");addEventListener("pointermove",function(e){g.style.left=e.clientX+"px";g.style.top=e.clientY+"px"});
})();

/* Screenshot viewers + gallery */
(function(){var D={
 "cook": [
  {
   "t": "Landing",
   "s": "images/cooking-1.jpg"
  },
  {
   "t": "Ingredient Picker",
   "s": "images/cooking-2.jpg"
  },
  {
   "t": "Scan Ingredients",
   "s": "images/cooking-3.jpg"
  },
  {
   "t": "Popular Recipes",
   "s": "images/cooking-4.jpg"
  }
 ],
 "port": [
  {
   "t": "Cover",
   "s": "images/portfolio-1.jpg"
  },
  {
   "t": "Contents",
   "s": "images/portfolio-2.jpg"
  }
 ],
 "thai": [
  {
   "t": "Home",
   "s": "images/thai-cuisine-1.jpg"
  },
  {
   "t": "What is Thai Food",
   "s": "images/thai-cuisine-2.jpg"
  },
  {
   "t": "Food Categories",
   "s": "images/thai-cuisine-3.jpg"
  },
  {
   "t": "Popular Menu",
   "s": "images/thai-cuisine-4.jpg"
  }
 ]
};
var NM={cook:"ครัวเปิดตู้",port:"Digital Portfolio",thai:"Authentic Thai Cuisine"},rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
document.querySelectorAll(".shot").forEach(function(A){
var k=A.dataset.k,S=D[k],T=document.querySelector('.thumbs[data-k="'+k+'"]'),C=A.querySelector(".cap"),im=[],bt=[],cur=0,tm;
function show(n){cur=n;im.forEach(function(x,i){x.classList.toggle("on",i===n)});bt.forEach(function(x,i){x.classList.toggle("on",i===n)});C.textContent=S[n].t}
function auto(){clearInterval(tm);if(!rm)tm=setInterval(function(){show((cur+1)%S.length)},3400)}
S.forEach(function(s,i){var a=new Image();a.src=s.s;a.alt=s.t;A.insertBefore(a,C);im.push(a);
var b=document.createElement("button");b.type="button";b.setAttribute("aria-label",s.t);var t=new Image();t.src=s.s;t.alt="";b.appendChild(t);b.onclick=function(){show(i);auto()};T.appendChild(b);bt.push(b)});
show(0);auto()});
var G=document.getElementById("gal"),all=[];Object.keys(D).forEach(function(k){D[k].forEach(function(s){all.push({t:NM[k]+" · "+s.t,s:s.s})})});
[all,all.slice().reverse()].forEach(function(arr,r){var row=document.createElement("div");if(r)row.className="rv";arr.concat(arr).forEach(function(s){var d=document.createElement("div");d.className="tile im";var i=new Image();i.src=s.s;i.alt=s.t;var b=document.createElement("b");b.textContent=s.t;d.appendChild(i);d.appendChild(b);row.appendChild(d)});G.appendChild(row)});
})();
