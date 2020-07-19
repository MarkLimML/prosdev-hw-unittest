const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('When grade is at most 100 and at least 95.00, then display grade of O - Outstanding', () => {
  //OUTSTANDING
  it('When grade is at 100.00, then return grade O - Outstanding', () => {
    // Arrange
    const grade = 100.00;
    const gradeClass = "O - Outstanding";
    var res = "";

    // Act
    res = gradeClassifier(grade);

    // Assert
    expect(res).toEqual(gradeClass);
  });
  it('When grade is at 96.75, then return grade O - Outstanding', () => {
    // Arrange
    const grade = 96.75;
    const gradeClass = "O - Outstanding";
    var res = "";

    // Act
    res = gradeClassifier(grade);

    // Assert
    expect(res).toEqual(gradeClass);
  });
  it('When grade is at 95.00, then return grade O - Outstanding', () => {
    // Arrange
    const grade = 95.00;
    const gradeClass = "O - Outstanding";
    var res = "";

    // Act
    res = gradeClassifier(grade);

    // Assert
    expect(res).toEqual(gradeClass);
  });
});

describe('When grade is at most 94.99 and at least 90.00, then display grade of V - Very Good', () => {
  //VERY GOOD
  it('When grade is at 94.99, then return grade V - Very Good', () => {
    // Arrange
    const grade = 94.99;
    const gradeClass = "V - Very Good";
    var res = "";

    // Act
    res = gradeClassifier(grade);

    // Assert
    expect(res).toEqual(gradeClass);
  });
  it('When grade is at 92.10, then return grade V - Very Good', () => {
    // Arrange
    const grade = 92.10;
    const gradeClass = "V - Very Good";
    var res = "";

    // Act
    res = gradeClassifier(grade);

    // Assert
    expect(res).toEqual(gradeClass);
  });
  it('When grade is at 90.00, then return grade V - Very Good', () => {
    // Arrange
    const grade = 90.00;
    const gradeClass = "V - Very Good";
    var res = "";

    // Act
    res = gradeClassifier(grade);

    // Assert
    expect(res).toEqual(gradeClass);
  });
});

describe('When grade is at most 89.99 and at least 85, then display grade of G - Good', () => {
  //GOOD
  it('When grade is at 89.99, then return grade G - Good', () => {
    // Arrange
    const grade = 89.99;
    const gradeClass = "G - Good";
    var res = "";

    // Act
    res = gradeClassifier(grade);

    // Assert
    expect(res).toEqual(gradeClass);
  });
  it('When grade is at 88.5, then return grade G - Good', () => {
    // Arrange
    const grade = 88.5;
    const gradeClass = "G - Good";
    var res = "";

    // Act
    res = gradeClassifier(grade);

    // Assert
    expect(res).toEqual(gradeClass);
  });
  it('When grade is at 85.00, then return grade G - Good', () => {
    // Arrange
    const grade = 85.00;
    const gradeClass = "G - Good";
    var res = "";

    // Act
    res = gradeClassifier(grade);

    // Assert
    expect(res).toEqual(gradeClass);
  });
});

describe('When grade is at most 84.99 and at least 80, then display grade of S - Satisfactory', () => {
  //SATISFACTORY
  it('When grade is at 84.99, then return grade S - Satisfactory', () => {
    // Arrange
    const grade = 84.99;
    const gradeClass = "S - Satisfactory";
    var res = "";

    // Act
    res = gradeClassifier(grade);

    // Assert
    expect(res).toEqual(gradeClass);
  });
  it('When grade is at 80.99, then return grade S - Satisfactory', () => {
    // Arrange
    const grade = 80.99;
    const gradeClass = "S - Satisfactory";
    var res = "";

    // Act
    res = gradeClassifier(grade);

    // Assert
    expect(res).toEqual(gradeClass);
  });
  it('When grade is at 80.00, then return grade S - Satisfactory', () => {
    // Arrange
    const grade = 80.00;
    const gradeClass = "S - Satisfactory";
    var res = "";

    // Act
    res = gradeClassifier(grade);

    // Assert
    expect(res).toEqual(gradeClass);
  });
});

describe('When grade is at most 79.99 and at least 75, then display grade of N - Needs Improvement', () => {
  //NEEDS IMPROVEMENT
  it('When grade is at 79.99, then return grade N - Needs Improvement', () => {
    // Arrange
    const grade = 79.99;
    const gradeClass = "N - Needs Improvement";
    var res = "";

    // Act
    res = gradeClassifier(grade);

    // Assert
    expect(res).toEqual(gradeClass);
  });
  it('When grade is at 76.25, then return grade N - Needs Improvement', () => {
    // Arrange
    const grade = 76.25;
    const gradeClass = "N - Needs Improvement";
    var res = "";

    // Act
    res = gradeClassifier(grade);

    // Assert
    expect(res).toEqual(gradeClass);
  });
  it('When grade is at 75.00, then return grade N - Needs Improvement', () => {
    // Arrange
    const grade = 75.00;
    const gradeClass = "N - Needs Improvement";
    var res = "";

    // Act
    res = gradeClassifier(grade);

    // Assert
    expect(res).toEqual(gradeClass);
  });
});

describe('When grade is at most 74.99 and a non-negative number, then display grade of D - Did not Meet Expectation', () => {
  //DNME
  it('When grade is at 74.99, then return grade D - Did not Meet Expectation', () => {
    // Arrange
    const grade = 74.99;
    const gradeClass = "D - Did not Meet Expectation";
    var res = "";

    // Act
    res = gradeClassifier(grade);

    // Assert
    expect(res).toEqual(gradeClass);
  });
  it('When grade is at 50.99, then return grade D - Did not Meet Expectation', () => {
    // Arrange
    const grade = 50.99;
    const gradeClass = "D - Did not Meet Expectation";
    var res = "";

    // Act
    res = gradeClassifier(grade);

    // Assert
    expect(res).toEqual(gradeClass);
  });
  it('When grade is at 0.00, then return grade D - Did not Meet Expectation', () => {
    // Arrange
    const grade = 0.00;
    const gradeClass = "D - Did not Meet Expectation";
    var res = "";

    // Act
    res = gradeClassifier(grade);

    // Assert
    expect(res).toEqual(gradeClass);
  });
});

describe('When grade is outside of all possible ranges, then display ERR - Out of Range', () => {
  //ERROR
  it('When grade is -100, then return ERR - Out of Range', () => {
    // Arrange
    const grade = -100;
    const gradeClass = "ERR - Out of Range";
    var res = "";

    // Act
    res = gradeClassifier(grade);

    // Assert
    expect(res).toEqual(gradeClass);
  });
  it('When grade is 100.000001, then return ERR - Out of Range', () => {
    // Arrange
    const grade = 100.000001;
    const gradeClass = "ERR - Out of Range";
    var res = "";

    // Act
    res = gradeClassifier(grade);

    // Assert
    expect(res).toEqual(gradeClass);
  });
  it('When grade is 100.1, then return ERR - Out of Range', () => {
    // Arrange
    const grade = 100.10;
    const gradeClass = "ERR - Out of Range";
    var res = "";

    // Act
    res = gradeClassifier(grade);

    // Assert
    expect(res).toEqual(gradeClass);
  });
});
