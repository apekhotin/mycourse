const fn1 = () => {
    console.log('fn1')
    return Promise.resolve(1)
}

const fn2 = () => new Promise(resolve => {
    console.log('fn2')
    setTimeout(() => resolve(2), 1000)
})

const promiseReduce = async (promises, reduce, initialValue) => {
    let value = initialValue;

    await Promise.all(promises.map(async promise => {
        // return promise().then(result => {
        //   value = reduce(value, result);
        // });
        const result = await promise();
        value = reduce(value, result);
    }));

    return value;
}

promiseReduce(
    [fn1, fn2],
    (memo, value) => {
        console.log('reduce')
        return memo * value
    },
    1
)
    .then(console.log)