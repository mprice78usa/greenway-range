<script>
	import { site } from '$lib/site.config.js';
</script>

<svelte:head>
	<title>About — {site.name}</title>
	<meta name="description" content={site.about.intro} />
</svelte:head>

<section class="page-head">
	<div class="container">
		<p class="eyebrow" style="color:var(--brass)">Who we are</p>
		<h1>About the Range</h1>
	</div>
</section>

<section class="section">
	<div class="container narrow">
		<p class="lead">{site.about.intro}</p>
		<p>{site.about.mission}</p>

		<div class="values">
			{#each site.about.values as v}
				<div class="value-card">
					<h3>{v.title}</h3>
					<p>{v.body}</p>
				</div>
			{/each}
		</div>

		<div class="join-cta">
			<a href="/programs" class="btn btn-primary">Explore Programs</a>
			<a href="/contact" class="btn btn-outline">Volunteer or Ask a Question</a>
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
		max-width: 760px;
	}
	.values {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		margin-top: 2.5rem;
	}
	.value-card {
		background: var(--white);
		border: 1px solid var(--line);
		border-top: 4px solid var(--brass);
		border-radius: 8px;
		padding: 1.5rem;
	}
	.value-card p {
		margin: 0;
		color: var(--muted);
		font-size: 0.95rem;
	}
	.join-cta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
		margin-top: 2.5rem;
	}
	@media (max-width: 720px) {
		.values {
			grid-template-columns: 1fr;
		}
	}
</style>
