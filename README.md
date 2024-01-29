# mingutils

**MIN**i **G**ood **UTILS**

<br>

### Install & Usage

Install

```
yarn add mingutils
```

Usage

ES6

```js
import {getHostName, ...} from 'mingutils'
```

NodeJS

```js
const {getHostName, ...} = require('mingutils')
```

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

### queryObjToStr

```js
queryObjToStr({ a: 1, b: 2 }) // 'a=1&b=2'
```

<br>

### setQueryParams

```js
setQueryParams({ id: 123, value: 'blabla' }) // window.location.href will be 'https://blabla.com?id=123&value=blabla'
```

<br>

### getHostName

```javascript
getHostName('https://news.v.daum.net/v/20200610002355321') // 'news.v.daum.net'
```

<br>

### numberWithCommas

```javascript
numberWithCommas(123456) // 123,456
```

<br>

### enableUrl

```javascript
const str = 'hello google http://google.com'
enableUrl(str) // hello google <a href="http://google.com">http://google.com</a>
enableUrl(str, '_blank') // hello google <a href="http://google.com" target="_blank">http://google.com</a>
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

<br>

### sortKeys

```javascript
import { descend, identity } from 'ramda'

const obj = { b: 1, a: 1, c: 1 }
const sorted = sortKeys(obj) // {a: 1, b: 1, c: 1}
const reversed = sortKeys(obj, (a, b) => (a < b ? 1 : -1)) // {c: 1, b: 1, a: 1}
```

<br>

### onlyOneInvkoe

```javascript
let cnt = 0
const fn = () => {
  cnt = cnt + 1
}
const fn2 = onlyOneInvoke(fn)
fn2() // `cnt` will be 1
fn2() // skipped
```

<br>

### createRandomString

> possible character: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

```javascript
createRandomString(10) // return random string with 10 length
```

<br>

### escapeRegExp

```javascript
const str = 'hello [world]'
escapeRegExp(str) // hello \[world\]
```

<br>

### hasProps

```javascript
const obj = { a: 1, b: 2, c: 3 }
hasProps(['a', 'b', 'c'])(obj) // true
hasProps(['a', 'b'])(obj) // true
hasProps(['c'])(obj) // true
hasProps(['a', 'b', 'd'])(obj) // false
hasProps(['d'])(obj) // false
```

<br/>

### oneOf

```js
import { oneOf } from '@madup-inc/utils'

oneOf([[true, 2]]) // 2
oneOf([
  [false, 1],
  [false, 2],
  [true, 3],
]) // 3
oneOf([
  [false, 1],
  [true, 2],
]) // 2
oneOf([[false, 1]]) // undefined
oneOf([[false, 1]], 'zzz') // 'zzz'

// Lazy evaluation
oneOf([() => true, 1]) // 1
oneOf([true, () => 2]) // 2
oneOf([() => true, () => 3]) // 3
oneOf([false, 1], () => 4) // 4
```

<br/>

### camelToKabab

```js
camelToKabab('helloWorld') // 'hello-world'
camelToKabab('camel2Kabab') // 'camel2-kabab'
camelToKabab('koreaArmyTrainingCenterK2') // 'korea-army-training-center-k2'
camelToKabab('hello-world') // 'hello-world'
camelToKabab('hello_world') // 'hello_world'
camelToKabab('hello-World') // 'hello-World'
```

<br/>

### classNames

```js
classNames({ a: true, b: false }) // 'a'
classNames({ a: true, b: false }, { c: true, d: true }) // 'a c d'
classNames('aa', 'bb') // 'aa bb'
classNames('aa bb', 'cc') // 'aa bb cc'
classNames('aa bb', 'cc', 'dd ee') // 'aa bb cc dd ee'
classNames('aa', undefined, 'cc') // 'aa cc'
classNames('aa', null, 'cc') // 'aa cc'

classNames('cc', { a: true, b: false }) // 'cc a'
classNames('xx', { a: true, b: false }, 'vv') // 'xx a vv'
classNames({ a: false, b: false })) // undefined
```

<br/>

### clsNms

```js
clsNms({ a: true, b: false }) // 'a'
clsNms({ a: true, b: false }, { c: true, d: true }) // 'a c d'
clsNms('aa', 'bb') // 'aa bb'
clsNms('aa', undefined, 'cc') // 'aa cc'
clsNms('aa', null, 'cc') // 'aa cc'

clsNms('cc', { a: true, b: false }) // 'cc a'
clsNms('xx', { a: true, b: false }, 'vv') // 'xx a vv'
clsNms({ a: false, b: false }) // undefined
clsNms('visible', { hasContent: true }) // 'visible has-content'
clsNms('hasContent', { visible: true }) // 'has-content visible'
```
