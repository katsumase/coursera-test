console.log("Hello!")
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 2000);
});