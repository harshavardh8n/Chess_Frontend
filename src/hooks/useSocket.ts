import { useEffect, useState } from "react"


const WS_URL = "ws://ec2-13-235-71-155.ap-south-1.compute.amazonaws.com:8080"

 export const useSocket = ()=>{
    const [socket,setScket] = useState<WebSocket | null>(null)

    useEffect(()=>{
        const ws = new WebSocket(WS_URL)

        ws.onopen = ()=>{
            console.log("connected")
            setScket(ws);
        }

        ws.onclose=()=>{
            console.log("disconnected");
            setScket(null);
            
        }

        return()=>{
            ws.close();
        }
    },[])       

    return socket;
 }