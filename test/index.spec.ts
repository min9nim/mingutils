import {
  OR,
  AND,
  getQueryParams,
  createRandomString,
  numberWithCommas,
  removeExt,
  delay,
  timer,
  removeTag,
  enableUrl,
  getHostname,
  getFileName,
  exclude,
  go,
  isNotNil,
  nl2br,
  sortKeys,
  onlyOneInvoke,
  highlight,
  hasProps,
} from '../src'
import {expect} from 'chai'
import {descend, identity} from 'ramda'

describe('test', () => {
  it('OR', () => {
    const isPositive = num => num > 0
    const isZero = num => num === 0
    const isZeroOrPositive = OR(isPositive, isZero)
    expect(isZeroOrPositive(1)).to.be.equal(true)
    expect(isZeroOrPositive(0)).to.be.equal(true)
    expect(isZeroOrPositive(-1)).to.be.equal(false)
  })

  it('AND', () => {
    const isPositive = num => num > 0
    const isEven = num => num % 2 === 0
    const isEvenAndPositive = AND(isPositive, isEven)
    expect(isEvenAndPositive(2)).to.be.equal(true)
    expect(isEvenAndPositive(0)).to.be.equal(false)
    expect(isEvenAndPositive(-1)).to.be.equal(false)
  })

  it('getQueryParams', () => {
    const url =
      'http://www.11st.co.kr/product/SellerProductDetail.tmall?method=getSellerProductDetail&prdNo=2228972569&trTypeCd=22&trCtgrNo=895019'

    const queryParam = getQueryParams(url)
    expect(queryParam).to.be.deep.equal({
      method: 'getSellerProductDetail',
      prdNo: '2228972569',
      trTypeCd: '22',
      trCtgrNo: '895019',
    })
  })

  it('getQueryParams when except host', () => {
    const url =
      '/product/SellerProductDetail.tmall?method=getSellerProductDetail&prdNo=2228972569&trTypeCd=22&trCtgrNo=895019'

    const queryParam = getQueryParams(url)
    expect(queryParam).to.be.deep.equal({
      method: 'getSellerProductDetail',
      prdNo: '2228972569',
      trTypeCd: '22',
      trCtgrNo: '895019',
    })
  })

  it('createRandomString', () => {
    const str = createRandomString(10)
    expect(str.length).to.be.equal(10)
    expect(/\W/gi.test(str)).to.be.equal(false)
  })

  it('numberWithCommas', () => {
    expect(numberWithCommas(1234567)).to.be.equal('1,234,567')
  })

  it('exclude', () => {
    const arr = [1, 2, 3, 4, 5, 6]
    const isEven = num => num % 2 === 0
    expect(exclude(isEven)(arr)).to.be.deep.equal([1, 3, 5])
  })

  it('isNotNil', () => {
    expect(isNotNil(undefined)).to.be.equal(false)
    expect(isNotNil(null)).to.be.equal(false)
    expect(isNotNil(0)).to.be.equal(true)
    expect(isNotNil('')).to.be.equal(true)
    expect(isNotNil(NaN)).to.be.equal(true)
  })

  it('go', () => {
    const add5 = num => num + 5
    const mul2 = num => num * 2
    const result = go(1, add5, mul2)
    expect(result).to.be.equal(12)
  })

  it('nl2br', () => {
    const str = 'hello\nworld'
    expect(nl2br(str)).to.be.equal('hello<br />world')
  })

  it('enableUrl', () => {
    const str = 'hello google http://google.com'
    expect(enableUrl(str)).to.be.equal(
      'hello google <a href="http://google.com">http://google.com</a>',
    )
  })

  it('removeExt', () => {
    const filename = 'index.html'
    expect(removeExt(filename)).to.be.equal('index')
  })

  it('getFileName', () => {
    const filename = '/users/test/index.html'
    expect(getFileName(filename)).to.be.equal('index')
    expect(getFileName(filename, true)).to.be.equal('index.html')
  })

  it('timer & delay', async () => {
    let cnt = 0
    const add1 = () => {
      cnt++
    }
    delay(add1, 10)
    expect(cnt).to.be.equal(0)
    await timer(10)
    expect(cnt).to.be.equal(1)
  })

  it('removeTag', () => {
    const html = '<pre class="editor">some text</pre>'
    expect(removeTag(html)).to.be.equal('some text')
  })

  it('sortKeys', () => {
    const obj = {b: 1, a: 1, c: 1}
    const sorted = sortKeys(obj)
    expect(Object.keys(sorted)).to.be.deep.equal(Object.keys({a: 1, b: 1, c: 1}))
    const reversed = sortKeys(obj, descend(identity))
    expect(Object.keys(reversed)).to.be.deep.equal(Object.keys({c: 1, b: 1, a: 1}))
    const reversed2 = sortKeys(obj, (a, b) => (a < b ? 1 : -1))
    expect(Object.keys(reversed2)).to.be.deep.equal(Object.keys({c: 1, b: 1, a: 1}))
  })
  it('onlyOneInvoke', () => {
    let cnt = 0
    const fn = () => {
      cnt = cnt + 1
    }
    const fn2 = onlyOneInvoke(fn)
    fn2()
    fn2()
    expect(cnt).to.be.equal(1)
  })
  it('highlight', () => {
    expect(highlight('aa')('aabbcc')).to.be.equal('<mark>aa</mark>bbcc')
    expect(highlight('aa\\')('aa\\bbcc')).to.be.equal('<mark>aa\\</mark>bbcc')
  })
  it('getHostname', () => {
    expect(getHostname('https://naver.com')).to.be.equal('naver.com')
    expect(getHostname('https://news.v.daum.net/v/20200613000613325')).to.be.equal(
      'news.v.daum.net',
    )
  })
  it('hasProps', () => {
    const obj = { a: 1, b: 2, c: 3 }
    expect(hasProps(['a', 'b', 'c'])(obj)).to.equal(true)
    expect(hasProps(['a', 'b'])(obj)).to.equal(true)
    expect(hasProps(['c'])(obj)).to.equal(true)
    expect(hasProps(['a', 'b', 'd'])(obj)).to.equal(false)
    expect(hasProps(['d'])(obj)).to.equal(false)
  })
})
