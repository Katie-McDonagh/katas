describe("basicOp", function(){

  it("returns a number when given a number", function(){
    expect(basicOp('', 1, 0)).toEqual(1)
  });

  it("returns the numbers added together when give '+", function(){
    expect(basicOp('+', 1, 1)).toEqual(2)
  });

  it("returns the number that equals value 2 subtracted from value 1 when given '-'", function(){
    expect(basicOp('-', 5, 5 )).toEqual(0)
  })

  it("returns the numbers multiplied with each other", function(){
    expect(basicOp('*', 5, 5)).toEqual(25)
  })
});