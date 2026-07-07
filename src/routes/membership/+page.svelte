<script>
	import { site } from '$lib/site.config.js';
	const m = site.membership;
	const v = site.visit;
	const pay = site.payments;
</script>

<svelte:head>
	<title>Membership &amp; Rates — {site.name}</title>
	<meta name="description" content={m.intro} />
</svelte:head>

<section class="page-head">
	<div class="container">
		<p class="eyebrow" style="color:var(--brass)">Join us</p>
		<h1>Membership &amp; Rates</h1>
	</div>
</section>

<section class="section">
	<div class="container">
		<p class="lead mx-auto text-center" style="margin-bottom:2.5rem">{m.intro}</p>

		<div class="tiers">
			{#each m.tiers as t}
				<div class="tier" class:featured={t.featured}>
					{#if t.featured}<span class="badge">Best value</span>{/if}
					<h3>{t.name}</h3>
					<div class="price">
						<span class="amount">{t.price}</span>
						<span class="period">{t.period}</span>
					</div>
					<ul>
						{#each t.features as f}
							<li>{f}</li>
						{/each}
					</ul>
					{#if t.stripeLink}
						<a href={t.stripeLink} class="btn btn-primary full" target="_blank" rel="noopener">
							Join {t.name}
						</a>
					{:else}
						<a href="/contact" class="btn btn-primary full">Ask How to Join</a>
					{/if}
				</div>
			{/each}
		</div>

		{#if m.note}
			<p class="fine text-center">{m.note}</p>
		{/if}

		<!-- Other rates -->
		<div class="rates">
			<div class="rate">
				<h3>Day Visit</h3>
				<div class="rate-price">{v.price} <span>{v.period}</span></div>
				<p>Drop in without a membership. <a href="/visit">Details &amp; range rules →</a></p>
			</div>
			<div class="rate">
				<h3>Range Rental</h3>
				<div class="rate-price">$100 <span>per hour</span></div>
				<p>Reserve the range for a group with advance notice, plus normal use fees.</p>
			</div>
		</div>

		<div class="notice mx-auto" style="max-width:720px;margin-top:2.5rem">
			<strong>Payment:</strong> {pay.note} Everyone must also have a
			<a href="/waiver">signed waiver</a> on file before shooting.
		</div>
	</div>
</section>

<style>
	.page-head {
		background: linear-gradient(160deg, #16281f, #1f3a2e);
		color: var(--bone);
		padding: 3.5rem 0;
	}
	.page-head h1 {
		color: var(--bone);
		margin: 0;
	}
	.tiers {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.5rem;
	}
	.tier {
		position: relative;
		width: 360px;
		max-width: 100%;
		background: var(--white);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		padding: 2rem;
		box-shadow: var(--shadow);
		display: flex;
		flex-direction: column;
	}
	.tier.featured {
		border: 2px solid var(--brass);
		box-shadow: var(--shadow-lg);
	}
	.badge {
		position: absolute;
		top: -0.8rem;
		left: 50%;
		transform: translateX(-50%);
		background: var(--brass);
		color: var(--forest-deep);
		font-family: var(--font-display);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-size: 0.72rem;
		font-weight: 600;
		padding: 0.3rem 0.8rem;
		border-radius: 20px;
		white-space: nowrap;
	}
	.price {
		display: flex;
		align-items: baseline;
		gap: 0.4rem;
		margin: 0.4rem 0 1.2rem;
	}
	.amount {
		font-family: var(--font-display);
		font-size: 2.6rem;
		color: var(--forest-deep);
		font-weight: 700;
	}
	.period {
		color: var(--muted);
		font-size: 0.9rem;
	}
	ul {
		list-style: none;
		padding: 0;
		margin: 0 0 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		flex: 1;
	}
	li {
		padding-left: 1.6rem;
		position: relative;
		color: var(--ink);
	}
	li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: var(--brass-dark);
		font-weight: 700;
	}
	.full {
		width: 100%;
	}
	.fine {
		color: var(--muted);
		font-size: 0.9rem;
		margin: 1.25rem auto 0;
		max-width: 46ch;
	}
	.rates {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.25rem;
		max-width: 720px;
		margin: 2.5rem auto 0;
	}
	.rate {
		background: var(--white);
		border: 1px solid var(--line);
		border-left: 4px solid var(--brass);
		border-radius: 8px;
		padding: 1.5rem;
	}
	.rate h3 {
		margin-bottom: 0.4rem;
	}
	.rate-price {
		font-family: var(--font-display);
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--forest-deep);
		margin-bottom: 0.5rem;
	}
	.rate-price span {
		font-size: 0.85rem;
		font-weight: 400;
		color: var(--muted);
	}
	.rate p {
		margin: 0;
		font-size: 0.9rem;
		color: var(--muted);
	}
	@media (max-width: 560px) {
		.rates {
			grid-template-columns: 1fr;
		}
	}
</style>
