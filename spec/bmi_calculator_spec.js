describe("BMICalculator", function() {
  var calculator;
  var person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using metric method", function() {
    calculator.metric_bmi(person);
    expect(person.bmiValue).toEqual(26.01);
  });

});

describe("BMICalculator", function(){
  var calculator;
  var person;

  beforeEach(function() {
    person = new Person({weight_in_lbs: 176, height_in_feet: 5, height_in_inches: 9});
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using imperial method", function() {
    calculator.imperial_bmi(person);
    expect(person.bmiValue).toEqual(25.99);
  });

});
