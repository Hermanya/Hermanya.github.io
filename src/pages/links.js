import React from 'react';
import MobileNav from '../components/mobile-nav';
import Layout from '../components/layout';
import Seo from '../components/seo';
import ExternalLinks from '../components/external-links';

const LinksPage = () => (
	<Layout>
		<Seo title="Home" keywords={['gatsby', 'application', 'react']} />
		<ExternalLinks fontSize={4} />
		<MobileNav />
	</Layout>
);

export default LinksPage;