let siteButtons = [
    {
        "url": "https://adamledoux.net/",
        "img": "https://adamledoux.net/images/button_bitsy.png",
        "alt": "adam le doux"
    },
    {
        "url": "https://hyphin.net",
        "img": "https://hyphin.net/Assets/Images/HyphButtonLow.gif",
        "alt": "hyphin dot net"
    },
    {
        "url": "https://domino.gallery/",
        "img": "https://domino.gallery/img/buttons/dominoclubforever.gif",
        "alt": "domino club"
    },
    {
        "url": "https://emreed.net/",
        "img": "https://hotelpaintings.neocities.org/images/button1.png",
        "alt": "em reed"
    },
    {
        "url": "https://haraiva.neocities.org/",
        "img": "https://virtualmoose.org/wp-content/uploads/2024/09/haraiva-button.png",
        "alt": ""
    },
]

siteButtons.sort(function(a, b) {
    if (a.url < b.url) return -1;
    if (a.url > b.url) return 1;
    return 0;
  });

//Generate the Footer HTML, which uses the variables defined in the BASIC INFO section above to list info about the site.
//Note: feel free to remove the references to Zonelets and Neocities! Just be careful not to delete any necessary HTML closing tags or other syntax.
let footerHTML = `
    <p>like my website? check out these other cool ones:
        <div class="buttons-holder">
`

siteButtons.forEach((buttonData) => {
    footerHTML += `
        <a class="site-button" href="${buttonData.url}">
            <img
                src="${buttonData.img}"
                alt="${buttonData.alt}"
                width="88" height="31"
            >
        </a>
    `
})

footerHTML += `</div></p>`

if (document.getElementById("footer")) {
    document.getElementById("footer").innerHTML = footerHTML;
}