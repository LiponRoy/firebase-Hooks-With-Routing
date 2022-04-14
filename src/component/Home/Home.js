import React from 'react';
import './Home.css';
const Home = () => {
	return (
		<div className='container-fluid'>
			<div className='myHeader'>
				<div className='row'>
					<div className='col-md-6'>
						<div className='allText'>
							<span className='textHeading'>Lipon Roy</span>
							<p className='textPara'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga earum eaque corrupti soluta ad dolore eum totam quasi reprehenderit cum quisquam maiores, enim quibusdam adipisci possimus, suscipit tempora obcaecati itaque!suscipit tempora obcaecati itaque corrupti</p>
							<button href='' className=' btn btn-primary'>
								CLICK HERE
							</button>

							{/* <button>bakom didi</button> */}
						</div>
					</div>
					<div className='col-md-6 '>
						<div className='HeaderImagePart'>{/* <h2>img goes to here</h2> */}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
