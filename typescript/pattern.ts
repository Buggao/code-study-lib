function foo(value: number | string) {
    if(isString(value)) {
        console.log(value.toUpperCase());
    }
}