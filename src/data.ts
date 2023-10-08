import type { INotifsRecord } from "./types";
import { genRandomNumber } from "./utils";
const IMG1 = "https://unsplash.com/photos/rDEOVtE7vOs/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fHx8MTY5NjczNTU3MXww&force=true&w=1920";
const IMG2 = "../src/assets/dps/img2.jpg";
const IMG3 = "../src/assets/dps/img3.jpg";
const IMG4 = "../src/assets/dps/img4.jpg";
const IMG5 = "../src/assets/dps/img5.jpg";

const records: INotifsRecord[] = [
  {
    name: "Mark Webber",
    profileImg: IMG1,
    notification: {
      id: genRandomNumber(),
      type: "message",
      body: "We'd like to welcome you to our haven, this weekend",
      time: "1m ago",
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
        message: "You look amazing!",
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
