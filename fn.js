const handleChange = text => {
    if (text.length > 8) return;
    // read from the bottom to the top
    if (text.match(/[0-9]/)) {
      // days in Feb, if leap year: [1-29] else: [1-28]
      if (
        text.length > 7 &&
        Number(text.slice(4, 6)) === 2 &&
        (Number(text.slice(6)) < 1 ||
          (moment([Number(text.slice(0, 4))]).isLeapYear()
            ? Number(text.slice(6)) > 29
            : Number(text.slice(6)) > 28))
      ) {
        return;
      }

      // days in month of 30 days is between [1-30]
      if (
        text.length > 7 &&
        [4, 6, 9, 11].includes(Number(text.slice(4, 6))) &&
        (Number(text.slice(6)) < 1 || Number(text.slice(6)) > 30)
      ) {
        return;
      }

      // days in month of 31 days is between [1-31]
      if (
        text.length > 7 &&
        [1, 3, 5, 7, 8, 10, 12].includes(Number(text.slice(4, 6))) &&
        (Number(text.slice(6)) < 1 || Number(text.slice(6)) > 31)
      ) {
        return;
      }

      // first digit of days in Feb is between [0-2]
      if (
        text.length > 6 &&
        Number(text.slice(4, 6)) === 2 &&
        !text[6].match(/[0-2]/)
      ) {
        return;
      }

      // first digit of days in months exclude Feb is between [0-3]
      if (text.length > 6 && !text[6].match(/[0-3]/)) {
        return;
      }

      // the month is between [1-12]
      if (
        text.length > 5 &&
        (Number(text.slice(4, 6)) < 1 || Number(text.slice(4, 6)) > 12)
      ) {
        return;
      }

      // first digit of month is between [0-1]
      if (text.length > 4 && !text[4].match(/[0-1]/)) {
        return;
      }

      // first digit of year doesn't equal 0
      if (text[0].match(/0/)) {
        return;
      }
      console.log(text);

      setValue(text);
    } 
  };
