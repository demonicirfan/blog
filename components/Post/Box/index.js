import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'

import ImageWrapper from '@/components/ImageWrapper'

import { Article } from './PostBox.styles'

const Post = ({ title, date, slug, coverImage, excerpt }) => {
  return (
    <Link href="/posts/[slug]" as={`/posts/${slug}`}>
      <Article>
        <a>
          <h2>{title}</h2>
        </a>
        <span>{dayjs(date).format('DD MMMM YYYY')}</span>
        <ImageWrapper>
          <Image
            src={coverImage}
            alt={`${title} cover image`}
            layout="fill"
            objectFit="contain"
          />
        </ImageWrapper>
        <p>{excerpt}</p>
      </Article>
    </Link>
  )
}

export default Post
