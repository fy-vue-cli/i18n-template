// 源配置文件
const origin = {
    hello: {
        hello: ['你好', 'hello'],
        switch: ['切换语言', 'switchLanguage'],
        top: { 
            title: ['标题', 'title']
        }
    }
}


/*
    递归出en或者cn单独的对象

    origin: 上一个递归到的属性
    idx: 0 == cn || 1 == cn
*/
function actionsLang(origin, idx){
    let result = {}
    for(let k in origin){
        if(origin[k] instanceof Array){
            result[k] = origin[k][idx]
        }else if(origin[k] instanceof String){
            return origin[k]
        }else{
            result[k] = actionsLang(origin[k], idx)
        }
    }

    return result
}



export default {
    cn: actionsLang(origin, 0),
    en: actionsLang(origin, 1)
}
