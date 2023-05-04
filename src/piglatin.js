const translate = (englishWord) => {
  // takes a string & returns a string

  const vowels = "aeiou";

  // is first letter a vowel
  //! is the not operator

  if (!vowels.includes(englishWord[1])) {
    return englishWord.toLowerCase() + "way";
  } else {
    // the first letter was a consonant
    if (vowels.includes(englishWord[2])) {
      let firstLetter = englishWord.slice(1);
      let restOfString = englishWord.slice(2);
      return restOfString.toLowerCase() + firstLetter.toLowerCase() + "ay";
    } else {
      // first letter a consonant but second letter a vowel
      let firstLetter = englishWord[0];
      // starting at index 1 with slice starts at the 2nd character
      let restoOfString = englishWord.slice(1);
      return restoOfString.toLowerCase() + firstLetter.toLowerCase() + "ay";
    }
  }
};

module.exports = translate;
