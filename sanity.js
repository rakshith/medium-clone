import {
  createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from 'next-sanity'

export const config = {
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  //   token: 'sanity-auth-token', // or leave blank for unauthenticated usage
  useCdn: process.env.NODE_ENV === 'production', // `false` if you want to ensure fresh data
}

export const sanityClient = createClient(config)

export const urlFor = (course = createImageUrlBuilder(config).image(source))

export const currentUser = createCurrentUserHook(config)
