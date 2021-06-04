export const AddMovie=(payLoad)=>{
    return{
        type:"ADDMOVIE",
        payLoad,
    }
}
export const Delete=(payLoad)=>{
    return{
        type:"DELETE",
        payLoad,
    }
}
export const Search=(payLoad)=>{
    return{
        type:"SEARCH",
        payLoad,
    }
}
