// =============================================================================
//  GREENWAY SHOOTING RANGE — SITE CONTENT
// =============================================================================
//  This is the ONLY file most volunteers ever need to edit.
//  Change the text, hours, prices, and links below and the whole website
//  updates. Keep the quotes " " around text. Don't remove the commas.
//
//  After editing, the site rebuilds automatically on deploy.
// =============================================================================

export const site = {
	name: 'Greenway Shooting Range',
	tagline: 'A volunteer-run indoor range at the Gallatin County Fairgrounds in Bozeman.',
	city: 'Bozeman, Montana',

	// ---- CONTACT INFO -------------------------------------------------------
	contact: {
		address: 'Gallatin County Fairgrounds · Bozeman, MT',
		phone: '406-312-9191',
		email: 'greenwayshootingrange@gmail.com',
		// This map query resolves to the Fairgrounds with no API key needed.
		// To pin the exact building, replace with a Google Maps "Embed a map" URL.
		mapEmbedUrl: 'https://www.google.com/maps?q=Gallatin%20County%20Fairgrounds%2C%20Bozeman%2C%20MT&output=embed'
	},

	// ---- SOCIAL -------------------------------------------------------------
	social: {
		facebook: 'https://www.facebook.com/p/Greenway-Shooting-Range-Bozeman-MT-61581368854657/',
		googleSite: 'https://sites.google.com/view/greenway-shooting-range/home'
	},

	// ---- ABOUT PAGE ---------------------------------------------------------
	about: {
		intro:
			'The Greenway Shooting Range is a public-use indoor range at the Gallatin ' +
			'County Fairgrounds in Bozeman, Montana. Run entirely by volunteers, we ' +
			'offer programs for shooters of every skill level — from first-timers and ' +
			'junior 4-H shooters to seasoned league competitors.',
		mission:
			'Our mission is to give the Gallatin Valley a safe, welcoming, and ' +
			'affordable place to shoot, learn, and compete — kept open by the very ' +
			'people who use it.',
		values: [
			{ title: 'Safety First', body: 'Every session runs on the fundamentals of safe firearm handling. Volunteers keep the line safe for everyone.' },
			{ title: 'Community Run', body: 'Greenway is staffed entirely by volunteers. Your visits and memberships keep the lights on and the doors open.' },
			{ title: 'Everyone Welcome', body: 'New shooters, women, and junior 4-H shooters all have a place here. Help is available whenever you want it.' }
		]
	},

	// ---- PROGRAMS -----------------------------------------------------------
	//  The shooting activities and events the range hosts. Schedule for each
	//  lives on the Google Calendar (see the Calendar section below).
	programs: [
		{ name: 'Open Shooting', body: 'Open time for the general public to come in and shoot.' },
		{ name: 'Small Bore', body: 'A rifle event for .22LR and smaller chambered rifles.' },
		{ name: '4-H', body: 'We host the 4-H .22 rifle and pistol programs for junior shooters.' },
		{ name: 'Ladies Night', body: 'A women-only shooting activity. New shooters are welcome and help is available if you want it.' },
		{ name: 'Outlaw', body: 'A casual action-pistol shooting event.' },
		{ name: 'BUG Matches', body: 'Action-pistol matches using back-up (“mouse”) guns — timed five-shot strings scored on IPSC targets.' },
		{ name: 'Pistol League', body: 'An NRA bullseye-structured pistol competition.' },
		{ name: 'Range Rental', body: 'Rent the range for individuals or groups at $100/hour with advance notice, plus normal use fees.' }
	],

	// ---- RANGE RULES --------------------------------------------------------
	rules: {
		intro: 'A few things to know before your first visit:',
		items: [
			'Pistols and rifles chambered in .22LR are always welcome; many common pistol calibers are allowed too (see list below).',
			'Ammunition velocity must not exceed 1,400 fps.',
			'No monolithic copper bullets (e.g., Underwood penetrators) or steel-core ammunition.',
			'FMJ ammunition is permitted — ballistic curtains are installed.',
			'No firearm rentals — please bring your own.'
		],
		ammoSold: ['.22LR', '.380 ACP', '.38 Special', '9mm Luger', '.40 S&W', '10mm', '.44 Magnum', '.45 ACP'],
		ammoNote: 'Ammunition is typically available for purchase on-site in these calibers.'
	},

	// ---- MEMBERSHIP ---------------------------------------------------------
	//  Each tier gets a "Join" button. If a Stripe Payment Link is added below,
	//  the button pays online. Otherwise it shows "Coming soon" and members pay
	//  on-site (cash or check). To create a link: Stripe Dashboard → Payment
	//  Links → New → paste the URL into "stripeLink".
	membership: {
		intro:
			'An annual membership gives your household unlimited range use and helps ' +
			'keep this volunteer-run range open. All shooters must have a signed ' +
			'waiver on file.',
		tiers: [
			{
				name: 'Family Membership',
				price: '$150',
				period: 'per year',
				features: [
					'Unlimited range use during open hours',
					'Covers related individuals in the same household',
					'One lane included — additional lanes $20 per visit',
					'Directly supports a volunteer-run community range'
				],
				stripeLink: '', // optional — paste a Stripe Payment Link to enable online payment
				featured: true
			}
		],
		note: 'Memberships cover related individuals living in the same household. Additional lanes are $20 per visit.'
	},

	// ---- DAY VISIT / RANGE PASS ---------------------------------------------
	visit: {
		intro:
			'Not ready to join? Anyone with a signed waiver can pay for a single-day ' +
			'visit. Your fee helps cover targets, upkeep, and insurance.',
		price: '$20',
		period: 'per person, per lane, per day',
		stripeLink: '' // optional — paste a Stripe Payment Link to enable online payment
	},

	// ---- PAYMENTS -----------------------------------------------------------
	//  The range currently takes cash or check on-site. Set "onlineEnabled" to
	//  true only after you've added Stripe Payment Links above.
	payments: {
		onlineEnabled: false,
		note: 'The range currently accepts cash or check, paid on-site. Online card payment can be turned on here once the range sets up a Stripe account.'
	},

	// ---- WAIVER -------------------------------------------------------------
	//  Sign up at smartwaiver.com, create your waiver, then paste the
	//  "Kiosk" or embed URL here. Leave "" to show setup instructions.
	waiver: {
		intro:
			'For everyone’s safety and to protect the range, all shooters must read ' +
			'and sign our liability waiver before using the range. It only takes a ' +
			'minute and you only need to do it once per year.',
		smartwaiverUrl: '' // TODO: paste Smartwaiver kiosk/embed URL
	},

	// ---- CALENDAR -----------------------------------------------------------
	//  This is the range's existing public Google Calendar. If it doesn't show,
	//  make it public: Google Calendar → Settings → "Make available to public",
	//  then confirm the embed URL below.
	calendar: {
		intro:
			'Check the calendar for current range hours, programs, matches, classes, ' +
			'and any closures before you head out. Hours vary by program, so the ' +
			'calendar is always the most up-to-date source.',
		googleCalendarEmbedUrl:
			'https://calendar.google.com/calendar/embed?src=greenwayshootingrange%40gmail.com&ctz=America%2FDenver'
	}
};
