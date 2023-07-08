import { dom } from "@wallerbuilt/mycelia";

const { a, nav, div, style } = dom;

export type Link = { label: string; href: string; links?: Link[] };

export type NavProps = {
  links: Link[];
};

const navStyle = style(`
	.wb-nav {
		background: #ddd;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
	}

	.wb-nav .inner {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 1rem;
		max-width: 960px;
		margin: auto;
	}

	.wb-nav a {
		display: flex;
		align-items: center;
		border-radius: 0.5rem;
		box-shadow: 1px 2px 3px #333;
		color: #222;
		font-weight: 700;
		font-size: 1.05rem;
		justify-content: center;
		height: 3rem;
		text-decoration: none;
		transition: all 150ms ease;
		max-width: 12rem;
		padding: 0.2rem 1.25rem;
	}

	.wb-nav a:hover {
		box-shadow: -1px -2px 3px #333;
		color: var(--color-secondary);
		opacity: 0.9;
	}
`);

const Nav = ({ links }: NavProps) =>
  nav({ className: "wb-nav" }, [
    navStyle,
    div(
      { className: "inner" },
      links.map((link) => a({ href: link.href }, link.label))
    ),
  ]);

export default Nav;
