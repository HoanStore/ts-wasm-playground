
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


