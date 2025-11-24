 // Router ساده برای مدیریت مسیرها
import { store } from "./store";

function createRouter() {
    let routes = {};
    let currentRoute = "";
    let currentParams = {};

    function addRoute(path, component) {
        routes[path] = component;
    }

    function pathToRegex(path) {
        const keys = [];
        const pattern = path
            .replace(/\//g, "\\/")
            .replace(/:(\w+)/g, (match, key) => {
                keys.push(key);
                return "([^\\/]+)";
            });
        return {
            pattern: new RegExp(`^${pattern}$`),
            keys,
        };
    }

    function matchRoute(path) {
        for (const routePath in routes) {
            const { pattern, keys } = pathToRegex(routePath);
            const match = path.match(pattern);

            if (match) {
                const params = {};
                keys.forEach((key, index) => {
                    params[key] = match[index + 1];
                });
                return {
                    component: routes[routePath],
                    params,
                };
            }
        }
        return null;
    }

    function getHash() {
        const pathname = window.location.pathname;
        return pathname === "/" ? "/" : pathname;
    }

    function navigate(path) {
        const normalizedPath = path.startsWith("/") ? path : `/${path}`;
        window.history.pushState({}, "", normalizedPath);
        window.dispatchEvent(new PopStateEvent("popstate"));
    }

    async function render(container) {
        const hash = getHash();
        const matched = matchRoute(hash);

        if (matched) {
            currentRoute = hash;
            currentParams = matched.params;

            store.setState("currentRoute", hash);
            store.setState("routeParams", matched.params);

            container.innerHTML = "";

            try {
                const componentElement = await matched.component(matched.params);

                if (componentElement instanceof Node) {
                    container.appendChild(componentElement);
                } else {
                    console.error("Component did not return a DOM Node:", componentElement);
                    container.innerHTML =
                        "<div class='p-6 text-center text-red-500'>Error rendering page</div>";
                }
            } catch (error) {
                console.error("Error rendering component:", error);
                container.innerHTML =
                    "<div class='p-6 text-center text-red-500'>Error rendering page</div>";
            }
        } else {
            if (hash !== "/") {
                navigate("/");
            } else {
                container.innerHTML =
                    "<div class='p-6 text-center text-red-500'>404 - Page Not Found</div>";
            }
        }
    }

    async function init(container) {
        const handleRouteChange = () => render(container);

        window.addEventListener("popstate", handleRouteChange);

        const checkPathInterval = setInterval(() => {
            const currentPath = getHash();
            if (currentPath !== currentRoute) handleRouteChange();
        }, 200);

        window.addEventListener("beforeunload", () => clearInterval(checkPathInterval));
        window.addEventListener("focus", () => {
            const currentPath = getHash();
            if (currentPath !== currentRoute) handleRouteChange();
        });

        await render(container);
    }

    function getCurrentRoute() {
        return currentRoute;
    }

    function getCurrentParams() {
        return currentParams;
    }

    return {
        addRoute,
        navigate,
        init,
        getCurrentRoute,
        getCurrentParams,
    };
}

export const router = createRouter();