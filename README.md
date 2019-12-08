# min-utils

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
setQueryParams({id: 123, value: 'blabla'})
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
const str = 'hello google http://google.com'
console.log(enableUrl(str))
/*
hello google <a href="http://google.com">http://google.com</a>
*/
```

<br>

### onlyNumber
```html
<input onkeydown="onlyNumber(event)">
```