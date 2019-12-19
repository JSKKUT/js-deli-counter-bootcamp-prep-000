                    //  1) deli takeANumber adds a person to the line: ReferenceError: takeANumber is not defined
                    //  2) deli takeANumber appends the person the end of the line if there are already people on it: ReferenceError: takeANumber is not defined
                    //  3) deli takeANumber properly handles multiple people being added: ReferenceError: takeANumber is not defined
function takeANumber(katzDeli, name) {
  katzDeli.push(name);
    return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {
  var person = katzDeli.shift();
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    person;
    return `Currently serving ${person}.`
  }
}

function currentLine(katzDeli) {
  var i = 0
  var list = []
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  } else {
      while (i < katzDeli.length) {
        list.push(`${i + 1}. ${katzDeli[i]}`);
        i++;
      }
        return "The line is currently: " + list.join(", ");
      }
}
