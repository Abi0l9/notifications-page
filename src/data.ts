import type { INotifsRecord } from "./types";
import { genRandomNumber } from "./utils";
const IMG1 = "https://unsplash.com/photos/rDEOVtE7vOs/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fHx8MTY5NjczNTU3MXww&force=true&w=1920";
const IMG2 = "https://unsplash.com/photos/c_GmwfHBDzk/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8cGVyc29ufGVufDB8fHx8MTY5NjczNTU3MXww&force=true&w=1920";
const IMG3 = "https://unsplash.com/photos/QXevDflbl8A/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8cGVyc29ufGVufDB8fHx8MTY5NjczNTU3MXww&force=true&w=1920";
const IMG4 = "https://unsplash.com/photos/mjRwhvqEC0U/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fHx8MTY5NjczNTU3MXww&force=true&w=1920";
const IMG5 = "https://unsplash.com/photos/jmURdhtm7Ng/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8cGVyc29ufGVufDB8fHx8MTY5NjczNTU3MXww&force=true&w=1920";

const records: INotifsRecord[] = [
  {
    name: "Mark Webber",
    profileImg: IMG1,
    notification: {
      id: genRandomNumber(),
      type: "message",
      body: "We'd like to welcome you to our haven, this weekend",
      time: "1min ago",
      unread: true,
    },
  },
  {
    name: "Kashy Wale",
    profileImg: IMG2,
    notification: {
      id: genRandomNumber(),
      type: "postComment",
      content: {
        picUrl: IMG5,
        message: "This food dey hungry me!",
      },
      time: "40min ago",
      unread: true,
    },
  },
  {
    name: "Nur Fasasi",
    profileImg: IMG3,
    notification: {
      id: genRandomNumber(),
      type: "postReaction",
      content: "The sky is blue",
      time: "1hr ago",
      unread: true,
    },
  },
  {
    name: "Janet Doe",
    profileImg: IMG4,
    notification: {
      id: genRandomNumber(),
      type: "groupJoin",
      time: "1 week ago",
      groupName: "Adikuta",
      unread: true,
    },
  },
  {
    name: "Baba Ankara",
    profileImg: IMG5,
    notification: {
      id: genRandomNumber(),
      type: "groupExit",
      time: "2 weeks ago",
      groupName: "Adikuta",
      unread: true,
    },
  },
];

export default records;
