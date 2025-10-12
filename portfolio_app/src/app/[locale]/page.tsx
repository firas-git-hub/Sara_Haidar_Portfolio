import './page.scss';
import homePageData from "@/data/homePageData.json";

export default async function Home() {
	return (
		<>
			<div className="homeContent">
				<div className='page page_firstPage'>
					<div className="imgContainer">
						<img src={homePageData.firstPageSrc} />
					</div>
					<div className='messageOverlayContainer'>
						{
							homePageData.firstPageWordsImgs.map((item, index) => {
								return (
									<div key={index} className={"imgContainer " + item.classname}>
										<img src={item.src} />
									</div>
								)
							})
						}
					</div>
				</div>
				<div className='page page_secondPage'>
					<div className='flex--row'>
						<div className='homePage_aboutMe'>
							<div className='card'>

							</div>
						</div>
						<div className='imgContainer portraitImg'>
							<img src={homePageData.secondPage.imgSrc} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
