import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

class Success extends React.Component {
	render() {
		const { data } = this.props;
		const siteTitle = data.site.siteMetadata.title;

		return (
			<Layout location={this.props.location} title={siteTitle}>
				<div id='main' className='alt'>
					<section id='one'>
						<div className='inner'>
							<header className='major'>
								<h1>Success/Thank You Page</h1>
							</header>
							<span className='image main'></span>
							<p>Thank you for contacting me!</p>
							<p>
								<Link to='/'>Back to home page.</Link>
							</p>
						</div>
					</section>
				</div>
			</Layout>
		);
	}
}

export default Success;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
