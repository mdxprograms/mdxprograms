import Nav, { Link } from "@/pages/WebComponents/templates/Nav";

const navLinks: Link[] = [
  { label: "People", href: "/item1" },
  { label: "Places", href: "/item2" },
  { label: "Notes", href: "/item3" },
  { label: "Games", href: "/item4" },
];

class WBNav extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(Nav({ links: navLinks }));
  }
}

customElements.define("wb-nav", WBNav);
