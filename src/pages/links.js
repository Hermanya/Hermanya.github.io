import React from 'react';
import indexComponents from '../components';
import Root from '../components/root';
import Seo from '../components/seo';
import {
	indexData,
	indexTemplates,
	indexColumns,
	indexRows,
	indexGaps
} from '../desktop';
import Grid from '../components/grid';

const template = `
	"links"
	"nav"
`;

const LinksPage = () => {
	const data = indexData();
	return (
		<Root bg={['gray.9', 'gray.8']}>
			<Seo title="Links" keywords={['social', 'navigation']} />
			<Grid
				p={[4, 0]}
				pt={[6, 0]}
				gridGap={[2, ...indexGaps]}
				gridTemplateAreas={[template, ...indexTemplates]}
				gridTemplateColumns={['auto', ...indexColumns]}
				gridTemplateRows={['auto 0', ...indexRows]}
			>
				{indexComponents({data, linksDisplay: 'block'})}
			</Grid>
		</Root>
	);
};

export default LinksPage;
