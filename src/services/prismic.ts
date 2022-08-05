import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'

export const repoName = process.env.PRISMIC_REPOSITORY_NAME
const endpoint = prismic.getEndpoint(repoName)

export function getPrismicClient(config:any = {}) {
  const client = prismic.createClient(
    endpoint,
    {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
  )

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}