import {menuData} from './dataArrays';

export function getDishMenuList(){
    return new Promise((resolve, reject) => {
        console.log("Promise menuData data");
        setTimeout(() => {
            // console.log("dummy data "+ JSON.stringify(menuData));
            return resolve(menuData);
        }, 3000);
    });
}


export function getDishMenuListSync(filterType:string){
    return Object.values(menuData.rateType);
}

export function getDishAvailableSync(id:string){
    console.log("getting dishes for "+id + " "+JSON.stringify(Object.values(menuData.dish).filter((item)=>item.rateType == id)));
    return Object.values(menuData.dish).filter((item)=>item.rateType == id);
}

export function getDishDetailsSync(id:string){
    console.log("getting dish detail for "+id);
    return Object.values(menuData.dish).find((item)=>item.id == id);
}

export function getItemDetailsSync(dishList:Array<string>){
    console.log("getting item detail for "+dishList);
    return menuData.items;
}

export function getItemListArr(list:Array<any>){
    console.log("getItemListArr ip "+JSON.stringify(list));
    let res: Array<string> = [];
    let finalRes: Array<string> = [];
    list.forEach((item)=>{
        if(Array.isArray(item)){
            const itemList = item.map((opItem)=>{
                return Object.keys(opItem)[0];
            })
            res = [...res, ...itemList];
        }
        else{
            res.push(Object.keys(item)[0]);
        }
    });

    res.forEach(item=>{
        if(!finalRes.includes(item)){{
            finalRes.push(item);
        }}
    })

    console.log("getItemListArr op "+JSON.stringify(finalRes));
    return finalRes;
}

export function getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {
    return o[propertyName]; // o[propertyName] is of type T[K]
}










const dishListObj = {
    type : {
        'SI' : {
            id : 'SI',
            cover : 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg',
            dishes : ['SI_99', 'SI_129']
        },
        'NI' :{
            id : 'NI',
            cover : 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg',
            dishes : ['NI_99', 'NI_129']
        },
        'CC' : {
            id : 'CC',
            cover : 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg',
            dishes : ['CC_99', 'CC_129']
        },
        'NE' : {
            id : 'NE',
            cover : 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg',
            dishes : ['NE_99', 'NE_129']
        }
    },

    dish : {
        'SI_99' : {
            id : 'SI_99',
            cover : 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg',
            items : [{}]
        },
        'SI_129' : {
            id : 'SI_129',
            cover : 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg',
            items : [{}]
        },
        'NI_99' :{
            id : 'NI_99',
            cover : 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg',
            items : [{}]
        },
        'NI_129' :{
            id : 'NI_129',
            cover : 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg',
            items : [{}]
        },
        'CC_99' : {
            id : 'CC_99',
            cover : 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg',
            items : [{}]
        },
        'CC_129' : {
            id : 'CC_129',
            cover : 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg',
            items : [{}]
        },
        'NE_99' : {
            id : 'NE_99',
            cover : 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg',
            items : [{}]
        },
        'NE_129' : {
            id : 'NE_129',
            cover : 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg',
            items : [{}]
        }
    },

    item : {

    }
};
