
import axios from 'axios';
import { GroupCard } from 'components/apps/card';
import SEO from 'lib/SEO';
import { Component } from 'react'

export default class CategoriesPage extends Component {
    constructor(props) {
        super(props);
    }
    // get  server side props
    static async getInitialProps({ query }) {
        let { data } = await axios.get(`${process.env.NEXT_PUBLIC_API||'/api'}/cat/${query.name}?p=${query.p || 0}`);
        return { data, query }
    }

    render() {
        let title = 'تصنيف ' + this.props?.query?.name
        return (
            <div className='box col  ' >
                <SEO title={title} />
                <h1 className='box row p ui'>{title}</h1>
                <GroupCard data={this.props.data} />
            </div>
        )
    }
} 