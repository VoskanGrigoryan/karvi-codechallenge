"use client";

import { HeartIcon } from "@/assets/icons";
import { fetchItems } from "@/redux/actions/items";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Image from "next/image";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

export default function Card() {
  const itemsList = useAppSelector((state) => state.itemsReducer);

  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  console.log(itemsList);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = itemsList.data?.items?.slice(
    firstPostIndex,
    lastPostIndex
  );
  return (
    <div className="">
      <p>{itemsList.data?.items?.length} carros encontrados</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grod-cols-1 gap-4 pb-8 border-b">
        {currentPost?.map((item: any) => {
          const formatPrice = item.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          });

          return (
            <div
              className="shadow-lg p-2 rounded-md h-[440px] hover:shadow-xl border border-gray-100 hover:border-gray-200"
              key={item.id}
            >
              <div>
                <Image
                  src={item.image}
                  width={1000}
                  height={1000}
                  className="h-[220px] w-full"
                  alt="Image"
                  // priority
                  blurDataURL="data:image/png;base64"
                  placeholder="blur"
                />
              </div>

              <div className="flex justify-between">
                <div className="bg-gray-200 rounded-lg font-medium w-[100px] text-center mt-2">
                  <p>{item.year}</p>
                </div>
                <div className="bg-gray-200 rounded-lg font-medium w-[100px] text-center mt-2">
                  <p>{item.mileage} km</p>
                </div>
              </div>

              <div>
                <p className="font-semibold pt-2">{item.model}</p>
              </div>

              <div>
                <p className="hover:cursor-pointer">{item.version}</p>
              </div>

              <div>
                <p className="text-orange-500 mt-4 font-semibold">
                  {formatPrice}
                </p>
              </div>

              <div>
                <p className="text-gray-500">
                  {item.city}, {item.state}
                </p>
              </div>
              <div className="flex">
                <HeartIcon className="h-4 w-4 mt-1 mr-2 hover:cursor-pointer" />
                <p className="text-blue-400 font-medium hover:cursor-pointer">
                  Simular parcelas
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <Pagination
          totalPosts={itemsList.data?.items?.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
