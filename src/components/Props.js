import {useEffect} from "react";

export const Props = ({a}) => {

    useEffect(() => {
        setTimeout(() => {
            //props = "HEllo"
            //console.log(props)
            console.log(a)
            a = "Lol"
            console.log(a)
        }, 1000)
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("In 2 secs: " + a)
        }, 2000)
    }, [])

    return <div>
        <h1>PROPS!!!</h1>
        <div>{a}</div>
    </div>
}
