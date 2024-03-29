import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { GET_POSTS } from '~/pages/blog/schema'
import Loading from '~/components/loading'
import Error from '~/components/error'
import PostCard from '~/components/post-card'
import { Layout } from '~/styles/styled-components/layout'
import { Header } from '~/styles/styled-components/header'
import { BlogPageContent } from '~/styles/styled-components/content'
import { Props } from '~/pages/blog/types'

const Blog: FC = () => {
  const { loading, error, data } = useQuery(GET_POSTS)
  if (loading) return <Loading />
  if (error) return <Error message={error.message} />
  const schema = data.posts

  return (
    <Layout>
      <Header>Blog</Header>
      <BlogPageContent className="content">
        {schema.map(({ id, title, type }: Props) => (
          <Link key={id} to={`/post/${id}`}>
            <PostCard title={title} type={type} />
          </Link>
        ))}
      </BlogPageContent>
    </Layout>
  )
}

export default Blog
