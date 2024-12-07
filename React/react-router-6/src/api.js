const notes = [
  {
    title: "Note 1: The Great Gatsby",
    author: "F. Scott Fitzgerald",
    content: "This novel explores themes of decadence, idealism, resistance to change, social upheaval, and excess.",
    date: "2023-10-01"
  },
  {
    title: "Note 2: To Kill a Mockingbird",
    author: "Harper Lee",
    content: "The novel is renowned for its warmth and humor, despite dealing with serious issues of rape and racial inequality.",
    date: "2023-10-02"
  },
  {
    title: "Note 3: 1984",
    author: "George Orwell",
    content: "A dystopian novel about the dangers of totalitarianism and government surveillance.",
    date: "2023-10-03"
  }
];

export function getNotes() {
  setTimeout(() => {
    return notes;
  }, 2000);
}