import Card from "./card";
import Image from "next/image";
import Avatar from '../../../../app/assets/pexel.jpg';
import IconText from "../icontext/iconText";
export const BaseCard = () => {
    return(
        <Card className="c-card">
            <Image  src={Avatar} width="100" height="100"/>
            <IconText title="Visite guidée et dégustation de Champagne à Pierry (51)" price="15" numberOfPlaces="2" status="Confirmer" />
        </Card>
    )
}
export default {
    title: "Atoms/Cards",
    component: Card,
}
