import React, { useEffect, useState } from "react";
import { Input, Button, List, Spin, Tooltip } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const { Search } = Input;

interface DataType {
    gender?: string;
    name: {
        title?: string;
        first?: string;
        last?: string;
    };
    email?: string;
    picture: {
        large?: string;
        medium?: string;
        thumbnail?: string;
    };
    nat?: string;
    loading: boolean;
}

const App: React.FC = () => {
    const history = useHistory();
    const [pageNo, setPageNo] = useState(1);
    const [keyword, setKeyword] = useState<string>("");
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState<DataType[]>([]);

    useEffect(() => {
        const size = 2;
        const fakeDataUrl = `https://randomuser.me/api/?page=${pageNo}&results=${size}&inc=name,gender,email,location,dob,nat,picture`;
        setLoading(true);
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                initLoading && setInitLoading(false);
                const newData = list.concat(res.results);
                setList(newData);
                setLoading(false);
                window.dispatchEvent(new Event("resize"));
            });
    }, [pageNo]);

    const toHomePage = () => {
        history.push("/main");
    };

    const onSearch = (value: string) => {
        setKeyword(value);
    };

    const onLoadMore = () => {
        setPageNo(pageNo + 1);
    };

    const loadMore =
        !initLoading && !loading ? (
            <div
                style={{
                    textAlign: "center",
                    marginTop: 12,
                    height: 32,
                    lineHeight: "32px"
                }}>
                <Button onClick={onLoadMore}>查看更多...</Button>
            </div>
        ) : initLoading ? null : (
            <div className="text-center">
                <Spin />
            </div>
        );

    return (
        <div className="p-4">
            <div className="flex justify-between font-bold text-base md:text-lg lg:text-xl">
                <h2>日志管理</h2>
                <Tooltip title="回到首页" placement="left"><HomeOutlined onClick={toHomePage} /></Tooltip>
            </div>

            <div className="clearfix mt-2">
                <Search
                    className="clearfix float-right w-[260px] md:w-[320px] lg:w-[360px]"
                    placeholder="输入关键字后按Enter键查询"
                    onSearch={onSearch}
                    enterButton
                />
            </div>
            <List
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            title={<a href="https://ant.design">{item.name?.last}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default App;
