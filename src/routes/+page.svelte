<script>
	import { site } from '$lib/site.config.js';
</script>

<svelte:head>
	<title>{site.name} — {site.city}</title>
	<meta name="description" content={site.tagline} />
</svelte:head>

<!-- ============================ HERO ============================ -->
<section class="hero">
	<div class="hero-overlay"></div>
	<div class="container hero-content">
		<h1 class="sr-only">{site.name} — {site.city}</h1>
		<img src="/logo.png" alt="{site.name}, {site.city}" class="hero-logo" />
		<p class="hero-tag">{site.tagline}</p>
		<div class="hero-actions">
			<a href="/membership" class="btn btn-primary">Become a Member</a>
			<a href="/waiver" class="btn btn-ghost">Sign Waiver</a>
			<a href="/calendar" class="btn btn-ghost">Hours &amp; Location</a>
		</div>
	</div>
	<a href="#quicklinks" class="scroll-cue" aria-label="Scroll down">▾</a>
</section>

<!-- ======================= QUICK LINKS ======================= -->
<section id="quicklinks" class="section quick">
	<div class="container">
		<div class="quick-grid">
			<a href="/membership" class="quick-card">
				<span class="quick-ico">★</span>
				<h3>Membership</h3>
				<p>Join the range and support the community. Individual, family &amp; supporting tiers.</p>
				<span class="quick-more">Join now →</span>
			</a>
			<a href="/visit" class="quick-card">
				<span class="quick-ico">◎</span>
				<h3>Day Visit</h3>
				<p>Not a member yet? Pay for a single-day range pass and come shoot.</p>
				<span class="quick-more">Buy a pass →</span>
			</a>
			<a href="/waiver" class="quick-card">
				<span class="quick-ico">✎</span>
				<h3>Waiver</h3>
				<p>Sign our liability waiver online before your visit — once a year.</p>
				<span class="quick-more">Sign online →</span>
			</a>
			<a href="/calendar" class="quick-card">
				<span class="quick-ico">▦</span>
				<h3>Calendar</h3>
				<p>Range hours, work days, matches, classes and closures.</p>
				<span class="quick-more">View calendar →</span>
			</a>
		</div>
	</div>
</section>

<!-- ===================== PROGRAMS / SCHEDULE STRIP ===================== -->
<section class="section hours-strip">
	<div class="container hours-inner">
		<div class="hours-copy">
			<p class="eyebrow">What we run</p>
			<h2>Programs &amp; Events</h2>
			<p class="lead">
				From open shooting and Ladies Night to 4-H, leagues, and BUG matches — hours vary by
				program, so the calendar is always the best place to check before you head out.
			</p>
			<div class="hero-actions">
				<a href="/programs" class="btn btn-primary">See Programs</a>
				<a href="/calendar" class="btn btn-outline light">View Calendar</a>
			</div>
		</div>
		<div class="prog-chips">
			{#each site.programs as p}
				<span class="chip">{p.name}</span>
			{/each}
		</div>
	</div>
</section>

<!-- ========================= ABOUT TEASER ========================= -->
<section class="section about-teaser">
	<div class="container about-inner">
		<div>
			<p class="eyebrow">Community-run</p>
			<h2>Built by volunteers,<br />open to everyone.</h2>
			<p class="lead">{site.about.intro}</p>
			<a href="/about" class="btn btn-primary">Our Story</a>
		</div>
		<div class="values">
			{#each site.about.values as v}
				<div class="value-card">
					<h3>{v.title}</h3>
					<p>{v.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============================ CTA ============================ -->
<section class="cta">
	<div class="container text-center">
		<h2>Ready to shoot?</h2>
		<p class="lead mx-auto">Sign your waiver, grab a membership or a day pass, and we’ll see you on the line.</p>
		<div class="hero-actions" style="justify-content:center">
			<a href="/membership" class="btn btn-primary">Become a Member</a>
			<a href="/visit" class="btn btn-outline" style="border-color:var(--bone);color:var(--bone)">Day Pass</a>
		</div>
	</div>
</section>

<style>
	/* ---- Hero ---- */
	.hero {
		position: relative;
		min-height: 82vh;
		display: flex;
		align-items: center;
		background:
			radial-gradient(circle at 20% 20%, rgba(200, 137, 47, 0.18), transparent 45%),
			linear-gradient(160deg, #16281f 0%, #1f3a2e 45%, #2f5a44 100%);
		overflow: hidden;
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background-image:
			repeating-linear-gradient(115deg, rgba(255, 255, 255, 0.02) 0 2px, transparent 2px 26px);
		pointer-events: none;
	}

	.hero-content {
		position: relative;
		padding: 5rem 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.hero-logo {
		width: min(480px, 84vw);
		height: auto;
		margin-bottom: 1.75rem;
		filter: drop-shadow(0 14px 38px rgba(0, 0, 0, 0.45));
	}

	.hero-tag {
		color: rgba(245, 241, 232, 0.92);
		font-size: 1.35rem;
		max-width: 40ch;
		margin: 0 0 2rem;
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.8rem;
	}

	.scroll-cue {
		position: absolute;
		bottom: 1.4rem;
		left: 50%;
		transform: translateX(-50%);
		color: rgba(245, 241, 232, 0.6);
		font-size: 1.6rem;
		animation: bob 2s ease-in-out infinite;
	}

	@keyframes bob {
		0%, 100% { transform: translate(-50%, 0); }
		50% { transform: translate(-50%, 8px); }
	}

	/* ---- Quick links ---- */
	.quick {
		background: var(--bone);
		margin-top: -1px;
	}

	.quick-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.25rem;
	}

	.quick-card {
		background: var(--white);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		padding: 1.75rem 1.5rem;
		box-shadow: var(--shadow);
		color: var(--ink);
		transition: transform 0.15s ease, box-shadow 0.15s ease;
		display: flex;
		flex-direction: column;
	}

	.quick-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
		color: var(--ink);
	}

	.quick-ico {
		font-size: 1.8rem;
		color: var(--brass);
		margin-bottom: 0.6rem;
	}

	.quick-card p {
		color: var(--muted);
		font-size: 0.95rem;
		flex: 1;
	}

	.quick-more {
		font-family: var(--font-display);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-size: 0.85rem;
		color: var(--brass-dark);
		font-weight: 600;
	}

	/* ---- Hours strip ---- */
	.hours-strip {
		background: var(--forest);
		color: var(--bone);
	}

	.hours-inner {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: center;
	}

	.hours-copy h2 {
		color: var(--bone);
	}

	.hours-copy .lead {
		color: rgba(245, 241, 232, 0.75);
	}

	.light {
		border-color: var(--bone);
		color: var(--bone);
	}

	.light:hover {
		background: var(--bone);
		color: var(--forest-deep);
	}

	.prog-chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		align-content: flex-start;
	}

	.chip {
		font-family: var(--font-display);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		font-size: 0.95rem;
		color: var(--bone);
		background: rgba(0, 0, 0, 0.22);
		border: 1px solid rgba(245, 241, 232, 0.16);
		padding: 0.6rem 1.1rem;
		border-radius: 30px;
	}

	/* ---- About teaser ---- */
	.about-teaser {
		background: var(--bone);
	}

	.about-inner {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: center;
	}

	.values {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.value-card {
		background: var(--white);
		border: 1px solid var(--line);
		border-left: 4px solid var(--brass);
		border-radius: 8px;
		padding: 1.25rem 1.5rem;
	}

	.value-card h3 {
		margin-bottom: 0.3rem;
	}

	.value-card p {
		margin: 0;
		color: var(--muted);
		font-size: 0.95rem;
	}

	/* ---- CTA ---- */
	.cta {
		background:
			linear-gradient(160deg, #2f5a44 0%, #1f3a2e 100%);
		color: var(--bone);
		padding: clamp(3.5rem, 8vw, 5.5rem) 0;
	}

	.cta h2 {
		color: var(--bone);
	}

	.cta .lead {
		color: rgba(245, 241, 232, 0.85);
		margin-bottom: 2rem;
	}

	/* ---- Responsive ---- */
	@media (max-width: 960px) {
		.quick-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 760px) {
		.hours-inner,
		.about-inner {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}

	@media (max-width: 520px) {
		.quick-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
