describe('BMI_UI - index.html, metric', function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
        $('#weight').val('90');
        $('#height').val('186');
        $('#metric').prop('checked', true);
        $('#calculate').trigger('click');

    });

    it("displays BMI Value", function() {
        expect($('#display_value').text()).toBe('Your BMI is 26.01');
    });

    it("displays BMI Message", function() {
        expect($('#display_message').text()).toBe('and you are Overweight');
    });
});

describe('BMI_UI - index.html, imperial', function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
        $('#w-lbs').val('176');
        $('#h-feet').val('5');
        $('#h-inches').val('9');
        $('#imperial').prop('checked', true);
        $('#calculate').trigger('click');
    });

    it("displays BMI Value", function() {
        expect($('#display_value').text()).toBe('Your BMI is 25.99');
    });

    it("displays BMI Message", function() {
        expect($('#display_message').text()).toBe('and you are Overweight');
    });
});
