"use client";

import React, { useState } from "react";
import LayoutCustom from "@/layouts/layoutCustom";
import { useQuery } from "@tanstack/react-query";
import { fetchScrape } from "@/hook/useScrape";

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
  const useScrapeDate = (userId: any) => {
    const { status, data, error } = useQuery(
      ["usescrapedata", userId],
      fetchScrape
    );

    return { status, data, error };
  };

  const { status, data: scrapeData, error } = useScrapeDate(1);

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
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="mt-[2%] bg-white">
                <tr className="bg-white">
                  <td className="p-3">
                    <div className="m-auto">
                      <dd className="text-gray-500 text-[0.775rem]">
                        myshootbox.com
                      </dd>
                    </div>
                  </td>
                  <td className="p-3">
                    <span className="bg-green-600 rounded-full inline-block h-3 w-3"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </LayoutCustom>
  );
};

export default Page;
