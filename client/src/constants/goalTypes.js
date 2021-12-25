const goalTypes = {
  readBook: {
    label: "Read a book",
    value: "readBook",
    fields: [
      {
        name: "title",
        label: "Title",
        placeholder: "Mere Christianity",
        required: true,
      },
      {
        name: "pages",
        label: "Pages",
        placeholder: "200",
        required: true,
        help: "Add in groups of 10 at a time to earn points",
      },
    ],
    pointCalculation: ({ pages }) => Math.floor(parseInt(pages) / 10),
  },
  readBible: {
    label: "Read the bible",
    value: "readBible",
    fields: [
      {
        name: "chapters",
        label: "Number of chapters",
        placeholder: "2",
        required: true,
        help: "Add in groups of 2 at a time to earn points",
      },
      {
        name: "reference",
        label: "Bible reference",
        placeholder: "John 3-6",
        required: true,
      },
    ],
    pointCalculation: ({ chapters }) => Math.floor(parseInt(chapters) / 2),
  },
  memorizeVerse: {
    label: "Memorized verse",
    value: "memorizeVerse",
    fields: [
      {
        name: "reference",
        label: "Bible reference",
        placeholder: "John 3:16",
        required: true,
      },
    ],
    pointCalculation: ({}) => 1,
  },
  memorizeChapter: {
    label: "Memorized bible chapter",
    value: "memorizeChapter",
    fields: [
      {
        name: "reference",
        label: "Bible reference",
        placeholder: "John 10",
        required: true,
      },
    ],
    pointCalculation: ({}) => 15,
  },
  specialTalk: {
    label: "Prepared a special talk",
    value: "specialTalk",
    fields: [
      {
        name: "subject",
        label: "Subject",
        placeholder: "eg. Problem of pain",
        required: true,
        help: "Feel free to reach out to a staff for suggestions",
      },
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
      {
        name: "weeks",
        label: "How many weeks",
        placeholder: "1",
        required: true,
      },
    ],
    pointCalculation: ({ weeks }) => Math.floor(parseInt(weeks) * 10),
  },
  exercise: {
    label: "Exercised",
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
        placeholder: "60",
        required: true,
        help: "Must be at least 20 min to earn points"
      },
    ],
    pointCalculation: ({ duration }) => Math.floor(parseInt(duration) / 20),
  },
  devotions: {
    label: "Did DT",
    value: "devotions",
    fields: [
      {
        name: "date",
        label: "When did you do it",
        placeholder: "12/25",
        required: true,
      },
      {
        name: "reference",
        label: "Bible reference",
        placeholder: "John 13:1-20",
      },
    ],
    pointCalculation: ({}) => 3,
  },
  makeBed: {
    label: "Made bed for a week",
    value: "makeBed",
    fields: [
      {
        name: "when",
        label: "When did you do it",
        placeholder: "12/20 - 12/27",
      },
      {
        name: "weeks",
        label: "How many weeks",
        placeholder: "1",
        required: true,
      },
    ],
    pointCalculation: ({ weeks }) => Math.floor(parseInt(weeks) * 2),
  },
  thankYou: {
    label: "Wrote thank you card",
    value: "thankYou",
    fields: [
      { name: "who", label: "Who was it for", placeholder: "Anonymous" },
    ],
    pointCalculation: ({}) => 2,
  },
  chores: {
    label: "Did chores",
    value: "chores",
    fields: [
      {
        name: "duration",
        label: "How long did it take (min)",
        placeholder: "10",
        required: true,
        help: "Must be at least 10 min to earn points"
      },
      { name: "chore", label: "What did you do" },
    ],
    pointCalculation: ({ duration }) => Math.floor(parseInt(duration) / 10),
  },
};

export default goalTypes;
