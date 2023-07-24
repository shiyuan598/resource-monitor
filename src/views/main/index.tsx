import React, { useState, useEffect } from "react";
import fakeData from "../../api/fake";
import {formatBytes} from "../../utils/tools";
import { Progress } from "antd";

export default function App() {
   const [diskList, setDiskList] = useState<any>([]);

    useEffect(() => {
        setDiskList(fakeData.data.slice(0, 20));
    }, []);
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 py-4">
            {diskList.map((item: any) => (
                <>
                    <div className="border border-gray-800 text-center relative">
                        <div className="absolute left-0 top-[-4] bg-emerald-700 px-1">{item.location}</div>
                        <div className="mt-6">
                            <Progress
                            className="custom-progress"
                                type="circle"
                                percent={item.progress}
                                style={{ margin: 0}}
                            />
                        </div>
                        <span className="block mt-2">{formatBytes(item.total * item.progress / 100)} / {formatBytes(item.total)}</span>
                        <span className="block font-bold text-lg mb-2">{item.name}</span>
                    </div>
                </>
            ))}
        </div>
    );
}
