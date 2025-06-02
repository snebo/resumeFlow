import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Navabar from './components/navbar';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL('https://resumefast.vercel.app'),
	title: {
		default: 'ResumeFast - Free Professional Resume Builder Online',
		template: '%s | ResumeFast',
	},
	description:
		'Create professional resumes in minutes with our free online resume builder. Real-time preview, ATS-friendly templates, and instant PDF download. No sign-up required.',
	keywords: [
		'resume builder',
		'free resume maker',
		'professional resume',
		'CV builder',
		'online resume creator',
		'ATS resume template',
		'job application',
		'career tools',
		'resume templates',
		'PDF resume generator',
	],
	authors: [{ name: 'ResumeFast Team' }],
	creator: 'ResumeFast',
	publisher: 'ResumeFast',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://resumefast.vercel.app',
		siteName: 'ResumeFast',
		title: 'ResumeFast - Free Professional Resume Builder Online',
		description:
			'Create professional resumes in minutes with our free online resume builder. Real-time preview, ATS-friendly templates, and instant PDF download.',
		images: [
			{
				url: '/thumbnail_18_9.png',
				width: 1200,
				height: 630,
				alt: 'ResumeFast - Professional Resume Builder',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'ResumeFast - Free Professional Resume Builder Online',
		description:
			'Create professional resumes in minutes with our free online resume builder. Real-time preview, ATS-friendly templates, and instant PDF download.',
		images: ['/thumbnail_18_9.png'],
		creator: '@resumefast',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Navabar />
				{children}
			</body>
		</html>
	);
}
