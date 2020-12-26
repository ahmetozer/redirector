
// Replace with your own host
const redirectorHostPath = "https://ahmetozer.github.io/redirector/"

// Work url
const redirectorHostPathParsed = new URL(redirectorHostPath)
function redirectorReplaceLinks() {
    $("a").each(function () {
        try {
            const url = new URL(this.href);
            if (window.location.hostname != url.hostname && url.hostname != redirectorHostPathParsed.hostname) {
                this.href = redirectorHostPath + "?from=" + document.URL + "&to=" + encodeURI(this.href);
            }
        } catch (error) {
            // If href only contains path
        }
    })
}

$( document ).ready(function() {
    redirectorReplaceLinks();
});