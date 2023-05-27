import {FunctionComponent} from "react";
import InputProps from "@/types/InputProps";

const Input: FunctionComponent<InputProps> = ({className, type, label, placeholder, name, pattern, required}) => {

    if (type == "text")
        return (
            <>
                <label>{label}</label>
                <input name={name} type={type} className={className} placeholder={placeholder} pattern={pattern}
                       required={required}/>
            </>
        )

    if (type == "password")
        return (
            <>
                <label>{label}</label>
                <input name={name} type={type} className={className} placeholder={placeholder} pattern={pattern}
                       required={required}/>
            </>
        )

    return (
        <>
            <label>{label}</label>
            <input name={name} type={type} className={className} placeholder={placeholder} pattern={pattern}
                   required={required}/>
        </>
    )
}

export default Input
