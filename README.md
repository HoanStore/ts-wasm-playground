[WASM]

1. cd ../emsdk
2. source ./emsdk_env.sh

참고 : 위 명령어를 실행한 터미널에서만 emcc가 활성화됨

3. emcc hello.c -Os -s WASM=1 -s SIDE_MODULE=1 -o hello.wasm


[수동]
1. 1단계: TypeScript → JavaScript 컴파일
```
npx tsc
```

2. 2단계: Node.js로 실행
```
node dist/index.js
```


[자동]

1. package.json에 다음과 같이 스크립트를 추가
```
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "npm run build && npm run start"
}

```

2. 아래 한줄로 빌드+실행 가능
```
npm run dev
```


