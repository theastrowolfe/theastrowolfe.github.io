/* Expandable sections */
(function () {
  function toggle (button, target) {
    var expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
    target.hidden = !target.hidden;
  }

  var expanders = document.querySelectorAll('[data-expands]');

  Array.prototype.forEach.call(expanders, function (expander) {
    var target = document.getElementById(expander.getAttribute('data-expands'));

    expander.addEventListener('click', function () {
      toggle(expander, target);
    })
  })
}());

/* Menu button */
(function () {
  var button = document.getElementById('menu-button');
  if (button) {
    var menu = document.getElementById('patterns-list');
    button.addEventListener('click', function() {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
    })
  }
}());

/* Persist navigation scroll point */
(function () {
  window.onbeforeunload = function () {
    var patternsNav = document.getElementById('patterns-nav');
    if (patternsNav) {
      var scrollPoint = patternsNav.scrollTop;
      localStorage.setItem('scrollPoint', scrollPoint);
    }
  }

  window.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('patterns-nav')) {
      if (window.location.href.indexOf('patterns/') !== -1) {
        document.getElementById('patterns-nav').scrollTop = parseInt(localStorage.getItem('scrollPoint'));
      } else {
        document.getElementById('patterns-nav').scrollTop = 0;
      }
    }
  })
}());

/* Add "link here" links to <h2> headings */
(function () {
  var headings = document.querySelectorAll('main > h2');

  Array.prototype.forEach.call(headings, function (heading) {
    var id = heading.getAttribute('id');

    if (id) {
      var newHeading = heading.cloneNode(true);
      newHeading.setAttribute('tabindex', '-1');

      var container = document.createElement('div');
      container.setAttribute('class', 'h2-container');
      container.appendChild(newHeading);

      heading.parentNode.insertBefore(container, heading);

      var link = document.createElement('a');
      link.setAttribute('href', '#' + id);
      var headingText = heading.textContent;
      link.setAttribute('aria-label', 'This ' + headingText + ' section');
      link.innerHTML = '<svg aria-hidden="true" class="link-icon" viewBox="0 0 50 50" focusable="false"> <use xlink:href="#link"></use> </svg>';

      container.appendChild(link);

      heading.parentNode.removeChild(heading);
    }
  })
}());

/* Enable scrolling by keyboard of code samples */
(function () {
  var codeBlocks = document.querySelectorAll('pre, .code-annotated');

  Array.prototype.forEach.call(codeBlocks, function (block) {
    if (block.querySelector('code')) {
      block.setAttribute('role', 'region');
      block.setAttribute('aria-label', 'code sample');
      if (block.scrollWidth > block.clientWidth) {
        block.setAttribute('tabindex', '0');
      }
    }
  });
}());

/* Reformat blog posts */
(function () {
  function isParentElementMainElement(element) {
    return element.parentElement === document.getElementById('main');
  }
  function restyleParagraph(element) {
    // element.style.textIndent = '3em';
    element.style.marginTop = '0.75em';
  }

  let paragraphs = [...document.getElementsByTagName('p')];
  paragraphs.filter(isParentElementMainElement).slice(1).map(restyleParagraph);
}());

/* Add target to external links */
(function () {
  isExternalLink = aTag => !aTag.href.includes(window.location.origin);
  addBlankTarget = aTag => aTag.target = "_blank";
  setTimeout(
    () => [...document.getElementsByTagName('a')].filter(isExternalLink).map(addBlankTarget),
    1000
  );
}());

/* Dimmer functionality */
function style_light() {
  document.body.style.backgroundColor = ""
  document.body.style.color = ""
}
function style_sephia() {
  document.body.style.backgroundColor = "#F4ECD8"
  document.body.style.color = "#5B4636"
}
function get_dimmer() {
  let dimmer = localStorage.getItem("dimmer");
  if (dimmer) {
    return dimmer.toLocaleLowerCase();
  }
  return null;
}
function toggle_dimmer() {
  let dimmer = get_dimmer();
  switch (dimmer) {
    case "sephia":
      localStorage.removeItem("dimmer");
      break;
    default:
      localStorage.setItem("dimmer", "sephia");
  }
  style_page();
}
function style_page() {
  let dimmer = get_dimmer();
  switch (dimmer) {
    case "sephia":
      style_light();
      break;
    default:
      style_sephia();
  }
}
style_page();
