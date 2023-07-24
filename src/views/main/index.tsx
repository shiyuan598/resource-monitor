import React, { useState, useEffect } from "react";
import fakeData from "../../api/fake";
import {formatBytes} from "../../utils/tools";
import { Progress } from "antd";
import { doc } from "prettier";

export default function App() {
   const [diskList, setDiskList] = useState<any>([]);
    useEffect(() => {
        setInterval(()=>{
            setDiskList(fakeData.getData().slice(0, 30));
        }, 10000);
    }, []);
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 p-4">
            {diskList.map((item: any) => (
                <>
                    <div key={item.id} className="border border-gray-800 text-center relative">
                        <div className="absolute left-0 bg-emerald-700 px-1">{item.location}</div>
                        <div className="mt-6">
                            <Progress
                                type="circle"
                                size={"small"}
                                percent={item.progress}
                            />
                        </div>
                        <span className="block mt-2 flex-nowrap whitespace-nowrap">{formatBytes(item.total * item.progress / 100)} / {formatBytes(item.total)}</span>
                        <span className="block font-bold text-lg mb-2">{item.name}</span>
                    </div>
                </>
            ))}
        </div>
    );
}
