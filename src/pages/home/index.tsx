import React, { FC } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_HOME } from '~/pages/home/schema'
import Loading from '~/components/loading'
import Error from '~/components/error'
import { Layout } from '~/styles/styled-components/layout'
import { Header } from '~/styles/styled-components/header'
import { Content } from '~/styles/styled-components/content'

const Home: FC = () => {
  const { loading, error, data } = useQuery(GET_HOME)
  if (loading) return <Loading />
  if (error) return <Error message={error.message} />
  const schema = data.pages[0]

  return (
    <Layout>
      <Header className="home">{schema.title}</Header>
      <Content className="content">
        <p>{schema.content}</p>
      </Content>
    </Layout>
  )
}

export default Home
