<script>
	import { site } from '$lib/site.config.js';
	const year = 2026;
</script>

<footer class="ftr">
	<div class="container ftr-grid">
		<div>
			<img src="/logo-sm.png" alt={site.name} class="ftr-logo" />
			<p class="ftr-tag">{site.tagline}</p>
			{#if site.social?.facebook}
				<a class="ftr-social" href={site.social.facebook} target="_blank" rel="noopener">
					Follow us on Facebook →
				</a>
			{/if}
		</div>

		<div>
			<h4>Visit</h4>
			<ul>
				<li>{site.contact.address}</li>
				<li><a href="tel:{site.contact.phone}">{site.contact.phone}</a></li>
				<li><a href="mailto:{site.contact.email}">{site.contact.email}</a></li>
			</ul>
		</div>

		<div>
			<h4>Explore</h4>
			<ul>
				<li><a href="/about">About Us</a></li>
				<li><a href="/membership">Membership</a></li>
				<li><a href="/calendar">Hours & Events</a></li>
				<li><a href="/waiver">Sign a Waiver</a></li>
			</ul>
		</div>
	</div>

	<div class="ftr-bottom container">
		<span>© {year} {site.name}. Volunteer-run in {site.city}.</span>
		<span class="ftr-safety">Always practice safe firearm handling.</span>
	</div>
</footer>

<style>
	.ftr {
		background: var(--forest-deep);
		color: rgba(245, 241, 232, 0.78);
		padding: 3.5rem 0 1.5rem;
		margin-top: auto;
	}

	.ftr-grid {
		display: grid;
		grid-template-columns: 1.6fr 1fr 1fr;
		gap: 2.5rem;
	}

	.ftr-logo {
		height: 92px;
		width: auto;
		display: block;
		margin-bottom: 0.4rem;
	}

	.ftr-tag {
		margin-top: 0.6rem;
		max-width: 34ch;
		font-size: 0.95rem;
	}

	.ftr-social {
		color: var(--brass);
		font-weight: 600;
	}

	.ftr h4 {
		color: var(--sage);
		font-size: 0.85rem;
		letter-spacing: 0.14em;
		margin-bottom: 0.9rem;
	}

	.ftr ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		font-size: 0.95rem;
	}

	.ftr a {
		color: rgba(245, 241, 232, 0.8);
	}

	.ftr a:hover {
		color: var(--brass);
	}

	.ftr-bottom {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 2.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid rgba(245, 241, 232, 0.1);
		font-size: 0.82rem;
		color: rgba(245, 241, 232, 0.55);
	}

	.ftr-safety {
		color: var(--brass);
	}

	@media (max-width: 720px) {
		.ftr-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}
</style>
