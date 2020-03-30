# Signup-6
회원가입 프로젝트 - 6팀
* FE: [Reese](https://github.com/reesekimm)
* BE: [Poogle](https://github.com/suhyunsim), [Ever](https://github.com/hsik0225)
* iOS: [또치](https://github.com/TTozzi)

## 배포
http://3.34.23.92:8080/

# Ground Rule
## Scrum
* 오전 10시 (행 아웃)
* 내용
  * 컨디션
  * 구현 상황
  * 오늘의 목표

## Commit Convention
|--|--|
|`Feat`|새로운 기능 추가
|`Fix`|버그 수정
|`Docs`|문서 수정
|`Refactor`|코드 리팩토링
|`Style`|코드 포맷팅 (코드 변경이 없는 경우)
|`Test`|테스트 코드 작성
|`Chore`|소스 코드를 건들지 않는 작업(빌드 업무 수정)

[참고](https://doublesprogramming.tistory.com/256)

## Git issue 활용
- 커밋 메세지로 이슈 닫기
- `Fixed #n`

## 브랜치
| 브랜치 | 설명 |
|--|--|
|master`| 배포 버전
|deployTest`| 배포 테스트 버전
|dev`| 기능 개발 완료 후 dev 브랜치에 병합
|클래스/Feature/기능`| 기능 개발 브랜치
  
## WorkFlow 관리
* Github flow 사용

## WEB API
| URL | 설명 |
|--
| /api/locations/ | 측정소 전체 목록과 위치 반환|
| /api/location/@?= | 입력한 위도 경도에서 가장 가까운 측정소 반환 |
| /api/{location}/dust-status | /api/{location}/dust-status |
| /api/dust/forcast| 미세먼지 예보 |