const goalTypes = {
  readBook: {
    label: "Read a book",
    value: "readBook",
    fields: [
      { name: "title", label: "Title", placeholder: "Mere Christianity" },
      { name: "pages", label: "Pages", placeholder: "200" },
    ],
    pointCalculation: ({pages}) => Math.floor(parseInt(pages) / 10),
  },
  readBible: {
    label: "Read the bible",
    value: "readBible",
    fields: [
      { name: "chapters", label: "Number of chapters", placeholder: "3" },
      { name: "reference", label: "Bible reference", placeholder: "John 3-6" },
    ],
    pointCalculation: ({chapters}) => Math.floor(parseInt(chapters) / 3),
  },
  memorizeVerse: {
    label: "Memorized verse",
    value: "memorizeVerse",
    fields: [
      { name: "reference", label: "Bible reference", placeholder: "John 3:16" },
    ],
    pointCalculation: ({}) => 1,
  },
  memorizeChapter: {
    label: "Memorized bible chapter",
    value: "memorizeChapter",
    fields: [
      { name: "reference", label: "Bible reference", placeholder: "John 10" },
    ],
    pointCalculation: ({}) => 15,
  },
  specialTalk: {
    label: "Prepared a special talk",
    value: "specialTalk",
    fields: [
      { name: "subject", label: "Subject", placeholder: "eg. Problem of pain" },
    ],
    pointCalculation: ({}) => 20,
  },
  shareGospel: {
    label: "Shared gospel or testimony",
    value: "shareGospel",
    fields: [{ name: "audience", label: "Who did you share with" }],
    pointCalculation: ({}) => 5,
  },
  cook: {
    label: "Cooked a meal for others",
    value: "cook",
    fields: [{ name: "dish", label: "What did you cook" }],
    pointCalculation: ({}) => 3,
  },
  mediaFast: {
    label: "'Went offline' / Media fast",
    value: "mediaFast",
    fields: [
      { name: "date", label: "When was it", placeholder: "12/20 - 12/27" },
      {name: 'weeks', label: 'How many weeks', placeholder: '1'}
    ],
    pointCalculation: ({weeks}) => Math.floor(parseInt(weeks) * 10),
  },
  exercise: {
    label: "Exercise",
    value: "exercise",
    fields: [
      {
        name: "exercise",
        label: "Exercise",
        placeholder: "Running, Swimming, etc.",
      },
      {
        name: "duration",
        label: "How long did you exercise (min)",
        placeholder: "20",
      },
    ],
    pointCalculation: ({duration}) => Math.floor(parseInt(duration) / 10),
  },
  devotions: {
    label: "Did DT",
    value: "devotions",
    fields: [
      { name: "date", label: "When did you do it", placeholder: "12/25" },
      {
        name: "reference",
        label: "Bible reference",
        placeholder: "John 13:1-20",
      },
    ],
    pointCalculation: ({chapters}) => Math.floor(parseInt(chapters) / 3),
  },
  makeBed: {
    label: "Read the bible",
    value: "makeBed",
    fields: [
      { name: "when", label: "When did you do it", placeholder: '12/20 - 12/27' },
      { name: "weeks", label: "How many weeks", placeholder: '1' },
    ],
    pointCalculation: ({weeks}) => Math.floor(parseInt(weeks) * 2),
  },
  thankYou: {
    label: "Wrote thank you card",
    value: "thankYou",
    fields: [
      { name: "who", label: "Who was it for", placeholder: 'Anonymous' },

    ],
    pointCalculation: ({}) => 2,
  },
  chores: {
    label: "Did chores",
    value: "chores",
    fields: [
      { name: "duration", label: "How long did it take (min)", placeholder: '10' },
      { name: "chore", label: "What did you do" },
    ],
    pointCalculation: ({duration}) => Math.floor(parseInt(duration) / 10),
  },
};

export default goalTypes;
