# mingutils

MINi Good utils

<br>

### getQueryParams

```javascript
// ex) http://www.11st.co.kr/product/SellerProductDetail.tmall?method=getSellerProductDetail&prdNo=2228972569&trTypeCd=22&trCtgrNo=895019

getQueryParams(window.location.href)
/*
{
    method: "getSellerProductDetail",
    prdNo: "2228972569",
    trTypeCd: "22",
    trCtgrNo: "895019"
}
*/
```

<br>

### setQueryParams

```javascript
setQueryParams({id: 123, value: 'blabla'}) // window.location.href will be 'https://blabla.com?id=123&value=blabla'
```

<br>

### numberWithCommas

```javascript
numberWithCommas(123456 // 123,456
```

<br>

### enableUrl

```javascript
const str = 'hello google http://google.com'
enableUrl(str) // hello google <a href="http://google.com">http://google.com</a>
```

<br>

### onlyNumber

```html
<input onkeydown="onlyNumber(event)" />
```

<br>

### removeTag

```javascript
const html = '<pre class="editor">some text</pre>'
removeTag(html) // 'some text'
```

<br>

### highlight

```javascript
highlight('hello')('hello world') // '<mark>hello</mark> world'
```

<br>

### OR

```javascript
const isPositive = num => num > 0
const isZero = num => num === 0
const isZeroOrPositive = OR(isPositive, isZero)
isZeroOrPositive(1) // true
isZeroOrPositive(0) // true
isZeroOrPositive(-1) // false
```

<br>

### AND

```javascript
const isPositive = num => num > 0
const isEven = num => num % 2 === 0
const isEvenAndPositive = AND(isPositive, isEven)
isEvenAndPositive(2) // true
isEvenAndPositive(0) // false
isEvenAndPositive(-2) // false
```

<br>

### exclude

```javascript
const arr = [1, 2, 3, 4, 5, 6]
const isEven = num => num % 2 === 0
exclude(isEven)(arr) // [1,3,5]
```

<br>

### isNotNil

complement of [`R.isNil`](https://ramdajs.com/docs/#isNil)

```javascript
isNotNil(undefined) // false
isNotNil(null) // false
isNotNil(0) // true
isNotNil('') // true
isNotNil(NaN) // true
```

<br>

### go

```javascript
const add5 = num => num + 5
const mul2 = num => num * 2
go(1, add5, mul2) // 12
```

<br>

### nl2br

```javascript
const str = 'hello\nworld'
nl2br(str) // 'hello<br />world'
```

<br>

### timer

```javascript
await timer(2000) // wait for 2s
```

<br>

### delay

```javascript
await delay(fn, 2000) // call fn after 2s
```

<br>

### removeExt

```javascript
const filename = 'index.html'
removeExt(filename) // 'index'
```

<br>

### getFileName

```javascript
const filename = '/users/test/index.html'
getFileName(filename) // 'index'
getFileName(filename, true) // 'index.html'
```

<br>

### loadJs

(Browser only)

```javascript
await loadJs('https://code.jquery.com/jquery-3.4.1.min.js') // browser only
console.log(jQuery().jquery) // "3.4.1"
```
