use neon::prelude::*;
use num_cpus;

fn thread_count(mut cx: FunctionContext) -> JsResult<JsNumber> {
    Ok(cx.number(num_cpus::get() as f64))
}

fn hello(mut cx: FunctionContext) -> JsResult<JsString> {
    Ok(cx.string("hello node"))
}

register_module!(mut cx, {
    cx.export_function("nativeHello", hello).unwrap();
    cx.export_function("nativeThreadCount", thread_count)
        .unwrap();

    Ok(())
});
