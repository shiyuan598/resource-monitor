import React, { useState, useEffect } from "react";
import fakeData from "../../api/fake";
import {formatBytes} from "../../utils/tools";
import { Progress } from "antd";

export default function App() {
   const [diskList, setDiskList] = useState<any>([]);
    useEffect(() => {
        setInterval(() => {
            setDiskList(fakeData.getData());
        }, 10000);
        
    }, []);
    return (
        <div className="grid grid-cols-3 sm:grid-cols-3 text-xs sm:text-xs md:grid-cols-5 md:text-small lg:grid-cols-8 lg:text-base sm:gap-2 md:gap-4 lg:gap-6 gap-4 p-4">
            {diskList.map((item: any) => (
                <>
                    <div key={item.id} className="border border-gray-800 text-center text-gray-300 relative">
                        <div className="absolute left-0 bg-emerald-700 px-1">{item.location}</div>
                        <div className="mt-6">
                            <Progress
                            className="custom-progress"
                                type="circle"
                                size={"small"}
                                percent={item.progress}
                            />
                        </div>
                        <span className="block mt-2 flex-nowrap whitespace-nowrap">{formatBytes(item.total * item.progress / 100)} / {formatBytes(item.total)}</span>
                        <span className="block font-bold text-base sm:text-base md:text-lg lg:text-xl mb-2">{item.name}</span>
                    </div>
                </>
            ))}
        </div>
    );
}
