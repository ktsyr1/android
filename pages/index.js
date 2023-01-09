
import axios from 'axios';
import { GroupCard } from 'components/apps/card';
import SEO from 'lib/SEO';
import { Component } from 'react'
import Pagination from 'theme/pagination';

export default class Home extends Component {
	constructor(props) {
		super(props);
	}
	// get  server side props 
	static async getInitialProps({ query }) {

		let { data } = await axios.get(`${process.env.NEXT_PUBLIC_API ||'/api'}/apps?p=${query.p || 0}`);

		return { data }
	}

	render() {
		return (
			<div className='box grid j' >
				<SEO />
				{/* map apps */}
				<GroupCard data={this.props.data} />
			</div>
		)
	}
} 