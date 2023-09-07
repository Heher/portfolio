// import type { LoaderArgs, MetaFunction } from '@remix-run/node';
// import { json } from '@remix-run/node';
// import { useLoaderData } from '@remix-run/react';
import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { motion } from 'framer-motion';
import { getGQLClient } from '~/utils/graphql';
import { useTripContext } from './trip';
import { useLoaderData } from '@remix-run/react';
import { useEffect } from 'react';
import { cityStatus, filterOutNonOlympiadsForCity, statusColorSlug } from '~/components/olympiad-city/utils';
import type { CityOlympiadFragment } from '~/gql/graphql';
// import { useEffect } from 'react';
// import CityInfo from '~/components/olympiad-city/CityInfo';
// import type { CityOlympiadFragment } from '~/gql/graphql';
// import { useTripContext } from '../trip';
// import { getGQLClient } from '~/utils/graphql';
// import { cityStatus, filterOutNonOlympiadsForCity, statusColorSlug } from '~/components/olympiad-city/utils';

// export const meta: MetaFunction = ({ data }) => {
//   return {
//     charset: 'utf-8',
//     title: `${data.city.name}, ${data.city.country.name} | Olympic Trip`,
//     description: `John Heher's trip to ${data.city.name}, ${data.city.country.name}.`,
//     viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
//     'og:title': `${data.city.name}, ${data.city.country.name} | Olympic Trip`,
//     'og:image': '/olympic-cities-og.jpg'
//   };
// };

export async function loader({ params }: LoaderArgs) {
  // console.log('params', params);
  if (!params.slug) {
    return json({ city: null });
  }

  const sdk = getGQLClient();

  const now = new Date().toISOString();

  const response = await sdk.GetCity({ now, slug: params.slug });

  console.log(response);

  if (!response?.data?.cityBySlug?.name) {
    return json({ city: null });
  }

  return json({ city: response.data.cityBySlug });
}

// const variants = {
//   show: {
//     y: '100'
//   },
//   hide: {
//     y: '-100'
//   }
// };

function CityPageInner({ city, dispatch, visits }) {
  useEffect(() => {
    if (city?.slug) {
      dispatch({ type: 'SELECTED_CITY', selectedCity: city.slug });
      dispatch({ type: 'SHOW_DETAILS', showDetails: true });

      const root = document.documentElement;
      root.style.setProperty('--body-background', 'var(--globe-background)');
    }
  }, [dispatch, city]);

  if (!city?.name) {
    return null;
  }

  const filteredOlympiads = filterOutNonOlympiadsForCity(city.name, city.olympiads.nodes as CityOlympiadFragment[]);
  const { amountCompleted, totalOlympiads } = cityStatus(filteredOlympiads, visits);

  return (
    <motion.span
      className={`city-status absolute left-0 top-0 -z-10 block w-full bg-gradient-to-t ${statusColorSlug(
        amountCompleted,
        totalOlympiads
      )} to-[var(--globe-background)]`}
      initial={{ height: 0, top: '50%' }}
      animate={{ height: '34dvh', top: '0%' }}
      exit={{ height: 0, top: '50%' }}
      transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.8 }}
    />
  );
}

function CityTest({ city, dispatch, visits }) {
  console.log(city);

  useEffect(() => {
    if (city?.slug) {
      dispatch({ type: 'SELECTED_CITY', selectedCity: city.slug });
      dispatch({ type: 'SHOW_DETAILS', showDetails: true });

      const root = document.documentElement;
      root.style.setProperty('--body-background', 'var(--globe-background)');
    }
  }, [dispatch, city]);

  if (!city?.name) {
    return null;
  }

  return null;

  // return (
  //   <motion.div
  //     initial={{ y: '100%' }}
  //     animate={{ y: 0 }}
  //     // exit={{ y: '100%' }}
  //     transition={{ duration: 0.3, ease: 'easeInOut' }}
  //     className="fixed top-1/3 z-20 h-[67dvh] w-full bg-[#e0e0e0]"
  //     // layout
  //     // layoutId="athens"
  //   >
  //     {/* <CityPageInner city={loaderData?.city} dispatch={dispatch} visits={visits} /> */}
  //   </motion.div>
  // );
}

function CityPage() {
  const tripContext = useTripContext();
  // const { visits, dispatch, appState } = tripContext;
  const loaderData = useLoaderData<typeof loader>() || {};

  // const { city } = loaderData;

  // console.log('city', city);

  // if (!city?.country?.name || !city?.name || !city.country.flagByTimestamp?.png || !city.slug) {
  //   return null;
  // }

  // if (!city?.olympiads?.nodes?.length) {
  //   return null;
  // }

  // console.log(appState);

  if (!tripContext) {
    return null;
  }

  const { dispatch, visits } = tripContext;

  return <CityTest city={loaderData?.city} dispatch={dispatch} visits={visits} />;

  // return (
  //   <motion.div
  //     initial="hide"
  //     variants={variants}
  //     animate={appState.moveableGlobe ? 'hide' : 'show'}
  //     transition={{ duration: 0.3, ease: 'easeInOut' }}
  //   >
  //     <motion.span
  //       className={`city-status absolute left-0 top-0 -z-10 block w-full bg-gradient-to-t ${statusColorSlug(
  //         amountCompleted,
  //         totalOlympiads
  //       )} to-[var(--globe-background)]`}
  //       initial={{ height: 0, top: '50%' }}
  //       animate={{ height: '34dvh', top: '0%' }}
  //       exit={{ height: 0, top: '50%' }}
  //       transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.8 }}
  //     />
  //     <motion.div
  //       // layout
  //       className={`olympiad-city selected group fixed top-1/3 z-20 h-[67dvh] w-full overflow-scroll bg-[#e0e0e0]`}
  //       // layoutId={city.slug}
  //     >
  //       <motion.div className="mx-auto px-[5vw] md:max-w-[800px]">
  //         <motion.div className="header md:mt-16">
  //           <div className="flex items-center">
  //             <motion.h3 className="block text-[2rem] font-semibold uppercase leading-none tracking-wide">
  //               {city.name}
  //             </motion.h3>
  //           </div>
  //           <div className="mt-[10px] flex items-center">
  //             <motion.h4 className="text-[1.1rem] uppercase leading-none">{city.country.name}</motion.h4>
  //             {city?.country?.flagByTimestamp?.png && (
  //               <img
  //                 className="ml-[10px] mt-[-1px] h-[15px] w-auto"
  //                 src={city.country.flagByTimestamp.png}
  //                 alt={city.country.name || ''}
  //               />
  //             )}
  //           </div>
  //         </motion.div>
  //         <CityInfo cityName={city.name} olympiads={city.olympiads.nodes as CityOlympiadFragment[]} />
  //       </motion.div>
  //     </motion.div>
  //   </motion.div>
  // );
}

export default CityPage;
