document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const cookiesAccepted = document.cookie.includes("cookiesAccepted=true");

    if (!cookiesAccepted) {
        cookieBanner.style.display = "block";
    }

    // Accepter les cookies
    document.getElementById("accept-cookies").addEventListener("click", function () {
        document.cookie = "cookiesAccepted=true; path=/; max-age=" + 60 * 60 * 24 * 365;
        cookieBanner.style.display = "none";
    });

    // Refuser les cookies
    document.getElementById("decline-cookies").addEventListener("click", function () {
        document.cookie = "cookiesAccepted=false; path=/; max-age=" + 60 * 60 * 24 * 365;
        cookieBanner.style.display = "none";
    });
});
