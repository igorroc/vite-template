import { styled } from "@stitches/react"

export const StyledHeader = styled("header", {
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	width: "100%",
	height: "80px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "#fff5",

	".headerContent": {
		width: "80%",
		maxWidth: "900px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center"
	},
	"nav.links": {
		display: "flex",
		gap: 20,

		a: {
			backgroundColor: "#5aeb73",
			color: "#232323",
			padding: "2px 15px",
			borderRadius: "5px",
			border: "1px solid #232323",
			transition: "all 0.3s ease-out",

			"&:hover": {
				backgroundColor: "#46b75a",
				color: "#232323"
			}
		}
	}
})
