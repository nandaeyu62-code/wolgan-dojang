import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title: '유진산업 | 기계·설비 도장',
 description: '기계에 새 색을, 현장에 새 가치를. 유진산업의 기계·설비 도장 소개와 작업 상담 안내입니다.',
 openGraph: {title:'유진산업 | 기계·설비 도장',description:'기계에 새 색을, 현장에 새 가치를.',locale:'ko_KR',type:'website'},
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="ko"><body>{children}</body></html>}