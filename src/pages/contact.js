import React from 'react'
import {Link} from 'gatsby'

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title={"Contact"}/>
      <h1>Contact</h1>
      <p>Contact me at <Link to="https://www.linkedin.com/in/max-braun-94506189/">LinkedIn</Link></p>
    </Layout>
  )
}

export default ContactPage