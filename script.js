
const express = require('express');
const app = express();


const regexTutorial = [
  {
    id: 1,
    title: 'Regex Tutorial',
    introduction: 'Welcome to the Regex Tutorial!',
    summary: 'This tutorial will teach you about regular expressions (regex), which are a powerful tool for matching and manipulating text patterns.',
    tableOfContents: [
      { id: 1, title: 'Section 1: Introduction to Regex', link: '#section1' },
      { id: 2, title: 'Section 2: Matching Characters', link: '#section2' },
      { id: 3, title: 'Section 3: Anchors and Boundaries', link: '#section3' },
      { id: 4, title: 'Section 4: Alternation and Grouping', link: '#section4' }
    ],
    sections: [
      {
        id: 1,
        title: 'Section 1: Introduction to Regex',
        content: 'In this section, you will learn the basics of regular expressions and their syntax.'
      },
      {
        id: 2,
        title: 'Section 2: Matching Characters',
        content: 'In this section, you will learn how to match specific characters or character sets using regular expressions.'
      },
      {
        id: 3,
        title: 'Section 3: Anchors and Boundaries',
        content: 'In this section, you will learn how to match the beginning or end of a string or word using regular expressions.'
      },
      {
        id: 4,
        title: 'Section 4: Alternation and Grouping',
        content: 'In this section, you will learn how to match multiple patterns using alternation and grouping with regular expressions.'
      }
    ],
    author: {
      name: 'John Doe',
      bio: 'I am a developer and regex enthusiast.',
      github: 'https://github.com/johndoe'
    }
  }
];


app.get('/regex-tutorial', (req, res) => {
  res.send(regexTutorial);
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});




