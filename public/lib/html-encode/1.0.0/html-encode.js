/*
 * http://stackoverflow.com/questions/784586/convert-special-characters-to-html-in-javascript
 */
function HtmlEncode(s)
{
  var el = document.createElement("div");
  el.innerText = el.textContent = s;
  s = el.innerHTML;
  return s;
}