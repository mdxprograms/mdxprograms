import { dom } from "@wallerbuilt/mycelia";

const { div, button, style } = dom;

const transition = "transition: all 120ms ease-in-out;";

const dropdownStyle = style(`
	.dropdown {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		justify-content: center;
		max-width: 300px;
		position: relative;
		width: auto;
	}

	.toggle {
		border: none;
		border-radius: 12px;
		color: white;
		cursor: pointer;
		padding: 6px 12px;
		margin: 0;
		width: 100%;
		${transition}
	}

	.dropdown.open .toggle {
		border-radius: 12px 12px 0 0;
	}

	.list {
		display: flex;
		background: #fff;
		color: #222;
		flex-direction: column;
		visibility: hidden;
		height: 0;
		top: 38px;
		left: 0;
		right: 0;
		width: 100%;
		${transition}
	}

	.dropdown.open .list {
		visibility: visible;
		position: absolute;
		height: auto;
		border-radius: 0 0 12px 12px;
		box-shadow: 0 0 4px #222;
	}

	.list div {
		visibility: hidden;
		margin: 0 0 6px;
		padding: 0 12px;
	}

	.dropdown.open .list div {
		visibility: visible;
	}
`);

const list = div({ className: "list" }, [
  div("I am first selection"),
  div("I am the second selection"),
]);

const handleToggleOpen = (e: { target: { parentElement: any } }) => {
  const dropdownElement = e?.target?.parentElement;
  if (dropdownElement.classList.contains("open")) {
    dropdownElement.classList.remove("open");
  } else {
    dropdownElement.classList.add("open");
  }
};

const btn = button(
  { className: "toggle", onclick: handleToggleOpen },
  "toggle me"
) as HTMLButtonElement;

const Dropdown = div({ className: "dropdown" }, [dropdownStyle, btn, list]);

export default Dropdown;
