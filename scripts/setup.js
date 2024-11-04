
const appSetup = {
    version: 'mvp-v0.1.0',
};

document.addEventListener("DOMContentLoaded", () => {
    console.log('appSetup - DOMContentLoaded');
    showVersion();
})

function showVersion(tagName = 'app-version') {
    document.getElementById(tagName).innerText = `${appSetup.version}`;
}