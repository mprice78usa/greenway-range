<script>
	import { page } from '$app/stores';
	import { site } from '$lib/site.config.js';

	let open = $state(false);

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/programs', label: 'Programs' },
		{ href: '/membership', label: 'Rates' },
		{ href: '/calendar', label: 'Calendar' },
		{ href: '/waiver', label: 'Waiver' },
		{ href: '/contact', label: 'Contact' }
	];

	const isActive = (href) =>
		href === '/' ? $page.url.pathname === '/' : $page.url.pathname.startsWith(href);
</script>

<header class="hdr">
	<div class="container hdr-inner">
		<a href="/" class="brand" onclick={() => (open = false)} aria-label="{site.name} — home">
			<img src="/logo-sm.png" alt={site.name} class="brand-logo" />
		</a>

		<button
			class="burger"
			aria-label="Toggle menu"
			aria-expanded={open}
			onclick={() => (open = !open)}
		>
			<span></span><span></span><span></span>
		</button>

		<nav class="nav" class:open>
			{#each links as l}
				<a href={l.href} class="nav-link" class:active={isActive(l.href)} onclick={() => (open = false)}>
					{l.label}
				</a>
			{/each}
			<a href="/waiver" class="btn btn-primary nav-cta" onclick={() => (open = false)}>Sign Waiver</a>
		</nav>
	</div>
</header>

<style>
	.hdr {
		position: sticky;
		top: 0;
		z-index: 50;
		background: var(--forest-deep);
		border-bottom: 1px solid rgba(245, 241, 232, 0.1);
	}

	.hdr-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 84px;
		gap: 1rem;
	}

	.brand {
		display: flex;
		align-items: center;
	}

	.brand-logo {
		height: 62px;
		width: auto;
		display: block;
	}

	.nav {
		display: flex;
		align-items: center;
		gap: 0.35rem;
	}

	.nav-link {
		font-family: var(--font-display);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		font-size: 0.95rem;
		color: rgba(245, 241, 232, 0.82);
		padding: 0.5rem 0.75rem;
		border-radius: 6px;
	}

	.nav-link:hover {
		color: var(--white);
		background: rgba(245, 241, 232, 0.08);
	}

	.nav-link.active {
		color: var(--brass);
	}

	.nav-cta {
		margin-left: 0.6rem;
		padding: 0.6rem 1.1rem;
		font-size: 0.9rem;
	}

	.burger {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: 0;
		cursor: pointer;
		padding: 0.5rem;
	}

	.burger span {
		width: 26px;
		height: 2px;
		background: var(--bone);
		border-radius: 2px;
		transition: 0.2s;
	}

	@media (max-width: 860px) {
		.burger {
			display: flex;
		}

		.brand-logo {
			height: 52px;
		}

		.nav {
			position: absolute;
			top: 84px;
			left: 0;
			right: 0;
			flex-direction: column;
			align-items: stretch;
			gap: 0;
			background: var(--forest-deep);
			border-bottom: 1px solid rgba(245, 241, 232, 0.1);
			padding: 0.5rem 1rem 1.25rem;
			transform: translateY(-120%);
			opacity: 0;
			pointer-events: none;
			transition: transform 0.22s ease, opacity 0.22s ease;
		}

		.nav.open {
			transform: translateY(0);
			opacity: 1;
			pointer-events: auto;
		}

		.nav-link {
			padding: 0.85rem 0.75rem;
			font-size: 1.05rem;
			border-bottom: 1px solid rgba(245, 241, 232, 0.06);
		}

		.nav-cta {
			margin: 0.9rem 0 0;
			text-align: center;
		}
	}
</style>
