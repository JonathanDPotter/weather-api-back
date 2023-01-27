class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header>
      <h1>Weather Imp API</h1>
    </header>
    `;
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const linkName = this.getAttribute("link-name") || "broken";

    this.innerHTML = `
    <footer>
      <span>Jonathan Potter 2023</span>
      <a href="/${linkName}">${linkName}</a>
    </footer>`;
  }
}

customElements.define("header-component", Header);
customElements.define("footer-component", Footer);

const routes = {
  geoapify: {
    ROOT: "/api/geoapify",
    GET: {
      "/coords/:zip":
        "Returns latitude and longitude coordinates from the zip code(:zip) provided.",
      "/city/:lat/:lon":
        "Returns the city that is at the latitude(:lat) and longitude(:lon) provided.",
    },
  },
  weather: {
    ROOT: "/api/weather",
    GET: {
      "/current/:lat/:lon":
        "Returns a json object with the current weather for the lattitude(:lat) and longitude(:lon) provided.",
      "/three-day/:lat/:lon":
        "Returns a json object with the three-day forecast for the lattitude(:lat) and longitude(:lon) provided",
    },
  },
  index: {
    ROOT: "/",
    GET: {
      "/": "returns the homepage",
      "/routes": "returns this object",
      "/healthcheck": "returns a 200 status",
    },
  },
};

const routesContainer = document.getElementsByClassName("routes");

const keys = Object.keys(routes);

const values = Object.values(routes);

routesContainer[0].innerHTML = keys.map(
  (key, i) =>
    `<h3>${key}:</h3> <p class="route-list">${JSON.stringify(values[i])
      .replace(/},/g, "}, <br />")
      .replace(/{/g, "{ <br />")
      .replace(/",/g, '", <br />')
      .replace(/}/g, "} <br/> }")
      .replace(/:/g, " : ")}</p>`
);
