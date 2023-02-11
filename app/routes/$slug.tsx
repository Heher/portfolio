import { motion } from 'framer-motion';
import { useLoaderData } from '@remix-run/react';
import SimpleGlobe, { MotionGlobe } from '~/components/globe/SimpleGlobe';
import visitData from '~/data/visits.json';

export const loader = async ({ params }) => {
  // const query = `
  //   query {
  //     olympiadBySlug(slug: "${params.slug}") {
  //       id
  //       year
  //       olympiadType
  //       slug
  //       city {
  //         id
  //         name
  //         country {
  //           id
  //           name
  //         }
  //       }
  //       dates {
  //         start {
  //           value
  //         }
  //         end {
  //           value
  //         }
  //       }
  //       sports {
  //         nodes {
  //           id
  //           name
  //           slug
  //         }
  //       }
  //     }
  //   }
  // `;

  // const response = await request('http://localhost:5433/appApi/graphql', query);

  return params;
};

export default function OlympicCityPage() {
  const { slug } = useLoaderData<typeof loader>();

  return (
    <div>
      <SimpleGlobe visits={visitData} selectedCity={{ slug }} />
      <h2>{`Testing ${slug}`}</h2>
    </div>
  );
}
