import { dom } from "@wallerbuilt/mycelia";

const { button, div, style } = dom;

const dropdownStyle = style(`
	:host {
		align-items: center;
		background: #222;
		border: 2px solid #222;
		display: flex;
		flex-direction: column;
		max-width: 300px;
		justify-content: center;
		width: 100%;
	}

	.toggle {
		background: #444;
		border: none;
		color: white;
		cursor: pointer;
		padding: 6px 12px;
		width: 100%;
	}

	.list {
		color: white;
		flex-direction: column;
		visibility: hidden;
		transition: all 120ms ease-in-out;
		height: 0;
	}

	.list.open {
		visibility: visible;
		height: 100%;
		width: fit-content;
		padding: 8px 0;
	}
`);

const list = div({ className: "list" }, [
  div("I am first selection"),
  div("I am the second selection"),
]);

const btn = button({ className: "toggle" }, "toggle me") as HTMLButtonElement;

class WBDropdown extends HTMLElement {
  private toggleBtn: HTMLButtonElement;
  private list: HTMLElement;

  constructor() {
    super();
    // shadowRoot
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(dropdownStyle);
    shadowRoot.appendChild(btn);
    shadowRoot.appendChild(list);

    // elements
    this.toggleBtn = shadowRoot?.querySelector(".toggle") as HTMLButtonElement;

    this.list = shadowRoot?.querySelector(".list") as HTMLElement;

    // bind events
    this.toggleList = this.toggleList.bind(this);

    this.toggleBtn.addEventListener("click", this.toggleList);
  }

  connectedCallback() {}

  toggleList() {
    if (this.list?.classList.contains("open")) {
      this.list.classList.remove("open");
    } else {
      this.list.classList.add("open");
    }
  }
}

customElements.define("wb-dropdown", WBDropdown);
