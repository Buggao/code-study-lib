let myobj = {
    name: "hanhan",
    age: 18,
    sex: "男"
}

let deepObj = {
    name: "tone",
    age: 19,
    location: {
        province: "北京",
        city: "北京",
        district: "海淀区"
    },
    workExp: [
        {
            company: "公司1",
            position: "前端开发",
            address: {
                province: "北京",
                city: "北京",
                district: "海淀区"
            }
        },
        {
            company: "公司2",
            position: "前端开发",
            address: {
                province: "上海",
                city: "上海",
                district: "宝山区"
            }
        }
    ]
}

let myMap = new Map();

for(let key in myobj) {
    myMap.set(key, myobj[key]);
}

console.log("my map", myMap);

console.log("my map get name", myMap.get("name"));

console.log("my map keys", myMap.values());