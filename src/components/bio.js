/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { rhythm } from "../utils/typography";

const Bio = () => {
	const data = useStaticQuery(graphql`query BioQuery {
  avatar: file(absolutePath: {regex: "/profile-pic.jpg/"}) {
    childImageSharp {
      gatsbyImageData(width: 50, height: 50, layout: FIXED)
    }
  }
  site {
    siteMetadata {
      author
      social {
        twitter
      }
    }
  }
}
`);

	const { author } = data.site.siteMetadata;
	return (
        <div
			style={{
				display: `flex`,
				marginBottom: rhythm(2.5)
			}}
		>
			<GatsbyImage
                image={data.avatar.childImageSharp.gatsbyImageData}
                alt={author}
                style={{
					marginRight: rhythm(1 / 2),
					marginBottom: 0,
					minWidth: 50,
					borderRadius: `100%`
				}}
                imgStyle={{
					borderRadius: `50%`
				}} />

			<p>
				Written by <strong>Gustavo Malamud</strong> who lives and works in
				Buenos Aires, making all kinds of terrible things with{" "}
				<strike>moderate</strike> optimism.
				<br />
				<Link to='/contact'>Speak your mind.</Link> Or else
				<Link to='/about'> find out a bit more about me.</Link>
			</p>
			<hr />
		</div>
    );
};

export default Bio;
