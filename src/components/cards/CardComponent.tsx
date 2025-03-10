import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { ProductType } from "@/types/product";
import page from "@/app/about-us/page";

export default function CardComponent({title, thumbnail,price}: ProductType) {
  return (
    <div>
    <Card className="py-4 w-auto">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
        <small className="text-default-500">12 Tracks{price}</small>
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={thumbnail}
          width={270}
  
        />
      </CardBody>
    </Card>
    </div>
  );
}
