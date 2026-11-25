'use client';
import {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, A11y, Keyboard, Pagination} from 'swiper/modules';
import type {Swiper as SwiperInstance} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
const photoDescriptions = [
 '녹색 대형 산업 설비', '흰색과 노란색 대형 프레스 정면',
 '대형 프레스와 제어 장치', '대형 프레스 측면과 작업 계단',
 '흰색 공작기계 외관', '흰색 기계 본체와 제어 장치',
 '흰색 기어 가공 기계', '흰색과 짙은 회색 CNC 선반',
 '대형 산업 기계와 구동부',
 '흰색 대형 프레스와 노란색 작업대',
 '대형 프레스와 주황색 산업용 로봇',
 '파란색 야외 컨베이어 설비',
 '녹색 대형 공작기계 가공부',
 '파란색 공작기계와 제어반',
 '회색 산업 장비와 유압 장치',
 '흰색 공작기계와 조작 패널',
 '녹색 대형 공작기계 전체 모습',
 '파란색과 흰색 CNC 선반',
 '회색 대형 프레스 프레임',
 '흰색 대형 생산 설비와 이송 장치',
 '녹색 대형 설비와 작업 발판',
 '흰색 대형 프레스와 노란색 나선 계단',
 '흰색과 청록색 산업용 가공 장비',
 '흰색 산업 설비 외장과 점검 도어',
];
const photoFiles = photoDescriptions.map((alt,index)=>({alt,src:`/hero/machine-${index+1}.webp`}));
// Show the newly supplied photos before the original set, preserving file IDs.
const photos = [...photoFiles.slice(9), ...photoFiles.slice(0,9)];
export default function HeroSlider(){
 const slider = useRef<SwiperInstance|null>(null);
 const [active,setActive]=useState(0);
 const [paused,setPaused]=useState(false);
 useEffect(()=>{
  const query=window.matchMedia('(prefers-reduced-motion: reduce)');
  const sync=()=>{setPaused(query.matches); if(query.matches) slider.current?.autoplay.stop(); else slider.current?.autoplay.start();};
  sync();query.addEventListener('change',sync);return()=>query.removeEventListener('change',sync);
 },[]);
 const toggle=()=>{if(paused) slider.current?.autoplay.start(); else slider.current?.autoplay.stop();setPaused(!paused);};
 return <div className="hero-photo-gallery" role="region" aria-label="기계·설비 사진 슬라이드">
  <Swiper modules={[Autoplay,A11y,Keyboard,Pagination]} loop speed={600}
   autoplay={{delay:3000,disableOnInteraction:false}}
   keyboard={{enabled:true,onlyInViewport:true}} pagination={{clickable:true,dynamicBullets:true,dynamicMainBullets:3}}
   a11y={{prevSlideMessage:'이전 사진',nextSlideMessage:'다음 사진',paginationBulletMessage:'{{index}}번 사진 보기'}}
   onSwiper={instance=>{slider.current=instance;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)instance.autoplay.stop();}}
   onSlideChange={instance=>setActive(instance.realIndex)}>
   {photos.map(({alt,src},index)=><SwiperSlide key={src}><div className="hero-photo"><Image src={src} alt={alt} fill sizes="100vw" unoptimized priority={index===0} loading={index===0?undefined:(index===active || index===(active+1)%photos.length?'eager':'lazy')} style={{objectFit:'cover'}}/></div></SwiperSlide>)}
  </Swiper>
  <div className="photo-controls"><div><span className="photo-kicker">MACHINE & EQUIPMENT</span><p>{photos[active].alt}</p></div><div className="photo-actions"><span className="photo-count">{String(active+1).padStart(2,'0')} / {String(photos.length).padStart(2,'0')}</span><button type="button" onClick={()=>slider.current?.slidePrev()} aria-label="이전 사진">이전</button><button type="button" onClick={toggle} aria-label={paused?'자동 재생 시작':'자동 재생 일시정지'}>{paused?'재생':'정지'}</button><button type="button" onClick={()=>slider.current?.slideNext()} aria-label="다음 사진">다음</button></div></div>
 </div>;
}
