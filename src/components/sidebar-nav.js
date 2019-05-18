import React from 'react';
import styled from 'styled-components';
import {gridArea, display, position, width, flex, right} from 'styled-system';
import {Flex} from 'rebass';

const StickyLinks = styled.div`
	@media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
		position: sticky;
		top: ${props => props.theme.space[4]}px;
	}
`;

const Links = styled(Flex)`
	min-height: 100vh;
	background: ${props => props.theme.colors.gray[9]};
	@supports (-webkit-backdrop-filter: blur(8px)) {
		background ${props => props.theme.colors.gray[9]}88;
		-webkit-backdrop-filter: blur(8px);	
	}
	${gridArea}
	${display}
	${position}
	${right}
	${width}
	${flex}
`;

const SidebarNav = ({links, children, ...props}) => (
	<Links
		fontSize={[3, 2]}
		flexDirection="column"
		justifyContent="space-between"
		pt={[0, 6]}
		pb={[3, 4]}
		px={[0, 4]}
		{...props}
	>
		<StickyLinks as={links} />
		{children}
	</Links>
);
export default SidebarNav;