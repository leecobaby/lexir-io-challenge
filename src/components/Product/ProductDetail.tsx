import { FC } from 'react'

export const ProductDetail: FC = () => {
  return (
    <section className=" flex flex-row justify-between items-start py-10 px-8 w-full">
      <div className=" flex flex-col items-start w-[840px]">
        <h2 className=" font-bold text-2xl text-primary-700">Product Details</h2>
        <div className=" flex flex-row items-start w-[700px]">
          <p className=" font-sans font-normal text-base text-primary-700 mt-8">
            Kiss My Rhubarb takes its origins from an old handwritten recipe from co-creators Niels’
            and Wouters’ rebellious grandparents. Using carefully hand-selected stalks of rhubarb,
            and locally-sourced flowers and herbs, this summery aperitif perfectly expresses the
            brimming liveliness that characterizes the Belgian countryside in bloom.
            <br />
            <br />
            Kiss My Rhubarb is created in collaboration with local producers in Izegem that select
            only the freshest stalks of rhubarb using attentive and sustainable practices. By
            avoiding the pitfalls of overproduction and diminished flavour that large-scale
            harvesting methods can bring, Kiss My’s careful foraging process results in an aperitif
            that emphasises the tangy juiciness of its primary ingredient.
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-start">
        <h3 className=" font-bold capitalize text-2xl text-primary-700">tasting notes</h3>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </div>
    </section>
  )
}
