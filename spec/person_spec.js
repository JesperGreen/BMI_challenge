describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
  });

  it("should have weight of 90", function() {
    expect(person.weight).toEqual(90);
  });

  it("should have height of 186", function() {
    expect(person.height).toEqual(186);
  });

  it("should calculate BMI value", function() {
  person.calculate_bmi();
  expect(person.bmiValue).toEqual(26.01)
  });

  it("should have a BMI Message", function() {
    person.calculate_bmi();
    expect(person.bmiMessage).toEqual("Overweight")
  });
});

describe("Person using imperial system", function() {
  var person;

  beforeEach(function() {
    person = new Person({weight_in_lbs: 176, height_in_feet: 5, height_in_inches: 9});
  });

  it("should have weight of 176", function() {
    expect(person.weight_in_lbs).toEqual(176);
  });

  it("should have height feet", function() {
    expect(person.height_in_feet).toEqual(5);
  });

  it("should have height in inches", function() {
    expect(person.height_in_inches).toEqual(9);
  });

  it("should have a BMI Message", function() {
    person.calculate_bmi();
    expect(person.bmiMessage).toEqual("Overweight")
  });
});
