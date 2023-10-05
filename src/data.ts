import type { INotifsRecord } from "./types";

const records: INotifsRecord[] = [
  {
    name: "Mark Webber",
    profileImg: "",
    notification: {
      type: "message",
      content: "We'd like to welcome you to our haven, this weekend",
      time: "3, October, 2023",
    },
  },
  {
    name: "Kashy Wale",
    profileImg: "",
    notification: {
      type: "postComment",
      content: "The sky is blue",
      time: "3, October, 2023",
    },
  },
  {
    name: "Nur Fasasi",
    profileImg: "",
    notification: {
      type: "postReaction",
      content: "The sky is blue",
      time: "4, October, 2023",
    },
  },
  {
    name: "Janet Doe",
    profileImg: "",
    notification: {
      type: "groupJoin",
      time: "4, October, 2023",
      groupName: "Adikuta",
    },
  },
  {
    name: "Baba Ankara",
    profileImg: "",
    notification: {
      type: "groupExit",
      time: "4, October, 2023",
      groupName: "Adikuta",
    },
  },
];

export default records;
