import type { RequestHandler } from '@sveltejs/kit'

import { getPosts } from '$root/lib/posts'

export const GET: RequestHandler = async () => {
  const posts = await getPosts()

  return {
    status: 200,
    body: { posts },
    headers: {
      // 'Cache-Control': `max-age=${60}, s-maxage=${60}`,
      // ETag: etag,
      // 'If-None-Match': etag
      'Cache-Control': `public, max-age=${60 * 60}, s-maxage=${60 * 60}`,
    },
  }
}
