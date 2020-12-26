# Redirector

![example1](/docs/ss1.png)

Show inform while redirecting unknown websites.

It is run on front end. Github pages will be enough for deployment.

Every parts has a different color to be more noticeable if anything is not normal. Default protocol color is red except https.

## Website Setup

You can fork this repository and server with github pages, or deploy index.html to your hosting service.
In index file, two configuration is expected from who is setup system.  
One of them is sleep time, other one is safe url Regular expressions. These configurations are begin of the index file and indicated with comments.

```html
<!--! Configuration begin -->
<script>
  const waitTime = 5;
  const regexSafeUrl = [
    /^(https:\/\/)(([a-zA-Z0-9-]{1,})(.))*?(google.(com|co.uk|com.tr|nl))($|\/)/i,
    /^(https:\/\/)(([a-zA-Z0-9-]{1,})(.))*?(ahmetozer.org)($|\/)/i,
    /^(https:\/\/)(([a-zA-Z0-9-]{1,})(.))*?(github.com)($|\/ahmetozer\/)/i,
    /^(https:\/\/)(([a-zA-Z0-9-]{1,})(.))*?(docker.com)($|\/)/i,
    /^(https:\/\/)(([a-zA-Z0-9-]{1,})(.))*?(twitter.com)($|\/)/i,
  ];
</script>
<!--! Configuration end -->
```

### Example Regular Expressions

- For allowing one domain  
`/^(https:\/\/)(ahmetozer.org)($|\/)/i`

- Allowing domain with one or more subdomain  
`/^(https:\/\/)((www|mail)(.))*?(ahmetozer.org)($|\/)/i`

- Allowing domain with all sub domains  
`/^(https:\/\/)(([a-zA-Z0-9-]{1,})(.))*?(ahmetozer.org)($|\/)/i`

- Allowing domain with multiple TLD  
`/^(https:\/\/)(([a-zA-Z0-9-]{1,})(.))*?(google.(com|co.uk|com.tr|nl))($|\/)/i`

- All sub domains and begin with custom path.
`/^(https:\/\/)(([a-zA-Z0-9-]{1,})(.))*?(github.com)($|\/ahmetozer\/)/i,`

## Including to websites

In your websites, in a example ahmetozer.org, edit `redirectorHostPath` with your own url and paste below in your website footer.

```html
<script>
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
</script>
```

![example2](/docs/ss2.png)
