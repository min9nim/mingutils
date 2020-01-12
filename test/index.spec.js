const { OR, AND } = require("../src")
const { expect } = require("chai")

describe("test", () => {
  it("OR", () => {
    const isPositive = num => num > 0
    const isZero = num => num === 0
    const isZeroOrPositive = OR(isPositive, isZero)
    expect(isZeroOrPositive(1)).to.be.equal(true)
    expect(isZeroOrPositive(0)).to.be.equal(true)
    expect(isZeroOrPositive(-1)).to.be.equal(false)
  })

  it("AND", () => {
    const isPositive = num => num > 0
    const isEven = num => num % 2 === 0
    const isEvenAndPositive = AND(isPositive, isEven)
    expect(isEvenAndPositive(2)).to.be.equal(true)
    expect(isEvenAndPositive(0)).to.be.equal(false)
    expect(isEvenAndPositive(-1)).to.be.equal(false)
  })
})
