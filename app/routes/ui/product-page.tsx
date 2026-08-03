import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

import { AggroCragContainer } from '@/app/components/aggro/AggroCragContainer';

// export async function loader() {
//   const tableData = createTableData(10);

//   return { data: tableData };
// }

export default function ProductPage() {
  return (
    <div className="">
      <title>Product page | UIs | John Heher</title>
      <meta name="description" content="A product page for an incredible piece of the Aggro Crag created by John Heher." />
      <div className="mx-auto flex w-full max-w-xl flex-col pb-8">
        <Link
          to="/"
          className="
            flex w-max items-center gap-2 text-base font-semibold text-[#282B27]
            hover:opacity-80
          "
        >
          <ArrowLeft className="size-4.5" />
          <span className="block">Back</span>
        </Link>
        <div className="mt-10">
          <h1 className="text-3xl font-semibold">Product page</h1>
          <p className="my-5 text-lg text-[#282B27]">
            For all my fellow Millennials out there. Or simply anyone who is a fan of Nickelodeon's GUTS.
          </p>
        </div>
      </div>
      <div className="h-full bg-linear-to-b from-product-page to-product-page-dark pt-30 pb-60">
        <div className="mx-auto w-full max-w-4xl bg-better-white p-3">
          <div className="w-full p-7.5">
            <div className="relative flex h-full gap-10 rounded-lg">
              <div className="size-100 bg-slate-500">
                <AggroCragContainer />
              </div>
              <div className="flex max-w-87.5 flex-col justify-between py-5">
                <div>
                  <h2 className="font-fraunces text-5xl font-semibold text-better-black">
                    Aggro Crag
                  </h2>
                  <p className="mt-8 text-base/relaxed text-gray-700">
                    Never got a chance to test your skills at Slam Dunk, Moon Race, or the always frustrating Boogie Down? No need to go to Mo for a score update when this incredible, priceless, and of course glowing piece of the radical
                    rock is just a click away.
                  </p>
                </div>
                <button
                  type="button"
                  className="
                    mt-15 w-full cursor-pointer rounded-lg bg-product-page px-5 py-3 text-lg font-semibold text-better-white transition-colors
                    hover:bg-product-page-dark
                  "
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="my-10 h-0.5 w-full bg-gray-300" />
            <div className="flex items-center gap-14 px-20">
              <span className="block pl-10 text-center font-serif text-3xl">&ldquo;My life was truly complete once I had the piece of our radical rock in my home.&rdquo;</span>
              <a href="/aggro.usdz" rel="ar" className="w-56 shrink-0">
                <img src="/images/guts.jpeg" alt="Guy with guts" className="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
