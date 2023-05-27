import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
	const { data, loading, error } = useFetch(
		"/hotels/countByCity?cities=Mumbai,Delhi,Prayagraj"
	);
	// console.log(data)

	return (
		<div className="featured">
			{loading ? (
				"Loading hang on"
			) : (
				<>
					<div className="featuredItem">
						<img
							src="https://images.unsplash.com/photo-1567157577867-05ccb1388e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
							alt=""
							className="featuredImg"
						/>
						<div className="featuredTitles">
							<h1>Mumbai</h1>
							<h2>{data[0]} properties</h2>
						</div>
					</div>

					<div className="featuredItem">
						<img
							src="https://images.unsplash.com/photo-1594331588109-5ce6945aea18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=812&q=80"
							alt=""
							className="featuredImg"
						/>
						<div className="featuredTitles">
							<h1>Delhi</h1>
							<h2>{data[1]} properties</h2>
						</div>
					</div>
					<div className="featuredItem">
						<img
							src="https://images.unsplash.com/photo-1601750059072-b0faf504853e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
							alt=""
							className="featuredImg"
						/>
						<div className="featuredTitles">
							<h1>Prayagraj</h1>
							<h2>{data[2]} properties</h2>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Featured;
