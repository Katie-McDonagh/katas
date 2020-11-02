describe("basicOp", function(){

  it("returns a number when given a number", function(){
    expect(basicOp('', 1, 0)).toEqual(1)
  });

  it("returns the numbers added together when give '+", function(){
    expect(basicOp('+', 1, 1)).toEqual(2)
  });
});