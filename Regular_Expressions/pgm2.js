function tenMostFrequentWords(paragraph, limit = 10) {
    // Convert the paragraph to lowercase and split into words
    const words = paragraph.toLowerCase().match(/\b\w+\b/g);
  
    // Count frequency of each word using an object
    const wordCount = {};
    words.forEach(word => {
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    });
  
    // Convert wordCount object to an array of {word, count} and sort by count in descending order
    const sortedWords = Object.entries(wordCount)
      .map(([word, count]) => ({ word, count }))
      .sort((a, b) => b.count - a.count);
  
    // Return the top 'limit' words
    return sortedWords.slice(0, limit);
  }
  
  // Example usage:
  const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
  
  console.log(tenMostFrequentWords(paragraph));
  console.log(tenMostFrequentWords(paragraph, 10));
  