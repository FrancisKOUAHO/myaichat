"use client";

import React from "react";
import LayoutCustom from "@/layouts/layoutCustom";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/config/api";

function getCookie(name: string | any[]) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return "";
}

const Page = () => {
  const userId: any = getCookie("userId");

  const {
    data: scrapeData,
    isLoading,
    isError,
  } = useQuery(["userProducts", userId], () =>
    api.get(`/products/user/${userId}/products`)
  );

  console.log("scrapeData", scrapeData);

  return (
    <LayoutCustom>
      <div className="w-full overflow-y-auto">
        <div className="mt-[2%] w-full p-4 text-center bg-indigo-200  rounded-lg shadow sm:p-8">
          <div className="flex items-center justify-between border-b border-gray-200">
            <span className="font-bold text-gray-900">Scrapping</span>
          </div>
          <div className="flex justify-between gap-8 p-6">
            <table className="table w-full text-gray-400 border-separate space-y-6 text-sm">
              <thead className="text-white mt-[2%] bg-indigo-200 rounded-lg">
                <tr className="bg-indigo-600">
                  <th className="p-3">Boutique</th>
                  <th className="p-3">url du produit</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="mt-[2%] bg-white">
                {scrapeData &&
                  scrapeData.data.map((product: any) => {
                    return (
                      <tr key={product.id}>
                        <td className="p-3">
                          <div className="flex align-items-center">
                            <div className="ml-3">
                              <div className="text-black">{product.title}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">
                          <div className="flex align-items-center">
                            <div className="ml-3">
                              <div className="text-black">
                                {product.full_url}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">
                          <span className="bg-green-600 rounded-full inline-block h-3 w-3"></span>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </LayoutCustom>
  );
};

export default Page;
