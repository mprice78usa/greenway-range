<script>
	import { site } from '$lib/site.config.js';
	const c = site.calendar;
</script>

<svelte:head>
	<title>Calendar &amp; Hours — {site.name}</title>
	<meta name="description" content={c.intro} />
</svelte:head>

<section class="page-head">
	<div class="container">
		<p class="eyebrow" style="color:var(--brass)">Plan your visit</p>
		<h1>Calendar &amp; Hours</h1>
	</div>
</section>

<section class="section">
	<div class="container">
		<p class="lead" style="margin-bottom:2.5rem">{c.intro}</p>

		<div class="cal-grid">
			<div class="cal-main">
				{#if c.googleCalendarEmbedUrl}
					<div class="embed-wrap">
						<iframe src={c.googleCalendarEmbedUrl} title="Range calendar" loading="lazy"></iframe>
					</div>
				{:else}
					<div class="placeholder">
						<span class="ph-ico">▦</span>
						<h3>Events calendar goes here</h3>
						<p>A shared Google Calendar will show here — volunteers add events from their phone.</p>
						<div class="notice text-left">
							<strong>Setup steps:</strong>
							<ol>
								<li>Create a public Google Calendar (e.g. “Greenway Range”).</li>
								<li>Settings → <em>Integrate calendar</em> → <em>Embed code</em>.</li>
								<li>Copy the <code>src="..."</code> URL and paste it into <code>calendar.googleCalendarEmbedUrl</code>.</li>
							</ol>
						</div>
					</div>
				{/if}
			</div>

			<aside class="cal-side">
				<h3>Programs</h3>
				<ul class="prog-list">
					{#each site.programs as p}
						<li>{p.name}</li>
					{/each}
				</ul>
				<a href="/programs" class="btn btn-outline full">Program Details</a>
				<p class="note">Hours vary by program — the calendar is always the most up-to-date source. Questions? <a href="/contact">Contact us</a>.</p>
			</aside>
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
	.cal-grid {
		display: grid;
		grid-template-columns: 1fr 320px;
		gap: 2rem;
		align-items: start;
	}
	.embed-wrap iframe {
		width: 100%;
		height: 640px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		box-shadow: var(--shadow);
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
		margin: 0.5rem 0 1.5rem;
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
	.cal-side {
		background: var(--white);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		padding: 1.5rem;
		box-shadow: var(--shadow);
	}
	.cal-side h3 {
		margin-bottom: 1rem;
	}
	.prog-list {
		list-style: none;
		padding: 0;
		margin: 0 0 1rem;
		border: 1px solid var(--line);
		border-radius: 8px;
		overflow: hidden;
	}
	.prog-list li {
		padding: 0.55rem 0.9rem;
		border-bottom: 1px solid var(--line);
		font-size: 0.95rem;
		font-family: var(--font-display);
		text-transform: uppercase;
		letter-spacing: 0.03em;
		color: var(--forest-deep);
	}
	.prog-list li:last-child {
		border-bottom: 0;
	}
	.full {
		width: 100%;
	}
	.note {
		margin: 1rem 0 0;
		font-size: 0.85rem;
		color: var(--muted);
	}
	code {
		background: var(--bone-dim);
		padding: 0.1rem 0.35rem;
		border-radius: 4px;
		font-size: 0.85em;
	}
	@media (max-width: 820px) {
		.cal-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
