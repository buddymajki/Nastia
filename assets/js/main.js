/* BOOST Integration — shared behaviors (no dependencies) */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----- Mobile navigation ----- */
  var toggle = document.querySelector(".nav-toggle");
  var overlay = document.getElementById("nav-overlay");

  function setMenu(open) {
    if (!toggle || !overlay) return;
    toggle.setAttribute("aria-expanded", String(open));
    overlay.classList.toggle("open", open);
    document.body.classList.toggle("nav-open", open);
    if (open) {
      var first = overlay.querySelector("a");
      if (first) first.focus({ preventScroll: true });
    } else {
      toggle.focus({ preventScroll: true });
    }
  }

  if (toggle && overlay) {
    overlay.querySelectorAll("a").forEach(function (a, i) {
      a.style.setProperty("--i", String(i));
    });
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    overlay.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay.classList.contains("open")) setMenu(false);
      /* simple focus trap while open */
      if (e.key === "Tab" && overlay.classList.contains("open")) {
        var focusables = [toggle].concat(
          Array.prototype.slice.call(overlay.querySelectorAll("a"))
        );
        var idx = focusables.indexOf(document.activeElement);
        if (e.shiftKey && (idx === 0 || idx === -1)) {
          e.preventDefault();
          focusables[focusables.length - 1].focus();
        } else if (!e.shiftKey && idx === focusables.length - 1) {
          e.preventDefault();
          focusables[0].focus();
        }
      }
    });
  }

  /* ----- Current page marker in nav ----- */
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a, .nav-overlay a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === here) a.setAttribute("aria-current", "page");
  });

  /* ----- Scroll reveals ----- */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }

  /* ----- Stat count-up (text already present for no-JS / SR users) ----- */
  var nums = document.querySelectorAll("[data-count]");
  if (nums.length && "IntersectionObserver" in window && !reduceMotion) {
    var io2 = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          io2.unobserve(el);
          var target = parseFloat(el.getAttribute("data-count"));
          var decimals = (el.getAttribute("data-count").split(".")[1] || "").length;
          var prefix = el.getAttribute("data-prefix") || "";
          var suffix = el.getAttribute("data-suffix") || "";
          var span = el.querySelector(".val");
          if (!span) return;
          var start = null;
          var dur = 700;
          var from = target * 0.6; /* settle in from 60% — never shows wildly wrong values */
          function step(ts) {
            if (!start) start = ts;
            var p = Math.min((ts - start) / dur, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            span.textContent = prefix + (from + (target - from) * eased).toFixed(decimals) + suffix;
            if (p < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.4 }
    );
    nums.forEach(function (el) { io2.observe(el); });
  }

  /* ----- Copy buttons (bank details) ----- */
  document.querySelectorAll(".copy-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy") || "";
      function done() {
        btn.classList.add("copied");
        var prev = btn.textContent;
        btn.textContent = "Copied ✓";
        setTimeout(function () {
          btn.classList.remove("copied");
          btn.textContent = prev;
        }, 1800);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () {});
      }
    });
  });

  /* ----- Contact form → mailto composer (no backend yet) ----- */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var to = form.getAttribute("data-to");
      var name = (form.querySelector("#cf-name") || {}).value || "";
      var topic = (form.querySelector("#cf-topic") || {}).value || "General";
      var msg = (form.querySelector("#cf-message") || {}).value || "";
      var subject = "[boostintegration.ch] " + topic + (name ? " — " + name : "");
      var body = msg + "\n\n— " + name;
      location.href =
        "mailto:" + to +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }

  /* ----- Footer year ----- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
