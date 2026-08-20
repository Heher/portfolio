import { AggroCragContainer } from '@/app/components/aggro/AggroCragContainer.client';
import { ClientOnly } from '@/app/components/ClientOnly';
import { MainHeader, UIPageBody } from '@/app/components/demos/components';
import Header from '@/app/components/demos/Header';

// export async function loader() {
//   const tableData = createTableData(10);

//   return { data: tableData };
// }

export default function ProductPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <title>Product page | Demos | John Heher</title>
      <meta name="description" content="A product page for an incredible piece of the Aggro Crag created by John Heher." />
      <meta property="og:title" content="Product page | Demos | John Heher" />
      <meta property="og:description" content="A product page for an incredible piece of the Aggro Crag created by John Heher." />
      <Header
        headerBgColor="bg-stellar-header"
        heading={(
          <MainHeader url="/demos/product-page">Product page</MainHeader>
        )}
        subhead={<span>For all my fellow Millennials out there. Or simply anyone who is a fan of Nickelodeon's GUTS.</span>}
        imgSrc="/demos/product-page.png"
        madeWith={['React', 'Tailwind', 'React Three Fiber']}
      />
      <UIPageBody
        transitionPath="/demos/product-page"
        className="
          flex h-full min-h-dvh flex-1 flex-col bg-linear-to-b from-stellar-top to-stellar-bottom px-2.5 py-5
          sm:p-0
        "
      >
        <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center">
          <div className="bg-better-white p-3">
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
                  <ClientOnly>{() => <AggroCragContainer />}</ClientOnly>
                </div>
                <div className="
                  flex max-w-87.5 flex-col justify-between
                  sm:py-5
                "
                >
                  <div>
                    <h2 className="
                      mt-3 font-fraunces text-5xl font-semibold text-better-black
                      sm:mt-0
                    "
                    >
                      Aggro Crag
                    </h2>
                    <p className="
                      mt-8 font-zilla text-lg/relaxed text-gray-700
                      sm:mt-8
                    "
                    >
                      Never got a chance to test your skills at Slam Dunk, Moon Race, or the always frustrating Boogie Down? No need to go to Mo for a score update when this incredible, priceless, and of course glowing piece of the radical
                      rock is just a click away.
                    </p>
                  </div>
                  <p className="
                    mt-8 text-2xl font-medium
                    sm:mt-5 sm:text-xl
                  "
                  >
                    $99,999.99
                  </p>
                  <button
                    type="button"
                    className="
                      mt-8 w-full cursor-pointer rounded-lg bg-product-page px-5 py-3 text-lg font-semibold text-better-white transition-colors
                      hover:bg-product-page-dark
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
                  relative z-2 -mr-15 block bg-better-white p-3 text-center font-serif text-2xl font-semibold
                  sm:-mr-8 sm:pl-10 sm:text-3xl
                "
                >
                  &ldquo;My life was truly complete once I had the piece of our radical rock in my home.&rdquo;
                </span>
                <a
                  href="/aggro.usdz"
                  rel="ar"
                  className="
                    w-[60%] shrink-0
                    sm:w-56
                  "
                >
                  <img src="/images/guts.jpeg" alt="Guy with guts" className="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </UIPageBody>
    </div>
  );
}
