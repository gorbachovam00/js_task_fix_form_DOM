document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("form input").forEach(function(e){var t=e.name,n=document.createElement("label");n.className="field-label",n.htmlFor=e.id,n.textContent=t.charAt(0).toUpperCase()+t.slice(1),e.placeholder=n.textContent,e.parentElement.insertBefore(n,e)})});
//# sourceMappingURL=index.db511bd6.js.map
