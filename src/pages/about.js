import React from "react";
import { Link, graphql } from "gatsby";
import Typewriter from "typewriter-effect";

import Layout from "../components/layout";

class About extends React.Component {
	render() {
		const { data } = this.props;
		const siteTitle = data.site.siteMetadata.title;

		return (
			<Layout location={this.props.location} title={siteTitle}>
				<div id='main' className='alt'>
					<section id='one'>
						<div className='inner'>
							<header className='major'>
								<h1>About Gustavo Malamud</h1>
							</header>
							<h2>
								<Typewriter
									options={{ delay: 85 }}
									onInit={typewriter => {
										typewriter
											.typeString("Hi!")
											.pauseFor(100)
											.typeString(
												" Sorry to annoy you with an overused phrase."
											)
											.typeString(" I'm Gustavo and I make <i>asados</i>.")
											.deleteChars(15)
											.typeString(" I'm a developer.")
											.start();
									}}
								/>
							</h2>
							<p>
								I'm currently 38 years old, from Argentina. I've recently begun my career
								as a Front End Web Developer after working 14 years in the
								Digital Marketing industry. No terrible regrets about it, just
								needed a change.
							</p>
							<p>
								Currently on a process to rediscover my curiosity and abilities
								as a developer. Currently learning React, Redux, Node and pretty
								much everything I can get my hands on and what{" "}
								<strike>very limited</strike> time affords me.
							</p>
							<p>
								I must confess I have been suffering from some form of Impostor
								Syndrome symptoms lately, but fair and square, from what I've
								heard, everyone suffers from it at some point. I just wish{" "}
								<i>it doesn't materialise as true in my case.</i>
							</p>
							<p>
								Items of expertice? I'm quite good at HTML, some PHP, CSS/ CSS3,
								some CMS's (Drupal, Wordpress) that I've worked with, and
								lately, React and Gatsby :)
							</p>
							<p>
								Have some project I can help you with?{" "}
								<i>Need advisory on making a solid argentinian barbecue?</i>{" "}
								Could use my help on your projects?{" "}
								<a href='https://www.buymeacoffee.com/aEZYFAS'>
									Wish to buy me a beer, a coffee or some chill pills?
								</a>{" "}
								<Link to='/contact'>Get in touch with me!</Link>
							</p>
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

export default About;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
