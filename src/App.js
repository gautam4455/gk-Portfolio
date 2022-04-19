import { Fragment, useEffect, useState } from "react";
import "./App.scss";
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";
import Loader from "./components/utility/Loader";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import ScrollToTop from "./components/utility/ScrollToTop";
import Projects from "./components/projects/Projects.js";
import Resume from "./components/resume/Resume.js";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer.js";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {		// loader for 1s
			setLoading(false);
		}, 100);

		return () => clearTimeout(timer);		// hide loader after 1s
	}, []);

	return (
		<Router>
			<Fragment>
				{
					loading
						? <Loader />
						:
						<div className="app" id="app">
							<Navbar />
							<div style={{ marginTop: "80px" }}>
								<Routes>
									<Route path="/" element={<Home />} />
									<Route path="/projects" element={<Projects />} />
									<Route path="/resume" element={<Resume />} />
									<Route path="/contact" element={<Contact />} />
								</Routes>
							</div>
							<ScrollToTop />
							<Footer />
						</div>
				}
			</Fragment>
		</Router>
	);
}

export default App;
