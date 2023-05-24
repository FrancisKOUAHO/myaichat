import { AiOutlineTeam, AiOutlineEuroCircle, AiOutlineCheckSquare } from "react-icons/ai";
import { FunctionComponent, useState } from "react";
import IconTextProps from "@/types/iconTextProps";

const IconText: FunctionComponent<IconTextProps> = ({ title, price, numberOfPlaces, status}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="c-iconText">
            <div>
                <h2>
                    {title && (isExpanded ? title : title.substr(0, 15) + ".....")}
                    {title && title.length > 15 && (
                        <button onClick={handleToggleExpand}>
                            {isExpanded ? "Voir moins" : "Voir plus"}
                        </button>
                    )}
                </h2>
            </div>
            <div>
                <AiOutlineEuroCircle className="all-icon" />
                <p>Prix : <span>{price}</span></p>
            </div>
            <div>
                <AiOutlineTeam className="all-icon" />
                <p>Place disponible : <span>{numberOfPlaces}</span></p>
            </div>
            <div>
                <AiOutlineCheckSquare className="all-icon" />
                <p>Statut : <span>{status}</span></p>
            </div>
        </div>
    );
};

export default IconText;
