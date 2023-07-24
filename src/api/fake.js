let str = `化阳曦
   刘经略
   汉幻梅
   睦觅
   贯凌春
   骑诗桃
   买偲偲
   潮绿柏
   梁芮
   厚明明
   况南烟
   祢浩皛
   庚瀚海
   翠初
   犹德明
   陀寄波
   闵依秋
   南宫格菲
   将沛文
   謇晗昱
   马雨
   鲍向露
   愈秀美
   公兰芳
   才峻
   蔚寄蓝
   喻白容
   澄新竹
   琴靓
   同山雁
   羊盼丹
   徭初南
   呼孟阳
   税英喆
   孝向南
   弭玲琳
   束秋翠
   校雅惠
   容欣美
   酒竹
   有幻巧
   汗雅素
   綦文柏
   相贞
   桓秋柔
   别元芹
   卞越
   明河灵
   析梦秋
   籍飞柏
   刁玉宸
   厍音景
   帅笑雯
   蒙雨莲
   之笑柳
   愚侬
   司成龙
   春燕晨
   寒雪峰
   桐思烟
   江柔煦
   亢和璧
   郸宏盛
   解寄文
   米飞驰
   慈建华
   樊映颖
   冯夏瑶
   郦福
   谷凌蝶
   后问梅
   后宏义
   理丽姝
   臧卉
   骆安荷
   沈春晖
   受乐正
   力泰河
   秋巍然
   都山柳`;

let location = ["阳澄湖", "太湖", "苏州"];
const getData = () => {
    return str.split("\n").map((item, index) => ({
        id: index + 1,
        name: item.trim(),
        progress: Math.ceil(Math.random() * 100),
        total: Math.floor((5 + Math.random() * 2000) * 1024 * 1024),
        location: location[Math.ceil(Math.random() * 10) % 3]
    }));
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getData: getData
};
