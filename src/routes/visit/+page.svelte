<script>
	import { site } from '$lib/site.config.js';
	const v = site.visit;
	const rules = site.rules;
	const pay = site.payments;
</script>

<svelte:head>
	<title>Day Visit — {site.name}</title>
	<meta name="description" content={v.intro} />
</svelte:head>

<section class="page-head">
	<div class="container">
		<p class="eyebrow" style="color:var(--brass)">Drop in</p>
		<h1>Day Visit</h1>
	</div>
</section>

<section class="section">
	<div class="container narrow">
		<p class="lead">{v.intro}</p>

		<div class="pass card">
			<div>
				<h3>Single-Day Range Pass</h3>
				<div class="price">
					<span class="amount">{v.price}</span>
					<span class="period">{v.period}</span>
				</div>
			</div>
			{#if v.stripeLink}
				<a href={v.stripeLink} class="btn btn-primary" target="_blank" rel="noopener">Buy a Day Pass</a>
			{:else}
				<a href="/calendar" class="btn btn-primary">Check the Calendar</a>
			{/if}
		</div>

		<ol class="steps">
			<li><a href="/waiver">Sign your waiver</a> — you only need to do this once a year.</li>
			<li>Check the <a href="/calendar">calendar</a> for open shooting times.</li>
			<li>Come shoot — pay your day fee at the range.</li>
		</ol>

		<div class="notice">
			<strong>Payment:</strong> {pay.note}
		</div>

		<!-- Range rules -->
		<div class="rules">
			<h2>Range Rules</h2>
			<p>{rules.intro}</p>
			<ul class="rule-list">
				{#each rules.items as r}
					<li>{r}</li>
				{/each}
			</ul>

			<h3 class="ammo-h">Calibers Available On-Site</h3>
			<div class="ammo">
				{#each rules.ammoSold as a}
					<span class="ammo-chip">{a}</span>
				{/each}
			</div>
			<p class="ammo-note">{rules.ammoNote}</p>
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
	.narrow {
		max-width: 720px;
	}
	.pass {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		flex-wrap: wrap;
		margin: 2rem 0;
	}
	.pass h3 {
		margin-bottom: 0.3rem;
	}
	.price {
		display: flex;
		align-items: baseline;
		gap: 0.4rem;
	}
	.amount {
		font-family: var(--font-display);
		font-size: 2.4rem;
		font-weight: 700;
		color: var(--forest-deep);
	}
	.period {
		color: var(--muted);
	}
	.steps {
		margin: 0 0 2rem;
		padding-left: 1.2rem;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}
	.steps li {
		padding-left: 0.3rem;
	}
	.rules {
		margin-top: 3rem;
		padding-top: 2.5rem;
		border-top: 1px solid var(--line);
	}
	.rule-list {
		list-style: none;
		padding: 0;
		margin: 1rem 0 2rem;
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
	}
	.rule-list li {
		position: relative;
		padding-left: 1.6rem;
		color: var(--ink);
	}
	.rule-list li::before {
		content: '›';
		position: absolute;
		left: 0.3rem;
		color: var(--brass-dark);
		font-weight: 700;
	}
	.ammo-h {
		margin-bottom: 0.9rem;
	}
	.ammo {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
	}
	.ammo-chip {
		font-family: var(--font-display);
		letter-spacing: 0.03em;
		font-size: 0.9rem;
		background: var(--white);
		border: 1px solid var(--line);
		color: var(--forest-deep);
		padding: 0.45rem 0.9rem;
		border-radius: 30px;
	}
	.ammo-note {
		margin-top: 1rem;
		font-size: 0.9rem;
		color: var(--muted);
	}
</style>
