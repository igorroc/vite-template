import React from "react"
import { StyledHeader } from "./styles"

export default function Header() {
	return (
		<StyledHeader>
			<div className="headerContent">
				<p>Header</p>
				<nav className="links">
					<a href="/">Home</a>
					<a href="/login">Login</a>
				</nav>
			</div>
		</StyledHeader>
	)
}
