import React from "react";

function Skeleton() {
  return (
    <>
      <div class="w-full bg-white p-6 space-y-8 animate-pulse">
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4">
          <div class="flex gap-6">
            <div class="h-4 w-24 bg-gray-200 rounded"></div>
            <div class="h-4 w-32 bg-gray-200 rounded"></div>
            <div class="h-4 w-20 bg-gray-200 rounded"></div>
            <div class="h-4 w-28 bg-gray-200 rounded"></div>
            <div class="h-4 w-20 bg-gray-200 rounded"></div>
            <div class="h-4 w-24 bg-gray-200 rounded"></div>
          </div>
          <div class="h-4 w-24 bg-gray-200 rounded"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div
            v-for="i in 4"
            class="p-4 border border-gray-100 rounded-lg space-y-3"
          >
            <div class="flex items-center gap-2">
              <div class="h-5 w-5 bg-gray-200 rounded-full"></div>
              <div class="h-4 w-24 bg-gray-200 rounded"></div>
            </div>
            <div class="h-8 w-12 bg-gray-300 rounded"></div>
            <div class="h-3 w-32 bg-gray-100 rounded"></div>
          </div>
          <div class="p-4 border border-gray-100 rounded-lg space-y-3">
            <div class="flex items-center gap-2">
              <div class="h-5 w-5 bg-gray-200 rounded-full"></div>
              <div class="h-4 w-24 bg-gray-200 rounded"></div>
            </div>
            <div class="h-8 w-12 bg-gray-300 rounded"></div>
            <div class="h-3 w-32 bg-gray-100 rounded"></div>
          </div>
          <div class="p-4 border border-gray-100 rounded-lg space-y-3">
            <div class="flex items-center gap-2">
              <div class="h-5 w-5 bg-gray-200 rounded-full"></div>
              <div class="h-4 w-24 bg-gray-200 rounded"></div>
            </div>
            <div class="h-8 w-12 bg-gray-300 rounded"></div>
            <div class="h-3 w-32 bg-gray-100 rounded"></div>
          </div>
          <div class="p-4 border border-gray-100 rounded-lg space-y-3">
            <div class="flex items-center gap-2">
              <div class="h-5 w-5 bg-gray-200 rounded-full"></div>
              <div class="h-4 w-24 bg-gray-200 rounded"></div>
            </div>
            <div class="h-8 w-12 bg-gray-300 rounded"></div>
            <div class="h-3 w-32 bg-gray-100 rounded"></div>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="flex-1 h-10 bg-gray-100 rounded-md border border-gray-200"></div>
          <div class="h-10 w-20 bg-gray-200 rounded-md"></div>
          <div class="h-10 w-24 bg-gray-200 rounded-md"></div>
          <div class="h-10 w-28 bg-gray-300 rounded-md"></div>
        </div>

        <div class="overflow-hidden border border-gray-100 rounded-lg">
          <table class="w-full text-left">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3">
                  <div class="h-4 w-24 bg-gray-200 rounded"></div>
                </th>
                <th class="px-4 py-3">
                  <div class="h-4 w-16 bg-gray-200 rounded"></div>
                </th>
                <th class="px-4 py-3">
                  <div class="h-4 w-16 bg-gray-200 rounded"></div>
                </th>
                <th class="px-4 py-3">
                  <div class="h-4 w-32 bg-gray-200 rounded"></div>
                </th>
                <th class="px-4 py-3">
                  <div class="h-4 w-24 bg-gray-200 rounded"></div>
                </th>
                <th class="px-4 py-3">
                  <div class="h-4 w-20 bg-gray-200 rounded"></div>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="j in 6">
                <td class="px-4 py-5">
                  <div class="h-4 w-32 bg-gray-100 rounded"></div>
                </td>
                <td class="px-4 py-5">
                  <div class="h-4 w-20 bg-gray-100 rounded"></div>
                </td>
                <td class="px-4 py-5">
                  <div class="h-6 w-20 bg-gray-200 rounded-full"></div>
                </td>
                <td class="px-4 py-5">
                  <div class="flex items-center gap-2">
                    <div class="h-2 flex-1 bg-gray-200 rounded-full"></div>
                    <div class="h-3 w-8 bg-gray-100 rounded"></div>
                  </div>
                </td>
                <td class="px-4 py-5">
                  <div class="flex gap-1">
                    <div class="h-6 w-6 bg-red-100 rounded"></div>
                    <div class="h-6 w-6 bg-orange-100 rounded"></div>
                    <div class="h-6 w-6 bg-yellow-100 rounded"></div>
                    <div class="h-6 w-6 bg-green-100 rounded"></div>
                  </div>
                </td>
                <td class="px-4 py-5">
                  <div class="h-4 w-16 bg-gray-100 rounded"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex items-center justify-between pt-4">
          <div class="h-4 w-40 bg-gray-100 rounded"></div>
          <div class="flex gap-2">
            <div class="h-8 w-8 bg-gray-200 rounded"></div>
            <div class="h-8 w-8 bg-gray-100 rounded"></div>
            <div class="h-8 w-8 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skeleton;
