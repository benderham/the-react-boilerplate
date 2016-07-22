import { expect } from 'chai'

// import validator from 'email-validator'

// describe("Validate Email Addresses:", () => {
  
//   it("It should accept a '+' before '@'", () => {
//     var expected = true
//     var given = "something+someone@emailaddress.com"
//     var actual = validator.validate(given)
//     expect(actual).to.eql(expected)
//   })

//   it("It should have a '.' after '@'", () => {
//     var expected = false
//     var given = "someone@emailaddresscom"
//     var actual = validator.validate(given)
//     expect(actual).to.eql(expected)
//   })

//   it("It should have at least 2 chars after '.'", () => {
//     var expected = false
//     var given = "someone@emailaddress.c"
//     var actual = validator.validate(given)
//     expect(actual).to.eql(expected)
//   })

//   it("It should have at least 1 char before '@'", () => {
//     var expected = false
//     var given = "@emailaddress.c"
//     var actual = validator.validate(given)
//     expect(actual).to.eql(expected)
//   })

// })