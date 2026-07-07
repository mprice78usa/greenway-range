<script>
	import { site } from '$lib/site.config.js';
	const ct = site.contact;

	// Simple mailto-based contact form — no backend needed to start.
	let name = $state('');
	let email = $state('');
	let message = $state('');

	function send(e) {
		e.preventDefault();
		const subject = encodeURIComponent(`Website message from ${name || 'a visitor'}`);
		const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
		window.location.href = `mailto:${ct.email}?subject=${subject}&body=${body}`;
	}
</script>

<svelte:head>
	<title>Contact &amp; Directions — {site.name}</title>
	<meta name="description" content="Contact Greenway Shooting Range and get directions." />
</svelte:head>

<section class="page-head">
	<div class="container">
		<p class="eyebrow" style="color:var(--brass)">Get in touch</p>
		<h1>Contact &amp; Directions</h1>
	</div>
</section>

<section class="section">
	<div class="container contact-grid">
		<div>
			<h2>Visit the Range</h2>
			<ul class="info">
				<li><span class="lbl">Address</span><span>{ct.address}</span></li>
				<li><span class="lbl">Phone</span><a href="tel:{ct.phone}">{ct.phone}</a></li>
				<li><span class="lbl">Email</span><a href="mailto:{ct.email}">{ct.email}</a></li>
			</ul>

			{#if ct.mapEmbedUrl}
				<div class="map">
					<iframe src={ct.mapEmbedUrl} title="Map to the range" loading="lazy" allowfullscreen></iframe>
				</div>
			{:else}
				<div class="notice">
					<strong>Add a map:</strong> In Google Maps, find the range → <em>Share</em> →
					<em>Embed a map</em> → copy the <code>src="..."</code> URL into
					<code>contact.mapEmbedUrl</code>.
				</div>
			{/if}
		</div>

		<div>
			<h2>Send a Message</h2>
			<form onsubmit={send} class="card">
				<label>
					Name
					<input bind:value={name} required placeholder="Your name" />
				</label>
				<label>
					Email
					<input type="email" bind:value={email} required placeholder="you@email.com" />
				</label>
				<label>
					Message
					<textarea bind:value={message} rows="5" required placeholder="How can we help?"></textarea>
				</label>
				<button type="submit" class="btn btn-primary full">Send Message</button>
				<p class="form-note">
					Opens your email app addressed to the range. (Swap in Formspree later for a true
					in-page form — no backend required.)
				</p>
			</form>
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
	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: start;
	}
	.info {
		list-style: none;
		padding: 0;
		margin: 0 0 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.9rem;
	}
	.info li {
		display: flex;
		flex-direction: column;
	}
	.lbl {
		font-family: var(--font-display);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-size: 0.75rem;
		color: var(--brass-dark);
	}
	.map {
		border-radius: var(--radius);
		overflow: hidden;
		box-shadow: var(--shadow);
		border: 1px solid var(--line);
	}
	.map iframe {
		width: 100%;
		height: 300px;
		border: 0;
	}
	form label {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		font-family: var(--font-display);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-size: 0.8rem;
		color: var(--forest-deep);
		margin-bottom: 1rem;
	}
	input,
	textarea {
		font-family: var(--font-body);
		font-size: 1rem;
		text-transform: none;
		letter-spacing: normal;
		padding: 0.7rem 0.9rem;
		border: 1px solid var(--line);
		border-radius: 8px;
		background: var(--bone);
		color: var(--ink);
	}
	input:focus,
	textarea:focus {
		outline: 2px solid var(--brass);
		outline-offset: 1px;
		background: var(--white);
	}
	.full {
		width: 100%;
	}
	.form-note {
		margin: 0.8rem 0 0;
		font-size: 0.82rem;
		color: var(--muted);
	}
	code {
		background: var(--bone-dim);
		padding: 0.1rem 0.35rem;
		border-radius: 4px;
		font-size: 0.85em;
	}
	@media (max-width: 760px) {
		.contact-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}
</style>
