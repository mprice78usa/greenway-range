<script>
	import { site } from '$lib/site.config.js';
</script>

<svelte:head>
	<title>Programs — {site.name}</title>
	<meta name="description" content="Shooting programs and events at Greenway Shooting Range: open shooting, Ladies Night, 4-H, leagues, BUG matches and more." />
</svelte:head>

<section class="page-head">
	<div class="container">
		<p class="eyebrow" style="color:var(--brass)">Something for everyone</p>
		<h1>Programs &amp; Events</h1>
	</div>
</section>

<section class="section">
	<div class="container">
		<p class="lead" style="max-width:60ch;margin-bottom:2.5rem">
			Greenway hosts a full slate of shooting programs for every skill level. Times vary week to
			week, so always check the <a href="/calendar">calendar</a> for the current schedule.
		</p>

		<div class="prog-grid">
			{#each site.programs as p}
				<div class="prog-card">
					<h3>{p.name}</h3>
					<p>{p.body}</p>
				</div>
			{/each}
		</div>

		<div class="cta-row">
			<a href="/calendar" class="btn btn-primary">View the Calendar</a>
			<a href="/contact" class="btn btn-outline">Ask About a Program</a>
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
	.prog-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.25rem;
	}
	.prog-card {
		background: var(--white);
		border: 1px solid var(--line);
		border-top: 4px solid var(--brass);
		border-radius: var(--radius);
		padding: 1.5rem;
		box-shadow: var(--shadow);
	}
	.prog-card h3 {
		margin-bottom: 0.5rem;
	}
	.prog-card p {
		margin: 0;
		color: var(--muted);
		font-size: 0.95rem;
	}
	.cta-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
		margin-top: 2.5rem;
	}
	@media (max-width: 860px) {
		.prog-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (max-width: 560px) {
		.prog-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
