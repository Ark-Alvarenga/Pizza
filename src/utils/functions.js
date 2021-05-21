export function getText(arr) {
    console.log(arr)
    if (!arr || !arr.length) return
    let text = ""
    arr.forEach((str, i) => {

        if (i === (arr.length -1)) {
            text = text + str 
        }
        else {
            text = text + str + ", "
        }

        
    });
    return text
} 
