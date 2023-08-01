const fs = require('fs');
const filename = 'data.txt';
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error while reading the file: ${err.message}`);
    return;
  }

  const wordCount = countWords(data);
  console.log(`Total word count : ${wordCount}`);
});

function countWords(text) {
  const words = text.trim().split(/\s+/);
  return words.length;
}
