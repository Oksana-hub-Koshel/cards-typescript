import React, {FC} from "react";


export interface IProp{
    filter: string,
    str:string
}

export const HighLight =(props: IProp):string| (JSX.Element | string)[]=>{
    const {filter, str} =props
    if(!filter) return str
    const regexp=new RegExp(filter, 'ig')
    const match=str.match(regexp)
    if(match){
        return str.split(regexp).map((s, index, arr)=>{
            if(index< arr.length-1){
                const c=match.shift()
                return <>{s}<span style={{background: 'yellow'}}>{c}</span></>
            }
            return s
        })
    }
    return str
}


//
// const items=useMemo(()=>{
//     if(filter){
//         return products.filter(item=>{
//             const matchValue=filter.toLowerCase()
//             const {title, description}=item
//             if(title.toLowerCase().includes(matchValue)) return true
//             if(description.toLowerCase().includes(matchValue)) return true
//         })
//     }
//     return products
// }, [filter])