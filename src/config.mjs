export const SITE = {
	name: 'RGX LLC',

	origin: 'https://rgxfrt.com/',
	basePathname: '/',
	trailingSlash: false,

	title: 'RGX LLC',
	description: 'When it comes to Freight Services, RGX has your back. We currently serve Mississippi and Tennessee and offer affordable rates and convenient terms. Contact RGX today for a Free Quote!',

	googleAnalyticsId: "G-5ZNHJFXMDV",
	googleSiteVerificationId: 'B7BvUqoqk8cwQYsqhiSkVF-R7p2-I5Co9K85aoAEoCA',
};

export const BLOG = {
	disabled: true,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
