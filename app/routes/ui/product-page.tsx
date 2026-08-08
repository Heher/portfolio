import { AggroCragContainer } from '@/app/components/aggro/AggroCragContainer.client';
import { MainHeader, UIPageBody } from '@/app/components/uis/components';
import Header from '@/app/components/uis/Header';

// export async function loader() {
//   const tableData = createTableData(10);

//   return { data: tableData };
// }

export default function ProductPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <title>Product page | UIs | John Heher</title>
      <meta name="description" content="A product page for an incredible piece of the Aggro Crag created by John Heher." />
      <Header heading={<MainHeader transitionPath="/ui/product-page">Product page</MainHeader>} subhead="For all my fellow Millennials out there. Or simply anyone who is a fan of Nickelodeon's GUTS." />
      <UIPageBody
        transitionPath="/ui/product-page"
        className="
          h-full flex-1 bg-linear-to-b from-product-page to-product-page-dark px-2.5 pt-5 pb-10
          sm:px-0 sm:pt-30 sm:pb-0
        "
      >
        <div className="mx-auto w-full max-w-4xl bg-better-white p-3">
          <div className="
            w-full p-3
            sm:p-7.5
          "
          >
            <div className="
              relative flex h-full flex-col gap-5 rounded-lg
              sm:flex-row sm:gap-10
            "
            >
              <div className="
                aspect-square w-full bg-slate-500
                sm:size-100
              "
              >
                <AggroCragContainer />
              </div>
              <div className="
                flex max-w-87.5 flex-col justify-between
                sm:py-5
              "
              >
                <div>
                  <h2 className="
                    font-fraunces text-4xl font-semibold text-better-black
                    sm:text-5xl
                  "
                  >
                    Aggro Crag
                  </h2>
                  <p className="
                    mt-5 font-zilla text-base/relaxed text-gray-700
                    sm:mt-8 sm:text-lg
                  "
                  >
                    Never got a chance to test your skills at Slam Dunk, Moon Race, or the always frustrating Boogie Down? No need to go to Mo for a score update when this incredible, priceless, and of course glowing piece of the radical
                    rock is just a click away.
                  </p>
                </div>
                <p className="mt-5 text-xl font-medium">$99,999.99</p>
                <button
                  type="button"
                  className="
                    mt-8 w-full cursor-pointer rounded-lg bg-product-page px-5 py-3 text-base font-semibold text-better-white transition-colors
                    hover:bg-product-page-dark
                    sm:text-lg
                  "
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="my-10 h-0.5 w-full bg-gray-300" />
            <div className="
              flex items-center
              sm:gap-14 sm:px-20
            "
            >
              <span className="
                relative z-2 -mr-8 block bg-better-white p-3 text-center font-serif text-lg font-semibold
                sm:pl-10 sm:text-3xl
              "
              >
                &ldquo;My life was truly complete once I had the piece of our radical rock in my home.&rdquo;
              </span>
              <a
                href="/aggro.usdz"
                rel="ar"
                className="
                  w-1/2 shrink-0
                  sm:w-56
                "
              >
                <img src="/images/guts.jpeg" alt="Guy with guts" className="" />
              </a>
            </div>
          </div>
        </div>
      </UIPageBody>
    </div>
  );
}
