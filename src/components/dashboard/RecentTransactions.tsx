import React from "react";
import { FiArrowUpRight, FiDollarSign, FiMoreHorizontal } from "react-icons/fi";

export const RecentTransactions = () => {
  return (
    <div className="col-span-12 p-4 rounded border border-stone-300">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiDollarSign />Transactions
        </h3>
        <button className="text-sm text-violet-500 hover:underline">
          See all
        </button>
      </div>
      <table className="w-full table-auto">
        <TableHead />

        <tbody>
          <TableRow
            cusId="#48149"
            sku="12-03-2024"
            date="24-06-2025"
            price="12000"
            order={1}
          />
          <TableRow
            cusId="#1942s"
            sku="13-02-2023"
            date="11-01-2024"
            price="12300"
            order={2}
          />
          <TableRow
            cusId="#4192"
            sku="23-09-2024"
            date="28-08-2025"
            price="11900"
            order={3}
          />
          <TableRow
            cusId="#99481"
            sku="23-09-2024"
            date="19-06-2024"
            price="19000"
            order={4}
          />
          <TableRow
            cusId="#1304"
            sku="03-03-2023"
            date="01-04-2024"
            price="24000"
            order={5}
          />
          <TableRow
            cusId="#1304"
            sku="21-02-2022"
            date="28-07-2022"
            price="22000"
            order={6}
          />
        </tbody>
      </table>
    </div>
  );
};

const TableHead = () => {
  return (
    <thead>
      <tr className="text-sm font-normal text-stone-500">
        <th className="text-start p-1.5">Customer ID</th>
        <th className="text-start p-1.5">Given Date</th>
        <th className="text-start p-1.5">Due Date</th>
        <th className="text-start p-1.5">Pieces</th>
        <th className="w-8"></th>
      </tr>
    </thead>
  );
};

const TableRow = ({
  cusId,
  sku,
  date,
  price,
  order,
}: {
  cusId: string;
  sku: string;
  date: string;
  price: string;
  order: number;
}) => {
  return (
    <tr className={order % 2 ? "bg-stone-100 text-sm" : "text-sm"}>
      <td className="p-1.5">
        <a
          href="#"
          className="text-violet-600 underline flex items-center gap-1"
        >
          {cusId} <FiArrowUpRight />
        </a>
      </td>
      <td className="p-1.5">{sku}</td>
      <td className="p-1.5">{date}</td>
      <td className="p-1.5">{price}</td>
      <td className="w-8">
        <button className="hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8">
          <FiMoreHorizontal />
        </button>
      </td>
    </tr>
  );
};