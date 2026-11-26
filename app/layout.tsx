import type { Metadata } from 'next';
import { siteUrl, siteTitle, siteDescription } from './site-info';
import './globals.css';

export const metadata: Metadata = {
 metadataBase: new URL(siteUrl), title: siteTitle, description: siteDescription,
 alternates: { canonical: '/' }, robots: { index: true, follow: true },
 openGraph: {
  title: siteTitle, description: siteDescription, url: '/',
  siteName: '유진산업', locale: 'ko_KR', type: 'website',
  images: [{ url: '/hero/machine-1.webp', alt: '유진산업 기계·설비 도장 작업 사진' }],
 },
 twitter: {
  card: 'summary_large_image', title: siteTitle, description: siteDescription,
  images: ['/hero/machine-1.webp'],
 },
 verification: {
  google: process.env.GOOGLE_SITE_VERIFICATION?.trim() || undefined,
  other: process.env.NAVER_SITE_VERIFICATION?.trim()
   ? { 'naver-site-verification': process.env.NAVER_SITE_VERIFICATION.trim() }
   : undefined,
 },
};

const structuredData = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'Organization', '@id': siteUrl + '/#organization',
   name: '유진산업', legalName: '유진산업개발 주식회사',
   url: siteUrl, description: siteDescription,
   telephone: process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() || '010-3113-7369',
   address: {
    '@type': 'PostalAddress', addressCountry: 'KR', addressRegion: '경상남도',
    addressLocality: '양산시',
    streetAddress: '평산10길 15, 상가동 203호 (평산동, 선우2차아파트)',
   },
  },
  {
   '@type': 'WebSite', '@id': siteUrl + '/#website',
   url: siteUrl, name: '유진산업', inLanguage: 'ko-KR',
   publisher: { '@id': siteUrl + '/#organization' },
  },
 ],
};

export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="ko"><body>
  <script type="application/ld+json" dangerouslySetInnerHTML={{
   __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
  }}/>
  {children}
 </body></html>;
}
