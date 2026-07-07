<script>
	import { site } from '$lib/site.config.js';
	const w = site.waiver;
</script>

<svelte:head>
	<title>Waiver — {site.name}</title>
	<meta name="description" content="Sign the Greenway Shooting Range liability waiver online." />
</svelte:head>

<section class="page-head">
	<div class="container">
		<p class="eyebrow" style="color:var(--brass)">Before you shoot</p>
		<h1>Liability Waiver</h1>
	</div>
</section>

<section class="section">
	<div class="container narrow">
		<p class="lead">{w.intro}</p>

		{#if w.smartwaiverUrl}
			<div class="embed-wrap">
				<iframe src={w.smartwaiverUrl} title="Sign the range waiver" loading="lazy"></iframe>
			</div>
		{:else}
			<div class="placeholder">
				<span class="ph-ico">✎</span>
				<h3>Waiver signing goes here</h3>
				<p>
					We’ll embed the online waiver right on this page so anyone can read and sign it
					from their phone or the front-desk tablet — signed copies are stored automatically.
				</p>
				<div class="notice text-left">
					<strong>Setup steps:</strong>
					<ol>
						<li>Create a free account at <a href="https://www.smartwaiver.com" target="_blank" rel="noopener">smartwaiver.com</a>.</li>
						<li>Build your waiver from their range/liability template.</li>
						<li>Copy the waiver’s <em>Kiosk</em> or embed URL.</li>
						<li>Paste it into <code>waiver.smartwaiverUrl</code> in <code>site.config.js</code>.</li>
					</ol>
				</div>
			</div>
		{/if}
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
		max-width: 820px;
	}
	.embed-wrap {
		position: relative;
		width: 100%;
		min-height: 900px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		overflow: hidden;
		box-shadow: var(--shadow);
	}
	.embed-wrap iframe {
		width: 100%;
		height: 900px;
		border: 0;
	}
	.placeholder {
		background: var(--white);
		border: 2px dashed rgba(31, 58, 46, 0.25);
		border-radius: var(--radius);
		padding: 3rem 2rem;
		text-align: center;
	}
	.ph-ico {
		font-size: 2.5rem;
		color: var(--brass);
	}
	.placeholder p {
		color: var(--muted);
		max-width: 52ch;
		margin: 0.5rem auto 1.5rem;
	}
	.text-left {
		text-align: left;
	}
	.notice ol {
		margin: 0.5rem 0 0;
		padding-left: 1.2rem;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	code {
		background: var(--bone-dim);
		padding: 0.1rem 0.35rem;
		border-radius: 4px;
		font-size: 0.85em;
	}
</style>
