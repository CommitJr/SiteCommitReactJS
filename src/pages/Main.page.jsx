import React from "react";
import Header from "../sections/main.page/header/Header";
import AboutUs from "../sections/main.page/aboutUs/AboutUs";
import Services from "../sections/main.page/services/Services";
import Beliefs from "../sections/main.page/beliefs/Beliefs";
import Team from "../sections/main.page/team/Team";
import Contact from "../sections/main.page/contact/Contact";
import NavBar from "../sections/main.page/navBar/NavBar";
//import Footer from "../sections/main.page/footer/Footer"

function MainPage() {
	return (
		<>
			<NavBar />

			<Header />

			<AboutUs />
			<Services />
			{/* <Beliefs /> */}

			<Team />

			<Contact />

			{/* <div>
                <Footer />
            </div> */}
		</>
	);
}

export default MainPage;
