/* =====================================================
   ✏️ الجزء ده الوحيد اللي هتعدّلي فيه (الإعدادات)
   ===================================================== */
const CONFIG = {
  name: "نسمة",
  // تاريخ عيد الميلاد: السنة، الشهر (نوفمبر = 11)، اليوم
  birthday: { year: 2026, month: 11, day: 10 },

  // ملف الأغنية: حطيه في assets/music/ وغيّري الاسم هنا
  song: "assets/music/song.mp3",

  introTitle: "فيه مفاجأة مستنياكي يا نسمة... ❤️",
  introSub: "مستعدة تعيشي لحظات صغيرة مليانة حب؟",
  giftMessage: "كل سنة وإنتِ أجمل نسمة عدّت على حياتنا...",
  memoriesTitle: "حكايات نسمة الجميلة",
  letterTitle: "إلى نسمة... أختي وحبيبتي وأجمل نعمة في حياتي",

  // الصور: غيّري الاسم والتعليق، وزوّدي سطر لكل صورة جديدة
  photos: [
    { src: "assets/images/1.jpg", caption: "أحلى ضحكة", date: "" },
    { src: "assets/images/2.jpg", caption: "يوم ما نسيناه", date: "" },
    { src: "assets/images/3.jpg", caption: "لمّة العيلة", date: "" },
    { src: "assets/images/4.jpg", caption: "لحظة حلوة", date: "" }
  ],

  // الرسالة: كل سطر فقرة
  letter: [
    "كل سنة وإنتِ طيبة يا أجمل وأغلى أخت في الدنيا.",
    "يمكن الأيام بتعدي بسرعة ويمكن كل واحد فينا بيكون مشغول بحياته، لكن مكانتك عندي عمرها ما بتتغير.",
    "إنتِ مش مجرد أخت، إنتِ جزء من قلبي وذكرياتي وأجمل الحاجات اللي ربنا رزقني بيها.",
    "أتمنى السنة الجديدة من عمرك تكون مليانة راحة بال وفرحة ونجاح وتحقيق لكل حاجة نفسك فيها.",
    "ربنا يحفظك ويبارك في عمرك ويبعد عنك كل حزن ويجعل أيامك كلها خير وسعادة.",
    "ويا رب مهما كبرنا ومهما الدنيا أخدتنا في طرق مختلفة نفضل دايمًا قريبين من بعض.",
    "كل سنة وإنتِ نعمة في حياتنا، وكل سنة وإنتِ أجمل وأغلى أخت.",
    "بحبك جدًا ❤️"
  ],
  letterSignature: "أخوكي",

  finalTitle: "عيد ميلاد سعيد يا نسمة ❤️",
  finalText:
`كل سنة وإنتِ الفرحة اللي بتنور بيتنا والضحكة اللي بتحلي أيامنا.
ربنا يجعل كل أيامك جميلة زي قلبك ويحققلك كل اللي نفسك فيه.
مهما كبرنا ومهما الأيام أخدتنا بعيد، هتفضلي دايمًا أختي الغالية ومكانك في قلبي عمره ما يتغير.
بحبك يا نسمة، وكل سنة وإنتِ أجمل نسمة في حياتنا.`,

  countdownToday: "النهارده يومك يا أجمل أخت ❤️",
  countdownAfter: "كل سنة وإنتِ طيبة يا نسمة 🎉 الفرحة لسه مكمّلة!"
};

/* =====================================================
   من هنا وتحت: الكود (مش لازم تعدّلي فيه)
   ===================================================== */
const $ = id => document.getElementById(id);
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- نصوص ثابتة ---------- */
$("introTitle").textContent = CONFIG.introTitle;
$("introSub").textContent = CONFIG.introSub;
$("giftMsg").textContent = CONFIG.giftMessage;
$("heroName").textContent = "كل سنة وإنتِ طيبة يا " + CONFIG.name;
$("memTitle").textContent = CONFIG.memoriesTitle;
$("letterTitle").textContent = CONFIG.letterTitle;
$("finalTitle").textContent = CONFIG.finalTitle;
$("finalText").textContent = CONFIG.finalText;

/* ---------- المؤثرات (Canvas) ---------- */
const cv = $("fx"), cx = cv.getContext("2d");
let W, H, parts = [], mode = "ambient"; // ambient | hearts
function size(){ W = cv.width = innerWidth; H = cv.height = innerHeight; }
addEventListener("resize", size); size();

function ambient(){            // جزيئات ذهبية هادئة
  return { x: Math.random()*W, y: Math.random()*H, r: 1+Math.random()*2.2, vy: -.15-Math.random()*.3,
           vx: (Math.random()-.5)*.2, a: .2+Math.random()*.6, kind: "dot", life: Infinity };
}
function burst(n = 90){        // كونفيتي ناعم
  const cols = ["#d4b483","#c9908f","#faf4ea","#8e6b84","#e6cf9f"];
  for (let i = 0; i < n; i++) parts.push({ x: W/2, y: H*.55, vx: (Math.random()-.5)*9, vy: -4-Math.random()*8,
    r: 3+Math.random()*4, c: cols[i%5], a: 1, kind: "conf", life: 140+Math.random()*60, g: .16 });
}
function heart(x, y, s, c){
  cx.save(); cx.translate(x, y); cx.scale(s, s); cx.beginPath();
  cx.moveTo(0,.3); cx.bezierCurveTo(-1,-.5,-1.6,.5,0,1.4); cx.bezierCurveTo(1.6,.5,1,-.5,0,.3);
  cx.fillStyle = c; cx.fill(); cx.restore();
}
function spawnHeart(){
  parts.push({ x: Math.random()*W, y: H+20, vy: -.6-Math.random()*.9, vx: (Math.random()-.5)*.4, r: 6+Math.random()*9,
    a: .7, kind: "heart", life: 600 });
}
const count = innerWidth < 600 ? 28 : 50;
for (let i = 0; i < count; i++) parts.push(ambient());

(function loop(){
  cx.clearRect(0, 0, W, H);
  if (mode === "hearts" && Math.random() < .06) spawnHeart();
  parts = parts.filter(p => p.life > 0);
  for (const p of parts) {
    p.x += p.vx; p.y += p.vy; p.life--;
    if (p.g) p.vy += p.g;
    if (p.kind === "conf") p.a = Math.min(1, p.life/50);
    cx.globalAlpha = p.a;
    if (p.kind === "heart") heart(p.x, p.y, p.r/2, "#e8a9b0");
    else { cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 7); cx.fillStyle = p.c || "#e6cf9f"; cx.fill(); }
    if (p.kind === "dot" && p.y < -5) { p.y = H+5; p.x = Math.random()*W; }
  }
  cx.globalAlpha = 1;
  requestAnimationFrame(loop);
})();

/* ---------- الموسيقى ---------- */
const audio = $("audio"), player = $("player");
audio.src = CONFIG.song; audio.volume = .6;
function setPlaying(on){ player.classList.toggle("playing", on); $("playBtn").textContent = on ? "❚❚" : "▶"; }
$("playBtn").onclick = () => {
  if (audio.paused) audio.play().then(() => setPlaying(true)).catch(() => alert("ملف الأغنية مش موجود في assets/music"));
  else { audio.pause(); setPlaying(false); }
};
$("vol").oninput = e => audio.volume = e.target.value;

/* ---------- التنقل بين المشاهد ---------- */
function show(id){ document.querySelectorAll(".scene").forEach(s => s.classList.toggle("active", s.id === id)); }

$("openBtn").onclick = () => show("gift");

let opened = false;
$("box").onclick = () => {
  if (opened) return; opened = true;
  $("gift").classList.add("opened");
  $("giftHint").hidden = true;
  if (!reduce) burst();
  setTimeout(() => $("giftMsg").classList.add("show"), 900);
  setTimeout(() => $("enterBtn").hidden = false, 2600);
};

$("enterBtn").onclick = () => {
  show("");                       // يخفي كل المشاهد
  $("main").hidden = false;
  player.hidden = false;
  scrollTo(0, 0);
  audio.play().then(() => setPlaying(true)).catch(() => {}); // بعد ضغطة المستخدم يشتغل عادي
  watchMemories();
};

/* ---------- العد التنازلي ---------- */
function tick(){
  const b = CONFIG.birthday, box = $("countdown");
  const start = new Date(b.year, b.month - 1, b.day), end = new Date(b.year, b.month - 1, b.day + 1), now = new Date();
  if (now >= end) return box.innerHTML = `<div class="today">${CONFIG.countdownAfter}</div>`;
  if (now >= start) return box.innerHTML = `<div class="today">${CONFIG.countdownToday}</div>`;
  let s = Math.floor((start - now) / 1000);
  const d = Math.floor(s/86400), h = Math.floor(s%86400/3600), m = Math.floor(s%3600/60), sec = s%60;
  box.innerHTML = [[d,"يوم"],[h,"ساعة"],[m,"دقيقة"],[sec,"ثانية"]]
    .map(([v,l]) => `<div class="u"><b>${v}</b><small>${l}</small></div>`).join("");
}
tick(); setInterval(tick, 1000);

/* ---------- الذكريات ---------- */
const tl = $("timeline");
CONFIG.photos.forEach(p => {
  const el = document.createElement("div"); el.className = "mem";
  el.innerHTML = `<figure>${p.date ? `<time>${p.date}</time>` : ""}<img loading="lazy" src="${p.src}" alt="${p.caption}"><figcaption>${p.caption}</figcaption></figure>`;
  el.querySelector("img").onerror = e => e.target.removeAttribute("src"); // لو الصورة مش موجودة يظهر لون بدل الأيقونة المكسورة
  el.onclick = () => {
    const lb = $("lightbox"); lb.querySelector("img").src = p.src; lb.querySelector("p").textContent = p.caption; lb.hidden = false;
  };
  tl.appendChild(el);
});
$("lightbox").onclick = () => $("lightbox").hidden = true;
function watchMemories(){
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .2 });
  document.querySelectorAll(".mem").forEach(m => io.observe(m));
}

/* ---------- الرسالة ---------- */
const openLetter = () => {
  $("envelope").hidden = true;
  const c = $("letterCard");
  c.innerHTML = CONFIG.letter.map(t => `<p>${t}</p>`).join("") + `<p class="sig">${CONFIG.letterSignature}</p>`;
  c.hidden = false;
};
$("envelope").onclick = openLetter;
$("envelope").onkeydown = e => { if (e.key === "Enter") openLetter(); };

/* ---------- المفاجأة الأخيرة ---------- */
$("finalBtn").onclick = () => { $("final").hidden = false; mode = "hearts"; if (!reduce) burst(120); };
$("replayBtn").onclick = () => location.reload();
