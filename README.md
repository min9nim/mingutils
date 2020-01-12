# minguutils

MINi Good utils

<br>

### getQueryParams

```javascript
// ex) http://www.11st.co.kr/product/SellerProductDetail.tmall?method=getSellerProductDetail&prdNo=2228972569&trTypeCd=22&trCtgrNo=895019

const queryParam = getQueryParams(window.location.href)
console.log(queryParam)
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
setQueryParams({ id: 123, value: "blabla" })
// https://blabla.com?id=123&value=blabla
```

<br>

### numberWithCommas

```javascript
console.log(numberWithCommas(123456))
// 123,456
```

<br>

### enableUrl

```javascript
const str = "hello google http://google.com"
console.log(enableUrl(str))
/*
hello google <a href="http://google.com">http://google.com</a>
*/
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
removeTag(html) // return 'some text'
```

<br>

### highlight

```javascript
highlight("hello")("hello world") // return "<mark>hello</mark> world"
```

<br>

### OR

```javascript
const isPositive = num => num > 0
const isZero = num => num === 0
const isZeroOrPositive = OR(isPositive, isZero)
isZeroOrPositive(1) // return true
isZeroOrPositive(0) // return true
isZeroOrPositive(-1) // return false
```

<br>

### AND

```javascript
const isPositive = num => num > 0
const isEven = num => num % 2 === 0
const isEvenAndPositive = AND(isPositive, isEven)
isEvenAndPositive(2) // return true
isEvenAndPositive(0) // return false
isEvenAndPositive(-2) // return false
```
