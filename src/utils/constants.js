export const FILES_DATA = [
  {
    id: 1,
    name: "Work",
    type: "Folder",
    size: "3.9 MB",
    modified: "11 months ago",
    tags: [],
    shared: true,
  },
  {
    id: 2,
    name: "Virtual conference plan.whiteboard",
    type: "File",
    size: "22 KB",
    modified: "5 minutes ago",
    tags: [],
    shared: true,
  },
  {
    id: 3,
    name: "Last year keynote speakers.md",
    type: "File",
    size: "2 KB",
    modified: "5 days ago",
    tags: [],
    shared: false,
  },
  {
    id: 4,
    name: "Readme.md",
    type: "File",
    size: "< 1 KB",
    modified: "6 days ago",
    tags: [],
    shared: false,
  },
  {
    id: 5,
    name: "Report last year.odt",
    type: "File",
    size: "9 KB",
    modified: "6 days ago",
    tags: ["Aircraft", "Architecture"],
    shared: true,
  },
];

export const viewsData = [
  {
    name: "Create Vacation Request",
    rows: 0,
    columns: 5,
    lastEdited: "Jan 28, 2025 11:17 AM",
  },
  {
    name: "Open Request",
    rows: 1,
    columns: 9,
    lastEdited: "Jan 28, 2025 11:17 AM",
  },
  {
    name: "Request Status",
    rows: 0,
    columns: 9,
    lastEdited: "Jan 28, 2025 11:17 AM",
  },
  {
    name: "Closed requests",
    rows: 3,
    columns: 9,
    lastEdited: "Jan 28, 2025 11:17 AM",
  },
];

export const tableData = [
  {
    id: 1,
    comments: "Bob will help for this time",
    approvedBy: "The Boss",
    approveDate: "Feb 2, 2023",
    approved: true,
    requestDate: "Jan 8, 2023",
  },
  {
    id: 2,
    comments: "",
    approvedBy: "The Boss",
    approveDate: "Feb 2, 2023",
    approved: true,
    requestDate: "Jan 18, 2023",
  },
  {
    id: 3,
    comments: "We have to talk about that",
    approvedBy: "",
    approveDate: "",
    approved: false,
    requestDate: "Jan 30, 2023",
  },
  {
    id: 4,
    comments: "",
    approvedBy: "",
    approveDate: "",
    approved: null,
    requestDate: "Jan 30, 2023",
  },
];

export const activitiesData = [
  {
    id: 1,
    date: "February 11, 2025",
    activities: [
      {
        id: 101,
        type: "member_added",
        message: "You have been added as member to",
        highlight: "CAT scan room",
        suffix: "by",
        user: "Leon Green",
        start: false,
        avatar:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        time: "2 days ago",
      },
    ],
  },
  {
    id: 2,
    date: "February 5, 2025",
    activities: [
      {
        id: 201,
        type: "level_change",
        message: "changed your level in",
        highlight: "Project Cortona",
        suffix: "to Member",
        user: "Christine Schott",
        start: true,
        avatar:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        time: "last week",
      },
      {
        id: 202,
        type: "level_change",
        message: "changed your level in",
        highlight: "Project Cortona",
        suffix: "to Admin",
        user: "Christine Schott",
        start: true,
        avatar:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        time: "last week",
      },
      {
        id: 203,
        type: "invitation",
        message: "You have been invited to join",
        highlight: "Project Cortona",
        suffix: "by",
        user: "Christine Schott",
        start: false,
        avatar:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        time: "last week",
      },
    ],
  },
  {
    id: 3,
    date: "February 4, 2025",
    activities: [
      {
        id: 301,
        type: "member_added",
        message: "You have been added as member to",
        highlight: "Virtual annual conference internal",
        suffix: "by",
        user: "Christine Schott",
        start: false,
        avatar:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        time: "last week",
      },
    ],
  },
  {
    id: 4,
    date: "June 27, 2024",
    activities: [
      {
        id: 401,
        type: "team_added",
        message: "added team Virtual Annual Conference as member to",
        highlight: "Virtual annual conference internal",
        user: "Christine Schott",
        start: true,
        avatar:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        time: "8 months ago",
      },
      {
        id: 402,
        type: "removal",
        message: "You have been removed from",
        highlight: "World Press Freedom Day",
        suffix: "by",
        user: "Internal Project Team",
        start: false,
        avatar:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        time: "8 months ago",
      },
      {
        id: 403,
        type: "team_added",
        message: "added team Virtual Annual Conference as member to",
        highlight: "World Press Freedom Day",
        user: "Internal Project Team",
        start: true,
        avatar:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        time: "8 months ago",
      },
    ],
  },
];