import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Rating from "@mui/material/Rating";
import Collapse from "@mui/material/Collapse";

const ProductCard = ({
  name,
  id,
  price,
  description,
  rating,
  supply,
  category,
  stat,
}) => {
  const [isExpanded, setIsExpaned] = useState<boolean>(false);
  return (
    <Card key={id} className="relative">
      <CardHeader className="flex flex-col">
        <div className="flex justify-between mb-4 items-center">
          <CardTitle>{name}</CardTitle>
          <div className="px-2 py-1 rounded-full bg-green-100 text-slate-700 w-fit">
            {category}
          </div>
        </div>
        <div className="text-xl font-md text-yellow-600">${price}</div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            console.log(newValue);
          }}
        />
        <Button
          variant="outline"
          className="absolute right-3 bottom-3"
          onClick={() => setIsExpaned(!isExpanded)}
        >
          Detail
        </Button>
        <Collapse
          in={isExpanded}
          timeout="auto"
          unmountOnExit
          className="absolute inset-0 bottom-24 bg-slate-500 rounded-md"
        >
          <div className="p-4">
            <div>ID: {id}</div>
            <div> Supply: {supply}</div>
            <div> Yealy sale: {stat.updatedAt}</div>
          </div>
        </Collapse>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
