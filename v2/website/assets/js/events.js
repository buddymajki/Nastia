/* BOOST Integration — events rendering (list + detail).
   Reads window.BOOST_EVENTS (events-data.js). No backend. */
(function () {
  "use strict";
  var EVENTS = window.BOOST_EVENTS || [];
  var REGISTER_EMAIL = "anastasiiazaria@boostintegration.ch";

  var chipClass = {
    "green": "chip",
    "green-soft": "chip",
    "blue": "chip chip--blue",
    "magenta": "chip chip--magenta",
    "yellow": "chip chip--yellow",
    "red": "chip chip--red",
    "gray": "chip chip--gray"
  };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function metaRows(ev) {
    var date = ev.date ? esc(ev.date) : '<span class="tbd">Date announced soon</span>';
    var place = ev.place ? esc(ev.place) : '<span class="tbd">Venue announced soon · Basel</span>';
    return (
      '<div><dt>Date</dt><dd>' + date + "</dd></div>" +
      '<div><dt>Time</dt><dd>' + esc(ev.time) + "</dd></div>" +
      '<div><dt>Place</dt><dd>' + place + "</dd></div>" +
      '<div><dt>Language</dt><dd>' + esc(ev.language) + "</dd></div>"
    );
  }

  /* ----- List page ----- */
  var grid = document.getElementById("events-grid");
  if (grid) {
    var html = EVENTS.map(function (ev, i) {
      return (
        '<a class="event-card reveal" style="--reveal-delay:' + (i % 3) * 70 + 'ms" href="event.html?id=' + esc(ev.id) + '">' +
        '<div class="event-card__top">' +
        '<span class="' + (chipClass[ev.color] || "chip") + '">' + esc(ev.category) + "</span>" +
        '<span class="event-card__num">' + esc(ev.num) + " / 09</span>" +
        "</div>" +
        "<h3>" + esc(ev.title) + "</h3>" +
        '<p class="event-card__desc">' + esc(ev.short) + "</p>" +
        '<dl class="event-meta">' + metaRows(ev) + "</dl>" +
        '<span class="btn btn--primary" aria-hidden="true">Read more <span class="arr">→</span></span>' +
        "</a>"
      );
    }).join("");
    grid.innerHTML = html;
    /* re-observe injected reveals */
    if (window.IntersectionObserver && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("in-view"); io.unobserve(en.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
      grid.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
    } else {
      grid.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in-view"); });
    }
  }

  /* ----- Detail page ----- */
  var detail = document.getElementById("event-detail");
  if (detail) {
    var id = new URLSearchParams(location.search).get("id");
    var ev = EVENTS.find(function (e) { return e.id === id; });

    if (!ev) {
      detail.innerHTML =
        '<div class="container container--narrow section">' +
        "<h1>Session not found</h1>" +
        '<p class="lead">This session doesn’t exist (yet). Have a look at the full Admin Night programme instead.</p>' +
        '<p><a class="btn btn--primary" href="events.html">All sessions <span class="arr">→</span></a></p>' +
        "</div>";
      document.title = "Session not found — BOOST Integration";
      return;
    }

    document.title = ev.title + " — Admin Night — BOOST Integration";
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Admin Night session: " + ev.title + " — " + ev.short);

    var mailSubject = "Admin Night interest: " + ev.title;
    var mailBody =
      "Hi BOOST team,\n\nI'd like to join the Admin Night session “" + ev.title +
      "” when dates are announced. Please keep me posted.\n\nName:\nPreferred language (EN/DE):\n";
    var mailto =
      "mailto:" + REGISTER_EMAIL +
      "?subject=" + encodeURIComponent(mailSubject) +
      "&body=" + encodeURIComponent(mailBody);

    detail.innerHTML =
      '<div class="page-hero page-hero--blue">' +
      '<div class="container">' +
      '<p style="margin:0 0 1rem"><a href="events.html" style="font-weight:600;text-decoration-color:var(--black)">← All Admin Night sessions</a></p>' +
      '<span class="' + (chipClass[ev.color] || "chip") + ' chip--white">' + esc(ev.category) + "</span>" +
      "<h1>" + esc(ev.title) + "</h1>" +
      '<p class="lead" style="max-width:38em">' + esc(ev.short) + "</p>" +
      "</div></div>" +

      '<div class="section"><div class="container">' +
      '<div class="split" style="align-items:start">' +
      "<div>" +
      '<h2 class="sr-only">Session details</h2>' +
      '<dl class="event-detail__meta" style="margin-top:0">' +
      '<div class="cell"><dt>Date</dt><dd>' + (ev.date ? esc(ev.date) : "Announced soon") + "</dd></div>" +
      '<div class="cell"><dt>Time</dt><dd>' + esc(ev.time) + "</dd></div>" +
      '<div class="cell"><dt>Place</dt><dd>' + (ev.place ? esc(ev.place) : "Basel — venue announced soon") + "</dd></div>" +
      '<div class="cell"><dt>Language</dt><dd>' + esc(ev.language) + "</dd></div>" +
      "</dl>" +
      "<p>" + esc(ev.long) + "</p>" +
      "<h3>Worth bringing</h3>" +
      "<ul>" + ev.bring.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>" +
      "<h3>Speaker</h3>" +
      '<p class="tbd" style="color:var(--ink-soft);font-style:italic">Speaker to be confirmed — Admin Night sessions are led by pro-bono volunteer experts who work in Swiss institutions and organisations, together with migrants who’ve been through the same steps.</p>' +
      "</div>" +
      '<aside class="register-panel" aria-label="Registration">' +
      '<span class="demo-note">Season 1 — dates announced soon</span>' +
      '<h3 style="margin-top:1.1rem">Register your interest</h3>' +
      "<p style=\"color:var(--ink-soft)\">Online registration opens together with the season dates. Until then, tell us you’re interested — we’ll save you a spot update. Registration is required once dates are live; spots are limited.</p>" +
      '<a class="btn btn--primary" style="width:100%;justify-content:center" href="' + mailto + '">Email your interest <span class="arr">→</span></a>' +
      '<p style="font-size:0.85rem;color:var(--ink-soft);margin-top:1rem">Snacks, coffee and tea are on the house. Sessions run about 45 minutes plus open Q&amp;A.</p>' +
      "</aside>" +
      "</div>" +
      "</div></div>";
  }
})();
