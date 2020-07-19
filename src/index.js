const functions = {
  gradeClassifier: (grade) => {
    // TODO: Write code here
    if(grade <= 100 && grade >= 95.00)
      return "O - Outstanding";
    else if(grade <= 94.99 && grade >= 90.00)
      return "V - Very Good";
    else if(grade <= 89.99 && grade >= 85.00)
      return "G - Good";
    else if(grade <= 84.99 && grade >= 80.00)
      return "S - Satisfactory";
    else if(grade <= 79.99 && grade >= 75.00)
      return "N - Needs Improvement";
    else if(grade <= 74.99 && grade >= 0.00)
      return "D - Did not Meet Expectation";
    return "ERR - Out of Range";
  }
}

module.exports = functions;
