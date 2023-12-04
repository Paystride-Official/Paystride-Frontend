export const dashboardRow = [
  {
    key: "1",
    transactionId: "Ref17826489",
    amount: "₦1234",
    date: "11/12/2022",
    payPoint: 4,
    accNumber: "2222222222",
    // status: "Active",
  },
  {
    key: "2",
    transactionId: "Ref17826489",
    amount: "₦1234",
    date: "11/12/2022",
    payPoint: 4,
    accNumber: "2222222222",
  },
  {
    key: "3",
    transactionId: "Ref17826489",
    amount: "₦1234",
    date: "11/12/2022",
    payPoint: 4,
    accNumber: "2222222222",
  },
  {
    key: "4",
    transactionId: "Ref17826489",
    amount: "₦1234",
    date: "11/12/2022",
    payPoint: 4,
    accNumber: "222222222",
  },
  {
    key: "5",
    transactionId: "Ref17826489",
    amount: "₦1234",
    date: "11/12/2022",
    payPoint: 4,
    accNumber: "2222222222",
  },
];

export const dashboardCol = [
  {
    key: "transactionId",
    label: "Transaction ID",
  },
  {
    key: "date",
    label: "Date",
  },
  {
    key: "accNumber",
    label: "Acc.Number",
  },
  {
    key: "payPoint",
    label: "Paypoint",
  },
  {
    key: "amount",
    label: "Amount",
  },
];
export const transactionRow = [
  {
    key: "1",
    date: "Oct 12, 2023",
    transactionId: "6748928879999003",
    accountNumber: "0001100110",
    ppointNumber: "08123893451",
    amount: "N 20,000",
  },
  {
    key: "1",
    date: "Oct 12, 2023",
    transactionId: "6748928879999003",
    accountNumber: "0001100110",
    ppointNumber: "08123893451",
    amount: "N 20,000",
  },
  {
    key: "1",
    date: "Oct 12, 2023",
    transactionId: "6748928879999003",
    accountNumber: "0001100110",
    ppointNumber: "08123893451",
    amount: "N 20,000",
  },
  {
    key: "1",
    date: "Oct 12, 2023",
    transactionId: "6748928879999003",
    accountNumber: "0001100110",
    ppointNumber: "08123893451",
    amount: "N 20,000",
  },
  {
    key: "1",
    date: "Oct 12, 2023",
    transactionId: "6748928879999003",
    accountNumber: "0001100110",
    ppointNumber: "08123893451",
    amount: "N 20,000",
  },
];

export const transactionCol = [
  {
    key: "date",
    label: "Date & Time",
  },
  {
    key: "transactionId",
    label: "Transaction Id",
  },
  {
    key: "accountNumber",
    label: "Account Number",
  },
  {
    key: "ppointNumber",
    label: "P.Point Number",
  },
  {
    key: "amount",
    label: "Amount",
  },
];

export const payPointRow = [
  {
    key: "1",
    payPoint: "paypoint 1",
    onDuty: "chima",
    phoneNumber: "08138465066",
    account: "XXXXXXXXXX",
    status: "Active",
  },
  {
    key: "2",
    payPoint: "paypoint 2",
    onDuty: "jumat",
    phoneNumber: "08138465066",
    account: "XXXXXXXXXX",
    status: "Active",
  },
  {
    key: "3",
    payPoint: "paypoint 3",
    onDuty: "Korede",
    phoneNumber: "08138465066",
    account: "XXXXXXXXXX",
    status: "Active",
  },
  {
    key: "4",
    payPoint: "paypoint 4",
    onDuty: "Emmanuel",
    phoneNumber: "08138465066",
    account: "XXXXXXXXXX",
    status: "Active",
  },
  {
    key: "5",
    payPoint: "paypoint 5",
    onDuty: "Alex",
    phoneNumber: "08138465066",
    account: "XXXXXXXXXX",
    status: "InActive",
  },
];

export const payPointCol = [
  {
    key: "payPoint",
    label: "Pay Point",
  },
  {
    key: "onDuty",
    label: "On-duty",
  },
  {
    key: "phoneNumber",
    label: "Phone No.",
  },
  {
    key: "account",
    label: "Acc. Number",
  },
  {
    key: "status",
    label: "Status",
  },
];
let server_url;

if (process.env.REACT_APP_ENVIRONMENT === "production") {
  server_url = "http://api.paystride.co/api";
} else {
  server_url = "http://staging-api.paystride.co";
}

export const SERVER_URL = server_url;
