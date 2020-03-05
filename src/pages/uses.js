import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

class Uses extends React.Component {
	render() {
		const { data } = this.props;
		const siteTitle = data.site.siteMetadata.title;

		return (
			<Layout location={this.props.location} title={siteTitle}>
				<div id='main' className='uses'>
					<section id='one'>
						<div className='inner'>
							<header className='major'>
								<h1>Uses!</h1>
							</header>
							<h2>Hardware</h2>
							<h3>Macbook Pro</h3>
							<p>
								Still hanging on to my Early-2015 Macbook Pro. It's got 8gb ram,
								i5 processor and 256gb disk space. It's possibly not the most
								powerful tool in the market nowadays, still it is powerful
								enough and the MacOS interface still rocks.
							</p>{" "}
							<p>
								{" "}
								Also, it's one of the last Macbook pro models to have
								independent parts (RAM memory, hard disk, etc etc) instead of
								parts soldered to the Logic Board. And in a country such as
								Argentina where there is no official Mac support, being able to
								replace parts is always good.
							</p>
							<h2>Software</h2>
							<ul>
								<li>VSCode</li>
								<li>Extensions: Prettier, ESLint, Wakatime, VSIcons.</li>
							</ul>
							<p>
								Will keep on writing this!{" "}
								<Link to='/'>Get back to Home Page.</Link>
							</p>
						</div>
					</section>
				</div>
			</Layout>
		);
	}
}

export default Uses;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
