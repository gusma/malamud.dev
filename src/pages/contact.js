import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

class Contact extends React.Component {
	render() {
		const { data } = this.props;
		const siteTitle = data.site.siteMetadata.title;

		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO title='Contact Page' />
				<h1>Wish to leave a message?</h1>
				<form method='post' netlify-honeypot='bot-field' data-netlify='true'>
					+ <input type='hidden' name='bot-field' />
				</form>
			</Layout>
		);
	}
}

export default Contact;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
