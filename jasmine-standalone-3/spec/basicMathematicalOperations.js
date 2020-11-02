describe("basicOp", function(){

  it("returns the correct value according to the operation provided", function(){
    expect(basicOp('+', 1, 1)).toEqual(2)
    expect(basicOp('-', 5, 5 )).toEqual(0)
    expect(basicOp('*', 5, 5)).toEqual(25)
    expect(basicOp('/', 49, 7)).toEqual(7)
  })
});