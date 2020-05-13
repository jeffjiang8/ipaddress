var defangIPaddr = function(address) {
    let newAddress = []
    for ( let char of address ) {
        if ( char === '.') {
            char = "[.]"
            newAddress.push(char)
        } else {
            newAddress.push(char)
        }
    }
    return newAddress.join('')
};