'use client';
import {useRef, useState} from 'react';
import Image from 'next/image';
const photos = [
 {id:1,title:'대형 산업 설비',category:'산업 설비'},
 {id:2,title:'대형 프레스 정면',category:'프레스'},
 {id:3,title:'프레스와 제어 장치',category:'프레스'},
 {id:4,title:'프레스 측면과 작업 계단',category:'프레스'},
 {id:5,title:'공작기계 외관',category:'공작기계'},
 {id:6,title:'기계 본체와 제어 장치',category:'공작기계'},
 {id:7,title:'기어 가공 기계',category:'공작기계'},
 {id:8,title:'CNC 선반',category:'공작기계'},
 {id:9,title:'대형 산업 기계와 구동부',category:'산업 설비'},
 {id:10,title:'대형 프레스와 노란색 작업대',category:'프레스'},
 {id:11,title:'대형 프레스와 산업용 로봇',category:'프레스'},
 {id:12,title:'야외 컨베이어 설비',category:'산업 설비'},
 {id:13,title:'대형 공작기계 가공부',category:'공작기계'},
 {id:14,title:'공작기계와 제어반',category:'공작기계'},
 {id:15,title:'산업 장비와 유압 장치',category:'산업 설비'},
 {id:16,title:'공작기계와 조작 패널',category:'공작기계'},
 {id:17,title:'대형 공작기계 전체 모습',category:'공작기계'},
 {id:18,title:'파란색과 흰색 CNC 선반',category:'공작기계'},
 {id:19,title:'대형 프레스 프레임',category:'프레스'},
 {id:20,title:'대형 생산 설비와 이송 장치',category:'산업 설비'},
 {id:21,title:'대형 설비와 작업 발판',category:'산업 설비'},
 {id:22,title:'대형 프레스와 노란색 나선 계단',category:'프레스'},
 {id:23,title:'흰색과 청록색 가공 장비',category:'공작기계'},
 {id:24,title:'산업 설비 외장과 점검 도어',category:'산업 설비'},
];
const categories=['전체','프레스','공작기계','산업 설비'];
export default function WorkGallery(){
 const [filter,setFilter]=useState('전체');
 const [selected,setSelected]=useState(0);
 const dialog=useRef<HTMLDialogElement>(null);
 const filtered=photos.filter(p=>filter==='전체'||p.category===filter);
 const current=filtered[selected]||filtered[0];
 const move=(direction:number)=>setSelected(index=>(index+direction+filtered.length)%filtered.length);
 const open=(index:number)=>{setSelected(index);dialog.current?.showModal();};
 return <section className="section wrap" id="work"><div className="section-heading"><div><p className="eyebrow dark">OUR WORK IN PICTURES</p><h2 className="display-title">YUJIN<br/><span>WORK GALLERY</span></h2></div><p>기계와 설비의 다양한 모습을 살펴보세요.<br/>사진을 누르면 크게 볼 수 있습니다.</p></div>
 <div className="filters" role="group" aria-label="작업사진 유형">{categories.map(c=><button key={c} aria-pressed={c===filter} onClick={()=>setFilter(c)}>{c}</button>)}</div>
 <div className="work-grid">{filtered.map((photo,index)=><article className="work-card" key={photo.id}><button className="work-photo" type="button" onClick={()=>open(index)} aria-label={`${photo.title} 사진 크게 보기`}><Image src={`/hero/machine-${photo.id}.webp`} alt={photo.title} fill sizes="(max-width:700px) 100vw, 33vw" style={{objectFit:'cover'}}/><span className="work-photo-hint">크게 보기</span></button><p className="work-category">{photo.category}</p><h3>{photo.title}</h3></article>)}</div>
 <dialog ref={dialog} className="work-dialog" aria-label="작업사진 크게 보기" onClick={event=>{if(event.target===event.currentTarget)dialog.current?.close();}} onKeyDown={event=>{if(event.key==='ArrowLeft'){event.preventDefault();move(-1);}if(event.key==='ArrowRight'){event.preventDefault();move(1);}}}>
 <div className="work-dialog-inner"><div className="work-dialog-header"><p>{current.title}</p><button autoFocus type="button" onClick={()=>dialog.current?.close()} aria-label="사진 닫기">닫기 ✕</button></div><div className="work-dialog-image"><Image src={`/hero/machine-${current.id}.webp`} alt={current.title} fill sizes="95vw" style={{objectFit:'contain'}}/></div><div className="work-dialog-controls"><button type="button" onClick={()=>move(-1)}>이전 사진</button><span aria-live="polite">{selected+1} / {filtered.length}</span><button type="button" onClick={()=>move(1)}>다음 사진</button></div></div>
 </dialog></section>;
}
