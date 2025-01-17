import React from 'react'
import styled from 'styled-components'
import { above, avenir, grey } from '../utils';


const FooterWrapper = styled.footer`
	${avenir};
	color: ${grey};
	${above.tablet`
		padding-left: 4rem;
		padding-right: 4rem;
	`}
	${above.laptop`
		padding-left: 8rem;
  	padding-right: 8rem;
	`}
	small {
		display: block;
		font-size: .75rem;
		text-align: center;
	}
`


const Footer = () => (
	<FooterWrapper>
		<small>© 2020 <b>Ørn Forlag</b>, All Rights Reserved | Website by:Martin Andersen</small>
	</FooterWrapper>
)

export default Footer
