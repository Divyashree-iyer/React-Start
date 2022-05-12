import React from "react"

const year = new Date().getYear();

function Footer(){
	return (
		<footer>
			<p>Copyright © {year}</p>
		</footer>
	);
}

export default Footer;