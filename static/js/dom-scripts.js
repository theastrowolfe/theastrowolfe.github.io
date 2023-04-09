/* Add target to external links */
(function () {
  let isExternalLink = aTag => !aTag.href.includes(window.location.origin);
  let addBlankTarget = aTag => aTag.target = "_blank";
  setTimeout(
    () => [...document.getElementsByTagName('a')].filter(isExternalLink).map(addBlankTarget),
    1000
  );
}());
