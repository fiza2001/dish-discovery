"use client";
import { useQuery, gql } from "@apollo/client";
import client from "@/apolloClient";
import Link from "next/link";

export default function DishPage({params}) {
  const getQuery = params.dishes
  const capitalizedQuery = getQuery.charAt(0).toUpperCase() + getQuery.slice(1);
  const GET_DISH = gql`
    query GetDishes($category: String!) {
      dishCollection(
        where: { category: $category }
      ) {
        items {
          title(locale: "en-US")
          description(locale: "en-US")
          slug
          image{
            url
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_DISH, {
    client,
    variables: { category: getQuery }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const { dishCollection } = data
  return (
    <div>
      <h1>{capitalizedQuery} Dishes</h1>
      <ul>
        {dishCollection.items.map((dish) => (
          <li key={dish.slug}>
            <Link href={`/cuisines/${getQuery}/${dish.slug}`}>
            <img src={dish.image.url} style={{width:'200px', height:'200px'}} alt="Image" />
              <h5>{dish.title}</h5>
              <p>{dish.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
