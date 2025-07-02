function handleUser(userInfo: object, returnType: "object"): object; 
function handleUser(userInfo: object, returnType: "array"): string[]; 
function handleUser(userInfo: object,  returnType: "array" | "object", age?: number) {
    if (returnType === "array") {
        return Object.keys(userInfo);
    } else {
        return userInfo
    }
}

const me = {
    name: "Tone",
    age: 24,
    city: "ShangHai"
}

const userKey = handleUser(me, "object");

// type myFunc = (name:string, age: number, location?: string, gender="male") => void

function demo(name: string, ...argus: [string, string, number]):void {
    console.log("name",name, ...argus);
}

type MyFunc = (name: string, age?: number, ...argus: number[]) => void

let myS = "s"

let str1: "spring"| "summer" = "spring"

