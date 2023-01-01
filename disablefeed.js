const observer = new MutationObserver(mutations => {
    mutations.forEach(({ target }) => {
        if (document.location.pathname === '/home') {
            // act only when on homepage
            if (target.nodeType === 1 && target.tagName == "DIV") {
                let  section = target.querySelector('section[role="region"]');

                if (typeof(section) !== "undefined" && section !== null)

                try{
                    section.style.opacity = 0
                    section.style.transition = "opacity 0.5s ease"
                     sec.style.pointerEvents = "none"
                  // section.innerHTML = "<p>&nbsp;</p>";
                }

                catch(err){

                }
            }
        }        
    });
});

observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});



