WebAssembly.instantiate(readbuffer('shuffle.wasm'),{}).then(
    function(module){
        let result = 0;
        let seed1 = 49734321;
        let start = performance.now();
        for (let i = 0; i < 100000000; i++) {
            let seed2 = ((seed1 + 0x7ed55d16) + (seed1 << 12)) & 0xffffffff
            result ^= module.instance.exports.shuffle(seed1, seed2);
            seed1 = seed2;
        }
        let end = performance.now();
        console.log(result);
        console.log("Duration:", end - start)
    }
)