import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./gk_corp.png"
								alt="Gk Corp"
								className="work-image"
							/>
							<div className="work-title">GK Corp</div>
							<div className="work-subtitle">
								Web & Mobile Developer
							</div>
							<div className="work-duration">
								06/2023 - Present
							</div>
						</div>
						<div className="work">
							<img
								src="./cti.jpg"
								alt="Cti Group"
								className="work-image"
							/>
							<div className="work-title">CTI Group</div>
							<div className="work-subtitle">
								Front-end Developer
							</div>
							<div className="work-duration">
								02/2023 - 05/2023
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
