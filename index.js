//  1) deli takeANumber adds a person to the line: ReferenceError: takeANumber is not defined
//  2) deli takeANumber appends the person the end of the line if there are already people on it: ReferenceError: takeANumber is not defined
                    //  3) deli takeANumber properly handles multiple people being added: ReferenceError: takeANumber is not defined
//  4) deli nowServing returns the line is empty when no one is on line: ReferenceError: nowServing is not defined
//  5) deli nowServing returns an announcement about the person it is serving, and shifts the line: ReferenceError: nowServing is not defined
//  6) deli currentLine(line) returns "The line is currently empty." if no one isin line: ReferenceError: currentLine is not defined
//  7) deli currentLine(line) says who is in line when there are people waiting: ReferenceError: currentLine is not defined



// describe('deli', () => {
//   describe('takeANumber', () => {
//     var katzDeli;
//     var otherDeli;

//     beforeEach(() => {
//       katzDeli = [];
//       otherDeli = ["Steven", "Blake", "Avi"];
//     });

//     it('adds a person to the line', () => {
//       expect(takeANumber(katzDeli, 'Ada')).toEqual("Welcome, Ada. You are number 1 in line.");
//       expect(katzDeli).toEqual(['Ada']);
//     });

//     it('appends the person the end of the line if there are already people on it', () => {
//       expect(takeANumber(otherDeli, 'Grace')).toEqual("Welcome, Grace. You are number 4 in line.");
//       expect(otherDeli).toEqual(["Steven", "Blake", "Avi", "Grace"]);
//     });

//     it("properly handles multiple people being added", () => {
//       takeANumber(katzDeli, 'Ada');
//       takeANumber(katzDeli, 'Grace');
//       takeANumber(katzDeli, 'Kent');

//       expect(katzDeli).toEqual(["Ada", "Grace", "Kent"]);
//     });
//   });

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
      return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}
