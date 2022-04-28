import {SERVER_URL} from "./config";
import {wait} from "../utils/helper";

export const getUsers = async () => {
    const res = await fetch(`http://localhost:${SERVER_URL}/users`)
    await wait(1000);
    return res.json();
}
