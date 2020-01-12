const {
  OR,
  AND,
  getQueryParams,
  createRandomString,
  numberWithCommas,
  exclude,
  isNotNil,
} = require('../src')
const {expect} = require('chai')

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
})
