import React, { useState, useEffect } from "react";
import fakeData from "../../api/fake";
import { formatBytes } from "../../utils/tools";
import { Progress, Tooltip } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useWebSocket } from "../../components/WebSocketService";

export default function App() {
    const history = useHistory();
    const [diskList, setDiskList] = useState<any>([]);
    const { socket, message } = useWebSocket();
    useEffect(() => {
        console.info("main收到消息:", message);
    }, [message]);
    useEffect(() => {
        const runFetchData = () => {
            setDiskList(fakeData.getData().slice(0, 10));
            setTimeout(runFetchData, 6000);
        };
        runFetchData();
    }, []);

    const toLogPage = () => {
        history.push("/log");
    };

    return (
        <div className="grid grid-cols-3 sm:grid-cols-3 text-xs sm:text-xs md:grid-cols-5 md:text-small lg:grid-cols-8 lg:text-base sm:gap-2 md:gap-4 lg:gap-6 gap-4 p-4">
            <Tooltip className="fixed right-2 top-2 z-10 font-bold text-base md:text-lg lg:text-xl" title="查看日志" placement="left"><FileTextOutlined onClick={toLogPage} /></Tooltip>
            {diskList.map((item: any) => (
                <div
                    key={item.name}
                    className="relative text-center text-gray-300 lg:text-[#bcbcbc] bg-[#141414] hover:cursor-pointer hover:shadow hover:shadow-blue-950">
                    <div className="absolute left-0 bg-emerald-700 px-1">{item.location}</div>
                    <div className="mt-6">
                        <Progress className="custom-progress" type="circle" size={"small"} percent={item.progress} />
                    </div>
                    <span className="block mt-2 flex-nowrap whitespace-nowrap">
                        {formatBytes((item.total * item.progress) / 100)} / {formatBytes(item.total)}
                    </span>
                    <span className="block font-bold text-base sm:text-base md:text-lg lg:text-xl mb-2">
                        {item.name}
                    </span>
                </div>
            ))}
        </div>
    );
}
