const TITLE = ''

const DESCRIPTION = ''

const KEYWORDS = ''

interface Props {
	title?: string
	description?: string
	keywords?: string
}

export default function genMetadata(
	{ title = TITLE, keywords = KEYWORDS, description = DESCRIPTION }: Props = {
		title: TITLE,
		description: DESCRIPTION,
		keywords: KEYWORDS,
	},
) {
	return {
		title: `${title} ${
			process.env.ENV ? ` | 모바일웹(${process.env.COMPONENT_VERSION})` : ''
		}`,
		description,
		keywords,
		formatDetection: { telephone: false },
		applicationName: '',
		manifest: '/resources/manifest.json',
		icons: [
			{
				rel: 'icon',
				type: 'image/x-icon',
				url: '/resources/favicon.ico',
			},
			{
				type: 'image/png',
				sizes: '192x192',
				url: '/resources/android-icon-192x192.png',
			},
			{
				type: 'image/png',
				sizes: '32x32',
				url: '/resources/favicon-32x32.png',
			},
			{
				type: 'image/png',
				sizes: '96x96',
				url: '/resources/favicon-96x96.png',
			},
			{
				rel: 'apple-touch-icon',
				sizes: '60x60',
				url: '/resources/apple-icon-60x60.png',
			},
			{
				rel: 'apple-touch-icon',
				sizes: '72x72',
				url: '/resources/apple-icon-72x72.png',
			},
			{
				rel: 'apple-touch-icon',
				sizes: '76x76',
				url: '/resources/apple-icon-76x76.png',
			},
			{
				rel: 'apple-touch-icon',
				sizes: '114x114',
				url: '/resources/apple-icon-114x114.png',
			},
			{
				rel: 'apple-touch-icon',
				sizes: '120x120',
				url: '/resources/apple-icon-120x120.png',
			},
			{
				rel: 'apple-touch-icon',
				sizes: '144x144',
				url: '/resources/apple-icon-144x144.png',
			},
			{
				rel: 'apple-touch-icon',
				sizes: '152x152',
				url: '/resources/apple-icon-152x152.png',
			},
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				url: '/resources/apple-icon-180x180.png',
			},
			{
				rel: 'mask-icon',
				url: '/resources/safari-pinned-tab.svg',
			},
		],
		openGraph: {
			type: 'website',
			title,
			description,
			images: {
				url: 'https://.com/images/share/share_mrblue.jpg',
			},
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: '',
			site: '',
			creator: '',
		},
		appleWebApp: {
			title: '',
			capable: false,
			statusBarStyle: 'black-translucent' as const,
		},
	}
}
