const highlightAnchorNavigation = require("./sidenav.js");

const HIGHLIGHT_CLASS = "highlight";
const links = document.querySelectorAll(".sprint-nav-item a");

const highlightNav = (pageName, scrollTo) => {
  const section = document.getElementsByName(pageName)[0];
  let toHighlight;
  if (section) {
    toHighlight = section.getElementsByTagName("a")[0];
  } else {
    toHighlight = links[0];
  }
  toHighlight.classList.add(HIGHLIGHT_CLASS);
  if (scrollTo) {
    nav.scrollTo(toHighlight.offsetLeft, toHighlight.offsetTop);
  }
};

const setHighlightsFromHash = () => {
  const hash = window.location.hash.replace("#", "");

  for (const link of links) {
    link.classList.remove(HIGHLIGHT_CLASS);
    link.blur();
  }

  const li = document.getElementsByName(hash)[0];
  if (li) {
    const anchor = li.getElementsByTagName("a")[0];
    if (anchor) {
      anchor.classList.add(HIGHLIGHT_CLASS);
    }
  } else {
    links[0].classList.add(HIGHLIGHT_CLASS);
  }
};

const nav = document.getElementsByClassName("sprint-nav")[0];
if (nav) {
  const loc = window.location.pathname.replace(/\/$/, "").replace(".html", ""); // get rid of trailing '/'
  console.log({ loc });
  const subLoc = loc.substring(loc.lastIndexOf("/") + 1);
  /*
   * for our-process page, highlight based on /url/our-process/#id
   * for sprints page, highlight based on /baseurl/sprints
   */
  if (subLoc === "our-process") {
    setHighlightsFromHash();

    const headers = document.getElementsByClassName("process-section");

    window.addEventListener("scroll", (e) => {
      const navLink = highlightAnchorNavigation(
        links,
        headers,
        HIGHLIGHT_CLASS
      );
      nav.scrollTo(navLink.offsetLeft, navLink.offsetTop);
    });
  } else {
    highlightNav(subLoc, true);
  }
}
