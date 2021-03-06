import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

class Info extends Component {

	state = {

		data: ''
	}

	async componentDidMount() {
		const { id } = this.props.match.params;
		const res = await axios.get(`https://api.myjson.com/bins/1fq8pm`);

		const result = res.data;

		const ob = result.filter(d => {
			return parseInt(id) === parseInt(d["Course Id"])
		})
		this.setState({
			data: ob[0]
		})
	}


	render() {
		const { data } = this.state;

		return (
			<div className="container">
				<br />
				<br />
				<Link to='/'><b className='backtoBtn'> &larr; Back to Course Listings</b></Link>
				{data === '' ? <Spinner /> :
					(
						<section>
							<h1 className='course-tit'> <b>Course Tittle : </b><span className="f-size"> {data['Course Name']} </span></h1>
							<br />
							<div className="row">
								<div className="col-md-6">
									<ul className="list-group">
										<li className="list-group-item">Provider: <span className="text-secondary"> {data['Provider']}</span></li>
										<li className="list-group-item">Parent Subject:<span className="text-secondary">{data["Parent Subject"]}</span></li>
										<li className="list-group-item">Child Subject:<span className="text-secondary">{data["Child Subject"]}</span></li>
										<li className="list-group-item">Next Session Date:<span className="text-secondary">{data["Next Session Date"]}</span></li>
										<li className="list-group-item">Length:<span className="text-secondary">{data['Length']}</span></li>
									</ul>
								</div>
								<div className="col-md-6">
									<ul className="list-group">
										<li className="list-group-item">Course ID: <span className="text-secondary"> {data["Course Id"]}</span></li>
									</ul>
								</div>
							</div>

							<div className="row mt-4 ">
								<div className="col-md-6" style={{ textAlign: 'center' }}>
									<b> Video Link here -</b><br /><br />
									<a href={data['Video(Url)']} target='_blank' className="btn-a"> Video </a>
								</div>
								<div className="col-md-6" style={{ textAlign: 'center' }}>
									<b>Enroll here -</b><br /><br />
									<a href={data['Url']} className="btn-a ">{'  '} Enroll{'  '}</a>
								</div>
							</div>
						</section>)
				}
			</div >
		)
	}
}
export default Info;
