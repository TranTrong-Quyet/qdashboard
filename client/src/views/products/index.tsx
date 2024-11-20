import React from "react";

import Header from "@/components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Rating from "@mui/material/Rating";

import { useGetProductsQuery } from "@/store/api";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";

const Product = () => {
  const { data, isLoading, isError, isFetching } = useGetProductsQuery();

  // Check loading and error states
  if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error: {isError.valueOf.}</div>;

  // Check if data is defined and an array
  if (!data || !Array.isArray(data)) return <div>No products available</div>;

  console.log(data);

  return (
    <>
      <div className="h-full w-full flex-col flex px-5 lg:px-6 xl:px-8 py-4">
        <Header title={"Product"} description={"This is the product page"} />
        <div className="grid sm:grid-cols-2 lg:cols-rows-3 xl:grid-cols-4 2xl:grid-cols-5 grid-flow-row gap-4">
          {data.map(
            ({
              name,
              _id,
              price,
              description,
              rating,
              supply,
              category,
              stat,
            }) => (
              <ProductCard
                name={name}
                category={category}
                id={_id}
                price={price}
                description={description}
                rating={rating}
                supply={supply}
                stat={stat}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
