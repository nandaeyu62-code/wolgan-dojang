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
 return <section className="section wrap" id="work"><div className="section-heading"><div><p className="eyebrow dark">OUR WORK IN PICTURES</p><h2>사진으로 보는 작업 현장.</h2></div><p>기계와 설비의 다양한 모습을 살펴보세요.<br/>사진을 누르면 크게 볼 수 있습니다.</p></div>
 <div className="filters" role="group" aria-label="작업사진 유형">{categories.map(c=><button key={c} aria-pressed={c===filter} onClick={()=>setFilter(c)}>{c}</button>)}</div>
 <div className="work-grid">{filtered.map((photo,index)=><article className="work-card" key={photo.id}><button className="work-photo" type="button" onClick={()=>open(index)} aria-label={`${photo.title} 사진 크게 보기`}><Image src={`/hero/machine-${photo.id}.webp`} alt={photo.title} fill sizes="(max-width:700px) 100vw, 33vw" style={{objectFit:'cover'}}/><span className="work-photo-hint">크게 보기</span></button><p className="work-category">{photo.category}</p><h3>{photo.title}</h3></article>)}</div>
 <dialog ref={dialog} className="work-dialog" aria-label="작업사진 크게 보기" onClick={event=>{if(event.target===event.currentTarget)dialog.current?.close();}} onKeyDown={event=>{if(event.key==='ArrowLeft'){event.preventDefault();move(-1);}if(event.key==='ArrowRight'){event.preventDefault();move(1);}}}>
 <div className="work-dialog-inner"><div className="work-dialog-header"><p>{current.title}</p><button autoFocus type="button" onClick={()=>dialog.current?.close()} aria-label="사진 닫기">닫기 ✕</button></div><div className="work-dialog-image"><Image src={`/hero/machine-${current.id}.webp`} alt={current.title} fill sizes="95vw" style={{objectFit:'contain'}}/></div><div className="work-dialog-controls"><button type="button" onClick={()=>move(-1)}>이전 사진</button><span aria-live="polite">{selected+1} / {filtered.length}</span><button type="button" onClick={()=>move(1)}>다음 사진</button></div></div>
 </dialog></section>;
}