# 월간도장

기계·설비 도장 브랜드 홈페이지. Next.js App Router, TypeScript, 반응형 CSS로 제작했습니다.

## 로컬 실행

Node.js 20.9 이상에서 실행하세요.

```bash
npm ci
npm run dev
```

검증: `npm run typecheck`, `npm run build`

## Vercel 배포

1. Vercel의 Add New Project에서 `nandaeyu62-code/wolgan-dojang`을 가져옵니다.
2. Framework Preset을 Next.js로 두고 기본 빌드 설정을 사용합니다.
3. 실제 연락처가 준비되면 환경변수 `NEXT_PUBLIC_CONTACT_PHONE`, `NEXT_PUBLIC_CONTACT_EMAIL`을 입력합니다.
4. Deploy를 실행합니다. 이후 GitHub 커밋을 통해 배포를 갱신할 수 있습니다.

## 콘텐츠 상태

- 회사명과 업종은 요청 사항을 반영했습니다.
- 메인 히어로는 사용자가 제공한 기계·설비 사진 9장을 사용합니다. WebP로 최적화했으며 Swiper가 3초 간격으로 전환합니다. 하단 작업 유형의 SVG는 예시 일러스트입니다.
- 경력, 실적, 고객사, 인증, 주소, 사업자등록번호를 임의로 만들지 않았습니다.
- 서비스 세부 범위와 상담 과정은 제안 문안입니다. 운영 전에 실제 사업 내용에 맞게 확인하세요.
- 실제 시공 사진과 허가받은 설명이 준비되면 작업 안내 섹션을 교체하세요.
- 문의 폼은 TXT 파일을 사용자 기기에 저장합니다. 서버로 제출하지 않으며 접수 완료를 표시하지 않습니다.
- 이메일 환경변수를 지정하면 이메일 링크가 표시됩니다. 자동 이메일 발송이나 접수 저장 기능은 없습니다.
- 주요 콘텐츠: `app/page.tsx`, 디자인: `app/globals.css`, 메타데이터: `app/layout.tsx`.

## 포함 기능

모바일 메뉴, 히어로 사진 자동 슬라이드·터치 스와이프·이전/다음·일시정지, 작업 유형 필터, FAQ, 브라우저 기본 필수값 검증을 적용한 상담 파일 저장, 키보드 탐색 및 동작 줄이기 설정 지원.