import Input from "./input";

export const InputText = () => <Input type={'text'} label={'Input Text'} />
export const InputPassword = () => <Input type={'password'} label={'Input Password'} />

export default {
  title: "Atoms/Input",
  component: Input,
}
