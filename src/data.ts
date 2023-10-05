import type { INotifsRecord } from "./types";
import { genRandomNumber } from "./utils";
const IMG1 = "../src/assets/dps/img1.png";
const IMG2 = "../src/assets/dps/img2.png";
const IMG3 = "../src/assets/dps/img3.png";
const IMG4 = "../src/assets/dps/img4.png";
const IMG5 = "../src/assets/dps/img5.png";

const records: INotifsRecord[] = [
  {
    name: "Mark Webber",
    profileImg: IMG1,
    notification: {
      id: genRandomNumber(),
      type: "message",
      body: "We'd like to welcome you to our haven, this weekend",
      time: "3, October, 2023",
    },
  },
  {
    name: "Kashy Wale",
    profileImg: IMG1,
    notification: {
      id: genRandomNumber(),
      type: "postComment",
      content: "The sky is blue",
      time: "3, October, 2023",
    },
  },
  {
    name: "Nur Fasasi",
    profileImg: IMG3,
    notification: {
      id: genRandomNumber(),
      type: "postReaction",
      content: "The sky is blue",
      time: "4, October, 2023",
    },
  },
  {
    name: "Janet Doe",
    profileImg: IMG4,
    notification: {
      id: genRandomNumber(),
      type: "groupJoin",
      time: "4, October, 2023",
      groupName: "Adikuta",
    },
  },
  {
    name: "Baba Ankara",
    profileImg: IMG5,
    notification: {
      id: genRandomNumber(),
      type: "groupExit",
      time: "4, October, 2023",
      groupName: "Adikuta",
    },
  },
];

export default records;
