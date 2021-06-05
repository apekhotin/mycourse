function sum(a) {
    let acc = 0;

    let tmp = function(b) {
        if (b) {
            acc += b;
            return tmp;
        }

        return acc;
    }

    return tmp(a);
}

console.log(sum(100)(250)(3)());