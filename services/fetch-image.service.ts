import imageUrlBuilder from '@sanity/image-url'
import { cdnClient } from './sanity-client.service'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(cdnClient)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export const fetchImageUrl = (source: SanityImageSource): ImageUrlBuilder => {
  return builder.image(source)
}