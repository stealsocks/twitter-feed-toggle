     sec = document.querySelector('section[role="region"]') ?? false
     url = window.location.href

     if(url.includes("twitter.com") && url.includes("/home")){
            if(sec != false){

                if(sec.style.opacity < 1){

                    if(confirm("are you sure you want to enable your feed?") == true)
                     sec.style.opacity = 1
                    }

                else{
                    sec.style.opacity = 0
                }
            }
        }

        console.log("woieg")