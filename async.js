

const fetchData = () => {
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });  
    return promise;
};


setTimeout(() => { // async code - executes at the same time 
    console.log('Timer is done!');
    fetchData().then(text => {
        console.log(text);
    })
}, 2000);


// regular code - executes sequentially 
console.log('Hello!');
console.log('Hi!');


