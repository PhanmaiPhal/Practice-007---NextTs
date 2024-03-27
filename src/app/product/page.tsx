import {image} from "@nextui-org/react"

export type ParamProps ={
  params:{
    id:number;
  };
};

async function getDetail(id:number){
  const productDetail = await fetch(`https://dummyjson.com/products/${id}`);
  return productDetail.json();
}

export async function generateMetadata({params}:any){
  const id= params.id;
  const product= await getDetail(id);
  return {
    title: product?.title,
    describle: product.description,
    openGrah:{
      images: product.thumbnail,
    },
  };
}
async function page({params}:ParamProps){
  const id= params.id;
  const items= await getDetail(id);
  return (
    <div>
      <h1 className="font-blod text-xl">
          My product title:{items.title} 
      </h1>
    </div>
  )
} export default page;