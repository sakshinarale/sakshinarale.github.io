// ===== EDIT YOUR CONTENT HERE =====

// Work experience. Leave as [] if you have none (section stays hidden).
var experience = [
  // { role: "Data Analyst Intern", company: "Company name", period: "Month Year – Month Year", place: "City",
  //   points: ["What you did 1", "What you did 2"] }
];

// Projects: copy one { } block to add a project. image = screenshot in images folder (optional).
var projects = [
  { icon: "📊", title: "Sales Data Analysis Dashboard",
    desc: "Interactive Power BI dashboard built after cleaning, transforming and modelling sales data.",
    tools: ["Power BI", "Excel", "DAX"], image: "images/project1.png", github: "[GitHub URL]", demo: "" },
  { icon: "🛒", title: "E-Commerce Data Analysis",
    desc: "SQL analysis using JOINs, GROUP BY, subqueries and window functions to answer business questions.",
    tools: ["SQL", "MySQL", "Window Functions"], image: "images/project2.png", github: "[GitHub URL]", demo: "" },
  { icon: "📈", title: "Customer/Sales Data Analysis",
    desc: "Data cleaning, exploratory analysis, visualization and trend analysis in Python.",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib"], image: "images/project3.png", github: "[GitHub URL]", demo: "" },
  { icon: "🔍", title: "Fake News Detection System",
    desc: "Machine learning text classifier with a simple web interface that predicts whether news is fake.",
    tools: ["Python", "Machine Learning", "HTML/CSS/JS", "MySQL"], image: "images/project4.png", github: "[GitHub URL]", demo: "" }
];

var skills = [
  { title: "Languages & Querying", items: ["Python", "SQL"] },
  { title: "Python Libraries", items: ["NumPy", "Pandas", "Matplotlib"] },
  { title: "Data Analysis", items: ["Data Cleaning", "Statistics", "Data Visualization"] },
  { title: "BI & Visualization", items: ["Power BI", "DAX", "Tableau", "Excel"] },
  { title: "Database", items: ["MySQL"] },
  { title: "Other", items: ["Genera            tive AI"] }
];

// Proficiency bars: level 0-100. Please set honest values.
var levels = [
  { name: "SQL", level: 60 }, { name: "Excel", level: 60 }, { name: "Power BI", level: 60 },
  { name: "Python", level: 60 }, { name: "Statistics", level: 60 }, { name: "Tableau", level: 40 }
];

var softSkills = [];   // e.g. ["Communication", "Teamwork"]; [] hides it

var certs = [
  { name: "[Certificate name]", by: "[Issuer]", link: "" },
  { name: "[Certificate name]", by: "[Issuer]", link: "" },
  { name: "[Certificate name]", by: "[Issuer]", link: "" }
];

var contact = [
  { label: "Email", value: "naralesakshi2006@gmail.com", href: "mailto:naralesakshi2006@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/sakshi-narale-2b8202322", href: "https://www.linkedin.com/in/sakshi-narale-2b8202322" },
  { label: "GitHub", value: "github.com/sakshinarale", href: "https://github.com/sakshinarale" },
  { label: "Location", value: "[City, State, Country]", href: "" }
];

// Words that rotate in the hero line: "I turn data into ..."
var words = ["insights.", "dashboards.", "decisions.", "stories."];

// ===== PAGE CODE (no need to edit below) =====
document.documentElement.classList.add("js");
function esc(t) { var d = document.createElement("div"); d.textContent = t; return d.innerHTML; }
function chips(a) { return '<div class="chips">' + a.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") + "</div>"; }
function $(id) { return document.getElementById(id); }

if (experience.length) {
  $("experience").hidden = false;
  $("expList").innerHTML = experience.map(function (e) {
    return '<article class="card rv"><h3>' + esc(e.role) + "</h3><p>" + esc(e.company) + " · " + esc(e.period) +
      (e.place ? " · " + esc(e.place) : "") + "</p><ul>" + e.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul></article>";
  }).join("");
} else { $("navExp").hidden = true; }

$("projGrid").innerHTML = projects.map(function (p) {
  return '<article class="card proj rv tilt"><div class="pimg">' + p.icon + '<img src="' + esc(p.image) + '" alt="" onerror="this.remove()"></div>' +
    '<div class="pbody"><h3>' + esc(p.title) + "</h3><p>" + esc(p.desc) + "</p>" + chips(p.tools) +
    '<div class="links"><a href="' + esc(p.github) + '">GitHub</a>' + (p.demo ? '<a href="' + esc(p.demo) + '">Live Demo</a>' : "") + "</div></div></article>";
}).join("");

$("skillGrid").innerHTML = skills.map(function (s) { return '<div class="card rv"><h3>' + esc(s.title) + "</h3>" + chips(s.items) + "</div>"; }).join("");
$("bars").innerHTML = levels.map(function (l) {
  return '<div class="bar-row"><span>' + esc(l.name) + '</span><div class="track" role="img" aria-label="' + esc(l.name) + ' skill level"><div class="fill" style="--w:' + Number(l.level) + '%"></div></div></div>';
}).join("");
if (softSkills.length) { $("softBox").hidden = false; $("softList").innerHTML = softSkills.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join(""); }
$("certGrid").innerHTML = certs.map(function (c) {
  return '<div class="card rv"><h3>' + esc(c.name) + "</h3><p>" + esc(c.by) + "</p>" + (c.link ? '<div class="links"><a href="' + esc(c.link) + '">View Certificate</a></div>' : "") + "</div>";
}).join("");
$("contactGrid").innerHTML = contact.map(function (c) {
  var i = "<b>" + esc(c.label) + "</b><span>" + esc(c.value) + "</span>";
  return c.href ? '<a class="card rv" href="' + esc(c.href) + '">' + i + "</a>" : '<div class="card rv">' + i + "</div>";
}).join("");

// tools marquee (built from your skills, doubled for a seamless loop)
var tools = [];
skills.forEach(function (s) { s.items.forEach(function (t) { if (tools.indexOf(t) < 0) tools.push(t); }); });
var strip = tools.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
$("marquee").innerHTML = strip + strip;

$("year").textContent = new Date().getFullYear();
var menu = $("menu"), nav = $("nav");
menu.addEventListener("click", function () { var o = nav.classList.toggle("open"); menu.setAttribute("aria-expanded", o); });
nav.addEventListener("click", function (e) { if (e.target.tagName === "A") nav.classList.remove("open"); });

var calm = matchMedia("(prefers-reduced-motion: reduce)").matches;

// typing effect
var wi = 0, ci = 0, del = false, el = $("typed");
if (calm) { el.textContent = words[0]; } else (function type() {
  var w = words[wi];
  el.textContent = w.slice(0, ci);
  if (!del && ci === w.length) { del = true; return setTimeout(type, 1500); }
  if (del && ci === 0) { del = false; wi = (wi + 1) % words.length; }
  ci += del ? -1 : 1;
  setTimeout(type, del ? 40 : 90);
})();

// scroll reveal
var items = document.querySelectorAll(".rv");
if ("IntersectionObserver" in window && !calm) {
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: .15 });
  items.forEach(function (n) { io.observe(n); });
} else { items.forEach(function (n) { n.classList.add("in"); }); }

// cursor spotlight, card glow and 3D tilt (mouse devices only)
if (!calm && matchMedia("(hover:hover)").matches) {
  document.addEventListener("mousemove", function (e) {
    document.body.style.setProperty("--mx", e.clientX + "px");
    document.body.style.setProperty("--my", e.clientY + "px");
    var c = e.target.closest && e.target.closest(".card");
    if (c) {
      var r = c.getBoundingClientRect();
      c.style.setProperty("--cx", e.clientX - r.left + "px");
      c.style.setProperty("--cy", e.clientY - r.top + "px");
    }
  });
  document.querySelectorAll(".tilt").forEach(function (c) {
    c.addEventListener("mousemove", function (e) {
      var r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      c.style.transform = "perspective(800px) rotateY(" + x * 8 + "deg) rotateX(" + -y * 8 + "deg) translateY(-4px)";
    });
    c.addEventListener("mouseleave", function () { c.style.transform = ""; });
  });
}
