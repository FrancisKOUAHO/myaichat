import {Button, ButtonIcon} from "./button";
import {AiOutlineEye} from "react-icons/ai";


const buttonClicked = e => {
  e.preventDefault()
  alert("Button clicked")
};

export const primaryButton = () => <Button color={'primary'}> primary </Button>
export const secondaryButton = () => <Button color={'secondary'}> secondary </Button>
export const functionButton = () => <Button onClick={buttonClicked}> Click me </Button>

export const buttonIcon = () => <ButtonIcon className="c-button-icon" onClick={buttonClicked} color={'primary'} name="apercu"><AiOutlineEye/></ButtonIcon>


export default {
  title: "Atoms/Button",
  component: Button,
}
