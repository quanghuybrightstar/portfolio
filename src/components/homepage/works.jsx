import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/works.css";
import INFO from "../../data/user";

const Works = () => {

	const renderWorkItem = (itemWork) => {
		return (
			<div key={itemWork?.id} className="work">
				<img src={itemWork.srcLogo} alt={itemWork.name} className="work-image" />
				<div className="work-title">{itemWork.name}</div>
				<div className="work-subtitle">{itemWork.subtitle}</div>
				<div className="work-duration">{itemWork.startDate} - {itemWork.endDate}</div>
			</div>
		);
	};

	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						{INFO.works.map((itemWork) => renderWorkItem(itemWork))}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
