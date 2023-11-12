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
export const payPointRow = [
  {
    key: "1",
    payPoint: "Ref17826489",
    onDuty: "₦1234",
    phoneNumber: "11/12/2022",
    account: "XXXXXXXXXX",
    status: "Active",
  },
  {
    key: "2",
    payPoint: "Ref17826489",
    onDuty: "₦1234",
    phoneNumber: "11/12/2022",
    account: "XXXXXXXXXX",
    status: "Active",
  },
  {
    key: "3",
    payPoint: "Ref17826489",
    onDuty: "₦1234",
    phoneNumber: "11/12/2022",
    account: "XXXXXXXXXX",
    status: "Active",
  },
  {
    key: "4",
    payPoint: "Ref17826489",
    onDuty: "₦1234",
    phoneNumber: "11/12/2022",
    account: "XXXXXXXXXX",
    status: "Active",
  },
  {
    key: "5",
    payPoint: "Ref17826489",
    onDuty: "₦1234",
    phoneNumber: "11/12/2022",
    account: "XXXXXXXXXX",
    status: "Active",
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

// import React from "react";
// import {
//   Table,
//   TableHeader,
//   TableColumn,
//   TableBody,
//   TableRow,
//   TableCell,
//   User,
//   Chip,
//   Tooltip,
//   ChipProps,
//   getKeyValue,
// } from "@nextui-org/react";
// import { EditIcon } from "./EditIcon";
// import { DeleteIcon } from "./DeleteIcon";
// import { EyeIcon } from "./EyeIcon";
// import { columns, users } from "./data";

// const statusColorMap: Record<string, ChipProps["color"]> = {
//   active: "success",
//   paused: "danger",
//   vacation: "warning",
// };

// type User = (typeof users)[0];

// export default function App() {
//   const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
//     const cellValue = user[columnKey as keyof User];

//     switch (columnKey) {
//       case "name":
//         return (
//           <User
//             avatarProps={{ radius: "lg", src: user.avatar }}
//             description={user.email}
//             name={cellValue}
//           >
//             {user.email}
//           </User>
//         );
//       case "role":
//         return (
//           <div className="flex flex-col">
//             <p className="text-bold text-sm capitalize">{cellValue}</p>
//             <p className="text-bold text-sm capitalize text-default-400">
//               {user.team}
//             </p>
//           </div>
//         );
//       case "status":
//         return (
//           <Chip
//             className="capitalize"
//             color={statusColorMap[user.status]}
//             size="sm"
//             variant="flat"
//           >
//             {cellValue}
//           </Chip>
//         );
//       case "actions":
//         return (
//           <div className="relative flex items-center gap-2">
//             <Tooltip content="Details">
//               <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
//                 <EyeIcon />
//               </span>
//             </Tooltip>
//             <Tooltip content="Edit user">
//               <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
//                 <EditIcon />
//               </span>
//             </Tooltip>
//             <Tooltip color="danger" content="Delete user">
//               <span className="text-lg text-danger cursor-pointer active:opacity-50">
//                 <DeleteIcon />
//               </span>
//             </Tooltip>
//           </div>
//         );
//       default:
//         return cellValue;
//     }
//   }, []);

//   return (
//     <Table aria-label="Example table with custom cells">
//       <TableHeader columns={columns}>
//         {(column) => (
//           <TableColumn
//             key={column.uid}
//             align={column.uid === "actions" ? "center" : "start"}
//           >
//             {column.name}
//           </TableColumn>
//         )}
//       </TableHeader>
//       <TableBody items={users}>
//         {(item) => (
//           <TableRow key={item.id}>
//             {(columnKey) => (
//               <TableCell>{renderCell(item, columnKey)}</TableCell>
//             )}
//           </TableRow>
//         )}
//       </TableBody>
//     </Table>
//   );
// }
