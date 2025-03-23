export type Person = {
    fName:String,
    lName?:String,
    isMarried?:Boolean,
    children?: string[],
    getFullName : () => string,
    getAge?: (num:number, name:string) => Number,


}

// export{Person};