mergeInto(LibraryManager.library, {
    $func_map: "new Map()",
    $func_idx: "0",
    $registerJSCallback__deps: ['$func_map', '$func_idx'],
    $registerJSCallback: function (fn) {
        index = func_idx
        func_map.set(index, fn)
        func_idx++;
        return index;
    },
    
    call_js_callback__proxy: 'sync',
    call_js_callback__sig: 'ipi',
    call_js_callback__deps: ['$func_map', '$func_idx'],
    call_js_callback: function (id, value, ctx) {
        var fn = func_map.get(id)
        fn(value, ctx)
        // if call_js_callback__proxy is `async` then after calling the fn we
        // must check if it return a promise, in that case we should use the `.then(..)` 
        // and free the memory there.
    },
    remove_js_callback__proxy: 'sync',
    remove_js_callback__sig: 'i',
    remove_js_callback__deps: ['$func_map', '$func_idx'],
    remove_js_callback: function (id) {
        func_map.delete(id)
    }
});


mergeInto(LibraryManager.library, {

    test_call_js_callback__proxy: 'sync',
    test_call_js_callback__sig: 'ipi',
    test_call_js_callback__deps: ['$func_map', '$func_idx'],
    test_call_js_callback: function () {
        console.log("Hello world from Callback");
        // if call_js_callback__proxy is `async` then after calling the fn we
        // must check if it return a promise, in that case we should use the `.then(..)` 
        // and free the memory there.
    },
});