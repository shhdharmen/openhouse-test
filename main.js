function stringToNumber(str_input) {
  let result = 0;
  if (!isNaN(str_input)) {
    // 1. if it's a number, we're done

    result = str_input;
  } else {
    // 2. Check if first characters is a number, only then start iterating

    if (!isNaN(str_input.charAt(0))) {
      for (let index = 0; index < str_input.length; index++) {
        const char = str_input.charAt(index);
        if (isNaN(char)) {
          // 3. if any character is not a number, stop iterating

          break;
        } else {
          // 4. if it's number, append to result

          result += char;
        }
      }
    } else if (str_input.charAt(0) === "-") {
      // 5. if first character is "-", take that out and start over and pre-append it back

      result += stringToNumber(str_input.slice(1, str_input.length - 1));
      if (result.length) {
        result = "-" + result;
      }
    }
  }

  // 6. converting result string to number
  return Number(result);
}

module.exports = stringToNumber;