const { OR } = require("../src")
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
})
