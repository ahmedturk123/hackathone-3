// // import { createClient } from "next-sanity";


// // const client = createClient({
// //     projectId : "ettb5rq1",
// //     dataset : "production",
// //     useCdn : true,
// //     apiVersion : "2023-10-10"
// // })

// // export async function sanityFetch({query, params ={}}: {query : string , params?: any}){
// //     return await client.fetch(query, params)
// // }




// import { createClient } from "next-sanity";

// const client = createClient({
//     projectId: "ettb5rq1",
//     dataset: "production",
//     useCdn: true,
//     apiVersion: "2023-10-10",
// });

// export async function sanityFetch({
//   query,
//   params = {},
// }: {
//   query: string;
//   params?: Record<string, any>;
// }) {
//   return await client.fetch(query, params);
// }



import { createClient } from "next-sanity";

const client = createClient({
  projectId: "ettb5rq1",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-10-10",
});

export async function sanityFetch({
  query,
  params = {},
}: {
  query: string;
  params?: Record<string, unknown>; // Use unknown instead of any
}) {
  return await client.fetch(query, params);
}
