import { keyframes, styled } from "@stitches/react"

const Animation = keyframes({
	"0%": { backgroundPositionX: "-100%" },
	"100%": { backgroundPositionX: "100%" }
})

export const StyledFooter = styled("footer", {
	position: "fixed",
	bottom: 0,
	left: 0,
	right: 0,
	width: "100%",
	height: "80px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "#fff5",

	"& #copy": {
		textAlign: "center",

		a: {
			position: "relative",
			zIndex: 1,
			display: "inline-block",
			width: "fit-content",
			color: "#5aeb73",
			transition: "all 300ms ease-out",

			"&:after": {
				content: "",
				position: "absolute",
				zIndex: -1,
				left: 0,
				bottom: "-1px",
				width: "100%",
				height: "1px",
				background: "linear-gradient(90deg, #5aeb73,#0000, #5aeb73)",
				backgroundSize: "200% 100%",
				animation: `${Animation} 1s ease-in-out infinite reverse`
			},

			"&:before": {
				content: "",
				position: "absolute",
				zIndex: -1,
				left: 0,
				bottom: "-1px",
				width: "100%",
				height: "1px",
				backgroundColor: "#5aeb73",
				opacity: 0,
				transition: "all 300ms ease-out"
			},

			"&:hover": {
				color: "white",
				fontWeight: "bold",
				padding: "0 5px",

				"&:after": {
					animationPlayState: "paused"
				},
				"&:before": {
					bottom: "0",
					opacity: 1,
					height: "100%"
				}
			}
		}
	}
})
