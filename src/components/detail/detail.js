import { Header, Button, Container, Segment } from 'semantic-ui-react'
import { Link } from 'gatsby'
import { useSeoImage } from './useSeoImage'
import * as React from 'react'
import * as Styles from './detail.module.css'
import PropTypes from 'prop-types'
import Seo from '../common/seo'
import Section from '../common/section'
import Layout from '../layout/layout'
import Carousel from './carousel'
import Links from './links'

const Detail = ({ category, title, images, sections, links }) => {
  const seoImage = useSeoImage(images[0])

  return (
    <Layout>
      <Seo title={title} image={seoImage} desc={sections[0].text} article />
      <div className={Styles.title}>
        <Carousel items={images} />
        <Header as="h2" content={title} textAlign="center" />
        <div className={Styles.hr} />
      </div>
      <Segment basic>
        <Container text>
          <Section items={sections} />
        </Container>
      </Segment>
      <Links items={links} />
      <div className={Styles.backButton}>
        <Button
          circular
          icon="angle left"
          content="Back"
          as={Link}
          to={`/category/${category}`}
        />
      </div>
    </Layout>
  )
}

Detail.defaultProps = {
  category: '',
  title: '',
  images: null,
  sections: null,
  links: null
}

Detail.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  sections: PropTypes.array.isRequired,
  links: PropTypes.array
}

export default Detail
