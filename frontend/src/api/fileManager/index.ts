import instance from "../axios";
import { dirResponse } from "../../components/types/types";
async function getDir(){
    try {
        const res = await instance.get<dirResponse>('/get-current-dir')
        return res.data;
    } catch (error) {
        console.log(error)
        return null
    }
}

export {getDir}