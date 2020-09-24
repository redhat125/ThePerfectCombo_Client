
export function getSwitchDetail(dishItem: any, itemDetails: any): {name: string; desc: string}{
    // [[{'i1':1, 'i2':3}, {'i1':2}, {'i2':6}], {'i3':1},{'i5':1}, [{'i4':1}, {'i6':1}]];

    // const keyIt = (Object.keys(dishItem) as Array<keyof typeof itemDetails>)[0];
    // const dishQty = (Object.values(dishItem) as Array<number>)[0];

    const itemKeyArr = (Object.keys(dishItem) as Array<keyof typeof itemDetails>);
    let name = "", desc = "", joiner = "";

    itemKeyArr.forEach((itemKey)=>{
        console.log(itemKey);
        name += joiner+ dishItem[itemKey] + " " + itemDetails[itemKey].name;
        desc += joiner+ itemDetails[itemKey].desc;
        joiner = ", ";
    })

    const detail = {name: name, desc: desc}
    return detail;
}