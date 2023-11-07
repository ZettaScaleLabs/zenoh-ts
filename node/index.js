
const useZenohNetwork = {
    locateFile: (a, b) => {
        console.log('AB', a, b);
    }
}

require('../src/wasm/zenoh-wasm');

console.log('After module includes (should override content)', useZenohNetwork);
return;

useZenohNetwork().then(mod => {
    console.log(mod);

    return;

    const clocator = mod.stringToNewUTF8('ws/127.0.0.1:1987');
    console.log('Locator : ', clocator);
    return;
    
});



// const ptr = mod._zw_default_config(clocator);
// if (ptr === 0) {
//     throw new Error('Failed to construct zenoh.Config');
// }
// return;
// mod._zw_open_session(ptr).then(session => {
//     console.log('Session', session);
// });


