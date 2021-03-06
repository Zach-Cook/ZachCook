// This takes an array and allows for negative indexing
export default function makeNegativeIndex(arr){


    return new Proxy(arr, {
        get(target, prop){
            // if used as iterable
            if (prop === Symbol.iterator){
                return target[prop].bind(target)
            }
            let index = parseInt(prop, 10)

            if(index < 0 ){
                index += arr.length
                return target[index] 
            } 
            return target[prop]
        },
        set(target, prop, value){
            let index = parseInt(prop, 10)

            if(index < 0 ){
                index += arr.length
                target[index] = value
                
                
                
                if (index < 0){
                    throw new Error('index is overflow')
                }
                return true
            } 
            target[prop] = value
            return true
        }
    })
}