import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "./contact.css";

class Contact extends React.Component {
	render() {
		const { data } = this.props;
		const siteTitle = data.site.siteMetadata.title;

		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO title='Contact Page' />
				<h1>Wish to leave a message?</h1>
				<form
					method='post'
					netlify-honeypot='bot-field'
					data-netlify='true'
					action='/success'
					name='contact'
				>
					<input type='hidden' name='bot-field' />
					<input type='hidden' name='form-name' value='contact' />

					<div className='field'>
						<label htmlFor='name'>Name</label>
						<br />
						<input type='text' name='name' id='name' required />
					</div>
					<div className='field'>
						<label htmlFor='email'>Email</label>
						<br />
						<input type='text' name='email' id='email' required />
					</div>
					<div className='field'>
						<label htmlFor='message'>Message</label>
						<br />
						<textarea name='message' id='message' rows='6' required />
					</div>
					<ul className='actions'>
						<li>
							<input type='submit' value='Send Message' className='special' />
						</li>
						<li>
							<input type='reset' value='Clear' />
						</li>
					</ul>
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
