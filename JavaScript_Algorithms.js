//  @desc   Split camelCase by uppercase character and replace with a space. 
const camelCase = string => {
    return [...string].map(char => {
        return (char === char.toUpperCase()) ? ` ${char}` : char
    }).join('')
}