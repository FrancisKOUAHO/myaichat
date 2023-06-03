import { FunctionComponent } from "react";
import CardProps from "@/types/CardProps";

export const Card: FunctionComponent<CardProps> = ({className, children}) => {

	return (
		<div className={className}>
			{children}
		</div>
	);
};

export default Card;
