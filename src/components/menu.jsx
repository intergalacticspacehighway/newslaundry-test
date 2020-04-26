import React from "react";

export const Menu = () => {
  return (
    <>
      <div>
        <img
          src="https://images.assettype.com/newslaundry/2020-01/d91cad07-9650-47e9-8bdc-9a6247354d95/Header_logo_NL__2_New.png"
          alt="NewsLaundry"
          className="my-5"
        ></img>
      </div>
      <ul class="hidden xl:flex">
        <li class="flex-1 mr-2">
          <a
            class="text-center block border border-white py-2 px-4 bg-black text-white"
            href="#"
          >
            Entertainment
          </a>
        </li>

        <li class="flex-1 mr-2">
          <a
            class="text-center block border border-white hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4"
            href="#"
          >
            Tech
          </a>
        </li>
        <li class="flex-1 mr-2">
          <a
            class="text-center block border border-white hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4"
            href="#"
          >
            Food
          </a>
        </li>
        <li class="flex-1 mr-2">
          <a
            class="text-center block border border-white hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4"
            href="#"
          >
            Travel
          </a>
        </li>
        <li class="flex-1 mr-2">
          <a
            class="text-center block border border-white hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4"
            href="#"
          >
            Science
          </a>
        </li>
        <li class="flex-1 mr-2">
          <a
            class="text-center block border border-white hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4"
            href="#"
          >
            Business
          </a>
        </li>
        <li class="flex-1 mr-2">
          <a
            class="text-center block border border-white hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4"
            href="#"
          >
            Opinion
          </a>
        </li>
        <li class="flex-1 mr-2">
          <a
            class="text-center block border border-white hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4"
            href="#"
          >
            Health
          </a>
        </li>

        <li class="flex-1 mr-2">
          <a
            class="text-center block border border-white hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4"
            href="#"
          >
            Podcast
          </a>
        </li>
      </ul>
    </>
  );
};
