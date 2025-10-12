import './page.scss';
import homePageData from "@/data/homePageData.json";

export default async function Home() {
	return (
		<>
			<div className="homeContent">
				<div className='page_firstPage'>
					<div className="imgContainer">
						<img src={homePageData.homePage_FirstPageSrc}/>
					</div>
					<div className=''>

					</div>
				</div>
			</div>
		</>
	);
}
