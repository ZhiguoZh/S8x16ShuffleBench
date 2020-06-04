(module
    (type (func (param i32 i32) (result i32)))
    (func (type 0) (param i32 i32) (result i32)
    local.get 0
    i32x4.splat
    local.get 1
    i32x4.splat
    v8x16.shuffle 1 0 3 2 5 4 7 6 9 8 11 10 13 12 15 14
    i32x4.extract_lane 0
    )
    (export "shuffle" (func 0))
)