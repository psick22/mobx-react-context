# React Context를 활용한 MobX 스토어 구축

## 다루는 내용

MobX 공식 문서에서 observable state를 컴포넌트간의 공유하는 방법으로 세가지의 방법이 있으나

1. props로 전달하여 사용
2. 직접 import 하여 사용
3. React Context로 Provider에 전달하여 사용
   React context를 이용한 방법을 권장하고 있기 때문에 해당 내용을 공부해봄

- 핵심은 Context의 Provider를 상위 컴포넌트에 래핑하여 value로 루트 스토어 인스턴스를 전달하고
- observer 컴포넌트에서는 커스텀 훅으로 제작한 useStore 로 스토어에 접근한다는 것

## Reference

https://www.youtube.com/watch?v=tjHljJRooHU&t=27s
