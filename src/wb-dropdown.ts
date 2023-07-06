import { dom } from "@wallerbuilt/mycelia";

const { template, button, div, style } = dom;

const dropdownStyle = style(`
	:host {
		align-items: center;
		display: flex;
		flex-direction: column;
		width: fit-content;
	}

	.toggle {
		background: #444;
		border: none;
		box-shadow: 0 0 2px #444;
		color: white;
		cursor: pointer;
		padding: 6px 12px;
		width: fill-content;
		margin: auto;
	}

	.list {
		flex-direction: column;
		border-top: none;
		border: 2px solid transparent;
		opacity: 0;
		height: 0;
		padding: 0;
		transition: all 200ms ease-in;
		width: fill-content;
	}

	.list.open {
		border-color: #444;
		opacity: 1;
		overflow-y: scroll;
		padding: 8px;
		height: auto;
	}
`);

const list = div({ className: "list" }, [
  div("I am first selection"),
  div("I am the second selection"),
]);

const btn = button({ className: "toggle" }, "toggle me") as HTMLButtonElement;

const tmp = template({}, div({}, [dropdownStyle, btn, list]));

class WBDropdown extends HTMLElement {
  private toggleBtn: HTMLButtonElement;
  private list: HTMLElement;

  constructor() {
    super();
    // shadowRoot
    const shadowRoot = this.attachShadow({ mode: "open" });
    tmp.childNodes.forEach((child) => shadowRoot.appendChild(child));

    // elements
    this.toggleBtn = this.shadowRoot?.querySelector(
      ".toggle"
    ) as HTMLButtonElement;

    this.list = this.shadowRoot?.querySelector(".list") as HTMLElement;

    // bind events
    this.toggleList = this.toggleList.bind(this);

    this.toggleBtn.addEventListener("click", this.toggleList);
  }

  connectedCallback() {}

  toggleList() {
    console.log(this.list);
    if (this.list?.classList.contains("open")) {
      this.list.classList.remove("open");
    } else {
      this.list.classList.add("open");
    }
  }
}

customElements.define("wb-dropdown", WBDropdown);
