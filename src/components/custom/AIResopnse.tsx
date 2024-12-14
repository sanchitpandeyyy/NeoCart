import React from "react";

export type ProductType = {
  id: string;
  name: string;
  description: string;
};

export type DataType = {
  preText: string;
  productData: ProductType[];
};

type AIResopnseProps = {
  data: DataType;
  updateProducts: (p: ProductType[] | []) => void;
};

const AIResopnse: React.FC<AIResopnseProps> = ({ data, updateProducts }) => {
  const products = data.productData;
  if (products.length !== 0) {
    updateProducts(products);
  }
  return (
    <div className="p-2">
      <div className="text-lg font-medium ">{data.preText}</div>
      <div className="">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col pt-4">
            <div>
              <div className="text-lg font-medium line-clamp-2">
                {product.name}
              </div>
            </div>
            <div className="flex-grow">
              <p className="text-sm text-gray-600 line-clamp-4">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIResopnse;
