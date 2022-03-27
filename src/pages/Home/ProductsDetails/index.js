import { ActualData, PastData } from "./data"

import { ProductCard } from "./ProductCard"

export const ProductsDetails = () => {
    return (
        <>
            <div>
                {ActualData.map((product, e) => <ProductCard key={e} product={product} />)}
            </div>
            <div>
                {PastData.map((product, e) => <ProductCard key={e} product={product} />)}
            </div>
        </>



    )
}
