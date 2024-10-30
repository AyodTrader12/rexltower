import React from "react";

interface Residence {
  name: string;
  bedBath: string;
  sqFt: number;
  salePrice?: string;
  rentPrice?: string;
}

const residences: Residence[] = [
  {
    name: "Resident Tower",
    bedBath: "3/1",
    sqFt: 700,
    salePrice: "$66800",
    rentPrice: "$700/M",
  },
  { name: "Uniq Villa", bedBath: "4/2", sqFt: 1200, salePrice: "$56800" },
  { name: "Local Tower", bedBath: "4/1", sqFt: 120, salePrice: "$9000" },
  { name: "Red City", bedBath: "6/2", sqFt: 8500, salePrice: "$909800" },
  { name: "Zcube Tower", bedBath: "5/2", sqFt: 1800, rentPrice: "$2000/M" },
  {
    name: "Alani Mention",
    bedBath: "6/2",
    sqFt: 2400,
    salePrice: "$20000",
    rentPrice: "$2000/W",
  },
  { name: "Jackstock Tower", bedBath: "3/1", sqFt: 1200, rentPrice: "$400/M" },
];

const Table: React.FC = () => {
  return (
    <div className="">
      <table className="min-w-full min-h-full bg-[#f5f5f5] border">
        <thead>
          <tr className="bg-[#d29751] text-white">
            <th className="py-3 px-6 font-semibold text-left">Residence</th>
            <th className="py-3 px-6 font-semibold text-left">Bed/Bath</th>
            <th className="py-3 px-6 font-semibold text-left">Sq.Ft</th>
            <th className="py-3 px-6 font-semibold text-left">Sale Price</th>
            <th className="py-3 px-6 font-semibold text-left">Rent Price</th>
            <th className="py-3 px-6 font-semibold text-left">Floor Plan</th>
          </tr>
        </thead>
        <tbody>
          {residences.map((residence, index) => (
            <tr key={index} className="border-b">
              <td className="py-4 px-6 font-medium text-blue-900">
                {residence.name}
              </td>
              <td className="py-4 px-6">{residence.bedBath}</td>
              <td className="py-4 px-6">{residence.sqFt}</td>
              <td className="py-4 px-6 text-blue-900">
                {residence.salePrice || "-"}
              </td>
              <td className="py-4 px-6 text-blue-700">
                {residence.rentPrice || "-"}
              </td>
              <td className="py-4 px-6">
                <button className="bg-[#d29751] text-white px-4 py-2 rounded-full ">
                  View Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
