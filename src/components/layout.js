import React from "react";
import { Link } from "gatsby";
import "./layout.css";

import { rhythm, scale } from "../utils/typography";
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb
} from '@fortawesome/free-solid-svg-icons'

class Layout extends React.Component {
	render() {
		const { location, title, children } = this.props;
		const rootPath = `${__PATH_PREFIX__}/`;
		
			let header;

		if (location.pathname === rootPath) {
			header = (
				<>
				<div className="colorToggler">
				<ThemeToggler>
        {({ theme, toggleTheme }) => (
				 <span
				 onClick={() => {
					 const nextTheme = theme === 'light' ? 'dark' : 'light'
					 toggleTheme(nextTheme)
				 }}>
				  <FontAwesomeIcon icon={faLightbulb} size="2x" />
				 </span>		
        )}
      </ThemeToggler>
			</div>
				<h1
					style={{
						...scale(1.5),
						marginBottom: rhythm(1.5),
						marginTop: 0
					}}
					className='great-title'
				>
					<Link
						style={{
							boxShadow: `none`,
							textDecoration: `none`,
							color: `inherit`
						}}
						to={`/`}
					>
						{title}
					</Link>
				</h1>
				</>
			);
		} else {
			header = (
				<h3
					style={{
						fontFamily: `Montserrat, sans-serif`,
						marginTop: 0
					}}
				>
					<Link
						style={{
							boxShadow: `none`,
							textDecoration: `none`,
							color: `inherit`
						}}
						to={`/`}
					>
						{title}
					</Link>
				</h3>
			);
		}
		return (
			<div
				style={{
					marginLeft: `auto`,
					marginRight: `auto`,
					maxWidth: rhythm(24),
					padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,			
					backgroundColor: 'var(--bg)',
					color: 'var(--textNormal)',
					transition: 'color 0.2s ease-out, background 0.2s ease-out',

				}}
			>
				<header>{header}</header>
				<main>{children}</main>
				<footer>
					<hr />
					<p>
						Gustavo Malamud - © {new Date().getFullYear()}. Built with
						{` `}
						<a href='https://www.gatsbyjs.org'>Gatsby</a>. 🔥
						<Link to='/uses'> Uses page.</Link>
					</p>
				</footer>
			</div>
		);
	}
}

export default Layout;
