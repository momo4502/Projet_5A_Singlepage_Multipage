import AbstractView from "./views/AbstractView.js";
import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";

const api_url = 'https://api.adviceslip.com/advice';

async function fetchAdvice() {
    try {
        const response = await fetch(api_url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data.slip.advice;
    } catch (error) {
        console.error("Error fetching advice:", error.message);
        return null;
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const advice = await fetchAdvice();

        if (advice) {
            console.log("Advice:", advice);

            // Mettez à jour le contenu de l'élément avec l'id "advice-container"
            const adviceContainer = document.getElementById("advice-container");
            if (adviceContainer) {
                adviceContainer.textContent = advice;
            }
        } else {
            console.log("Failed to fetch advice.");
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
});


const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes =[
        {path: "/", view: Dashboard},
        {path: "/posts", view: Posts},
        {path: "/settings", view: Settings},
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    };

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();

    //console.log(match.route.view());
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});