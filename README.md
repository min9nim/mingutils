# min-utils

### getQueryParams
```javascript

// ex) http://www.11st.co.kr/product/SellerProductDetail.tmall?method=getSellerProductDetail&prdNo=2228972569&trTypeCd=22&trCtgrNo=895019

const queryParam = getQueryParams(window.location.href)
console.log(queryParam)
/*
queryParam is
{
    method: "getSellerProductDetail",
    prdNo: "2228972569",
    trTypeCd: "22",
    trCtgrNo: "895019"
}
*/
```