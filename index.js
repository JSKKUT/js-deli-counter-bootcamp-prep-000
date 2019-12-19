                    //  1) deli takeANumber adds a person to the line: ReferenceError: takeANumber is not defined
                    //  2) deli takeANumber appends the person the end of the line if there are already people on it: ReferenceError: takeANumber is not defined
                    //  3) deli takeANumber properly handles multiple people being added: ReferenceError: takeANumber is not defined
function takeANumber(katzDeli, name) {
  katzDeli.push(name);
    return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}



                    //  4) deli nowServing returns the line is empty when no one is on line: ReferenceError: nowServing is not defined
//  5) deli nowServing returns an announcement about the person it is serving, and shifts the line: ReferenceError: nowServing is not defined

  // describe('nowServing', () => {
  //   it('returns the line is empty when no one is on line', () => {
  //     expect(nowServing([])).toEqual("There is nobody waiting to be served!");
  //   });

  //   it('returns an announcement about the person it is serving, and shifts the line', () => {
  //     const deliLine = ["Steven", "Blake", "Avi"]
  //     expect(nowServing(deliLine)).toEqual("Currently serving Steven.");
  //     expect(deliLine).toEqual(["Blake", "Avi"]);
  //   });
  // });

function nowServing(katzDeli) {
  var person = katzDeli.shift();
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    katzDeli.shift();
    return `Currently serving ${person}.`
  }
}







//  6) deli currentLine(line) returns "The line is currently empty." if no one isin line: ReferenceError: currentLine is not defined
//  7) deli currentLine(line) says who is in line when there are people waiting: ReferenceError: currentLine is not defined
