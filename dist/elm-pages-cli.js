(function (scope) {
    "use strict";
    function F(arity, fun, wrapper) {
        wrapper.a = arity;
        wrapper.f = fun;
        return wrapper;
    }
    function F2(fun) {
        return F(2, fun, function (a) { return function (b) { return fun(a, b); }; });
    }
    function F3(fun) {
        return F(3, fun, function (a) {
            return function (b) { return function (c) { return fun(a, b, c); }; };
        });
    }
    function F4(fun) {
        return F(4, fun, function (a) {
            return function (b) {
                return function (c) {
                    return function (d) { return fun(a, b, c, d); };
                };
            };
        });
    }
    function F5(fun) {
        return F(5, fun, function (a) {
            return function (b) {
                return function (c) {
                    return function (d) { return function (e) { return fun(a, b, c, d, e); }; };
                };
            };
        });
    }
    function F6(fun) {
        return F(6, fun, function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return fun(a, b, c, d, e, f);
                            };
                        };
                    };
                };
            };
        });
    }
    function F7(fun) {
        return F(7, fun, function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) { return fun(a, b, c, d, e, f, g); };
                            };
                        };
                    };
                };
            };
        });
    }
    function F8(fun) {
        return F(8, fun, function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) {
                                    return function (h) {
                                        return fun(a, b, c, d, e, f, g, h);
                                    };
                                };
                            };
                        };
                    };
                };
            };
        });
    }
    function F9(fun) {
        return F(9, fun, function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) {
                                    return function (h) {
                                        return function (i) {
                                            return fun(a, b, c, d, e, f, g, h, i);
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        });
    }
    function A2(fun, a, b) {
        return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
    }
    function A3(fun, a, b, c) {
        return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
    }
    function A4(fun, a, b, c, d) {
        return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
    }
    function A5(fun, a, b, c, d, e) {
        return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
    }
    function A6(fun, a, b, c, d, e, f) {
        return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
    }
    function A7(fun, a, b, c, d, e, f, g) {
        return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
    }
    function A8(fun, a, b, c, d, e, f, g, h) {
        return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
    }
    function A9(fun, a, b, c, d, e, f, g, h, i) {
        return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
    }
    var _JsArray_empty = [];
    function _JsArray_singleton(value) {
        return [value];
    }
    function _JsArray_length(array) {
        return array.length;
    }
    var _JsArray_initialize_fn = function (size, offset, func) {
        var result = new Array(size);
        for (var i = 0; i < size; i++) {
            result[i] = func(offset + i);
        }
        return result;
    }, _JsArray_initialize = F3(_JsArray_initialize_fn);
    var _JsArray_initializeFromList_fn = function (max, ls) {
        var result = new Array(max);
        for (var i = 0; i < max && ls.b; i++) {
            result[i] = ls.a;
            ls = ls.b;
        }
        result.length = i;
        return _Utils_Tuple2(result, ls);
    }, _JsArray_initializeFromList = F2(_JsArray_initializeFromList_fn);
    var _JsArray_unsafeGet_fn = function (index, array) {
        return array[index];
    }, _JsArray_unsafeGet = F2(_JsArray_unsafeGet_fn);
    var _JsArray_unsafeSet_fn = function (index, value, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = array[i];
        }
        result[index] = value;
        return result;
    }, _JsArray_unsafeSet = F3(_JsArray_unsafeSet_fn);
    var _JsArray_push_fn = function (value, array) {
        var length = array.length;
        var result = new Array(length + 1);
        for (var i = 0; i < length; i++) {
            result[i] = array[i];
        }
        result[length] = value;
        return result;
    }, _JsArray_push = F2(_JsArray_push_fn);
    var _JsArray_foldl_fn = function (func, acc, array) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            acc = A2(func, array[i], acc);
        }
        return acc;
    }, _JsArray_foldl_fn_unwrapped = function (func, acc, array) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            acc = func(array[i], acc);
        }
        return acc;
    }, _JsArray_foldl = F3(_JsArray_foldl_fn);
    var _JsArray_foldr_fn = function (func, acc, array) {
        for (var i = array.length - 1; i >= 0; i--) {
            acc = A2(func, array[i], acc);
        }
        return acc;
    }, _JsArray_foldr_fn_unwrapped = function (func, acc, array) {
        for (var i = array.length - 1; i >= 0; i--) {
            acc = func(array[i], acc);
        }
        return acc;
    }, _JsArray_foldr = F3(_JsArray_foldr_fn);
    var _JsArray_map_fn = function (func, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = func(array[i]);
        }
        return result;
    }, _JsArray_map = F2(_JsArray_map_fn);
    var _JsArray_indexedMap_fn = function (func, offset, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = A2(func, offset + i, array[i]);
        }
        return result;
    }, _JsArray_indexedMap_fn_unwrapped = function (func, offset, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = func(offset + i, array[i]);
        }
        return result;
    }, _JsArray_indexedMap = F3(_JsArray_indexedMap_fn);
    var _JsArray_slice_fn = function (from, to, array) {
        return array.slice(from, to);
    }, _JsArray_slice = F3(_JsArray_slice_fn);
    var _JsArray_appendN_fn = function (n, dest, source) {
        var destLen = dest.length;
        var itemsToCopy = n - destLen;
        if (itemsToCopy > source.length) {
            itemsToCopy = source.length;
        }
        var size = destLen + itemsToCopy;
        var result = new Array(size);
        for (var i = 0; i < destLen; i++) {
            result[i] = dest[i];
        }
        for (var i = 0; i < itemsToCopy; i++) {
            result[i + destLen] = source[i];
        }
        return result;
    }, _JsArray_appendN = F3(_JsArray_appendN_fn);
    // LOG
    var _Debug_log_fn = function (tag, value) {
        return value;
    }, _Debug_log = F2(_Debug_log_fn);
    var _Debug_log_UNUSED_fn = function (tag, value) {
        console.log(tag + ": " + _Debug_toString(value));
        return value;
    }, _Debug_log_UNUSED = F2(_Debug_log_UNUSED_fn);
    // TODOS
    function _Debug_todo(moduleName, region) {
        return function (message) {
            _Debug_crash(8, moduleName, region, message);
        };
    }
    function _Debug_todoCase(moduleName, region, value) {
        return function (message) {
            _Debug_crash(9, moduleName, region, value, message);
        };
    }
    // TO STRING
    function _Debug_toString(value) {
        return "<internals>";
    }
    function _Debug_toString_UNUSED(value) {
        return _Debug_toAnsiString(false, value);
    }
    function _Debug_toAnsiString(ansi, value) {
        if (typeof value === "function") {
            return _Debug_internalColor(ansi, "<function>");
        }
        if (typeof value === "boolean") {
            return _Debug_ctorColor(ansi, value ? "True" : "False");
        }
        if (typeof value === "number") {
            return _Debug_numberColor(ansi, value + "");
        }
        if (value instanceof String) {
            return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
        }
        if (typeof value === "string") {
            return _Debug_stringColor(ansi, "\"" + _Debug_addSlashes(value, false) + "\"");
        }
        if (typeof value === "object" && "$" in value) {
            var tag = value.$;
            if (typeof tag === "number") {
                return _Debug_internalColor(ansi, "<internals>");
            }
            if (tag[0] === "#") {
                var output = [];
                for (var k in value) {
                    if (k === "$")
                        continue;
                    output.push(_Debug_toAnsiString(ansi, value[k]));
                }
                return "(" + output.join(",") + ")";
            }
            if (tag === "Set_elm_builtin") {
                return _Debug_ctorColor(ansi, "Set")
                    + _Debug_fadeColor(ansi, ".fromList") + " "
                    + _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
            }
            if (tag === "RBNode_elm_builtin" || tag === "RBEmpty_elm_builtin") {
                return _Debug_ctorColor(ansi, "Dict")
                    + _Debug_fadeColor(ansi, ".fromList") + " "
                    + _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
            }
            if (tag === "Array_elm_builtin") {
                return _Debug_ctorColor(ansi, "Array")
                    + _Debug_fadeColor(ansi, ".fromList") + " "
                    + _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
            }
            if (tag === "::" || tag === "[]") {
                var output = "[";
                value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b);
                for (; value.b; value = value.b) // WHILE_CONS
                 {
                    output += "," + _Debug_toAnsiString(ansi, value.a);
                }
                return output + "]";
            }
            var output = "";
            for (var i in value) {
                if (i === "$")
                    continue;
                var str = _Debug_toAnsiString(ansi, value[i]);
                var c0 = str[0];
                var parenless = c0 === "{" || c0 === "(" || c0 === "[" || c0 === "<" || c0 === "\"" || str.indexOf(" ") < 0;
                output += " " + (parenless ? str : "(" + str + ")");
            }
            return _Debug_ctorColor(ansi, tag) + output;
        }
        if (typeof DataView === "function" && value instanceof DataView) {
            return _Debug_stringColor(ansi, "<" + value.byteLength + " bytes>");
        }
        if (typeof File !== "undefined" && value instanceof File) {
            return _Debug_internalColor(ansi, "<" + value.name + ">");
        }
        if (typeof value === "object") {
            var output = [];
            for (var key in value) {
                var field = key[0] === "_" ? key.slice(1) : key;
                output.push(_Debug_fadeColor(ansi, field) + " = " + _Debug_toAnsiString(ansi, value[key]));
            }
            if (output.length === 0) {
                return "{}";
            }
            return "{ " + output.join(", ") + " }";
        }
        return _Debug_internalColor(ansi, "<internals>");
    }
    function _Debug_addSlashes(str, isChar) {
        var s = str
            .replace(/\\/g, "\\\\")
            .replace(/\n/g, "\\n")
            .replace(/\t/g, "\\t")
            .replace(/\r/g, "\\r")
            .replace(/\v/g, "\\v")
            .replace(/\0/g, "\\0");
        if (isChar) {
            return s.replace(/\'/g, "\\'");
        }
        else {
            return s.replace(/\"/g, "\\\"");
        }
    }
    function _Debug_ctorColor(ansi, string) {
        return ansi ? "\u001B[96m" + string + "\u001B[0m" : string;
    }
    function _Debug_numberColor(ansi, string) {
        return ansi ? "\u001B[95m" + string + "\u001B[0m" : string;
    }
    function _Debug_stringColor(ansi, string) {
        return ansi ? "\u001B[93m" + string + "\u001B[0m" : string;
    }
    function _Debug_charColor(ansi, string) {
        return ansi ? "\u001B[92m" + string + "\u001B[0m" : string;
    }
    function _Debug_fadeColor(ansi, string) {
        return ansi ? "\u001B[37m" + string + "\u001B[0m" : string;
    }
    function _Debug_internalColor(ansi, string) {
        return ansi ? "\u001B[36m" + string + "\u001B[0m" : string;
    }
    function _Debug_toHexDigit(n) {
        return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
    }
    // CRASH
    function _Debug_crash(identifier) {
        throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + identifier + ".md");
    }
    function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4) {
        switch (identifier) {
            case 0:
                throw new Error("What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById(\"elm-node\")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.");
            case 1:
                throw new Error("Browser.application programs cannot handle URLs like this:\n\n    " + document.location.href + "\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");
            case 2:
                var jsonErrorString = fact1;
                throw new Error("Problem with the flags given to your Elm program on initialization.\n\n" + jsonErrorString);
            case 3:
                var portName = fact1;
                throw new Error("There can only be one port named `" + portName + "`, but your program has multiple.");
            case 4:
                var portName = fact1;
                var problem = fact2;
                throw new Error("Trying to send an unexpected type of value through port `" + portName + "`:\n" + problem);
            case 5:
                throw new Error("Trying to use `(==)` on functions.\nThere is no way to know if functions are \"the same\" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.");
            case 6:
                var moduleName = fact1;
                throw new Error("Your page is loading multiple Elm scripts with a module named " + moduleName + ". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");
            case 8:
                var moduleName = fact1;
                var region = fact2;
                var message = fact3;
                throw new Error("TODO in module `" + moduleName + "` " + _Debug_regionToString(region) + "\n\n" + message);
            case 9:
                var moduleName = fact1;
                var region = fact2;
                var value = fact3;
                var message = fact4;
                throw new Error("TODO in module `" + moduleName + "` from the `case` expression "
                    + _Debug_regionToString(region) + "\n\nIt received the following value:\n\n    "
                    + _Debug_toString(value).replace("\n", "\n    ")
                    + "\n\nBut the branch that handles it says:\n\n    " + message.replace("\n", "\n    "));
            case 10:
                throw new Error("Bug in https://github.com/elm/virtual-dom/issues");
            case 11:
                throw new Error("Cannot perform mod 0. Division by zero error.");
        }
    }
    function _Debug_regionToString(region) {
        if (region.j.dO === region.h.dO) {
            return "on line " + region.j.dO;
        }
        return "on lines " + region.j.dO + " through " + region.h.dO;
    }
    // EQUALITY
    function _Utils_eq(x, y) {
        for (var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)) { }
        return isEqual;
    }
    function _Utils_eqHelp(x, y, depth, stack) {
        if (x === y) {
            return true;
        }
        if (typeof x !== "object" || x === null || y === null) {
            typeof x === "function" && _Debug_crash(5);
            return false;
        }
        if (depth > 100) {
            stack.push(_Utils_Tuple2(x, y));
            return true;
        }
        /**_UNUSED/
        if (x.$ === 'Set_elm_builtin')
        {
            x = $elm$core$Set$toList(x);
            y = $elm$core$Set$toList(y);
        }
        if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
        {
            x = $elm$core$Dict$toList(x);
            y = $elm$core$Dict$toList(y);
        }
        //*/
        /**/
        if (x.$ < 0) {
            x = $elm$core$Dict$toList(x);
            y = $elm$core$Dict$toList(y);
        }
        //*/
        for (var key in x) {
            if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack)) {
                return false;
            }
        }
        return true;
    }
    var _Utils_equal = F2(_Utils_eq);
    var _Utils_notEqual_fn = function (a, b) { return !_Utils_eq(a, b); }, _Utils_notEqual = F2(_Utils_notEqual_fn);
    // COMPARISONS
    // Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
    // the particular integer values assigned to LT, EQ, and GT.
    function _Utils_cmp(x, y, ord) {
        if (typeof x !== "object") {
            return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
        }
        /**_UNUSED/
        if (x instanceof String)
        {
            var a = x.valueOf();
            var b = y.valueOf();
            return a === b ? 0 : a < b ? -1 : 1;
        }
        //*/
        /**/
        if (typeof x.$ === "undefined") 
        //*/
        /**_UNUSED/
        if (x.$[0] === '#')
        //*/
        {
            return (ord = _Utils_cmp(x.a, y.a))
                ? ord
                : (ord = _Utils_cmp(x.b, y.b))
                    ? ord
                    : _Utils_cmp(x.c, y.c);
        }
        // traverse conses until end of a list or a mismatch
        for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) { } // WHILE_CONSES
        return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
    }
    var _Utils_lt_fn = function (a, b) { return _Utils_cmp(a, b) < 0; }, _Utils_lt = F2(_Utils_lt_fn);
    var _Utils_le_fn = function (a, b) { return _Utils_cmp(a, b) < 1; }, _Utils_le = F2(_Utils_le_fn);
    var _Utils_gt_fn = function (a, b) { return _Utils_cmp(a, b) > 0; }, _Utils_gt = F2(_Utils_gt_fn);
    var _Utils_ge_fn = function (a, b) { return _Utils_cmp(a, b) >= 0; }, _Utils_ge = F2(_Utils_ge_fn);
    var _Utils_compare_fn = function (x, y) {
        var n = _Utils_cmp(x, y);
        return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
    }, _Utils_compare = F2(_Utils_compare_fn);
    // COMMON VALUES
    var _Utils_Tuple0 = 0;
    var _Utils_Tuple0_UNUSED = { $: "#0" };
    function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
    function _Utils_Tuple2_UNUSED(a, b) { return { $: "#2", a: a, b: b }; }
    function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
    function _Utils_Tuple3_UNUSED(a, b, c) { return { $: "#3", a: a, b: b, c: c }; }
    function _Utils_chr(c) { return c; }
    function _Utils_chr_UNUSED(c) { return new String(c); }
    // RECORDS
    function _Utils_update(oldRecord, updatedFields) {
        var newRecord = {};
        for (var key in oldRecord) {
            newRecord[key] = oldRecord[key];
        }
        for (var key in updatedFields) {
            newRecord[key] = updatedFields[key];
        }
        return newRecord;
    }
    // APPEND
    var _Utils_append = F2(_Utils_ap);
    function _Utils_ap(xs, ys) {
        // append Strings
        if (typeof xs === "string") {
            return xs + ys;
        }
        // append Lists
        if (!xs.b) {
            return ys;
        }
        var root = _List_Cons(xs.a, ys);
        xs = xs.b;
        for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
         {
            curr = curr.b = _List_Cons(xs.a, ys);
        }
        return root;
    }
    var _List_Nil = { $: 0, a: null, b: null };
    var _List_Nil_UNUSED = { $: "[]" };
    function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
    function _List_Cons_UNUSED(hd, tl) { return { $: "::", a: hd, b: tl }; }
    var _List_cons = F2(_List_Cons);
    function _List_fromArray(arr) {
        var out = _List_Nil;
        for (var i = arr.length; i--;) {
            out = _List_Cons(arr[i], out);
        }
        return out;
    }
    function _List_toArray(xs) {
        for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
         {
            out.push(xs.a);
        }
        return out;
    }
    var _List_map2_fn = function (f, xs, ys) {
        for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
         {
            arr.push(A2(f, xs.a, ys.a));
        }
        return _List_fromArray(arr);
    }, _List_map2_fn_unwrapped = function (f, xs, ys) {
        for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
         {
            arr.push(f(xs.a, ys.a));
        }
        return _List_fromArray(arr);
    }, _List_map2 = F3(_List_map2_fn);
    var _List_map3_fn = function (f, xs, ys, zs) {
        for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
         {
            arr.push(A3(f, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map3_fn_unwrapped = function (f, xs, ys, zs) {
        for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
         {
            arr.push(f(xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map3 = F4(_List_map3_fn);
    var _List_map4_fn = function (f, ws, xs, ys, zs) {
        for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
         {
            arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map4_fn_unwrapped = function (f, ws, xs, ys, zs) {
        for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
         {
            arr.push(f(ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map4 = F5(_List_map4_fn);
    var _List_map5_fn = function (f, vs, ws, xs, ys, zs) {
        for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
         {
            arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map5_fn_unwrapped = function (f, vs, ws, xs, ys, zs) {
        for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
         {
            arr.push(f(vs.a, ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map5 = F6(_List_map5_fn);
    var _List_sortBy_fn = function (f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function (a, b) {
            return _Utils_cmp(f(a), f(b));
        }));
    }, _List_sortBy = F2(_List_sortBy_fn);
    var _List_sortWith_fn = function (f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function (a, b) {
            var ord = A2(f, a, b);
            return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
        }));
    }, _List_sortWith_fn_unwrapped = function (f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function (a, b) {
            var ord = f(a, b);
            return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
        }));
    }, _List_sortWith = F2(_List_sortWith_fn);
    // MATH
    var _Basics_add_fn = function (a, b) { return a + b; }, _Basics_add = F2(_Basics_add_fn);
    var _Basics_sub_fn = function (a, b) { return a - b; }, _Basics_sub = F2(_Basics_sub_fn);
    var _Basics_mul_fn = function (a, b) { return a * b; }, _Basics_mul = F2(_Basics_mul_fn);
    var _Basics_fdiv_fn = function (a, b) { return a / b; }, _Basics_fdiv = F2(_Basics_fdiv_fn);
    var _Basics_idiv_fn = function (a, b) { return (a / b) | 0; }, _Basics_idiv = F2(_Basics_idiv_fn);
    var _Basics_pow_fn = Math.pow, _Basics_pow = F2(_Basics_pow_fn);
    var _Basics_remainderBy_fn = function (b, a) { return a % b; }, _Basics_remainderBy = F2(_Basics_remainderBy_fn);
    // https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
    var _Basics_modBy_fn = function (modulus, x) {
        var answer = x % modulus;
        return modulus === 0
            ? _Debug_crash(11)
            :
                ((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
                    ? answer + modulus
                    : answer;
    }, _Basics_modBy = F2(_Basics_modBy_fn);
    // TRIGONOMETRY
    var _Basics_pi = Math.PI;
    var _Basics_e = Math.E;
    var _Basics_cos = Math.cos;
    var _Basics_sin = Math.sin;
    var _Basics_tan = Math.tan;
    var _Basics_acos = Math.acos;
    var _Basics_asin = Math.asin;
    var _Basics_atan = Math.atan;
    var _Basics_atan2_fn = Math.atan2, _Basics_atan2 = F2(_Basics_atan2_fn);
    // MORE MATH
    function _Basics_toFloat(x) { return x; }
    function _Basics_truncate(n) { return n | 0; }
    function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }
    var _Basics_ceiling = Math.ceil;
    var _Basics_floor = Math.floor;
    var _Basics_round = Math.round;
    var _Basics_sqrt = Math.sqrt;
    var _Basics_log = Math.log;
    var _Basics_isNaN = isNaN;
    // BOOLEANS
    function _Basics_not(bool) { return !bool; }
    var _Basics_and_fn = function (a, b) { return a && b; }, _Basics_and = F2(_Basics_and_fn);
    var _Basics_or_fn = function (a, b) { return a || b; }, _Basics_or = F2(_Basics_or_fn);
    var _Basics_xor_fn = function (a, b) { return a !== b; }, _Basics_xor = F2(_Basics_xor_fn);
    var _String_cons_fn = function (chr, str) {
        return chr + str;
    }, _String_cons = F2(_String_cons_fn);
    function _String_uncons(string) {
        var word = string.charCodeAt(0);
        return !isNaN(word)
            ? $elm$core$Maybe$Just(55296 <= word && word <= 56319
                ? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
                : _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1)))
            : $elm$core$Maybe$Nothing;
    }
    var _String_append_fn = function (a, b) {
        return a + b;
    }, _String_append = F2(_String_append_fn);
    function _String_length(str) {
        return str.length;
    }
    var _String_map_fn = function (func, string) {
        var len = string.length;
        var array = new Array(len);
        var i = 0;
        while (i < len) {
            var word = string.charCodeAt(i);
            if (55296 <= word && word <= 56319) {
                array[i] = func(_Utils_chr(string[i] + string[i + 1]));
                i += 2;
                continue;
            }
            array[i] = func(_Utils_chr(string[i]));
            i++;
        }
        return array.join("");
    }, _String_map = F2(_String_map_fn);
    var _String_filter_fn = function (isGood, str) {
        var arr = [];
        var len = str.length;
        var i = 0;
        while (i < len) {
            var char = str[i];
            var word = str.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
                char += str[i];
                i++;
            }
            if (isGood(_Utils_chr(char))) {
                arr.push(char);
            }
        }
        return arr.join("");
    }, _String_filter = F2(_String_filter_fn);
    function _String_reverse(str) {
        var len = str.length;
        var arr = new Array(len);
        var i = 0;
        while (i < len) {
            var word = str.charCodeAt(i);
            if (55296 <= word && word <= 56319) {
                arr[len - i] = str[i + 1];
                i++;
                arr[len - i] = str[i - 1];
                i++;
            }
            else {
                arr[len - i] = str[i];
                i++;
            }
        }
        return arr.join("");
    }
    var _String_foldl_fn = function (func, state, string) {
        var len = string.length;
        var i = 0;
        while (i < len) {
            var char = string[i];
            var word = string.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
                char += string[i];
                i++;
            }
            state = A2(func, _Utils_chr(char), state);
        }
        return state;
    }, _String_foldl_fn_unwrapped = function (func, state, string) {
        var len = string.length;
        var i = 0;
        while (i < len) {
            var char = string[i];
            var word = string.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
                char += string[i];
                i++;
            }
            state = func(_Utils_chr(char), state);
        }
        return state;
    }, _String_foldl = F3(_String_foldl_fn);
    var _String_foldr_fn = function (func, state, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            state = A2(func, _Utils_chr(char), state);
        }
        return state;
    }, _String_foldr_fn_unwrapped = function (func, state, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            state = func(_Utils_chr(char), state);
        }
        return state;
    }, _String_foldr = F3(_String_foldr_fn);
    var _String_split_fn = function (sep, str) {
        return str.split(sep);
    }, _String_split = F2(_String_split_fn);
    var _String_join_fn = function (sep, strs) {
        return strs.join(sep);
    }, _String_join = F2(_String_join_fn);
    var _String_slice_fn = function (start, end, str) {
        return str.slice(start, end);
    }, _String_slice = F3(_String_slice_fn);
    function _String_trim(str) {
        return str.trim();
    }
    function _String_trimLeft(str) {
        return str.replace(/^\s+/, "");
    }
    function _String_trimRight(str) {
        return str.replace(/\s+$/, "");
    }
    function _String_words(str) {
        return _List_fromArray(str.trim().split(/\s+/g));
    }
    function _String_lines(str) {
        return _List_fromArray(str.split(/\r\n|\r|\n/g));
    }
    function _String_toUpper(str) {
        return str.toUpperCase();
    }
    function _String_toLower(str) {
        return str.toLowerCase();
    }
    var _String_any_fn = function (isGood, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            if (isGood(_Utils_chr(char))) {
                return true;
            }
        }
        return false;
    }, _String_any = F2(_String_any_fn);
    var _String_all_fn = function (isGood, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            if (!isGood(_Utils_chr(char))) {
                return false;
            }
        }
        return true;
    }, _String_all = F2(_String_all_fn);
    var _String_contains_fn = function (sub, str) {
        return str.indexOf(sub) > -1;
    }, _String_contains = F2(_String_contains_fn);
    var _String_startsWith_fn = function (sub, str) {
        return str.indexOf(sub) === 0;
    }, _String_startsWith = F2(_String_startsWith_fn);
    var _String_endsWith_fn = function (sub, str) {
        return str.length >= sub.length &&
            str.lastIndexOf(sub) === str.length - sub.length;
    }, _String_endsWith = F2(_String_endsWith_fn);
    var _String_indexes_fn = function (sub, str) {
        var subLen = sub.length;
        if (subLen < 1) {
            return _List_Nil;
        }
        var i = 0;
        var is = [];
        while ((i = str.indexOf(sub, i)) > -1) {
            is.push(i);
            i = i + subLen;
        }
        return _List_fromArray(is);
    }, _String_indexes = F2(_String_indexes_fn);
    // TO STRING
    function _String_fromNumber(number) {
        return number + "";
    }
    // INT CONVERSIONS
    function _String_toInt(str) {
        var total = 0;
        var code0 = str.charCodeAt(0);
        var start = code0 == 43 /* + */ || code0 == 45 /* - */ ? 1 : 0;
        for (var i = start; i < str.length; ++i) {
            var code = str.charCodeAt(i);
            if (code < 48 || 57 < code) {
                return $elm$core$Maybe$Nothing;
            }
            total = 10 * total + code - 48;
        }
        return i == start
            ? $elm$core$Maybe$Nothing
            : $elm$core$Maybe$Just(code0 == 45 ? -total : total);
    }
    // FLOAT CONVERSIONS
    function _String_toFloat(s) {
        // check if it is a hex, octal, or binary number
        if (s.length === 0 || /[\sxbo]/.test(s)) {
            return $elm$core$Maybe$Nothing;
        }
        var n = +s;
        // faster isNaN check
        return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
    }
    function _String_fromList(chars) {
        return _List_toArray(chars).join("");
    }
    function _Char_toCode(char) {
        var code = char.charCodeAt(0);
        if (55296 <= code && code <= 56319) {
            return (code - 55296) * 1024 + char.charCodeAt(1) - 56320 + 65536;
        }
        return code;
    }
    function _Char_fromCode(code) {
        return _Utils_chr((code < 0 || 1114111 < code)
            ? "\uFFFD"
            :
                (code <= 65535)
                    ? String.fromCharCode(code)
                    :
                        (code -= 65536,
                            String.fromCharCode(Math.floor(code / 1024) + 55296, code % 1024 + 56320)));
    }
    function _Char_toUpper(char) {
        return _Utils_chr(char.toUpperCase());
    }
    function _Char_toLower(char) {
        return _Utils_chr(char.toLowerCase());
    }
    function _Char_toLocaleUpper(char) {
        return _Utils_chr(char.toLocaleUpperCase());
    }
    function _Char_toLocaleLower(char) {
        return _Utils_chr(char.toLocaleLowerCase());
    }
    /**_UNUSED/
    function _Json_errorToString(error)
    {
        return $elm$json$Json$Decode$errorToString(error);
    }
    //*/
    // CORE DECODERS
    function _Json_succeed(msg) {
        return {
            $: 0,
            a: msg
        };
    }
    function _Json_fail(msg) {
        return {
            $: 1,
            a: msg
        };
    }
    function _Json_decodePrim(decoder) {
        return { $: 2, b: decoder };
    }
    var _Json_decodeInt = _Json_decodePrim(function (value) {
        return (typeof value !== "number")
            ? _Json_expecting("an INT", value)
            :
                (-2147483647 < value && value < 2147483647 && (value | 0) === value)
                    ? $elm$core$Result$Ok(value)
                    :
                        (isFinite(value) && !(value % 1))
                            ? $elm$core$Result$Ok(value)
                            : _Json_expecting("an INT", value);
    });
    var _Json_decodeBool = _Json_decodePrim(function (value) {
        return (typeof value === "boolean")
            ? $elm$core$Result$Ok(value)
            : _Json_expecting("a BOOL", value);
    });
    var _Json_decodeFloat = _Json_decodePrim(function (value) {
        return (typeof value === "number")
            ? $elm$core$Result$Ok(value)
            : _Json_expecting("a FLOAT", value);
    });
    var _Json_decodeValue = _Json_decodePrim(function (value) {
        return $elm$core$Result$Ok(_Json_wrap(value));
    });
    var _Json_decodeString = _Json_decodePrim(function (value) {
        return (typeof value === "string")
            ? $elm$core$Result$Ok(value)
            : (value instanceof String)
                ? $elm$core$Result$Ok(value + "")
                : _Json_expecting("a STRING", value);
    });
    function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
    function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }
    function _Json_decodeNull(value) { return { $: 5, c: value }; }
    var _Json_decodeField_fn = function (field, decoder) {
        return {
            $: 6,
            d: field,
            b: decoder
        };
    }, _Json_decodeField = F2(_Json_decodeField_fn);
    var _Json_decodeIndex_fn = function (index, decoder) {
        return {
            $: 7,
            e: index,
            b: decoder
        };
    }, _Json_decodeIndex = F2(_Json_decodeIndex_fn);
    function _Json_decodeKeyValuePairs(decoder) {
        return {
            $: 8,
            b: decoder
        };
    }
    function _Json_mapMany(f, decoders) {
        return {
            $: 9,
            f: f,
            g: decoders
        };
    }
    var _Json_andThen_fn = function (callback, decoder) {
        return {
            $: 10,
            b: decoder,
            h: callback
        };
    }, _Json_andThen = F2(_Json_andThen_fn);
    function _Json_oneOf(decoders) {
        return {
            $: 11,
            g: decoders
        };
    }
    // DECODING OBJECTS
    var _Json_map1_fn = function (f, d1) {
        return _Json_mapMany(f, [d1]);
    }, _Json_map1 = F2(_Json_map1_fn);
    var _Json_map2_fn = function (f, d1, d2) {
        return _Json_mapMany(f, [d1, d2]);
    }, _Json_map2 = F3(_Json_map2_fn);
    var _Json_map3_fn = function (f, d1, d2, d3) {
        return _Json_mapMany(f, [d1, d2, d3]);
    }, _Json_map3 = F4(_Json_map3_fn);
    var _Json_map4_fn = function (f, d1, d2, d3, d4) {
        return _Json_mapMany(f, [d1, d2, d3, d4]);
    }, _Json_map4 = F5(_Json_map4_fn);
    var _Json_map5_fn = function (f, d1, d2, d3, d4, d5) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
    }, _Json_map5 = F6(_Json_map5_fn);
    var _Json_map6_fn = function (f, d1, d2, d3, d4, d5, d6) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
    }, _Json_map6 = F7(_Json_map6_fn);
    var _Json_map7_fn = function (f, d1, d2, d3, d4, d5, d6, d7) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
    }, _Json_map7 = F8(_Json_map7_fn);
    var _Json_map8_fn = function (f, d1, d2, d3, d4, d5, d6, d7, d8) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
    }, _Json_map8 = F9(_Json_map8_fn);
    // DECODE
    var _Json_runOnString_fn = function (decoder, string) {
        try {
            var value = JSON.parse(string);
            return _Json_runHelp(decoder, value);
        }
        catch (e) {
            return $elm$core$Result$Err($elm$json$Json$Decode$Failure_fn("This is not valid JSON! " + e.message, _Json_wrap(string)));
        }
    }, _Json_runOnString = F2(_Json_runOnString_fn);
    var _Json_run_fn = function (decoder, value) {
        return _Json_runHelp(decoder, _Json_unwrap(value));
    }, _Json_run = F2(_Json_run_fn);
    function _Json_runHelp(decoder, value) {
        switch (decoder.$) {
            case 2:
                return decoder.b(value);
            case 5:
                return (value === null)
                    ? $elm$core$Result$Ok(decoder.c)
                    : _Json_expecting("null", value);
            case 3:
                if (!_Json_isArray(value)) {
                    return _Json_expecting("a LIST", value);
                }
                return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);
            case 4:
                if (!_Json_isArray(value)) {
                    return _Json_expecting("an ARRAY", value);
                }
                return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);
            case 6:
                var field = decoder.d;
                if (typeof value !== "object" || value === null || !(field in value)) {
                    return _Json_expecting("an OBJECT with a field named `" + field + "`", value);
                }
                var result = _Json_runHelp(decoder.b, value[field]);
                return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err($elm$json$Json$Decode$Field_fn(field, result.a));
            case 7:
                var index = decoder.e;
                if (!_Json_isArray(value)) {
                    return _Json_expecting("an ARRAY", value);
                }
                if (index >= value.length) {
                    return _Json_expecting("a LONGER array. Need index " + index + " but only see " + value.length + " entries", value);
                }
                var result = _Json_runHelp(decoder.b, value[index]);
                return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err($elm$json$Json$Decode$Index_fn(index, result.a));
            case 8:
                if (typeof value !== "object" || value === null || _Json_isArray(value)) {
                    return _Json_expecting("an OBJECT", value);
                }
                var keyValuePairs = _List_Nil;
                // TODO test perf of Object.keys and switch when support is good enough
                for (var key in value) {
                    if (value.hasOwnProperty(key)) {
                        var result = _Json_runHelp(decoder.b, value[key]);
                        if (!$elm$core$Result$isOk(result)) {
                            return $elm$core$Result$Err($elm$json$Json$Decode$Field_fn(key, result.a));
                        }
                        keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
                    }
                }
                return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));
            case 9:
                var answer = decoder.f;
                var decoders = decoder.g;
                for (var i = 0; i < decoders.length; i++) {
                    var result = _Json_runHelp(decoders[i], value);
                    if (!$elm$core$Result$isOk(result)) {
                        return result;
                    }
                    answer = answer(result.a);
                }
                return $elm$core$Result$Ok(answer);
            case 10:
                var result = _Json_runHelp(decoder.b, value);
                return (!$elm$core$Result$isOk(result))
                    ? result
                    : _Json_runHelp(decoder.h(result.a), value);
            case 11:
                var errors = _List_Nil;
                for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
                 {
                    var result = _Json_runHelp(temp.a, value);
                    if ($elm$core$Result$isOk(result)) {
                        return result;
                    }
                    errors = _List_Cons(result.a, errors);
                }
                return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));
            case 1:
                return $elm$core$Result$Err($elm$json$Json$Decode$Failure_fn(decoder.a, _Json_wrap(value)));
            case 0:
                return $elm$core$Result$Ok(decoder.a);
        }
    }
    function _Json_runArrayDecoder(decoder, value, toElmValue) {
        var len = value.length;
        var array = new Array(len);
        for (var i = 0; i < len; i++) {
            var result = _Json_runHelp(decoder, value[i]);
            if (!$elm$core$Result$isOk(result)) {
                return $elm$core$Result$Err($elm$json$Json$Decode$Index_fn(i, result.a));
            }
            array[i] = result.a;
        }
        return $elm$core$Result$Ok(toElmValue(array));
    }
    function _Json_isArray(value) {
        return Array.isArray(value) || (typeof FileList !== "undefined" && value instanceof FileList);
    }
    function _Json_toElmArray(array) {
        return $elm$core$Array$initialize_fn(array.length, function (i) { return array[i]; });
    }
    function _Json_expecting(type, value) {
        return $elm$core$Result$Err($elm$json$Json$Decode$Failure_fn("Expecting " + type, _Json_wrap(value)));
    }
    // EQUALITY
    function _Json_equality(x, y) {
        if (x === y) {
            return true;
        }
        if (x.$ !== y.$) {
            return false;
        }
        switch (x.$) {
            case 0:
            case 1:
                return x.a === y.a;
            case 2:
                return x.b === y.b;
            case 5:
                return x.c === y.c;
            case 3:
            case 4:
            case 8:
                return _Json_equality(x.b, y.b);
            case 6:
                return x.d === y.d && _Json_equality(x.b, y.b);
            case 7:
                return x.e === y.e && _Json_equality(x.b, y.b);
            case 9:
                return x.f === y.f && _Json_listEquality(x.g, y.g);
            case 10:
                return x.h === y.h && _Json_equality(x.b, y.b);
            case 11:
                return _Json_listEquality(x.g, y.g);
        }
    }
    function _Json_listEquality(aDecoders, bDecoders) {
        var len = aDecoders.length;
        if (len !== bDecoders.length) {
            return false;
        }
        for (var i = 0; i < len; i++) {
            if (!_Json_equality(aDecoders[i], bDecoders[i])) {
                return false;
            }
        }
        return true;
    }
    // ENCODE
    var _Json_encode_fn = function (indentLevel, value) {
        return JSON.stringify(_Json_unwrap(value), null, indentLevel) + "";
    }, _Json_encode = F2(_Json_encode_fn);
    function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
    function _Json_unwrap_UNUSED(value) { return value.a; }
    function _Json_wrap(value) { return value; }
    function _Json_unwrap(value) { return value; }
    function _Json_emptyArray() { return []; }
    function _Json_emptyObject() { return {}; }
    var _Json_addField_fn = function (key, value, object) {
        object[key] = _Json_unwrap(value);
        return object;
    }, _Json_addField = F3(_Json_addField_fn);
    function _Json_addEntry(func) {
        return F2(function (entry, array) {
            array.push(_Json_unwrap(func(entry)));
            return array;
        });
    }
    var _Json_encodeNull = _Json_wrap(null);
    // TASKS
    function _Scheduler_succeed(value) {
        return {
            $: 0,
            a: value
        };
    }
    function _Scheduler_fail(error) {
        return {
            $: 1,
            a: error
        };
    }
    function _Scheduler_binding(callback) {
        return {
            $: 2,
            b: callback,
            c: null
        };
    }
    var _Scheduler_andThen_fn = function (callback, task) {
        return {
            $: 3,
            b: callback,
            d: task
        };
    }, _Scheduler_andThen = F2(_Scheduler_andThen_fn);
    var _Scheduler_onError_fn = function (callback, task) {
        return {
            $: 4,
            b: callback,
            d: task
        };
    }, _Scheduler_onError = F2(_Scheduler_onError_fn);
    function _Scheduler_receive(callback) {
        return {
            $: 5,
            b: callback
        };
    }
    // PROCESSES
    var _Scheduler_guid = 0;
    function _Scheduler_rawSpawn(task) {
        var proc = {
            $: 0,
            e: _Scheduler_guid++,
            f: task,
            g: null,
            h: []
        };
        _Scheduler_enqueue(proc);
        return proc;
    }
    function _Scheduler_spawn(task) {
        return _Scheduler_binding(function (callback) {
            callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
        });
    }
    function _Scheduler_rawSend(proc, msg) {
        proc.h.push(msg);
        _Scheduler_enqueue(proc);
    }
    var _Scheduler_send_fn = function (proc, msg) {
        return _Scheduler_binding(function (callback) {
            _Scheduler_rawSend(proc, msg);
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }, _Scheduler_send = F2(_Scheduler_send_fn);
    function _Scheduler_kill(proc) {
        return _Scheduler_binding(function (callback) {
            var task = proc.f;
            if (task.$ === 2 && task.c) {
                task.c();
            }
            proc.f = null;
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }
    /* STEP PROCESSES
    
    type alias Process =
      { $ : tag
      , id : unique_id
      , root : Task
      , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
      , mailbox : [msg]
      }
    
    */
    var _Scheduler_working = false;
    var _Scheduler_queue = [];
    function _Scheduler_enqueue(proc) {
        _Scheduler_queue.push(proc);
        if (_Scheduler_working) {
            return;
        }
        _Scheduler_working = true;
        while (proc = _Scheduler_queue.shift()) {
            _Scheduler_step(proc);
        }
        _Scheduler_working = false;
    }
    function _Scheduler_step(proc) {
        while (proc.f) {
            var rootTag = proc.f.$;
            if (rootTag === 0 || rootTag === 1) {
                while (proc.g && proc.g.$ !== rootTag) {
                    proc.g = proc.g.i;
                }
                if (!proc.g) {
                    return;
                }
                proc.f = proc.g.b(proc.f.a);
                proc.g = proc.g.i;
            }
            else if (rootTag === 2) {
                proc.f.c = proc.f.b(function (newRoot) {
                    proc.f = newRoot;
                    _Scheduler_enqueue(proc);
                });
                return;
            }
            else if (rootTag === 5) {
                if (proc.h.length === 0) {
                    return;
                }
                proc.f = proc.f.b(proc.h.shift());
            }
            else // if (rootTag === 3 || rootTag === 4)
             {
                proc.g = {
                    $: rootTag === 3 ? 0 : 1,
                    b: proc.f.b,
                    i: proc.g
                };
                proc.f = proc.f.d;
            }
        }
    }
    function _Process_sleep(time) {
        return _Scheduler_binding(function (callback) {
            var id = setTimeout(function () {
                callback(_Scheduler_succeed(_Utils_Tuple0));
            }, time);
            return function () { clearTimeout(id); };
        });
    }
    // PROGRAMS
    var _Platform_worker_fn = function (impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.ez, impl.cj, impl.eT, function () { return function () { }; });
    }, _Platform_worker = F4(_Platform_worker_fn);
    // INITIALIZE A PROGRAM
    function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder) {
        var result = _Json_run_fn(flagDecoder, _Json_wrap(args ? args["flags"] : undefined));
        $elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
        var managers = {};
        var initPair = init(result.a);
        var model = initPair.a;
        var stepper = stepperBuilder(sendToApp, model);
        var ports = _Platform_setupEffects(managers, sendToApp);
        function sendToApp(msg, viewMetadata) {
            var pair = A2(update, msg, model);
            stepper(model = pair.a, viewMetadata);
            _Platform_enqueueEffects(managers, pair.b, subscriptions(model));
        }
        _Platform_enqueueEffects(managers, initPair.b, subscriptions(model));
        return ports ? { ports: ports } : {};
    }
    // TRACK PRELOADS
    //
    // This is used by code in elm/browser and elm/http
    // to register any HTTP requests that are triggered by init.
    //
    var _Platform_preload;
    function _Platform_registerPreload(url) {
        _Platform_preload.add(url);
    }
    // EFFECT MANAGERS
    var _Platform_effectManagers = {};
    function _Platform_setupEffects(managers, sendToApp) {
        var ports;
        // setup all necessary effect managers
        for (var key in _Platform_effectManagers) {
            var manager = _Platform_effectManagers[key];
            if (manager.a) {
                ports = ports || {};
                ports[key] = manager.a(key, sendToApp);
            }
            managers[key] = _Platform_instantiateManager(manager, sendToApp);
        }
        return ports;
    }
    function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap) {
        return {
            b: init,
            c: onEffects,
            d: onSelfMsg,
            e: cmdMap,
            f: subMap
        };
    }
    function _Platform_instantiateManager(info, sendToApp) {
        var router = {
            g: sendToApp,
            h: undefined
        };
        var onEffects = info.c;
        var onSelfMsg = info.d;
        var cmdMap = info.e;
        var subMap = info.f;
        function loop(state) {
            return _Scheduler_andThen_fn(loop, _Scheduler_receive(function (msg) {
                var value = msg.a;
                if (msg.$ === 0) {
                    return A3(onSelfMsg, router, value, state);
                }
                return cmdMap && subMap
                    ? A4(onEffects, router, value.i, value.j, state)
                    : A3(onEffects, router, cmdMap ? value.i : value.j, state);
            }));
        }
        return router.h = _Scheduler_rawSpawn(_Scheduler_andThen_fn(loop, info.b));
    }
    // ROUTING
    var _Platform_sendToApp_fn = function (router, msg) {
        return _Scheduler_binding(function (callback) {
            router.g(msg);
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }, _Platform_sendToApp = F2(_Platform_sendToApp_fn);
    var _Platform_sendToSelf_fn = function (router, msg) {
        return _Scheduler_send_fn(router.h, {
            $: 0,
            a: msg
        });
    }, _Platform_sendToSelf = F2(_Platform_sendToSelf_fn);
    // BAGS
    function _Platform_leaf(home) {
        return function (value) {
            return {
                $: 1,
                k: home,
                l: value
            };
        };
    }
    function _Platform_batch(list) {
        return {
            $: 2,
            m: list
        };
    }
    var _Platform_map_fn = function (tagger, bag) {
        return {
            $: 3,
            n: tagger,
            o: bag
        };
    }, _Platform_map = F2(_Platform_map_fn);
    // PIPE BAGS INTO EFFECT MANAGERS
    //
    // Effects must be queued!
    //
    // Say your init contains a synchronous command, like Time.now or Time.here
    //
    //   - This will produce a batch of effects (FX_1)
    //   - The synchronous task triggers the subsequent `update` call
    //   - This will produce a batch of effects (FX_2)
    //
    // If we just start dispatching FX_2, subscriptions from FX_2 can be processed
    // before subscriptions from FX_1. No good! Earlier versions of this code had
    // this problem, leading to these reports:
    //
    //   https://github.com/elm/core/issues/980
    //   https://github.com/elm/core/pull/981
    //   https://github.com/elm/compiler/issues/1776
    //
    // The queue is necessary to avoid ordering issues for synchronous commands.
    // Why use true/false here? Why not just check the length of the queue?
    // The goal is to detect "are we currently dispatching effects?" If we
    // are, we need to bail and let the ongoing while loop handle things.
    //
    // Now say the queue has 1 element. When we dequeue the final element,
    // the queue will be empty, but we are still actively dispatching effects.
    // So you could get queue jumping in a really tricky category of cases.
    //
    var _Platform_effectsQueue = [];
    var _Platform_effectsActive = false;
    function _Platform_enqueueEffects(managers, cmdBag, subBag) {
        _Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });
        if (_Platform_effectsActive)
            return;
        _Platform_effectsActive = true;
        for (var fx; fx = _Platform_effectsQueue.shift();) {
            _Platform_dispatchEffects(fx.p, fx.q, fx.r);
        }
        _Platform_effectsActive = false;
    }
    function _Platform_dispatchEffects(managers, cmdBag, subBag) {
        var effectsDict = {};
        _Platform_gatherEffects(true, cmdBag, effectsDict, null);
        _Platform_gatherEffects(false, subBag, effectsDict, null);
        for (var home in managers) {
            _Scheduler_rawSend(managers[home], {
                $: "fx",
                a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
            });
        }
    }
    function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers) {
        switch (bag.$) {
            case 1:
                var home = bag.k;
                var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
                effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
                return;
            case 2:
                for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
                 {
                    _Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
                }
                return;
            case 3:
                _Platform_gatherEffects(isCmd, bag.o, effectsDict, {
                    s: bag.n,
                    t: taggers
                });
                return;
        }
    }
    function _Platform_toEffect(isCmd, home, taggers, value) {
        function applyTaggers(x) {
            for (var temp = taggers; temp; temp = temp.t) {
                x = temp.s(x);
            }
            return x;
        }
        var map = isCmd
            ? _Platform_effectManagers[home].e
            : _Platform_effectManagers[home].f;
        return A2(map, applyTaggers, value);
    }
    function _Platform_insert(isCmd, newEffect, effects) {
        effects = effects || { i: _List_Nil, j: _List_Nil };
        isCmd
            ? (effects.i = _List_Cons(newEffect, effects.i))
            : (effects.j = _List_Cons(newEffect, effects.j));
        return effects;
    }
    // PORTS
    function _Platform_checkPortName(name) {
        if (_Platform_effectManagers[name]) {
            _Debug_crash(3, name);
        }
    }
    // OUTGOING PORTS
    function _Platform_outgoingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
            e: _Platform_outgoingPortMap,
            u: converter,
            a: _Platform_setupOutgoingPort
        };
        return _Platform_leaf(name);
    }
    var _Platform_outgoingPortMap_fn = function (tagger, value) { return value; }, _Platform_outgoingPortMap = F2(_Platform_outgoingPortMap_fn);
    function _Platform_setupOutgoingPort(name) {
        var subs = [];
        var converter = _Platform_effectManagers[name].u;
        // CREATE MANAGER
        var init = _Process_sleep(0);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function (router, cmdList, state) {
            for (; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
             {
                // grab a separate reference to subs in case unsubscribe is called
                var currentSubs = subs;
                var value = _Json_unwrap(converter(cmdList.a));
                for (var i = 0; i < currentSubs.length; i++) {
                    currentSubs[i](value);
                }
            }
            return init;
        });
        // PUBLIC API
        function subscribe(callback) {
            subs.push(callback);
        }
        function unsubscribe(callback) {
            // copy subs into a new array in case unsubscribe is called within a
            // subscribed callback
            subs = subs.slice();
            var index = subs.indexOf(callback);
            if (index >= 0) {
                subs.splice(index, 1);
            }
        }
        return {
            subscribe: subscribe,
            unsubscribe: unsubscribe
        };
    }
    // INCOMING PORTS
    function _Platform_incomingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
            f: _Platform_incomingPortMap,
            u: converter,
            a: _Platform_setupIncomingPort
        };
        return _Platform_leaf(name);
    }
    var _Platform_incomingPortMap_fn = function (tagger, finalTagger) {
        return function (value) {
            return tagger(finalTagger(value));
        };
    }, _Platform_incomingPortMap = F2(_Platform_incomingPortMap_fn);
    function _Platform_setupIncomingPort(name, sendToApp) {
        var subs = _List_Nil;
        var converter = _Platform_effectManagers[name].u;
        // CREATE MANAGER
        var init = _Scheduler_succeed(null);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function (router, subList, state) {
            subs = subList;
            return init;
        });
        // PUBLIC API
        function send(incomingValue) {
            var result = _Json_run_fn(converter, _Json_wrap(incomingValue));
            $elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);
            var value = result.a;
            for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
             {
                sendToApp(temp.a(value));
            }
        }
        return { send: send };
    }
    // EXPORT ELM MODULES
    //
    // Have DEBUG and PROD versions so that we can (1) give nicer errors in
    // debug mode and (2) not pay for the bits needed for that in prod mode.
    //
    function _Platform_export(exports) {
        scope["Elm"]
            ? _Platform_mergeExportsProd(scope["Elm"], exports)
            : scope["Elm"] = exports;
    }
    function _Platform_mergeExportsProd(obj, exports) {
        for (var name in exports) {
            (name in obj)
                ? (name == "init")
                    ? _Debug_crash(6)
                    : _Platform_mergeExportsProd(obj[name], exports[name])
                : (obj[name] = exports[name]);
        }
    }
    function _Platform_export_UNUSED(exports) {
        scope["Elm"]
            ? _Platform_mergeExportsDebug("Elm", scope["Elm"], exports)
            : scope["Elm"] = exports;
    }
    function _Platform_mergeExportsDebug(moduleName, obj, exports) {
        for (var name in exports) {
            (name in obj)
                ? (name == "init")
                    ? _Debug_crash(6, moduleName)
                    : _Platform_mergeExportsDebug(moduleName + "." + name, obj[name], exports[name])
                : (obj[name] = exports[name]);
        }
    }
    // BYTES
    function _Bytes_width(bytes) {
        return bytes.byteLength;
    }
    var _Bytes_getHostEndianness_fn = function (le, be) {
        return _Scheduler_binding(function (callback) {
            callback(_Scheduler_succeed(new Uint8Array(new Uint32Array([1]))[0] === 1 ? le : be));
        });
    }, _Bytes_getHostEndianness = F2(_Bytes_getHostEndianness_fn);
    // ENCODERS
    function _Bytes_encode(encoder) {
        var mutableBytes = new DataView(new ArrayBuffer($elm$bytes$Bytes$Encode$getWidth(encoder)));
        $elm$bytes$Bytes$Encode$write(encoder)(mutableBytes)(0);
        return mutableBytes;
    }
    // SIGNED INTEGERS
    var _Bytes_write_i8_fn = function (mb, i, n) { mb.setInt8(i, n); return i + 1; }, _Bytes_write_i8 = F3(_Bytes_write_i8_fn);
    var _Bytes_write_i16_fn = function (mb, i, n, isLE) { mb.setInt16(i, n, isLE); return i + 2; }, _Bytes_write_i16 = F4(_Bytes_write_i16_fn);
    var _Bytes_write_i32_fn = function (mb, i, n, isLE) { mb.setInt32(i, n, isLE); return i + 4; }, _Bytes_write_i32 = F4(_Bytes_write_i32_fn);
    // UNSIGNED INTEGERS
    var _Bytes_write_u8_fn = function (mb, i, n) { mb.setUint8(i, n); return i + 1; }, _Bytes_write_u8 = F3(_Bytes_write_u8_fn);
    var _Bytes_write_u16_fn = function (mb, i, n, isLE) { mb.setUint16(i, n, isLE); return i + 2; }, _Bytes_write_u16 = F4(_Bytes_write_u16_fn);
    var _Bytes_write_u32_fn = function (mb, i, n, isLE) { mb.setUint32(i, n, isLE); return i + 4; }, _Bytes_write_u32 = F4(_Bytes_write_u32_fn);
    // FLOATS
    var _Bytes_write_f32_fn = function (mb, i, n, isLE) { mb.setFloat32(i, n, isLE); return i + 4; }, _Bytes_write_f32 = F4(_Bytes_write_f32_fn);
    var _Bytes_write_f64_fn = function (mb, i, n, isLE) { mb.setFloat64(i, n, isLE); return i + 8; }, _Bytes_write_f64 = F4(_Bytes_write_f64_fn);
    // BYTES
    var _Bytes_write_bytes_fn = function (mb, offset, bytes) {
        for (var i = 0, len = bytes.byteLength, limit = len - 4; i <= limit; i += 4) {
            mb.setUint32(offset + i, bytes.getUint32(i));
        }
        for (; i < len; i++) {
            mb.setUint8(offset + i, bytes.getUint8(i));
        }
        return offset + len;
    }, _Bytes_write_bytes = F3(_Bytes_write_bytes_fn);
    // STRINGS
    function _Bytes_getStringWidth(string) {
        for (var width = 0, i = 0; i < string.length; i++) {
            var code = string.charCodeAt(i);
            width +=
                (code < 128) ? 1 :
                    (code < 2048) ? 2 :
                        (code < 55296 || 56319 < code) ? 3 : (i++, 4);
        }
        return width;
    }
    var _Bytes_write_string_fn = function (mb, offset, string) {
        for (var i = 0; i < string.length; i++) {
            var code = string.charCodeAt(i);
            offset +=
                (code < 128)
                    ? (mb.setUint8(offset, code)
                        , 1)
                    :
                        (code < 2048)
                            ? (mb.setUint16(offset, 49280 /* 0b1100000010000000 */
                                | (code >>> 6 & 31 /* 0b00011111 */) << 8
                                | code & 63 /* 0b00111111 */)
                                , 2)
                            :
                                (code < 55296 || 56319 < code)
                                    ? (mb.setUint16(offset, 57472 /* 0b1110000010000000 */
                                        | (code >>> 12 & 15 /* 0b00001111 */) << 8
                                        | code >>> 6 & 63 /* 0b00111111 */)
                                        , mb.setUint8(offset + 2, 128 /* 0b10000000 */
                                            | code & 63 /* 0b00111111 */)
                                        , 3)
                                    :
                                        (code = (code - 55296) * 1024 + string.charCodeAt(++i) - 56320 + 65536
                                            , mb.setUint32(offset, 4034953344 /* 0b11110000100000001000000010000000 */
                                                | (code >>> 18 & 7 /* 0b00000111 */) << 24
                                                | (code >>> 12 & 63 /* 0b00111111 */) << 16
                                                | (code >>> 6 & 63 /* 0b00111111 */) << 8
                                                | code & 63 /* 0b00111111 */)
                                            , 4);
        }
        return offset;
    }, _Bytes_write_string = F3(_Bytes_write_string_fn);
    // DECODER
    var _Bytes_decode_fn = function (decoder, bytes) {
        try {
            return $elm$core$Maybe$Just(A2(decoder, bytes, 0).b);
        }
        catch (e) {
            return $elm$core$Maybe$Nothing;
        }
    }, _Bytes_decode_fn_unwrapped = function (decoder, bytes) {
        try {
            return $elm$core$Maybe$Just(decoder(bytes, 0).b);
        }
        catch (e) {
            return $elm$core$Maybe$Nothing;
        }
    }, _Bytes_decode = F2(_Bytes_decode_fn);
    var _Bytes_read_i8_fn = function (bytes, offset) { return _Utils_Tuple2(offset + 1, bytes.getInt8(offset)); }, _Bytes_read_i8 = F2(_Bytes_read_i8_fn);
    var _Bytes_read_i16_fn = function (isLE, bytes, offset) { return _Utils_Tuple2(offset + 2, bytes.getInt16(offset, isLE)); }, _Bytes_read_i16 = F3(_Bytes_read_i16_fn);
    var _Bytes_read_i32_fn = function (isLE, bytes, offset) { return _Utils_Tuple2(offset + 4, bytes.getInt32(offset, isLE)); }, _Bytes_read_i32 = F3(_Bytes_read_i32_fn);
    var _Bytes_read_u8_fn = function (bytes, offset) { return _Utils_Tuple2(offset + 1, bytes.getUint8(offset)); }, _Bytes_read_u8 = F2(_Bytes_read_u8_fn);
    var _Bytes_read_u16_fn = function (isLE, bytes, offset) { return _Utils_Tuple2(offset + 2, bytes.getUint16(offset, isLE)); }, _Bytes_read_u16 = F3(_Bytes_read_u16_fn);
    var _Bytes_read_u32_fn = function (isLE, bytes, offset) { return _Utils_Tuple2(offset + 4, bytes.getUint32(offset, isLE)); }, _Bytes_read_u32 = F3(_Bytes_read_u32_fn);
    var _Bytes_read_f32_fn = function (isLE, bytes, offset) { return _Utils_Tuple2(offset + 4, bytes.getFloat32(offset, isLE)); }, _Bytes_read_f32 = F3(_Bytes_read_f32_fn);
    var _Bytes_read_f64_fn = function (isLE, bytes, offset) { return _Utils_Tuple2(offset + 8, bytes.getFloat64(offset, isLE)); }, _Bytes_read_f64 = F3(_Bytes_read_f64_fn);
    var _Bytes_read_bytes_fn = function (len, bytes, offset) {
        return _Utils_Tuple2(offset + len, new DataView(bytes.buffer, bytes.byteOffset + offset, len));
    }, _Bytes_read_bytes = F3(_Bytes_read_bytes_fn);
    var _Bytes_read_string_fn = function (len, bytes, offset) {
        var string = "";
        var end = offset + len;
        for (; offset < end;) {
            var byte = bytes.getUint8(offset++);
            string +=
                (byte < 128)
                    ? String.fromCharCode(byte)
                    :
                        ((byte & 224 /* 0b11100000 */) === 192 /* 0b11000000 */)
                            ? String.fromCharCode((byte & 31 /* 0b00011111 */) << 6 | bytes.getUint8(offset++) & 63 /* 0b00111111 */)
                            :
                                ((byte & 240 /* 0b11110000 */) === 224 /* 0b11100000 */)
                                    ? String.fromCharCode((byte & 15 /* 0b00001111 */) << 12
                                        | (bytes.getUint8(offset++) & 63 /* 0b00111111 */) << 6
                                        | bytes.getUint8(offset++) & 63 /* 0b00111111 */)
                                    :
                                        (byte =
                                            ((byte & 7 /* 0b00000111 */) << 18
                                                | (bytes.getUint8(offset++) & 63 /* 0b00111111 */) << 12
                                                | (bytes.getUint8(offset++) & 63 /* 0b00111111 */) << 6
                                                | bytes.getUint8(offset++) & 63 /* 0b00111111 */) - 65536
                                            , String.fromCharCode(Math.floor(byte / 1024) + 55296, byte % 1024 + 56320));
        }
        return _Utils_Tuple2(offset, string);
    }, _Bytes_read_string = F3(_Bytes_read_string_fn);
    var _Bytes_decodeFailure_fn = function () { throw 0; }, _Bytes_decodeFailure = F2(_Bytes_decodeFailure_fn);
    var _Bitwise_and_fn = function (a, b) {
        return a & b;
    }, _Bitwise_and = F2(_Bitwise_and_fn);
    var _Bitwise_or_fn = function (a, b) {
        return a | b;
    }, _Bitwise_or = F2(_Bitwise_or_fn);
    var _Bitwise_xor_fn = function (a, b) {
        return a ^ b;
    }, _Bitwise_xor = F2(_Bitwise_xor_fn);
    function _Bitwise_complement(a) {
        return ~a;
    }
    ;
    var _Bitwise_shiftLeftBy_fn = function (offset, a) {
        return a << offset;
    }, _Bitwise_shiftLeftBy = F2(_Bitwise_shiftLeftBy_fn);
    var _Bitwise_shiftRightBy_fn = function (offset, a) {
        return a >> offset;
    }, _Bitwise_shiftRightBy = F2(_Bitwise_shiftRightBy_fn);
    var _Bitwise_shiftRightZfBy_fn = function (offset, a) {
        return a >>> offset;
    }, _Bitwise_shiftRightZfBy = F2(_Bitwise_shiftRightZfBy_fn);
    // CREATE
    var _Regex_never = /.^/;
    var _Regex_fromStringWith_fn = function (options, string) {
        var flags = "g";
        if (options.hb) {
            flags += "m";
        }
        if (options.gB) {
            flags += "i";
        }
        try {
            return $elm$core$Maybe$Just(new RegExp(string, flags));
        }
        catch (error) {
            return $elm$core$Maybe$Nothing;
        }
    }, _Regex_fromStringWith = F2(_Regex_fromStringWith_fn);
    // USE
    var _Regex_contains_fn = function (re, string) {
        return string.match(re) !== null;
    }, _Regex_contains = F2(_Regex_contains_fn);
    var _Regex_findAtMost_fn = function (n, re, str) {
        var out = [];
        var number = 0;
        var string = str;
        var lastIndex = re.lastIndex;
        var prevLastIndex = -1;
        var result;
        while (number++ < n && (result = re.exec(string))) {
            if (prevLastIndex == re.lastIndex)
                break;
            var i = result.length - 1;
            var subs = new Array(i);
            while (i > 0) {
                var submatch = result[i];
                subs[--i] = submatch
                    ? $elm$core$Maybe$Just(submatch)
                    : $elm$core$Maybe$Nothing;
            }
            out.push($elm$regex$Regex$Match_fn(result[0], result.index, number, _List_fromArray(subs)));
            prevLastIndex = re.lastIndex;
        }
        re.lastIndex = lastIndex;
        return _List_fromArray(out);
    }, _Regex_findAtMost = F3(_Regex_findAtMost_fn);
    var _Regex_replaceAtMost_fn = function (n, re, replacer, string) {
        var count = 0;
        function jsReplacer(match) {
            if (count++ >= n) {
                return match;
            }
            var i = arguments.length - 3;
            var submatches = new Array(i);
            while (i > 0) {
                var submatch = arguments[i];
                submatches[--i] = submatch
                    ? $elm$core$Maybe$Just(submatch)
                    : $elm$core$Maybe$Nothing;
            }
            return replacer($elm$regex$Regex$Match_fn(match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
        }
        return string.replace(re, jsReplacer);
    }, _Regex_replaceAtMost = F4(_Regex_replaceAtMost_fn);
    var _Regex_splitAtMost_fn = function (n, re, str) {
        var string = str;
        var out = [];
        var start = re.lastIndex;
        var restoreLastIndex = re.lastIndex;
        while (n--) {
            var result = re.exec(string);
            if (!result)
                break;
            out.push(string.slice(start, result.index));
            start = re.lastIndex;
        }
        out.push(string.slice(start));
        re.lastIndex = restoreLastIndex;
        return _List_fromArray(out);
    }, _Regex_splitAtMost = F3(_Regex_splitAtMost_fn);
    var _Regex_infinity = Infinity;
    // HELPERS
    var _VirtualDom_divertHrefToApp;
    var _VirtualDom_doc = typeof document !== "undefined" ? document : {};
    function _VirtualDom_appendChild(parent, child) {
        parent.appendChild(child);
    }
    var _VirtualDom_init_fn = function (virtualNode, flagDecoder, debugMetadata, args) {
        // NOTE: this function needs _Platform_export available to work
        /**/
        var node = args["node"];
        //*/
        /**_UNUSED/
        var node = args && args['node'] ? args['node'] : _Debug_crash(0);
        //*/
        node.parentNode.replaceChild(_VirtualDom_render(virtualNode, function () { }), node);
        return {};
    }, _VirtualDom_init = F4(_VirtualDom_init_fn);
    // TEXT
    function _VirtualDom_text(string) {
        return {
            $: 0,
            a: string
        };
    }
    // NODE
    var _VirtualDom_nodeNS_fn = function (namespace, tag) {
        return F2(function (factList, kidList) {
            for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
             {
                var kid = kidList.a;
                descendantsCount += (kid.b || 0);
                kids.push(kid);
            }
            descendantsCount += kids.length;
            return {
                $: 1,
                c: tag,
                d: _VirtualDom_organizeFacts(factList),
                e: kids,
                f: namespace,
                b: descendantsCount
            };
        });
    }, _VirtualDom_nodeNS = F2(_VirtualDom_nodeNS_fn);
    var _VirtualDom_node_a0 = undefined, _VirtualDom_node = _VirtualDom_nodeNS(_VirtualDom_node_a0);
    // KEYED NODE
    var _VirtualDom_keyedNodeNS_fn = function (namespace, tag) {
        return F2(function (factList, kidList) {
            for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
             {
                var kid = kidList.a;
                descendantsCount += (kid.b.b || 0);
                kids.push(kid);
            }
            descendantsCount += kids.length;
            return {
                $: 2,
                c: tag,
                d: _VirtualDom_organizeFacts(factList),
                e: kids,
                f: namespace,
                b: descendantsCount
            };
        });
    }, _VirtualDom_keyedNodeNS = F2(_VirtualDom_keyedNodeNS_fn);
    var _VirtualDom_keyedNode_a0 = undefined, _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(_VirtualDom_keyedNode_a0);
    // CUSTOM
    function _VirtualDom_custom(factList, model, render, diff) {
        return {
            $: 3,
            d: _VirtualDom_organizeFacts(factList),
            g: model,
            h: render,
            i: diff
        };
    }
    // MAP
    var _VirtualDom_map_fn = function (tagger, node) {
        return {
            $: 4,
            j: tagger,
            k: node,
            b: 1 + (node.b || 0)
        };
    }, _VirtualDom_map = F2(_VirtualDom_map_fn);
    // LAZY
    function _VirtualDom_thunk(refs, thunk) {
        return {
            $: 5,
            l: refs,
            m: thunk,
            k: undefined
        };
    }
    var _VirtualDom_lazy_fn = function (func, a) {
        return _VirtualDom_thunk([func, a], function () {
            return func(a);
        });
    }, _VirtualDom_lazy = F2(_VirtualDom_lazy_fn);
    var _VirtualDom_lazy2_fn = function (func, a, b) {
        return _VirtualDom_thunk([func, a, b], function () {
            return A2(func, a, b);
        });
    }, _VirtualDom_lazy2_fn_unwrapped = function (func, a, b) {
        return _VirtualDom_thunk([func, a, b], function () {
            return func(a, b);
        });
    }, _VirtualDom_lazy2 = F3(_VirtualDom_lazy2_fn);
    var _VirtualDom_lazy3_fn = function (func, a, b, c) {
        return _VirtualDom_thunk([func, a, b, c], function () {
            return A3(func, a, b, c);
        });
    }, _VirtualDom_lazy3_fn_unwrapped = function (func, a, b, c) {
        return _VirtualDom_thunk([func, a, b, c], function () {
            return func(a, b, c);
        });
    }, _VirtualDom_lazy3 = F4(_VirtualDom_lazy3_fn);
    var _VirtualDom_lazy4_fn = function (func, a, b, c, d) {
        return _VirtualDom_thunk([func, a, b, c, d], function () {
            return A4(func, a, b, c, d);
        });
    }, _VirtualDom_lazy4_fn_unwrapped = function (func, a, b, c, d) {
        return _VirtualDom_thunk([func, a, b, c, d], function () {
            return func(a, b, c, d);
        });
    }, _VirtualDom_lazy4 = F5(_VirtualDom_lazy4_fn);
    var _VirtualDom_lazy5_fn = function (func, a, b, c, d, e) {
        return _VirtualDom_thunk([func, a, b, c, d, e], function () {
            return A5(func, a, b, c, d, e);
        });
    }, _VirtualDom_lazy5_fn_unwrapped = function (func, a, b, c, d, e) {
        return _VirtualDom_thunk([func, a, b, c, d, e], function () {
            return func(a, b, c, d, e);
        });
    }, _VirtualDom_lazy5 = F6(_VirtualDom_lazy5_fn);
    var _VirtualDom_lazy6_fn = function (func, a, b, c, d, e, f) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f], function () {
            return A6(func, a, b, c, d, e, f);
        });
    }, _VirtualDom_lazy6_fn_unwrapped = function (func, a, b, c, d, e, f) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f], function () {
            return func(a, b, c, d, e, f);
        });
    }, _VirtualDom_lazy6 = F7(_VirtualDom_lazy6_fn);
    var _VirtualDom_lazy7_fn = function (func, a, b, c, d, e, f, g) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function () {
            return A7(func, a, b, c, d, e, f, g);
        });
    }, _VirtualDom_lazy7_fn_unwrapped = function (func, a, b, c, d, e, f, g) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function () {
            return func(a, b, c, d, e, f, g);
        });
    }, _VirtualDom_lazy7 = F8(_VirtualDom_lazy7_fn);
    var _VirtualDom_lazy8_fn = function (func, a, b, c, d, e, f, g, h) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function () {
            return A8(func, a, b, c, d, e, f, g, h);
        });
    }, _VirtualDom_lazy8_fn_unwrapped = function (func, a, b, c, d, e, f, g, h) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function () {
            return func(a, b, c, d, e, f, g, h);
        });
    }, _VirtualDom_lazy8 = F9(_VirtualDom_lazy8_fn);
    // FACTS
    var _VirtualDom_on_fn = function (key, handler) {
        return {
            $: "a0",
            n: key,
            o: handler
        };
    }, _VirtualDom_on = F2(_VirtualDom_on_fn);
    var _VirtualDom_style_fn = function (key, value) {
        return {
            $: "a1",
            n: key,
            o: value
        };
    }, _VirtualDom_style = F2(_VirtualDom_style_fn);
    var _VirtualDom_property_fn = function (key, value) {
        return {
            $: "a2",
            n: key,
            o: value
        };
    }, _VirtualDom_property = F2(_VirtualDom_property_fn);
    var _VirtualDom_attribute_fn = function (key, value) {
        return {
            $: "a3",
            n: key,
            o: value
        };
    }, _VirtualDom_attribute = F2(_VirtualDom_attribute_fn);
    var _VirtualDom_attributeNS_fn = function (namespace, key, value) {
        return {
            $: "a4",
            n: key,
            o: { f: namespace, o: value }
        };
    }, _VirtualDom_attributeNS = F3(_VirtualDom_attributeNS_fn);
    // XSS ATTACK VECTOR CHECKS
    function _VirtualDom_noScript(tag) {
        return tag == "script" ? "p" : tag;
    }
    function _VirtualDom_noOnOrFormAction(key) {
        return /^(on|formAction$)/i.test(key) ? "data-" + key : key;
    }
    function _VirtualDom_noInnerHtmlOrFormAction(key) {
        return key == "innerHTML" || key == "formAction" ? "data-" + key : key;
    }
    function _VirtualDom_noJavaScriptUri(value) {
        return /^javascript:/i.test(value.replace(/\s/g, "")) ? "" : value;
    }
    function _VirtualDom_noJavaScriptUri_UNUSED(value) {
        return /^javascript:/i.test(value.replace(/\s/g, ""))
            ? "javascript:alert(\"This is an XSS vector. Please use ports or web components instead.\")"
            : value;
    }
    function _VirtualDom_noJavaScriptOrHtmlUri(value) {
        return /^\s*(javascript:|data:text\/html)/i.test(value) ? "" : value;
    }
    function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value) {
        return /^\s*(javascript:|data:text\/html)/i.test(value)
            ? "javascript:alert(\"This is an XSS vector. Please use ports or web components instead.\")"
            : value;
    }
    // MAP FACTS
    var _VirtualDom_mapAttribute_fn = function (func, attr) {
        return (attr.$ === "a0")
            ? _VirtualDom_on_fn(attr.n, _VirtualDom_mapHandler(func, attr.o)) : attr;
    }, _VirtualDom_mapAttribute = F2(_VirtualDom_mapAttribute_fn);
    function _VirtualDom_mapHandler(func, handler) {
        var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);
        // 0 = Normal
        // 1 = MayStopPropagation
        // 2 = MayPreventDefault
        // 3 = Custom
        return {
            $: handler.$,
            a: !tag
                ? _Json_map1_fn(func, handler.a) : _Json_map2_fn(tag < 3
                ? _VirtualDom_mapEventTuple
                : _VirtualDom_mapEventRecord, $elm$json$Json$Decode$succeed(func), handler.a)
        };
    }
    var _VirtualDom_mapEventTuple_fn = function (func, tuple) {
        return _Utils_Tuple2(func(tuple.a), tuple.b);
    }, _VirtualDom_mapEventTuple = F2(_VirtualDom_mapEventTuple_fn);
    var _VirtualDom_mapEventRecord_fn = function (func, record) {
        return {
            bA: func(record.bA),
            d2: record.d2,
            d_: record.d_
        };
    }, _VirtualDom_mapEventRecord = F2(_VirtualDom_mapEventRecord_fn);
    // ORGANIZE FACTS
    function _VirtualDom_organizeFacts(factList) {
        for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
         {
            var entry = factList.a;
            var tag = entry.$;
            var key = entry.n;
            var value = entry.o;
            if (tag === "a2") {
                (key === "className")
                    ? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
                    : facts[key] = _Json_unwrap(value);
                continue;
            }
            var subFacts = facts[tag] || (facts[tag] = {});
            (tag === "a3" && key === "class")
                ? _VirtualDom_addClass(subFacts, key, value)
                : subFacts[key] = value;
        }
        return facts;
    }
    function _VirtualDom_addClass(object, key, newClass) {
        var classes = object[key];
        object[key] = classes ? classes + " " + newClass : newClass;
    }
    // RENDER
    function _VirtualDom_render(vNode, eventNode) {
        var tag = vNode.$;
        if (tag === 5) {
            return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
        }
        if (tag === 0) {
            return _VirtualDom_doc.createTextNode(vNode.a);
        }
        if (tag === 4) {
            var subNode = vNode.k;
            var tagger = vNode.j;
            while (subNode.$ === 4) {
                typeof tagger !== "object"
                    ? tagger = [tagger, subNode.j]
                    : tagger.push(subNode.j);
                subNode = subNode.k;
            }
            var subEventRoot = { j: tagger, p: eventNode };
            var domNode = _VirtualDom_render(subNode, subEventRoot);
            domNode.elm_event_node_ref = subEventRoot;
            return domNode;
        }
        if (tag === 3) {
            var domNode = vNode.h(vNode.g);
            _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
            return domNode;
        }
        // at this point `tag` must be 1 or 2
        var domNode = vNode.f
            ? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
            : _VirtualDom_doc.createElement(vNode.c);
        if (_VirtualDom_divertHrefToApp && vNode.c == "a") {
            domNode.addEventListener("click", _VirtualDom_divertHrefToApp(domNode));
        }
        _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
        for (var kids = vNode.e, i = 0; i < kids.length; i++) {
            _VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
        }
        return domNode;
    }
    // APPLY FACTS
    function _VirtualDom_applyFacts(domNode, eventNode, facts) {
        for (var key in facts) {
            var value = facts[key];
            key === "a1"
                ? _VirtualDom_applyStyles(domNode, value)
                :
                    key === "a0"
                        ? _VirtualDom_applyEvents(domNode, eventNode, value)
                        :
                            key === "a3"
                                ? _VirtualDom_applyAttrs(domNode, value)
                                :
                                    key === "a4"
                                        ? _VirtualDom_applyAttrsNS(domNode, value)
                                        :
                                            ((key !== "value" && key !== "checked") || domNode[key] !== value) && (domNode[key] = value);
        }
    }
    // APPLY STYLES
    function _VirtualDom_applyStyles(domNode, styles) {
        var domNodeStyle = domNode.style;
        for (var key in styles) {
            domNodeStyle[key] = styles[key];
        }
    }
    // APPLY ATTRS
    function _VirtualDom_applyAttrs(domNode, attrs) {
        for (var key in attrs) {
            var value = attrs[key];
            typeof value !== "undefined"
                ? domNode.setAttribute(key, value)
                : domNode.removeAttribute(key);
        }
    }
    // APPLY NAMESPACED ATTRS
    function _VirtualDom_applyAttrsNS(domNode, nsAttrs) {
        for (var key in nsAttrs) {
            var pair = nsAttrs[key];
            var namespace = pair.f;
            var value = pair.o;
            typeof value !== "undefined"
                ? domNode.setAttributeNS(namespace, key, value)
                : domNode.removeAttributeNS(namespace, key);
        }
    }
    // APPLY EVENTS
    function _VirtualDom_applyEvents(domNode, eventNode, events) {
        var allCallbacks = domNode.elmFs || (domNode.elmFs = {});
        for (var key in events) {
            var newHandler = events[key];
            var oldCallback = allCallbacks[key];
            if (!newHandler) {
                domNode.removeEventListener(key, oldCallback);
                allCallbacks[key] = undefined;
                continue;
            }
            if (oldCallback) {
                var oldHandler = oldCallback.q;
                if (oldHandler.$ === newHandler.$) {
                    oldCallback.q = newHandler;
                    continue;
                }
                domNode.removeEventListener(key, oldCallback);
            }
            oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
            domNode.addEventListener(key, oldCallback, _VirtualDom_passiveSupported
                && { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 });
            allCallbacks[key] = oldCallback;
        }
    }
    // PASSIVE EVENTS
    var _VirtualDom_passiveSupported;
    try {
        window.addEventListener("t", null, Object.defineProperty({}, "passive", {
            get: function () { _VirtualDom_passiveSupported = true; }
        }));
    }
    catch (e) { }
    // EVENT HANDLERS
    function _VirtualDom_makeCallback(eventNode, initialHandler) {
        function callback(event) {
            var handler = callback.q;
            var result = _Json_runHelp(handler.a, event);
            if (!$elm$core$Result$isOk(result)) {
                return;
            }
            var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);
            // 0 = Normal
            // 1 = MayStopPropagation
            // 2 = MayPreventDefault
            // 3 = Custom
            var value = result.a;
            var message = !tag ? value : tag < 3 ? value.a : value.bA;
            var stopPropagation = tag == 1 ? value.b : tag == 3 && value.d2;
            var currentEventNode = (stopPropagation && event.stopPropagation(),
                (tag == 2 ? value.b : tag == 3 && value.d_) && event.preventDefault(),
                eventNode);
            var tagger;
            var i;
            while (tagger = currentEventNode.j) {
                if (typeof tagger == "function") {
                    message = tagger(message);
                }
                else {
                    for (var i = tagger.length; i--;) {
                        message = tagger[i](message);
                    }
                }
                currentEventNode = currentEventNode.p;
            }
            currentEventNode(message, stopPropagation); // stopPropagation implies isSync
        }
        callback.q = initialHandler;
        return callback;
    }
    function _VirtualDom_equalEvents(x, y) {
        return x.$ == y.$ && _Json_equality(x.a, y.a);
    }
    // DIFF
    // TODO: Should we do patches like in iOS?
    //
    // type Patch
    //   = At Int Patch
    //   | Batch (List Patch)
    //   | Change ...
    //
    // How could it not be better?
    //
    function _VirtualDom_diff(x, y) {
        var patches = [];
        _VirtualDom_diffHelp(x, y, patches, 0);
        return patches;
    }
    function _VirtualDom_pushPatch(patches, type, index, data) {
        var patch = {
            $: type,
            r: index,
            s: data,
            t: undefined,
            u: undefined
        };
        patches.push(patch);
        return patch;
    }
    function _VirtualDom_diffHelp(x, y, patches, index) {
        if (x === y) {
            return;
        }
        var xType = x.$;
        var yType = y.$;
        // Bail if you run into different types of nodes. Implies that the
        // structure has changed significantly and it's not worth a diff.
        if (xType !== yType) {
            if (xType === 1 && yType === 2) {
                y = _VirtualDom_dekey(y);
                yType = 1;
            }
            else {
                _VirtualDom_pushPatch(patches, 0, index, y);
                return;
            }
        }
        // Now we know that both nodes are the same $.
        switch (yType) {
            case 5:
                var xRefs = x.l;
                var yRefs = y.l;
                var i = xRefs.length;
                var same = i === yRefs.length;
                while (same && i--) {
                    same = xRefs[i] === yRefs[i];
                }
                if (same) {
                    y.k = x.k;
                    return;
                }
                y.k = y.m();
                var subPatches = [];
                _VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
                subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
                return;
            case 4:
                // gather nested taggers
                var xTaggers = x.j;
                var yTaggers = y.j;
                var nesting = false;
                var xSubNode = x.k;
                while (xSubNode.$ === 4) {
                    nesting = true;
                    typeof xTaggers !== "object"
                        ? xTaggers = [xTaggers, xSubNode.j]
                        : xTaggers.push(xSubNode.j);
                    xSubNode = xSubNode.k;
                }
                var ySubNode = y.k;
                while (ySubNode.$ === 4) {
                    nesting = true;
                    typeof yTaggers !== "object"
                        ? yTaggers = [yTaggers, ySubNode.j]
                        : yTaggers.push(ySubNode.j);
                    ySubNode = ySubNode.k;
                }
                // Just bail if different numbers of taggers. This implies the
                // structure of the virtual DOM has changed.
                if (nesting && xTaggers.length !== yTaggers.length) {
                    _VirtualDom_pushPatch(patches, 0, index, y);
                    return;
                }
                // check if taggers are "the same"
                if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers) {
                    _VirtualDom_pushPatch(patches, 2, index, yTaggers);
                }
                // diff everything below the taggers
                _VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
                return;
            case 0:
                if (x.a !== y.a) {
                    _VirtualDom_pushPatch(patches, 3, index, y.a);
                }
                return;
            case 1:
                _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
                return;
            case 2:
                _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
                return;
            case 3:
                if (x.h !== y.h) {
                    _VirtualDom_pushPatch(patches, 0, index, y);
                    return;
                }
                var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
                factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);
                var patch = y.i(x.g, y.g);
                patch && _VirtualDom_pushPatch(patches, 5, index, patch);
                return;
        }
    }
    // assumes the incoming arrays are the same length
    function _VirtualDom_pairwiseRefEqual(as, bs) {
        for (var i = 0; i < as.length; i++) {
            if (as[i] !== bs[i]) {
                return false;
            }
        }
        return true;
    }
    function _VirtualDom_diffNodes(x, y, patches, index, diffKids) {
        // Bail if obvious indicators have changed. Implies more serious
        // structural changes such that it's not worth it to diff.
        if (x.c !== y.c || x.f !== y.f) {
            _VirtualDom_pushPatch(patches, 0, index, y);
            return;
        }
        var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
        factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);
        diffKids(x, y, patches, index);
    }
    // DIFF FACTS
    // TODO Instead of creating a new diff object, it's possible to just test if
    // there *is* a diff. During the actual patch, do the diff again and make the
    // modifications directly. This way, there's no new allocations. Worth it?
    function _VirtualDom_diffFacts(x, y, category) {
        var diff;
        // look for changes and removals
        for (var xKey in x) {
            if (xKey === "a1" || xKey === "a0" || xKey === "a3" || xKey === "a4") {
                var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
                if (subDiff) {
                    diff = diff || {};
                    diff[xKey] = subDiff;
                }
                continue;
            }
            // remove if not in the new facts
            if (!(xKey in y)) {
                diff = diff || {};
                diff[xKey] =
                    !category
                        ? (typeof x[xKey] === "string" ? "" : null)
                        :
                            (category === "a1")
                                ? ""
                                :
                                    (category === "a0" || category === "a3")
                                        ? undefined
                                        :
                                            { f: x[xKey].f, o: undefined };
                continue;
            }
            var xValue = x[xKey];
            var yValue = y[xKey];
            // reference equal, so don't worry about it
            if (xValue === yValue && xKey !== "value" && xKey !== "checked"
                || category === "a0" && _VirtualDom_equalEvents(xValue, yValue)) {
                continue;
            }
            diff = diff || {};
            diff[xKey] = yValue;
        }
        // add new stuff
        for (var yKey in y) {
            if (!(yKey in x)) {
                diff = diff || {};
                diff[yKey] = y[yKey];
            }
        }
        return diff;
    }
    // DIFF KIDS
    function _VirtualDom_diffKids(xParent, yParent, patches, index) {
        var xKids = xParent.e;
        var yKids = yParent.e;
        var xLen = xKids.length;
        var yLen = yKids.length;
        // FIGURE OUT IF THERE ARE INSERTS OR REMOVALS
        if (xLen > yLen) {
            _VirtualDom_pushPatch(patches, 6, index, {
                v: yLen,
                i: xLen - yLen
            });
        }
        else if (xLen < yLen) {
            _VirtualDom_pushPatch(patches, 7, index, {
                v: xLen,
                e: yKids
            });
        }
        // PAIRWISE DIFF EVERYTHING ELSE
        for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++) {
            var xKid = xKids[i];
            _VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
            index += xKid.b || 0;
        }
    }
    // KEYED DIFF
    function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex) {
        var localPatches = [];
        var changes = {}; // Dict String Entry
        var inserts = []; // Array { index : Int, entry : Entry }
        // type Entry = { tag : String, vnode : VNode, index : Int, data : _ }
        var xKids = xParent.e;
        var yKids = yParent.e;
        var xLen = xKids.length;
        var yLen = yKids.length;
        var xIndex = 0;
        var yIndex = 0;
        var index = rootIndex;
        while (xIndex < xLen && yIndex < yLen) {
            var x = xKids[xIndex];
            var y = yKids[yIndex];
            var xKey = x.a;
            var yKey = y.a;
            var xNode = x.b;
            var yNode = y.b;
            var newMatch = undefined;
            var oldMatch = undefined;
            // check if keys match
            if (xKey === yKey) {
                index++;
                _VirtualDom_diffHelp(xNode, yNode, localPatches, index);
                index += xNode.b || 0;
                xIndex++;
                yIndex++;
                continue;
            }
            // look ahead 1 to detect insertions and removals.
            var xNext = xKids[xIndex + 1];
            var yNext = yKids[yIndex + 1];
            if (xNext) {
                var xNextKey = xNext.a;
                var xNextNode = xNext.b;
                oldMatch = yKey === xNextKey;
            }
            if (yNext) {
                var yNextKey = yNext.a;
                var yNextNode = yNext.b;
                newMatch = xKey === yNextKey;
            }
            // swap x and y
            if (newMatch && oldMatch) {
                index++;
                _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
                _VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
                index += xNode.b || 0;
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 2;
                continue;
            }
            // insert y
            if (newMatch) {
                index++;
                _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
                _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
                index += xNode.b || 0;
                xIndex += 1;
                yIndex += 2;
                continue;
            }
            // remove x
            if (oldMatch) {
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
                index += xNode.b || 0;
                index++;
                _VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 1;
                continue;
            }
            // remove x, insert y
            if (xNext && xNextKey === yNextKey) {
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
                _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
                index += xNode.b || 0;
                index++;
                _VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 2;
                continue;
            }
            break;
        }
        // eat up any remaining nodes with removeNode and insertNode
        while (xIndex < xLen) {
            index++;
            var x = xKids[xIndex];
            var xNode = x.b;
            _VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
            index += xNode.b || 0;
            xIndex++;
        }
        while (yIndex < yLen) {
            var endInserts = endInserts || [];
            var y = yKids[yIndex];
            _VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
            yIndex++;
        }
        if (localPatches.length > 0 || inserts.length > 0 || endInserts) {
            _VirtualDom_pushPatch(patches, 8, rootIndex, {
                w: localPatches,
                x: inserts,
                y: endInserts
            });
        }
    }
    // CHANGES FROM KEYED DIFF
    var _VirtualDom_POSTFIX = "_elmW6BL";
    function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts) {
        var entry = changes[key];
        // never seen this key before
        if (!entry) {
            entry = {
                c: 0,
                z: vnode,
                r: yIndex,
                s: undefined
            };
            inserts.push({ r: yIndex, A: entry });
            changes[key] = entry;
            return;
        }
        // this key was removed earlier, a match!
        if (entry.c === 1) {
            inserts.push({ r: yIndex, A: entry });
            entry.c = 2;
            var subPatches = [];
            _VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
            entry.r = yIndex;
            entry.s.s = {
                w: subPatches,
                A: entry
            };
            return;
        }
        // this key has already been inserted or moved, a duplicate!
        _VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
    }
    function _VirtualDom_removeNode(changes, localPatches, key, vnode, index) {
        var entry = changes[key];
        // never seen this key before
        if (!entry) {
            var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);
            changes[key] = {
                c: 1,
                z: vnode,
                r: index,
                s: patch
            };
            return;
        }
        // this key was inserted earlier, a match!
        if (entry.c === 0) {
            entry.c = 2;
            var subPatches = [];
            _VirtualDom_diffHelp(vnode, entry.z, subPatches, index);
            _VirtualDom_pushPatch(localPatches, 9, index, {
                w: subPatches,
                A: entry
            });
            return;
        }
        // this key has already been removed or moved, a duplicate!
        _VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
    }
    // ADD DOM NODES
    //
    // Each DOM node has an "index" assigned in order of traversal. It is important
    // to minimize our crawl over the actual DOM, so these indexes (along with the
    // descendantsCount of virtual nodes) let us skip touching entire subtrees of
    // the DOM if we know there are no patches there.
    function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode) {
        _VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
    }
    // assumes `patches` is non-empty and indexes increase monotonically.
    function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode) {
        var patch = patches[i];
        var index = patch.r;
        while (index === low) {
            var patchType = patch.$;
            if (patchType === 1) {
                _VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
            }
            else if (patchType === 8) {
                patch.t = domNode;
                patch.u = eventNode;
                var subPatches = patch.s.w;
                if (subPatches.length > 0) {
                    _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
                }
            }
            else if (patchType === 9) {
                patch.t = domNode;
                patch.u = eventNode;
                var data = patch.s;
                if (data) {
                    data.A.s = domNode;
                    var subPatches = data.w;
                    if (subPatches.length > 0) {
                        _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
                    }
                }
            }
            else {
                patch.t = domNode;
                patch.u = eventNode;
            }
            i++;
            if (!(patch = patches[i]) || (index = patch.r) > high) {
                return i;
            }
        }
        var tag = vNode.$;
        if (tag === 4) {
            var subNode = vNode.k;
            while (subNode.$ === 4) {
                subNode = subNode.k;
            }
            return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
        }
        // tag must be 1 or 2 at this point
        var vKids = vNode.e;
        var childNodes = domNode.childNodes;
        for (var j = 0; j < vKids.length; j++) {
            low++;
            var vKid = tag === 1 ? vKids[j] : vKids[j].b;
            var nextLow = low + (vKid.b || 0);
            if (low <= index && index <= nextLow) {
                i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
                if (!(patch = patches[i]) || (index = patch.r) > high) {
                    return i;
                }
            }
            low = nextLow;
        }
        return i;
    }
    // APPLY PATCHES
    function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode) {
        if (patches.length === 0) {
            return rootDomNode;
        }
        _VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
        return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
    }
    function _VirtualDom_applyPatchesHelp(rootDomNode, patches) {
        for (var i = 0; i < patches.length; i++) {
            var patch = patches[i];
            var localDomNode = patch.t;
            var newNode = _VirtualDom_applyPatch(localDomNode, patch);
            if (localDomNode === rootDomNode) {
                rootDomNode = newNode;
            }
        }
        return rootDomNode;
    }
    function _VirtualDom_applyPatch(domNode, patch) {
        switch (patch.$) {
            case 0:
                return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);
            case 4:
                _VirtualDom_applyFacts(domNode, patch.u, patch.s);
                return domNode;
            case 3:
                domNode.replaceData(0, domNode.length, patch.s);
                return domNode;
            case 1:
                return _VirtualDom_applyPatchesHelp(domNode, patch.s);
            case 2:
                if (domNode.elm_event_node_ref) {
                    domNode.elm_event_node_ref.j = patch.s;
                }
                else {
                    domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
                }
                return domNode;
            case 6:
                var data = patch.s;
                for (var i = 0; i < data.i; i++) {
                    domNode.removeChild(domNode.childNodes[data.v]);
                }
                return domNode;
            case 7:
                var data = patch.s;
                var kids = data.e;
                var i = data.v;
                var theEnd = domNode.childNodes[i];
                for (; i < kids.length; i++) {
                    domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
                }
                return domNode;
            case 9:
                var data = patch.s;
                if (!data) {
                    domNode.parentNode.removeChild(domNode);
                    return domNode;
                }
                var entry = data.A;
                if (typeof entry.r !== "undefined") {
                    domNode.parentNode.removeChild(domNode);
                }
                entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
                return domNode;
            case 8:
                return _VirtualDom_applyPatchReorder(domNode, patch);
            case 5:
                return patch.s(domNode);
            default:
                _Debug_crash(10); // 'Ran into an unknown patch!'
        }
    }
    function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode) {
        var parentNode = domNode.parentNode;
        var newNode = _VirtualDom_render(vNode, eventNode);
        if (!newNode.elm_event_node_ref) {
            newNode.elm_event_node_ref = domNode.elm_event_node_ref;
        }
        if (parentNode && newNode !== domNode) {
            parentNode.replaceChild(newNode, domNode);
        }
        return newNode;
    }
    function _VirtualDom_applyPatchReorder(domNode, patch) {
        var data = patch.s;
        // remove end inserts
        var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);
        // removals
        domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);
        // inserts
        var inserts = data.x;
        for (var i = 0; i < inserts.length; i++) {
            var insert = inserts[i];
            var entry = insert.A;
            var node = entry.c === 2
                ? entry.s
                : _VirtualDom_render(entry.z, patch.u);
            domNode.insertBefore(node, domNode.childNodes[insert.r]);
        }
        // add end inserts
        if (frag) {
            _VirtualDom_appendChild(domNode, frag);
        }
        return domNode;
    }
    function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch) {
        if (!endInserts) {
            return;
        }
        var frag = _VirtualDom_doc.createDocumentFragment();
        for (var i = 0; i < endInserts.length; i++) {
            var insert = endInserts[i];
            var entry = insert.A;
            _VirtualDom_appendChild(frag, entry.c === 2
                ? entry.s
                : _VirtualDom_render(entry.z, patch.u));
        }
        return frag;
    }
    function _VirtualDom_virtualize(node) {
        // TEXT NODES
        if (node.nodeType === 3) {
            return _VirtualDom_text(node.textContent);
        }
        // WEIRD NODES
        if (node.nodeType !== 1) {
            return _VirtualDom_text("");
        }
        // ELEMENT NODES
        var attrList = _List_Nil;
        var attrs = node.attributes;
        for (var i = attrs.length; i--;) {
            var attr = attrs[i];
            var name = attr.name;
            var value = attr.value;
            attrList = _List_Cons(_VirtualDom_attribute_fn(name, value), attrList);
        }
        var tag = node.tagName.toLowerCase();
        var kidList = _List_Nil;
        var kids = node.childNodes;
        for (var i = kids.length; i--;) {
            kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
        }
        return A3(_VirtualDom_node, tag, attrList, kidList);
    }
    function _VirtualDom_dekey(keyedNode) {
        var keyedKids = keyedNode.e;
        var len = keyedKids.length;
        var kids = new Array(len);
        for (var i = 0; i < len; i++) {
            kids[i] = keyedKids[i].b;
        }
        return {
            $: 1,
            c: keyedNode.c,
            d: keyedNode.d,
            e: kids,
            f: keyedNode.f,
            b: keyedNode.b
        };
    }
    function _Url_percentEncode(string) {
        return encodeURIComponent(string);
    }
    function _Url_percentDecode(string) {
        try {
            return $elm$core$Maybe$Just(decodeURIComponent(string));
        }
        catch (e) {
            return $elm$core$Maybe$Nothing;
        }
    }
    var wireRefs = (function () {
        var refs = new Map();
        var counter = 0; // uInt32 max
        var f = {};
        f.add = function (obj) {
            counter++;
            refs.set(counter, obj);
            return counter;
        };
        f.getFinal = function (k) {
            let v = refs.get(k);
            refs.delete(k);
            return v;
        };
        f.clear = function () {
            refs = new Map();
        };
        f.all = function () {
            return [refs.keys(), refs];
        };
        return f;
    })();
    var _LamderaCodecs_encodeWithRef = function (a) {
        return wireRefs.add(a);
    };
    var _LamderaCodecs_decodeWithRef = function (ref) {
        return wireRefs.getFinal(ref);
    };
    var _LamderaCodecs_encodeBytes = function (s) { return _Lamdera_Json_wrap(s); };
    function _Lamdera_Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
    function _Lamdera_Json_wrap(value) { return value; }
    function _LamderaCodecs_Json_decodePrim(decoder) {
        return { $: 0, a: decoder };
    }
    var _LamderaCodecs_decodeBytes = _Json_decodePrim(function (value) {
        return (typeof value === "object" && value instanceof DataView)
            ? $elm$core$Result$Ok(value)
            : _Json_expecting("a DataView", value);
        // : console.log('error: expecting DataView, got', value) ;
    });
    var _LamderaCodecs_debug = function (s) {
        console.log(s);
        return _Utils_Tuple0;
    };
    // Duplicate of _Bytes_decode that expects all bytes to be consumed,
    // otherwise it fails to decode.
    var _LamderaCodecs_bytesDecodeStrict_fn = function (decoder, bytes) {
        try {
            var res = A2(decoder, bytes, 0);
            const w = bytes.byteLength;
            if (w !== res.a) {
                // For now just log issues, in future we'll actually fail on this case
                console.log(`❌ bytesDecodeStrict did not consume all bytes: length:${w}, consumed:${res.a}`, res.b, new Uint8Array(bytes.buffer));
            }
            return $elm$core$Maybe$Just(res.b);
        }
        catch (e) {
            console.log("\u274C bytesDecodeStrict unexpected error:", e);
            return $elm$core$Maybe$Nothing;
        }
    }, _LamderaCodecs_bytesDecodeStrict_fn_unwrapped = function (decoder, bytes) {
        try {
            var res = decoder(bytes, 0);
            const w = bytes.byteLength;
            if (w !== res.a) {
                // For now just log issues, in future we'll actually fail on this case
                console.log(`❌ bytesDecodeStrict did not consume all bytes: length:${w}, consumed:${res.a}`, res.b, new Uint8Array(bytes.buffer));
            }
            return $elm$core$Maybe$Just(res.b);
        }
        catch (e) {
            console.log("\u274C bytesDecodeStrict unexpected error:", e);
            return $elm$core$Maybe$Nothing;
        }
    }, _LamderaCodecs_bytesDecodeStrict = F2(_LamderaCodecs_bytesDecodeStrict_fn);
    var $elm$core$List$cons = _List_cons;
    var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
    var $elm$core$Array$foldr_fn = function (func, baseCase, _v0) {
        var tree = _v0.c;
        var tail = _v0.d;
        var helper = F2(function (node, acc) {
            if (!node.$) {
                var subTree = node.a;
                return _JsArray_foldr_fn(helper, acc, subTree);
            }
            else {
                var values = node.a;
                return _JsArray_foldr_fn(func, acc, values);
            }
        });
        return _JsArray_foldr_fn(helper, _JsArray_foldr_fn(func, baseCase, tail), tree);
    }, $elm$core$Array$foldr = F3($elm$core$Array$foldr_fn);
    var $elm$core$Array$toList = function (array) {
        return $elm$core$Array$foldr_fn($elm$core$List$cons, _List_Nil, array);
    };
    var $elm$core$Dict$foldr_fn = function (func, acc, t) {
        foldr: while (true) {
            if (t.$ === -2) {
                return acc;
            }
            else {
                var key = t.b;
                var value = t.c;
                var left = t.d;
                var right = t.e;
                var $temp$func = func, $temp$acc = A3(func, key, value, $elm$core$Dict$foldr_fn(func, acc, right)), $temp$t = left;
                func = $temp$func;
                acc = $temp$acc;
                t = $temp$t;
                continue foldr;
            }
        }
    }, $elm$core$Dict$foldr_fn_unwrapped = function (func, acc, t) {
        foldr: while (true) {
            if (t.$ === -2) {
                return acc;
            }
            else {
                var key = t.b;
                var value = t.c;
                var left = t.d;
                var right = t.e;
                var $temp$func = func, $temp$acc = func(key, value, $elm$core$Dict$foldr_fn_unwrapped(func, acc, right)), $temp$t = left;
                func = $temp$func;
                acc = $temp$acc;
                t = $temp$t;
                continue foldr;
            }
        }
    }, $elm$core$Dict$foldr = F3($elm$core$Dict$foldr_fn);
    var $elm$core$Dict$toList = function (dict) {
        return $elm$core$Dict$foldr_fn_unwrapped(function (key, value, list) {
            return _List_Cons(_Utils_Tuple2(key, value), list);
        }, _List_Nil, dict);
    };
    var $elm$core$Dict$keys = function (dict) {
        return $elm$core$Dict$foldr_fn_unwrapped(function (key, value, keyList) {
            return _List_Cons(key, keyList);
        }, _List_Nil, dict);
    };
    var $elm$core$Set$toList = function (_v0) {
        var dict = _v0;
        return $elm$core$Dict$keys(dict);
    };
    var $elm$core$Basics$EQ = 1;
    var $elm$core$Basics$GT = 2;
    var $elm$core$Basics$LT = 0;
    var $author$project$Pages$Internal$Platform$Cli$GotBuildError = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Pages$Internal$Platform$Cli$GotDataBatch = function (a) {
        return { $: 0, a: a };
    };
    var $elm$core$Basics$True = 0;
    var $elm$core$Result$Err = function (a) {
        return { $: 1, a: a };
    };
    var $elm$json$Json$Decode$Failure_fn = function (a, b) {
        return { $: 3, a: a, b: b };
    }, $elm$json$Json$Decode$Failure = F2($elm$json$Json$Decode$Failure_fn);
    var $elm$json$Json$Decode$Field_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $elm$json$Json$Decode$Field = F2($elm$json$Json$Decode$Field_fn);
    var $elm$json$Json$Decode$Index_fn = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $elm$json$Json$Decode$Index = F2($elm$json$Json$Decode$Index_fn);
    var $elm$core$Result$Ok = function (a) {
        return { $: 0, a: a };
    };
    var $elm$json$Json$Decode$OneOf = function (a) {
        return { $: 2, a: a };
    };
    var $elm$core$Basics$False = 1;
    var $elm$core$Basics$add = _Basics_add;
    var $elm$core$Maybe$Just = function (a) { return { $: 0, a: a }; };
    var $elm$core$Maybe$Nothing = { $: 1, a: null };
    var $elm$core$String$all = _String_all;
    var $elm$core$Basics$and = _Basics_and;
    var $elm$core$Basics$append = _Utils_append;
    var $elm$json$Json$Encode$encode = _Json_encode;
    var $elm$core$String$fromInt = _String_fromNumber;
    var $elm$core$String$join_fn = function (sep, chunks) {
        return _String_join_fn(sep, _List_toArray(chunks));
    }, $elm$core$String$join = F2($elm$core$String$join_fn);
    var $elm$core$String$split_fn = function (sep, string) {
        return _List_fromArray(_String_split_fn(sep, string));
    }, $elm$core$String$split = F2($elm$core$String$split_fn);
    var $elm$json$Json$Decode$indent = function (str) {
        return $elm$core$String$join_fn("\n    ", $elm$core$String$split_fn("\n", str));
    };
    var $elm$core$List$foldl_fn = function (func, acc, list) {
        foldl: while (true) {
            if (!list.b) {
                return acc;
            }
            else {
                var x = list.a;
                var xs = list.b;
                var $temp$func = func, $temp$acc = A2(func, x, acc), $temp$list = xs;
                func = $temp$func;
                acc = $temp$acc;
                list = $temp$list;
                continue foldl;
            }
        }
    }, $elm$core$List$foldl_fn_unwrapped = function (func, acc, list) {
        foldl: while (true) {
            if (!list.b) {
                return acc;
            }
            else {
                var x = list.a;
                var xs = list.b;
                var $temp$func = func, $temp$acc = func(x, acc), $temp$list = xs;
                func = $temp$func;
                acc = $temp$acc;
                list = $temp$list;
                continue foldl;
            }
        }
    }, $elm$core$List$foldl = F3($elm$core$List$foldl_fn);
    var $elm$core$List$length = function (xs) {
        return $elm$core$List$foldl_fn_unwrapped(function (_v0, i) {
            return i + 1;
        }, 0, xs);
    };
    var $elm$core$List$map2 = _List_map2;
    var $elm$core$Basics$le = _Utils_le;
    var $elm$core$Basics$sub = _Basics_sub;
    var $elm$core$List$rangeHelp_fn = function (lo, hi, list) {
        rangeHelp: while (true) {
            if (_Utils_cmp(lo, hi) < 1) {
                var $temp$lo = lo, $temp$hi = hi - 1, $temp$list = _List_Cons(hi, list);
                lo = $temp$lo;
                hi = $temp$hi;
                list = $temp$list;
                continue rangeHelp;
            }
            else {
                return list;
            }
        }
    }, $elm$core$List$rangeHelp = F3($elm$core$List$rangeHelp_fn);
    var $elm$core$List$range_fn = function (lo, hi) {
        return $elm$core$List$rangeHelp_fn(lo, hi, _List_Nil);
    }, $elm$core$List$range = F2($elm$core$List$range_fn);
    var $elm$core$List$indexedMap_fn = function (f, xs) {
        return _List_map2_fn(f, $elm$core$List$range_fn(0, $elm$core$List$length(xs) - 1), xs);
    }, $elm$core$List$indexedMap = F2($elm$core$List$indexedMap_fn);
    var $elm$core$Char$toCode = _Char_toCode;
    var $elm$core$Char$isLower = function (_char) {
        var code = $elm$core$Char$toCode(_char);
        return (97 <= code) && (code <= 122);
    };
    var $elm$core$Char$isUpper = function (_char) {
        var code = $elm$core$Char$toCode(_char);
        return (code <= 90) && (65 <= code);
    };
    var $elm$core$Basics$or = _Basics_or;
    var $elm$core$Char$isAlpha = function (_char) {
        return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
    };
    var $elm$core$Char$isDigit = function (_char) {
        var code = $elm$core$Char$toCode(_char);
        return (code <= 57) && (48 <= code);
    };
    var $elm$core$Char$isAlphaNum = function (_char) {
        return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
    };
    var $elm$core$List$reverse = function (list) {
        return $elm$core$List$foldl_fn($elm$core$List$cons, _List_Nil, list);
    };
    var $elm$core$String$uncons = _String_uncons;
    var $elm$json$Json$Decode$errorOneOf_fn = function (i, error) {
        return "\n\n(" + ($elm$core$String$fromInt(i + 1) + (") " + $elm$json$Json$Decode$indent($elm$json$Json$Decode$errorToString(error))));
    }, $elm$json$Json$Decode$errorOneOf = F2($elm$json$Json$Decode$errorOneOf_fn);
    var $elm$json$Json$Decode$errorToString = function (error) {
        return $elm$json$Json$Decode$errorToStringHelp_fn(error, _List_Nil);
    };
    var $elm$json$Json$Decode$errorToStringHelp_fn = function (error, context) {
        errorToStringHelp: while (true) {
            switch (error.$) {
                case 0:
                    var f = error.a;
                    var err = error.b;
                    var isSimple = function () {
                        var _v1 = $elm$core$String$uncons(f);
                        if (_v1.$ === 1) {
                            return false;
                        }
                        else {
                            var _v2 = _v1.a;
                            var _char = _v2.a;
                            var rest = _v2.b;
                            return $elm$core$Char$isAlpha(_char) && _String_all_fn($elm$core$Char$isAlphaNum, rest);
                        }
                    }();
                    var fieldName = isSimple ? ("." + f) : ("['" + (f + "']"));
                    var $temp$error = err, $temp$context = _List_Cons(fieldName, context);
                    error = $temp$error;
                    context = $temp$context;
                    continue errorToStringHelp;
                case 1:
                    var i = error.a;
                    var err = error.b;
                    var indexName = "[" + ($elm$core$String$fromInt(i) + "]");
                    var $temp$error = err, $temp$context = _List_Cons(indexName, context);
                    error = $temp$error;
                    context = $temp$context;
                    continue errorToStringHelp;
                case 2:
                    var errors = error.a;
                    if (!errors.b) {
                        return "Ran into a Json.Decode.oneOf with no possibilities" + function () {
                            if (!context.b) {
                                return "!";
                            }
                            else {
                                return " at json" + $elm$core$String$join_fn("", $elm$core$List$reverse(context));
                            }
                        }();
                    }
                    else {
                        if (!errors.b.b) {
                            var err = errors.a;
                            var $temp$error = err, $temp$context = context;
                            error = $temp$error;
                            context = $temp$context;
                            continue errorToStringHelp;
                        }
                        else {
                            var starter = function () {
                                if (!context.b) {
                                    return "Json.Decode.oneOf";
                                }
                                else {
                                    return "The Json.Decode.oneOf at json" + $elm$core$String$join_fn("", $elm$core$List$reverse(context));
                                }
                            }();
                            var introduction = starter + (" failed in the following " + ($elm$core$String$fromInt($elm$core$List$length(errors)) + " ways:"));
                            return $elm$core$String$join_fn("\n\n", _List_Cons(introduction, $elm$core$List$indexedMap_fn($elm$json$Json$Decode$errorOneOf, errors)));
                        }
                    }
                default:
                    var msg = error.a;
                    var json = error.b;
                    var introduction = function () {
                        if (!context.b) {
                            return "Problem with the given value:\n\n";
                        }
                        else {
                            return "Problem with the value at json" + ($elm$core$String$join_fn("", $elm$core$List$reverse(context)) + ":\n\n    ");
                        }
                    }();
                    return introduction + ($elm$json$Json$Decode$indent(_Json_encode_fn(4, json)) + ("\n\n" + msg));
            }
        }
    }, $elm$json$Json$Decode$errorToStringHelp = F2($elm$json$Json$Decode$errorToStringHelp_fn);
    var $elm$core$Array$branchFactor = 32;
    var $elm$core$Array$Array_elm_builtin_fn = function (a, b, c, d) {
        return { $: 0, a: a, b: b, c: c, d: d };
    }, $elm$core$Array$Array_elm_builtin = F4($elm$core$Array$Array_elm_builtin_fn);
    var $elm$core$Elm$JsArray$empty = _JsArray_empty;
    var $elm$core$Basics$ceiling = _Basics_ceiling;
    var $elm$core$Basics$fdiv = _Basics_fdiv;
    var $elm$core$Basics$logBase_fn = function (base, number) {
        return _Basics_log(number) / _Basics_log(base);
    }, $elm$core$Basics$logBase = F2($elm$core$Basics$logBase_fn);
    var $elm$core$Basics$toFloat = _Basics_toFloat;
    var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling($elm$core$Basics$logBase_fn(2, $elm$core$Array$branchFactor));
    var $elm$core$Array$empty = $elm$core$Array$Array_elm_builtin_fn(0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
    var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
    var $elm$core$Array$Leaf = function (a) {
        return { $: 1, a: a };
    };
    var $elm$core$Basics$apL_fn = function (f, x) {
        return f(x);
    }, $elm$core$Basics$apL = F2($elm$core$Basics$apL_fn);
    var $elm$core$Basics$apR_fn = function (x, f) {
        return f(x);
    }, $elm$core$Basics$apR = F2($elm$core$Basics$apR_fn);
    var $elm$core$Basics$eq = _Utils_equal;
    var $elm$core$Basics$floor = _Basics_floor;
    var $elm$core$Elm$JsArray$length = _JsArray_length;
    var $elm$core$Basics$gt = _Utils_gt;
    var $elm$core$Basics$max_fn = function (x, y) {
        return (_Utils_cmp(x, y) > 0) ? x : y;
    }, $elm$core$Basics$max = F2($elm$core$Basics$max_fn);
    var $elm$core$Basics$mul = _Basics_mul;
    var $elm$core$Array$SubTree = function (a) {
        return { $: 0, a: a };
    };
    var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
    var $elm$core$Array$compressNodes_fn = function (nodes, acc) {
        compressNodes: while (true) {
            var _v0 = _JsArray_initializeFromList_fn($elm$core$Array$branchFactor, nodes);
            var node = _v0.a;
            var remainingNodes = _v0.b;
            var newAcc = _List_Cons($elm$core$Array$SubTree(node), acc);
            if (!remainingNodes.b) {
                return $elm$core$List$reverse(newAcc);
            }
            else {
                var $temp$nodes = remainingNodes, $temp$acc = newAcc;
                nodes = $temp$nodes;
                acc = $temp$acc;
                continue compressNodes;
            }
        }
    }, $elm$core$Array$compressNodes = F2($elm$core$Array$compressNodes_fn);
    var $elm$core$Tuple$first = function (_v0) {
        var x = _v0.a;
        return x;
    };
    var $elm$core$Array$treeFromBuilder_fn = function (nodeList, nodeListSize) {
        treeFromBuilder: while (true) {
            var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
            if (newNodeSize === 1) {
                return _JsArray_initializeFromList_fn($elm$core$Array$branchFactor, nodeList).a;
            }
            else {
                var $temp$nodeList = $elm$core$Array$compressNodes_fn(nodeList, _List_Nil), $temp$nodeListSize = newNodeSize;
                nodeList = $temp$nodeList;
                nodeListSize = $temp$nodeListSize;
                continue treeFromBuilder;
            }
        }
    }, $elm$core$Array$treeFromBuilder = F2($elm$core$Array$treeFromBuilder_fn);
    var $elm$core$Array$builderToArray_fn = function (reverseNodeList, builder) {
        if (!builder.z) {
            return $elm$core$Array$Array_elm_builtin_fn($elm$core$Elm$JsArray$length(builder.D), $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, builder.D);
        }
        else {
            var treeLen = builder.z * $elm$core$Array$branchFactor;
            var depth = $elm$core$Basics$floor($elm$core$Basics$logBase_fn($elm$core$Array$branchFactor, treeLen - 1));
            var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.E) : builder.E;
            var tree = $elm$core$Array$treeFromBuilder_fn(correctNodeList, builder.z);
            return $elm$core$Array$Array_elm_builtin_fn($elm$core$Elm$JsArray$length(builder.D) + treeLen, $elm$core$Basics$max_fn(5, depth * $elm$core$Array$shiftStep), tree, builder.D);
        }
    }, $elm$core$Array$builderToArray = F2($elm$core$Array$builderToArray_fn);
    var $elm$core$Basics$idiv = _Basics_idiv;
    var $elm$core$Basics$lt = _Utils_lt;
    var $elm$core$Array$initializeHelp_fn = function (fn, fromIndex, len, nodeList, tail) {
        initializeHelp: while (true) {
            if (fromIndex < 0) {
                return $elm$core$Array$builderToArray_fn(false, { E: nodeList, z: (len / $elm$core$Array$branchFactor) | 0, D: tail });
            }
            else {
                var leaf = $elm$core$Array$Leaf(_JsArray_initialize_fn($elm$core$Array$branchFactor, fromIndex, fn));
                var $temp$fn = fn, $temp$fromIndex = fromIndex - $elm$core$Array$branchFactor, $temp$len = len, $temp$nodeList = _List_Cons(leaf, nodeList), $temp$tail = tail;
                fn = $temp$fn;
                fromIndex = $temp$fromIndex;
                len = $temp$len;
                nodeList = $temp$nodeList;
                tail = $temp$tail;
                continue initializeHelp;
            }
        }
    }, $elm$core$Array$initializeHelp = F5($elm$core$Array$initializeHelp_fn);
    var $elm$core$Basics$remainderBy = _Basics_remainderBy;
    var $elm$core$Array$initialize_fn = function (len, fn) {
        if (len <= 0) {
            return $elm$core$Array$empty;
        }
        else {
            var tailLen = len % $elm$core$Array$branchFactor;
            var tail = _JsArray_initialize_fn(tailLen, len - tailLen, fn);
            var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
            return $elm$core$Array$initializeHelp_fn(fn, initialFromIndex, len, _List_Nil, tail);
        }
    }, $elm$core$Array$initialize = F2($elm$core$Array$initialize_fn);
    var $elm$core$Result$isOk = function (result) {
        if (!result.$) {
            return true;
        }
        else {
            return false;
        }
    };
    var $elm$json$Json$Decode$andThen = _Json_andThen;
    var $elm$core$Platform$Sub$batch = _Platform_batch;
    var $author$project$RequestsAndPending$Response_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $author$project$RequestsAndPending$Response = F2($author$project$RequestsAndPending$Response_fn);
    var $author$project$RequestsAndPending$BytesBody = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$RequestsAndPending$JsonBody = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$RequestsAndPending$StringBody = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$RequestsAndPending$WhateverBody = { $: 3 };
    var $elm$core$Basics$composeR_fn = function (f, g, x) {
        return g(f(x));
    }, $elm$core$Basics$composeR = F3($elm$core$Basics$composeR_fn);
    var $elm$json$Json$Decode$fail = _Json_fail;
    var $elm$json$Json$Decode$field = _Json_decodeField;
    var $elm$json$Json$Decode$map = _Json_map1;
    var $elm$core$Maybe$map_fn = function (f, maybe) {
        if (!maybe.$) {
            var value = maybe.a;
            return $elm$core$Maybe$Just(f(value));
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    }, $elm$core$Maybe$map = F2($elm$core$Maybe$map_fn);
    var $elm$json$Json$Decode$string = _Json_decodeString;
    var $elm$json$Json$Decode$succeed = _Json_succeed;
    var $elm$bytes$Bytes$Encode$getWidth = function (builder) {
        switch (builder.$) {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 4;
            case 3:
                return 1;
            case 4:
                return 2;
            case 5:
                return 4;
            case 6:
                return 4;
            case 7:
                return 8;
            case 8:
                var w = builder.a;
                return w;
            case 9:
                var w = builder.a;
                return w;
            default:
                var bs = builder.a;
                return _Bytes_width(bs);
        }
    };
    var $elm$bytes$Bytes$LE = 0;
    var $elm$bytes$Bytes$Encode$write_fn = function (builder, mb, offset) {
        switch (builder.$) {
            case 0:
                var n = builder.a;
                return _Bytes_write_i8_fn(mb, offset, n);
            case 1:
                var e = builder.a;
                var n = builder.b;
                return _Bytes_write_i16_fn(mb, offset, n, !e);
            case 2:
                var e = builder.a;
                var n = builder.b;
                return _Bytes_write_i32_fn(mb, offset, n, !e);
            case 3:
                var n = builder.a;
                return _Bytes_write_u8_fn(mb, offset, n);
            case 4:
                var e = builder.a;
                var n = builder.b;
                return _Bytes_write_u16_fn(mb, offset, n, !e);
            case 5:
                var e = builder.a;
                var n = builder.b;
                return _Bytes_write_u32_fn(mb, offset, n, !e);
            case 6:
                var e = builder.a;
                var n = builder.b;
                return _Bytes_write_f32_fn(mb, offset, n, !e);
            case 7:
                var e = builder.a;
                var n = builder.b;
                return _Bytes_write_f64_fn(mb, offset, n, !e);
            case 8:
                var bs = builder.b;
                return $elm$bytes$Bytes$Encode$writeSequence_fn(bs, mb, offset);
            case 9:
                var s = builder.b;
                return _Bytes_write_string_fn(mb, offset, s);
            default:
                var bs = builder.a;
                return _Bytes_write_bytes_fn(mb, offset, bs);
        }
    }, $elm$bytes$Bytes$Encode$write = F3($elm$bytes$Bytes$Encode$write_fn);
    var $elm$bytes$Bytes$Encode$writeSequence_fn = function (builders, mb, offset) {
        writeSequence: while (true) {
            if (!builders.b) {
                return offset;
            }
            else {
                var b = builders.a;
                var bs = builders.b;
                var $temp$builders = bs, $temp$mb = mb, $temp$offset = $elm$bytes$Bytes$Encode$write_fn(b, mb, offset);
                builders = $temp$builders;
                mb = $temp$mb;
                offset = $temp$offset;
                continue writeSequence;
            }
        }
    }, $elm$bytes$Bytes$Encode$writeSequence = F3($elm$bytes$Bytes$Encode$writeSequence_fn);
    var $elm$bytes$Bytes$Encode$encode = _Bytes_encode;
    var $elm$core$String$length = _String_length;
    var $elm$core$String$slice = _String_slice;
    var $elm$core$String$dropLeft_fn = function (n, string) {
        return (n < 1) ? string : _String_slice_fn(n, $elm$core$String$length(string), string);
    }, $elm$core$String$dropLeft = F2($elm$core$String$dropLeft_fn);
    var $elm$bytes$Bytes$BE = 1;
    var $danfishgold$base64_bytes$Encode$isValidChar = function (c) {
        if ($elm$core$Char$isAlphaNum(c)) {
            return true;
        }
        else {
            switch (c) {
                case "+":
                    return true;
                case "/":
                    return true;
                default:
                    return false;
            }
        }
    };
    var $elm$core$Bitwise$or = _Bitwise_or;
    var $elm$bytes$Bytes$Encode$Seq_fn = function (a, b) {
        return { $: 8, a: a, b: b };
    }, $elm$bytes$Bytes$Encode$Seq = F2($elm$bytes$Bytes$Encode$Seq_fn);
    var $elm$bytes$Bytes$Encode$getWidths_fn = function (width, builders) {
        getWidths: while (true) {
            if (!builders.b) {
                return width;
            }
            else {
                var b = builders.a;
                var bs = builders.b;
                var $temp$width = width + $elm$bytes$Bytes$Encode$getWidth(b), $temp$builders = bs;
                width = $temp$width;
                builders = $temp$builders;
                continue getWidths;
            }
        }
    }, $elm$bytes$Bytes$Encode$getWidths = F2($elm$bytes$Bytes$Encode$getWidths_fn);
    var $elm$bytes$Bytes$Encode$sequence = function (builders) {
        return $elm$bytes$Bytes$Encode$Seq_fn($elm$bytes$Bytes$Encode$getWidths_fn(0, builders), builders);
    };
    var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
    var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
    var $elm$core$Basics$ge = _Utils_ge;
    var $elm$core$Basics$negate = function (n) {
        return -n;
    };
    var $danfishgold$base64_bytes$Encode$unsafeConvertChar = function (_char) {
        var key = $elm$core$Char$toCode(_char);
        if ((key >= 65) && (key <= 90)) {
            return key - 65;
        }
        else {
            if ((key >= 97) && (key <= 122)) {
                return (key - 97) + 26;
            }
            else {
                if ((key >= 48) && (key <= 57)) {
                    return ((key - 48) + 26) + 26;
                }
                else {
                    switch (_char) {
                        case "+":
                            return 62;
                        case "/":
                            return 63;
                        default:
                            return -1;
                    }
                }
            }
        }
    };
    var $elm$bytes$Bytes$Encode$U16_fn = function (a, b) {
        return { $: 4, a: a, b: b };
    }, $elm$bytes$Bytes$Encode$U16 = F2($elm$bytes$Bytes$Encode$U16_fn);
    var $elm$bytes$Bytes$Encode$unsignedInt16 = $elm$bytes$Bytes$Encode$U16;
    var $elm$bytes$Bytes$Encode$U8 = function (a) {
        return { $: 3, a: a };
    };
    var $elm$bytes$Bytes$Encode$unsignedInt8 = $elm$bytes$Bytes$Encode$U8;
    var $danfishgold$base64_bytes$Encode$encodeCharacters_fn = function (a, b, c, d) {
        if ($danfishgold$base64_bytes$Encode$isValidChar(a) && $danfishgold$base64_bytes$Encode$isValidChar(b)) {
            var n2 = $danfishgold$base64_bytes$Encode$unsafeConvertChar(b);
            var n1 = $danfishgold$base64_bytes$Encode$unsafeConvertChar(a);
            if ("=" === d) {
                if ("=" === c) {
                    var n = (n1 << 18) | (n2 << 12);
                    var b1 = n >> 16;
                    return $elm$core$Maybe$Just($elm$bytes$Bytes$Encode$unsignedInt8(b1));
                }
                else {
                    if ($danfishgold$base64_bytes$Encode$isValidChar(c)) {
                        var n3 = $danfishgold$base64_bytes$Encode$unsafeConvertChar(c);
                        var n = ((n1 << 18) | (n2 << 12)) | (n3 << 6);
                        var combined = n >> 8;
                        return $elm$core$Maybe$Just($elm$bytes$Bytes$Encode$U16_fn(1, combined));
                    }
                    else {
                        return $elm$core$Maybe$Nothing;
                    }
                }
            }
            else {
                if ($danfishgold$base64_bytes$Encode$isValidChar(c) && $danfishgold$base64_bytes$Encode$isValidChar(d)) {
                    var n4 = $danfishgold$base64_bytes$Encode$unsafeConvertChar(d);
                    var n3 = $danfishgold$base64_bytes$Encode$unsafeConvertChar(c);
                    var n = ((n1 << 18) | (n2 << 12)) | ((n3 << 6) | n4);
                    var combined = n >> 8;
                    var b3 = n;
                    return $elm$core$Maybe$Just($elm$bytes$Bytes$Encode$sequence(_List_fromArray([
                        $elm$bytes$Bytes$Encode$U16_fn(1, combined),
                        $elm$bytes$Bytes$Encode$unsignedInt8(b3)
                    ])));
                }
                else {
                    return $elm$core$Maybe$Nothing;
                }
            }
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    }, $danfishgold$base64_bytes$Encode$encodeCharacters = F4($danfishgold$base64_bytes$Encode$encodeCharacters_fn);
    var $elm$core$String$left_fn = function (n, string) {
        return (n < 1) ? "" : _String_slice_fn(0, n, string);
    }, $elm$core$String$left = F2($elm$core$String$left_fn);
    var $elm$core$String$foldr = _String_foldr;
    var $elm$core$String$toList = function (string) {
        return _String_foldr_fn($elm$core$List$cons, _List_Nil, string);
    };
    var $danfishgold$base64_bytes$Encode$encodeChunks_fn = function (input, accum) {
        encodeChunks: while (true) {
            var _v0 = $elm$core$String$toList($elm$core$String$left_fn(4, input));
            _v0$4: while (true) {
                if (!_v0.b) {
                    return $elm$core$Maybe$Just(accum);
                }
                else {
                    if (_v0.b.b) {
                        if (_v0.b.b.b) {
                            if (_v0.b.b.b.b) {
                                if (!_v0.b.b.b.b.b) {
                                    var a = _v0.a;
                                    var _v1 = _v0.b;
                                    var b = _v1.a;
                                    var _v2 = _v1.b;
                                    var c = _v2.a;
                                    var _v3 = _v2.b;
                                    var d = _v3.a;
                                    var _v4 = $danfishgold$base64_bytes$Encode$encodeCharacters_fn(a, b, c, d);
                                    if (!_v4.$) {
                                        var enc = _v4.a;
                                        var $temp$input = $elm$core$String$dropLeft_fn(4, input), $temp$accum = _List_Cons(enc, accum);
                                        input = $temp$input;
                                        accum = $temp$accum;
                                        continue encodeChunks;
                                    }
                                    else {
                                        return $elm$core$Maybe$Nothing;
                                    }
                                }
                                else {
                                    break _v0$4;
                                }
                            }
                            else {
                                var a = _v0.a;
                                var _v5 = _v0.b;
                                var b = _v5.a;
                                var _v6 = _v5.b;
                                var c = _v6.a;
                                var _v7 = $danfishgold$base64_bytes$Encode$encodeCharacters_fn(a, b, c, "=");
                                if (_v7.$ === 1) {
                                    return $elm$core$Maybe$Nothing;
                                }
                                else {
                                    var enc = _v7.a;
                                    return $elm$core$Maybe$Just(_List_Cons(enc, accum));
                                }
                            }
                        }
                        else {
                            var a = _v0.a;
                            var _v8 = _v0.b;
                            var b = _v8.a;
                            var _v9 = $danfishgold$base64_bytes$Encode$encodeCharacters_fn(a, b, "=", "=");
                            if (_v9.$ === 1) {
                                return $elm$core$Maybe$Nothing;
                            }
                            else {
                                var enc = _v9.a;
                                return $elm$core$Maybe$Just(_List_Cons(enc, accum));
                            }
                        }
                    }
                    else {
                        break _v0$4;
                    }
                }
            }
            return $elm$core$Maybe$Nothing;
        }
    }, $danfishgold$base64_bytes$Encode$encodeChunks = F2($danfishgold$base64_bytes$Encode$encodeChunks_fn);
    var $danfishgold$base64_bytes$Encode$encoder = function (string) {
        return $elm$core$Maybe$map_fn(A2($elm$core$Basics$composeR, $elm$core$List$reverse, $elm$bytes$Bytes$Encode$sequence), $danfishgold$base64_bytes$Encode$encodeChunks_fn(string, _List_Nil));
    };
    var $danfishgold$base64_bytes$Encode$toBytes = function (string) {
        return $elm$core$Maybe$map_fn($elm$bytes$Bytes$Encode$encode, $danfishgold$base64_bytes$Encode$encoder(string));
    };
    var $danfishgold$base64_bytes$Base64$toBytes = $danfishgold$base64_bytes$Encode$toBytes;
    var $elm$json$Json$Decode$value = _Json_decodeValue;
    var $elm$core$Maybe$withDefault_fn = function (_default, maybe) {
        if (!maybe.$) {
            var value = maybe.a;
            return value;
        }
        else {
            return _default;
        }
    }, $elm$core$Maybe$withDefault = F2($elm$core$Maybe$withDefault_fn);
    var $author$project$RequestsAndPending$bodyDecoder = _Json_andThen_fn(function (bodyKind) {
        return _Json_decodeField_fn("body", function () {
            switch (bodyKind) {
                case "bytes":
                    return _Json_andThen_fn(function (base64String) {
                        return $elm$core$Maybe$withDefault_fn($elm$json$Json$Decode$fail("Couldn't parse base64 string into Bytes."), $elm$core$Maybe$map_fn(A2($elm$core$Basics$composeR, $author$project$RequestsAndPending$BytesBody, $elm$json$Json$Decode$succeed), $danfishgold$base64_bytes$Base64$toBytes(base64String)));
                    }, $elm$json$Json$Decode$string);
                case "string":
                    return _Json_map1_fn($author$project$RequestsAndPending$StringBody, $elm$json$Json$Decode$string);
                case "json":
                    return _Json_map1_fn($author$project$RequestsAndPending$JsonBody, $elm$json$Json$Decode$value);
                case "whatever":
                    return $elm$json$Json$Decode$succeed($author$project$RequestsAndPending$WhateverBody);
                default:
                    return $elm$json$Json$Decode$fail("Unexpected bodyKind.");
            }
        }());
    }, _Json_decodeField_fn("bodyKind", $elm$json$Json$Decode$string));
    var $elm$json$Json$Decode$map2 = _Json_map2;
    var $elm$json$Json$Decode$oneOf = _Json_oneOf;
    var $elm$json$Json$Decode$maybe = function (decoder) {
        return $elm$json$Json$Decode$oneOf(_List_fromArray([
            _Json_map1_fn($elm$core$Maybe$Just, decoder),
            $elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
        ]));
    };
    var $author$project$RequestsAndPending$RawResponse_fn = function (statusCode, statusText, headers, url) {
        return { dH: headers, Z: statusCode, a4: statusText, el: url };
    }, $author$project$RequestsAndPending$RawResponse = F4($author$project$RequestsAndPending$RawResponse_fn);
    var $elm$core$Dict$RBEmpty_elm_builtin = { $: -2 };
    var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
    var $elm$core$Dict$Black = 1;
    var $elm$core$Dict$RBNode_elm_builtin_fn = function (a, b, c, d, e) {
        return { $: -1, a: a, b: b, c: c, d: d, e: e };
    }, $elm$core$Dict$RBNode_elm_builtin = F5($elm$core$Dict$RBNode_elm_builtin_fn);
    var $elm$core$Dict$Red = 0;
    var $elm$core$Dict$balance_fn = function (color, key, value, left, right) {
        if ((right.$ === -1) && (!right.a)) {
            var _v1 = right.a;
            var rK = right.b;
            var rV = right.c;
            var rLeft = right.d;
            var rRight = right.e;
            if ((left.$ === -1) && (!left.a)) {
                var _v3 = left.a;
                var lK = left.b;
                var lV = left.c;
                var lLeft = left.d;
                var lRight = left.e;
                return $elm$core$Dict$RBNode_elm_builtin_fn(0, key, value, $elm$core$Dict$RBNode_elm_builtin_fn(1, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_fn(1, rK, rV, rLeft, rRight));
            }
            else {
                return $elm$core$Dict$RBNode_elm_builtin_fn(color, rK, rV, $elm$core$Dict$RBNode_elm_builtin_fn(0, key, value, left, rLeft), rRight);
            }
        }
        else {
            if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
                var _v5 = left.a;
                var lK = left.b;
                var lV = left.c;
                var _v6 = left.d;
                var _v7 = _v6.a;
                var llK = _v6.b;
                var llV = _v6.c;
                var llLeft = _v6.d;
                var llRight = _v6.e;
                var lRight = left.e;
                return $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, $elm$core$Dict$RBNode_elm_builtin_fn(1, llK, llV, llLeft, llRight), $elm$core$Dict$RBNode_elm_builtin_fn(1, key, value, lRight, right));
            }
            else {
                return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, value, left, right);
            }
        }
    }, $elm$core$Dict$balance = F5($elm$core$Dict$balance_fn);
    var $elm$core$Basics$compare = _Utils_compare;
    var $elm$core$Dict$insertHelp_fn = function (key, value, dict) {
        if (dict.$ === -2) {
            return $elm$core$Dict$RBNode_elm_builtin_fn(0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
        }
        else {
            var nColor = dict.a;
            var nKey = dict.b;
            var nValue = dict.c;
            var nLeft = dict.d;
            var nRight = dict.e;
            var _v1 = _Utils_compare_fn(key, nKey);
            switch (_v1) {
                case 0:
                    return $elm$core$Dict$balance_fn(nColor, nKey, nValue, $elm$core$Dict$insertHelp_fn(key, value, nLeft), nRight);
                case 1:
                    return $elm$core$Dict$RBNode_elm_builtin_fn(nColor, nKey, value, nLeft, nRight);
                default:
                    return $elm$core$Dict$balance_fn(nColor, nKey, nValue, nLeft, $elm$core$Dict$insertHelp_fn(key, value, nRight));
            }
        }
    }, $elm$core$Dict$insertHelp = F3($elm$core$Dict$insertHelp_fn);
    var $elm$core$Dict$insert_fn = function (key, value, dict) {
        var _v0 = $elm$core$Dict$insertHelp_fn(key, value, dict);
        if ((_v0.$ === -1) && (!_v0.a)) {
            var _v1 = _v0.a;
            var k = _v0.b;
            var v = _v0.c;
            var l = _v0.d;
            var r = _v0.e;
            return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, l, r);
        }
        else {
            var x = _v0;
            return x;
        }
    }, $elm$core$Dict$insert = F3($elm$core$Dict$insert_fn);
    var $elm$core$Dict$fromList = function (assocs) {
        return $elm$core$List$foldl_fn_unwrapped(function (_v0, dict) {
            var key = _v0.a;
            var value = _v0.b;
            return $elm$core$Dict$insert_fn(key, value, dict);
        }, $elm$core$Dict$empty, assocs);
    };
    var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
    var $elm$json$Json$Decode$dict = function (decoder) {
        return _Json_map1_fn($elm$core$Dict$fromList, $elm$json$Json$Decode$keyValuePairs(decoder));
    };
    var $elm$json$Json$Decode$int = _Json_decodeInt;
    var $elm$json$Json$Decode$map4 = _Json_map4;
    var $author$project$RequestsAndPending$responseDecoder = _Json_map4_fn($author$project$RequestsAndPending$RawResponse, _Json_decodeField_fn("statusCode", $elm$json$Json$Decode$int), _Json_decodeField_fn("statusText", $elm$json$Json$Decode$string), _Json_decodeField_fn("headers", $elm$json$Json$Decode$dict($elm$json$Json$Decode$string)), _Json_decodeField_fn("url", $elm$json$Json$Decode$string));
    var $author$project$RequestsAndPending$decoder = _Json_map2_fn($author$project$RequestsAndPending$Response, $elm$json$Json$Decode$maybe($author$project$RequestsAndPending$responseDecoder), $author$project$RequestsAndPending$bodyDecoder);
    var $elm$json$Json$Decode$list = _Json_decodeList;
    var $author$project$Pages$StaticHttp$Request$Request_fn = function (url, method, headers, body) {
        return { dl: body, dH: headers, dR: method, el: url };
    }, $author$project$Pages$StaticHttp$Request$Request = F4($author$project$Pages$StaticHttp$Request$Request_fn);
    var $elm$core$Basics$identity = function (x) {
        return x;
    };
    var $miniBill$elm_codec$Codec$Codec = $elm$core$Basics$identity;
    var $elm$json$Json$Encode$object = function (pairs) {
        return _Json_wrap($elm$core$List$foldl_fn_unwrapped(function (_v0, obj) {
            var k = _v0.a;
            var v = _v0.b;
            return _Json_addField_fn(k, v, obj);
        }, _Json_emptyObject(0), pairs));
    };
    var $miniBill$elm_codec$Codec$buildObject = function (_v0) {
        var om = _v0;
        return {
            e0: om.e0,
            bW: function (v) {
                return $elm$json$Json$Encode$object(om.bW(v));
            }
        };
    };
    var $author$project$Pages$Internal$StaticHttpBody$EmptyBody = { $: 0 };
    var $author$project$Pages$Internal$StaticHttpBody$JsonBody = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$Pages$Internal$StaticHttpBody$StringBody_fn = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $author$project$Pages$Internal$StaticHttpBody$StringBody = F2($author$project$Pages$Internal$StaticHttpBody$StringBody_fn);
    var $miniBill$elm_codec$Codec$buildCustom = function (_v0) {
        var am = _v0;
        return {
            e0: _Json_andThen_fn(function (tag) {
                var error = "tag " + (tag + "did not match");
                return _Json_decodeField_fn("args", A2(am.e0, tag, $elm$json$Json$Decode$fail(error)));
            }, _Json_decodeField_fn("tag", $elm$json$Json$Decode$string)),
            bW: function (v) {
                return am.cJ(v);
            }
        };
    };
    var $miniBill$elm_codec$Codec$CustomCodec = $elm$core$Basics$identity;
    var $miniBill$elm_codec$Codec$custom = function (match) {
        return {
            e0: function (_v0) {
                return $elm$core$Basics$identity;
            },
            cJ: match
        };
    };
    var $miniBill$elm_codec$Codec$build_fn = function (encoder_, decoder_) {
        return { e0: decoder_, bW: encoder_ };
    }, $miniBill$elm_codec$Codec$build = F2($miniBill$elm_codec$Codec$build_fn);
    var $elm$json$Json$Encode$string = _Json_wrap;
    var $miniBill$elm_codec$Codec$string = $miniBill$elm_codec$Codec$build_fn($elm$json$Json$Encode$string, $elm$json$Json$Decode$string);
    var $miniBill$elm_codec$Codec$value = { e0: $elm$json$Json$Decode$value, bW: $elm$core$Basics$identity };
    var $elm$json$Json$Encode$list_fn = function (func, entries) {
        return _Json_wrap($elm$core$List$foldl_fn(_Json_addEntry(func), _Json_emptyArray(0), entries));
    }, $elm$json$Json$Encode$list = F2($elm$json$Json$Encode$list_fn);
    var $miniBill$elm_codec$Codec$variant_fn = function (name, matchPiece, decoderPiece, _v0) {
        var am = _v0;
        var enc = function (v) {
            return $elm$json$Json$Encode$object(_List_fromArray([
                _Utils_Tuple2("tag", $elm$json$Json$Encode$string(name)),
                _Utils_Tuple2("args", $elm$json$Json$Encode$list_fn($elm$core$Basics$identity, v))
            ]));
        };
        var decoder_ = F2(function (tag, orElse) {
            return _Utils_eq(tag, name) ? decoderPiece : A2(am.e0, tag, orElse);
        });
        return {
            e0: decoder_,
            cJ: am.cJ(matchPiece(enc))
        };
    }, $miniBill$elm_codec$Codec$variant = F4($miniBill$elm_codec$Codec$variant_fn);
    var $miniBill$elm_codec$Codec$variant0_fn = function (name, ctor) {
        return A3($miniBill$elm_codec$Codec$variant, name, function (c) {
            return c(_List_Nil);
        }, $elm$json$Json$Decode$succeed(ctor));
    }, $miniBill$elm_codec$Codec$variant0 = F2($miniBill$elm_codec$Codec$variant0_fn);
    var $miniBill$elm_codec$Codec$decoder = function (_v0) {
        var m = _v0;
        return m.e0;
    };
    var $miniBill$elm_codec$Codec$encoder = function (_v0) {
        var m = _v0;
        return m.bW;
    };
    var $elm$json$Json$Decode$index = _Json_decodeIndex;
    var $miniBill$elm_codec$Codec$variant1_fn = function (name, ctor, m1) {
        return A3($miniBill$elm_codec$Codec$variant, name, F2(function (c, v) {
            return c(_List_fromArray([
                A2($miniBill$elm_codec$Codec$encoder, m1, v)
            ]));
        }), _Json_map1_fn(ctor, _Json_decodeIndex_fn(0, $miniBill$elm_codec$Codec$decoder(m1))));
    }, $miniBill$elm_codec$Codec$variant1 = F3($miniBill$elm_codec$Codec$variant1_fn);
    var $miniBill$elm_codec$Codec$variant2_fn = function (name, ctor, m1, m2) {
        return A3($miniBill$elm_codec$Codec$variant, name, F3(function (c, v1, v2) {
            return c(_List_fromArray([
                A2($miniBill$elm_codec$Codec$encoder, m1, v1),
                A2($miniBill$elm_codec$Codec$encoder, m2, v2)
            ]));
        }), _Json_map2_fn(ctor, _Json_decodeIndex_fn(0, $miniBill$elm_codec$Codec$decoder(m1)), _Json_decodeIndex_fn(1, $miniBill$elm_codec$Codec$decoder(m2))));
    }, $miniBill$elm_codec$Codec$variant2 = F4($miniBill$elm_codec$Codec$variant2_fn);
    var $author$project$Pages$Internal$StaticHttpBody$codec = $miniBill$elm_codec$Codec$buildCustom(A4($miniBill$elm_codec$Codec$variant1, "JsonBody", $author$project$Pages$Internal$StaticHttpBody$JsonBody, $miniBill$elm_codec$Codec$value, A5($miniBill$elm_codec$Codec$variant2, "StringBody", $author$project$Pages$Internal$StaticHttpBody$StringBody, $miniBill$elm_codec$Codec$string, $miniBill$elm_codec$Codec$string, A3($miniBill$elm_codec$Codec$variant0, "EmptyBody", $author$project$Pages$Internal$StaticHttpBody$EmptyBody, $miniBill$elm_codec$Codec$custom(F4(function (vEmpty, vString, vJson, value) {
        switch (value.$) {
            case 0:
                return vEmpty;
            case 1:
                var a = value.a;
                var b = value.b;
                return A2(vString, a, b);
            default:
                var body = value.a;
                return vJson(body);
        }
    }))))));
    var $miniBill$elm_codec$Codec$ObjectCodec = $elm$core$Basics$identity;
    var $miniBill$elm_codec$Codec$field_fn = function (name, getter, codec, _v0) {
        var ocodec = _v0;
        return {
            e0: _Json_map2_fn(F2(function (f, x) {
                return f(x);
            }), ocodec.e0, _Json_decodeField_fn(name, $miniBill$elm_codec$Codec$decoder(codec))),
            bW: function (v) {
                return _List_Cons(_Utils_Tuple2(name, A2($miniBill$elm_codec$Codec$encoder, codec, getter(v))), ocodec.bW(v));
            }
        };
    }, $miniBill$elm_codec$Codec$field = F4($miniBill$elm_codec$Codec$field_fn);
    var $miniBill$elm_codec$Codec$composite_fn = function (enc, dec, _v0) {
        var codec = _v0;
        return {
            e0: dec(codec.e0),
            bW: enc(codec.bW)
        };
    }, $miniBill$elm_codec$Codec$composite = F3($miniBill$elm_codec$Codec$composite_fn);
    var $miniBill$elm_codec$Codec$list_a0 = $elm$json$Json$Encode$list, $miniBill$elm_codec$Codec$list_a1 = $elm$json$Json$Decode$list, $miniBill$elm_codec$Codec$list = A2($miniBill$elm_codec$Codec$composite, $miniBill$elm_codec$Codec$list_a0, $miniBill$elm_codec$Codec$list_a1);
    var $miniBill$elm_codec$Codec$object = function (ctor) {
        return {
            e0: $elm$json$Json$Decode$succeed(ctor),
            bW: function (_v0) {
                return _List_Nil;
            }
        };
    };
    var $miniBill$elm_codec$Codec$tuple_fn = function (m1, m2) {
        return {
            e0: _Json_map2_fn(F2(function (a, b) {
                return _Utils_Tuple2(a, b);
            }), _Json_decodeIndex_fn(0, $miniBill$elm_codec$Codec$decoder(m1)), _Json_decodeIndex_fn(1, $miniBill$elm_codec$Codec$decoder(m2))),
            bW: function (_v0) {
                var v1 = _v0.a;
                var v2 = _v0.b;
                return $elm$json$Json$Encode$list_fn($elm$core$Basics$identity, _List_fromArray([
                    A2($miniBill$elm_codec$Codec$encoder, m1, v1),
                    A2($miniBill$elm_codec$Codec$encoder, m2, v2)
                ]));
            }
        };
    }, $miniBill$elm_codec$Codec$tuple = F2($miniBill$elm_codec$Codec$tuple_fn);
    var $author$project$Pages$StaticHttp$Request$codec = $miniBill$elm_codec$Codec$buildObject($miniBill$elm_codec$Codec$field_fn("body", function ($) {
        return $.dl;
    }, $author$project$Pages$Internal$StaticHttpBody$codec, $miniBill$elm_codec$Codec$field_fn("headers", function ($) {
        return $.dH;
    }, $miniBill$elm_codec$Codec$composite_fn($miniBill$elm_codec$Codec$list_a0, $miniBill$elm_codec$Codec$list_a1, $miniBill$elm_codec$Codec$tuple_fn($miniBill$elm_codec$Codec$string, $miniBill$elm_codec$Codec$string)), $miniBill$elm_codec$Codec$field_fn("method", function ($) {
        return $.dR;
    }, $miniBill$elm_codec$Codec$string, $miniBill$elm_codec$Codec$field_fn("url", function ($) {
        return $.el;
    }, $miniBill$elm_codec$Codec$string, $miniBill$elm_codec$Codec$object($author$project$Pages$StaticHttp$Request$Request))))));
    var $author$project$Pages$Internal$Platform$Cli$requestDecoder = $miniBill$elm_codec$Codec$decoder($author$project$Pages$StaticHttp$Request$codec);
    var $author$project$Pages$Internal$Platform$Cli$batchDecoder = $elm$json$Json$Decode$list(_Json_map2_fn(F2(function (request, response) {
        return { cT: request, cU: response };
    }), _Json_decodeField_fn("request", $author$project$Pages$Internal$Platform$Cli$requestDecoder), _Json_decodeField_fn("response", $author$project$RequestsAndPending$decoder)));
    var $elm$json$Json$Decode$decodeValue = _Json_run;
    var $author$project$RenderRequest$HtmlAndJson = 0;
    var $author$project$RenderRequest$OnlyJson = 1;
    var $author$project$RenderRequest$SinglePage_fn = function (a, b, c) {
        return { $: 0, a: a, b: b, c: c };
    }, $author$project$RenderRequest$SinglePage = F3($author$project$RenderRequest$SinglePage_fn);
    var $elm$json$Json$Decode$bool = _Json_decodeBool;
    var $elm$json$Json$Decode$map3 = _Json_map3;
    var $author$project$RenderRequest$Api = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$RenderRequest$NotFound = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$RenderRequest$Page = function (a) {
        return { $: 0, a: a };
    };
    var $elm$regex$Regex$Match_fn = function (match, index, number, submatches) {
        return { a: index, cJ: match, dU: number, gh: submatches };
    }, $elm$regex$Regex$Match = F4($elm$regex$Regex$Match_fn);
    var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
    var $elm$regex$Regex$fromString = function (string) {
        return _Regex_fromStringWith_fn({ gB: false, hb: false }, string);
    };
    var $elm$regex$Regex$never = _Regex_never;
    var $elm$regex$Regex$replace_a0 = _Regex_infinity, $elm$regex$Regex$replace = _Regex_replaceAtMost($elm$regex$Regex$replace_a0);
    var $author$project$RenderRequest$dropTrailingIndexHtml = A2($elm$regex$Regex$replace, $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("/index\\.html$")), function (_v0) {
        return "";
    });
    var $author$project$Internal$ApiRoute$ApiRoute = $elm$core$Basics$identity;
    var $elm$regex$Regex$contains = _Regex_contains;
    var $author$project$Internal$ApiRoute$tryMatchDone_fn = function (path, _v0) {
        var handler = _v0;
        return _Regex_contains_fn(handler.ff, path) ? $elm$core$Maybe$Just(handler) : $elm$core$Maybe$Nothing;
    }, $author$project$Internal$ApiRoute$tryMatchDone = F2($author$project$Internal$ApiRoute$tryMatchDone_fn);
    var $author$project$Internal$ApiRoute$firstMatch_fn = function (path, handlers) {
        firstMatch: while (true) {
            if (!handlers.b) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var first = handlers.a;
                var rest = handlers.b;
                var _v1 = $author$project$Internal$ApiRoute$tryMatchDone_fn(path, first);
                if (!_v1.$) {
                    var response = _v1.a;
                    return $elm$core$Maybe$Just(response);
                }
                else {
                    var $temp$path = path, $temp$handlers = rest;
                    path = $temp$path;
                    handlers = $temp$handlers;
                    continue firstMatch;
                }
            }
        }
    }, $author$project$Internal$ApiRoute$firstMatch = F2($author$project$Internal$ApiRoute$firstMatch_fn);
    var $author$project$Path$Path = $elm$core$Basics$identity;
    var $elm$core$String$dropRight_fn = function (n, string) {
        return (n < 1) ? string : _String_slice_fn(0, -n, string);
    }, $elm$core$String$dropRight = F2($elm$core$String$dropRight_fn);
    var $elm$core$String$endsWith = _String_endsWith;
    var $author$project$Pages$Internal$String$chopEnd_fn = function (needle, string) {
        chopEnd: while (true) {
            if (_String_endsWith_fn(needle, string)) {
                var $temp$needle = needle, $temp$string = $elm$core$String$dropRight_fn($elm$core$String$length(needle), string);
                needle = $temp$needle;
                string = $temp$string;
                continue chopEnd;
            }
            else {
                return string;
            }
        }
    }, $author$project$Pages$Internal$String$chopEnd = F2($author$project$Pages$Internal$String$chopEnd_fn);
    var $elm$core$String$startsWith = _String_startsWith;
    var $author$project$Pages$Internal$String$chopStart_fn = function (needle, string) {
        chopStart: while (true) {
            if (_String_startsWith_fn(needle, string)) {
                var $temp$needle = needle, $temp$string = $elm$core$String$dropLeft_fn($elm$core$String$length(needle), string);
                needle = $temp$needle;
                string = $temp$string;
                continue chopStart;
            }
            else {
                return string;
            }
        }
    }, $author$project$Pages$Internal$String$chopStart = F2($author$project$Pages$Internal$String$chopStart_fn);
    var $author$project$Path$normalize = function (pathPart) {
        return $author$project$Pages$Internal$String$chopStart_fn("/", $author$project$Pages$Internal$String$chopEnd_fn("/", pathPart));
    };
    var $author$project$Path$fromString = function (path) {
        return $author$project$Path$normalize(path);
    };
    var $elm$virtual_dom$VirtualDom$Normal = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$HtmlPrinter$asJsonView = function (x) {
        return  _HtmlAsJson_toJson(x)
}

              var virtualDomKernelConstants =
  {
    nodeTypeTagger: 4,
    nodeTypeThunk: 5,
    kids: "e",
    refs: "l",
    thunk: "m",
    node: "k",
    value: "a"
  }

function forceThunks(vNode) {
  if (typeof vNode !== "undefined" && vNode.$ === "#2") {
    // This is a tuple (the kids : List (String, Html) field of a Keyed node); recurse into the right side of the tuple
    vNode.b = forceThunks(vNode.b);
  }
  if (typeof vNode !== 'undefined' && vNode.$ === virtualDomKernelConstants.nodeTypeThunk && !vNode[virtualDomKernelConstants.node]) {
    // This is a lazy node; evaluate it
    var args = vNode[virtualDomKernelConstants.thunk];
    vNode[virtualDomKernelConstants.node] = vNode[virtualDomKernelConstants.thunk].apply(args);
    // And then recurse into the evaluated node
    vNode[virtualDomKernelConstants.node] = forceThunks(vNode[virtualDomKernelConstants.node]);
  }
  if (typeof vNode !== 'undefined' && vNode.$ === virtualDomKernelConstants.nodeTypeTagger) {
    // This is an Html.map; recurse into the node it is wrapping
    vNode[virtualDomKernelConstants.node] = forceThunks(vNode[virtualDomKernelConstants.node]);
  }
  if (typeof vNode !== 'undefined' && typeof vNode[virtualDomKernelConstants.kids] !== 'undefined') {
    // This is something with children (either a node with kids : List Html, or keyed with kids : List (String, Html));
    // recurse into the children
    vNode[virtualDomKernelConstants.kids] = vNode[virtualDomKernelConstants.kids].map(forceThunks);
  }
  return vNode;
}

function _HtmlAsJson_toJson(html) {

return forceThunks(html);
;
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$HtmlContext_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$HtmlContext = F2($author$project$Test$Html$Internal$ElmHtml$InternalTypes$HtmlContext_fn);
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$NodeEntry = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$NodeRecord_fn = function (tag, children, facts, descendantsCount) {
        return { dn: children, bV: descendantsCount, x: facts, cd: tag };
    }, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$NodeRecord = F4($author$project$Test$Html$Internal$ElmHtml$InternalTypes$NodeRecord_fn);
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$TextTag = function (a) {
        return { $: 0, a: a };
    };
    var $elm$core$List$foldrHelper_fn = function (fn, acc, ctr, ls) {
        if (!ls.b) {
            return acc;
        }
        else {
            var a = ls.a;
            var r1 = ls.b;
            if (!r1.b) {
                return A2(fn, a, acc);
            }
            else {
                var b = r1.a;
                var r2 = r1.b;
                if (!r2.b) {
                    return A2(fn, a, A2(fn, b, acc));
                }
                else {
                    var c = r2.a;
                    var r3 = r2.b;
                    if (!r3.b) {
                        return A2(fn, a, A2(fn, b, A2(fn, c, acc)));
                    }
                    else {
                        var d = r3.a;
                        var r4 = r3.b;
                        var res = (ctr > 500) ? $elm$core$List$foldl_fn(fn, acc, $elm$core$List$reverse(r4)) : $elm$core$List$foldrHelper_fn(fn, acc, ctr + 1, r4);
                        return A2(fn, a, A2(fn, b, A2(fn, c, A2(fn, d, res))));
                    }
                }
            }
        }
    }, $elm$core$List$foldrHelper_fn_unwrapped = function (fn, acc, ctr, ls) {
        if (!ls.b) {
            return acc;
        }
        else {
            var a = ls.a;
            var r1 = ls.b;
            if (!r1.b) {
                return fn(a, acc);
            }
            else {
                var b = r1.a;
                var r2 = r1.b;
                if (!r2.b) {
                    return fn(a, fn(b, acc));
                }
                else {
                    var c = r2.a;
                    var r3 = r2.b;
                    if (!r3.b) {
                        return fn(a, fn(b, fn(c, acc)));
                    }
                    else {
                        var d = r3.a;
                        var r4 = r3.b;
                        var res = (ctr > 500) ? $elm$core$List$foldl_fn_unwrapped(fn, acc, $elm$core$List$reverse(r4)) : $elm$core$List$foldrHelper_fn_unwrapped(fn, acc, ctr + 1, r4);
                        return fn(a, fn(b, fn(c, fn(d, res))));
                    }
                }
            }
        }
    }, $elm$core$List$foldrHelper = F4($elm$core$List$foldrHelper_fn);
    var $elm$core$List$foldr_fn = function (fn, acc, ls) {
        return $elm$core$List$foldrHelper_fn(fn, acc, 0, ls);
    }, $elm$core$List$foldr = F3($elm$core$List$foldr_fn);
    var $elm$json$Json$Decode$at_fn = function (fields, decoder) {
        return $elm$core$List$foldr_fn($elm$json$Json$Decode$field, decoder, fields);
    }, $elm$json$Json$Decode$at = F2($elm$json$Json$Decode$at_fn);
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$CustomNode = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$MarkdownNode = function (a) {
        return { $: 3, a: a };
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$CustomNodeRecord_fn = function (facts, model) {
        return { x: facts, aH: model };
    }, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$CustomNodeRecord = F2($author$project$Test$Html$Internal$ElmHtml$InternalTypes$CustomNodeRecord_fn);
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$Facts_fn = function (styles, events, attributeNamespace, stringAttributes, boolAttributes) {
        return { co: attributeNamespace, cr: boolAttributes, cv: events, cZ: stringAttributes, c_: styles };
    }, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$Facts = F5($author$project$Test$Html$Internal$ElmHtml$InternalTypes$Facts_fn);
    var $author$project$Test$Html$Internal$ElmHtml$Constants$attributeNamespaceKey = "a4";
    var $author$project$Test$Html$Internal$ElmHtml$Constants$eventKey = "a0";
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeEvents = function (taggedEventDecoder) {
        return $elm$json$Json$Decode$oneOf(_List_fromArray([
            _Json_decodeField_fn($author$project$Test$Html$Internal$ElmHtml$Constants$eventKey, $elm$json$Json$Decode$dict(_Json_map1_fn(taggedEventDecoder, $elm$json$Json$Decode$value))),
            $elm$json$Json$Decode$succeed($elm$core$Dict$empty)
        ]));
    };
    var $author$project$Test$Html$Internal$ElmHtml$Constants$attributeKey = "a3";
    var $elm$core$List$maybeCons_fn = function (f, mx, xs) {
        var _v0 = f(mx);
        if (!_v0.$) {
            var x = _v0.a;
            return _List_Cons(x, xs);
        }
        else {
            return xs;
        }
    }, $elm$core$List$maybeCons = F3($elm$core$List$maybeCons_fn);
    var $elm$core$List$filterMap_fn = function (f, xs) {
        return $elm$core$List$foldr_fn($elm$core$List$maybeCons(f), _List_Nil, xs);
    }, $elm$core$List$filterMap = F2($elm$core$List$filterMap_fn);
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeDictFilterMap = function (decoder) {
        return _Json_map1_fn(A2($elm$core$Basics$composeR, $elm$core$Dict$toList, A2($elm$core$Basics$composeR, $elm$core$List$filterMap(function (_v0) {
            var key = _v0.a;
            var value = _v0.b;
            var _v1 = _Json_run_fn(decoder, value);
            if (_v1.$ === 1) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var v = _v1.a;
                return $elm$core$Maybe$Just(_Utils_Tuple2(key, v));
            }
        }), $elm$core$Dict$fromList)), $elm$json$Json$Decode$dict($elm$json$Json$Decode$value));
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeAttributes = function (decoder) {
        return $elm$json$Json$Decode$oneOf(_List_fromArray([
            _Json_decodeField_fn($author$project$Test$Html$Internal$ElmHtml$Constants$attributeKey, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeDictFilterMap(decoder)),
            $elm$json$Json$Decode$succeed($elm$core$Dict$empty)
        ]));
    };
    var $elm$core$Dict$foldl_fn = function (func, acc, dict) {
        foldl: while (true) {
            if (dict.$ === -2) {
                return acc;
            }
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var $temp$func = func, $temp$acc = A3(func, key, value, $elm$core$Dict$foldl_fn(func, acc, left)), $temp$dict = right;
                func = $temp$func;
                acc = $temp$acc;
                dict = $temp$dict;
                continue foldl;
            }
        }
    }, $elm$core$Dict$foldl_fn_unwrapped = function (func, acc, dict) {
        foldl: while (true) {
            if (dict.$ === -2) {
                return acc;
            }
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var $temp$func = func, $temp$acc = func(key, value, $elm$core$Dict$foldl_fn_unwrapped(func, acc, left)), $temp$dict = right;
                func = $temp$func;
                acc = $temp$acc;
                dict = $temp$dict;
                continue foldl;
            }
        }
    }, $elm$core$Dict$foldl = F3($elm$core$Dict$foldl_fn);
    var $elm$core$Dict$filter_fn = function (isGood, dict) {
        return $elm$core$Dict$foldl_fn_unwrapped(function (k, v, d) {
            return A2(isGood, k, v) ? $elm$core$Dict$insert_fn(k, v, d) : d;
        }, $elm$core$Dict$empty, dict);
    }, $elm$core$Dict$filter_fn_unwrapped = function (isGood, dict) {
        return $elm$core$Dict$foldl_fn_unwrapped(function (k, v, d) {
            return isGood(k, v) ? $elm$core$Dict$insert_fn(k, v, d) : d;
        }, $elm$core$Dict$empty, dict);
    }, $elm$core$Dict$filter = F2($elm$core$Dict$filter_fn);
    var $author$project$Test$Html$Internal$ElmHtml$Constants$styleKey = "a1";
    var $author$project$Test$Html$Internal$ElmHtml$Constants$knownKeys = _List_fromArray([$author$project$Test$Html$Internal$ElmHtml$Constants$styleKey, $author$project$Test$Html$Internal$ElmHtml$Constants$eventKey, $author$project$Test$Html$Internal$ElmHtml$Constants$attributeKey, $author$project$Test$Html$Internal$ElmHtml$Constants$attributeNamespaceKey]);
    var $elm$core$List$any_fn = function (isOkay, list) {
        any: while (true) {
            if (!list.b) {
                return false;
            }
            else {
                var x = list.a;
                var xs = list.b;
                if (isOkay(x)) {
                    return true;
                }
                else {
                    var $temp$isOkay = isOkay, $temp$list = xs;
                    isOkay = $temp$isOkay;
                    list = $temp$list;
                    continue any;
                }
            }
        }
    }, $elm$core$List$any = F2($elm$core$List$any_fn);
    var $elm$core$List$member_fn = function (x, xs) {
        return $elm$core$List$any_fn(function (a) {
            return _Utils_eq(a, x);
        }, xs);
    }, $elm$core$List$member = F2($elm$core$List$member_fn);
    var $elm$core$Basics$not = _Basics_not;
    var $author$project$Test$Html$Internal$ElmHtml$Helpers$filterKnownKeys_a0 = F2(function (key, _v0) {
        return !$elm$core$List$member_fn(key, $author$project$Test$Html$Internal$ElmHtml$Constants$knownKeys);
    }), $author$project$Test$Html$Internal$ElmHtml$Helpers$filterKnownKeys = $elm$core$Dict$filter($author$project$Test$Html$Internal$ElmHtml$Helpers$filterKnownKeys_a0);
    var $elm$core$Dict$union_fn = function (t1, t2) {
        return $elm$core$Dict$foldl_fn($elm$core$Dict$insert, t2, t1);
    }, $elm$core$Dict$union = F2($elm$core$Dict$union_fn);
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeOthers = function (otherDecoder) {
        return _Json_andThen_fn(function (attributes) {
            return _Json_map1_fn(A2($elm$core$Basics$composeR, $author$project$Test$Html$Internal$ElmHtml$Helpers$filterKnownKeys, $elm$core$Dict$union(attributes)), $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeDictFilterMap(otherDecoder));
        }, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeAttributes(otherDecoder));
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeStyles = $elm$json$Json$Decode$oneOf(_List_fromArray([
        _Json_decodeField_fn($author$project$Test$Html$Internal$ElmHtml$Constants$styleKey, $elm$json$Json$Decode$dict($elm$json$Json$Decode$string)),
        $elm$json$Json$Decode$succeed($elm$core$Dict$empty)
    ]));
    var $elm$json$Json$Decode$map5 = _Json_map5;
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeFacts = function (_v0) {
        var taggers = _v0.a;
        var eventDecoder = _v0.b;
        return _Json_map5_fn($author$project$Test$Html$Internal$ElmHtml$InternalTypes$Facts, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeStyles, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeEvents(eventDecoder(taggers)), $elm$json$Json$Decode$maybe(_Json_decodeField_fn($author$project$Test$Html$Internal$ElmHtml$Constants$attributeNamespaceKey, $elm$json$Json$Decode$value)), $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeOthers($elm$json$Json$Decode$string), $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeOthers($elm$json$Json$Decode$bool));
    };
    var $author$project$Test$Internal$KernelConstants$kernelConstants = {
        by: { by: "b", dW: "a" },
        o: { bV: "b", x: "d", fW: "e", aH: "g", f1: "k", hd: "$", he: 3, hf: 2, hg: 1, hh: 4, hi: 0, hj: 5, hy: "l", cd: "c", hQ: "j", ce: "a" }
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeCustomNodeRecord = function (context) {
        return _Json_map2_fn($author$project$Test$Html$Internal$ElmHtml$InternalTypes$CustomNodeRecord, _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.o.x, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeFacts(context)), _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.o.aH, $elm$json$Json$Decode$value));
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$MarkdownNodeRecord_fn = function (facts, model) {
        return { x: facts, aH: model };
    }, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$MarkdownNodeRecord = F2($author$project$Test$Html$Internal$ElmHtml$InternalTypes$MarkdownNodeRecord_fn);
    var $author$project$Test$Html$Internal$ElmHtml$Markdown$MarkdownModel_fn = function (options, markdown) {
        return { by: markdown, dW: options };
    }, $author$project$Test$Html$Internal$ElmHtml$Markdown$MarkdownModel = F2($author$project$Test$Html$Internal$ElmHtml$Markdown$MarkdownModel_fn);
    var $author$project$Test$Html$Internal$ElmHtml$Markdown$baseMarkdownModel = {
        by: "",
        dW: {
            cu: $elm$core$Maybe$Nothing,
            cA: $elm$core$Maybe$Just({ dm: false, eh: false }),
            cV: false,
            cX: false
        }
    };
    var $author$project$Test$Html$Internal$ElmHtml$Markdown$decodeMarkdownModel = _Json_map1_fn($author$project$Test$Html$Internal$ElmHtml$Markdown$MarkdownModel($author$project$Test$Html$Internal$ElmHtml$Markdown$baseMarkdownModel.dW), _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.by.by, $elm$json$Json$Decode$string));
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeMarkdownNodeRecord = function (context) {
        return _Json_map2_fn($author$project$Test$Html$Internal$ElmHtml$InternalTypes$MarkdownNodeRecord, _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.o.x, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeFacts(context)), _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.o.aH, $author$project$Test$Html$Internal$ElmHtml$Markdown$decodeMarkdownModel));
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeCustomNode = function (context) {
        return $elm$json$Json$Decode$oneOf(_List_fromArray([
            _Json_map1_fn($author$project$Test$Html$Internal$ElmHtml$InternalTypes$MarkdownNode, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeMarkdownNodeRecord(context)),
            _Json_map1_fn($author$project$Test$Html$Internal$ElmHtml$InternalTypes$CustomNode, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeCustomNodeRecord(context))
        ]));
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeTextTag = _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.o.ce, _Json_andThen_fn(function (text) {
        return $elm$json$Json$Decode$succeed({ ce: text });
    }, $elm$json$Json$Decode$string));
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml = function (context) {
        return _Json_andThen_fn(function (nodeType) {
            return _Utils_eq(nodeType, $author$project$Test$Internal$KernelConstants$kernelConstants.o.hi) ? _Json_map1_fn($author$project$Test$Html$Internal$ElmHtml$InternalTypes$TextTag, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeTextTag) : (_Utils_eq(nodeType, $author$project$Test$Internal$KernelConstants$kernelConstants.o.hf) ? _Json_map1_fn($author$project$Test$Html$Internal$ElmHtml$InternalTypes$NodeEntry, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeKeyedNode(context)) : (_Utils_eq(nodeType, $author$project$Test$Internal$KernelConstants$kernelConstants.o.hg) ? _Json_map1_fn($author$project$Test$Html$Internal$ElmHtml$InternalTypes$NodeEntry, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeNode(context)) : (_Utils_eq(nodeType, $author$project$Test$Internal$KernelConstants$kernelConstants.o.he) ? $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeCustomNode(context) : (_Utils_eq(nodeType, $author$project$Test$Internal$KernelConstants$kernelConstants.o.hh) ? $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeTagger(context) : (_Utils_eq(nodeType, $author$project$Test$Internal$KernelConstants$kernelConstants.o.hj) ? _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.o.f1, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml(context)) : $elm$json$Json$Decode$fail("No such type as " + $elm$core$String$fromInt(nodeType)))))));
        }, _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.o.hd, $elm$json$Json$Decode$int));
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeKeyedNode = function (context) {
        var decodeSecondNode = _Json_decodeField_fn("b", $author$project$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml(context));
        return _Json_map4_fn($author$project$Test$Html$Internal$ElmHtml$InternalTypes$NodeRecord, _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.o.cd, $elm$json$Json$Decode$string), _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.o.fW, $elm$json$Json$Decode$list(decodeSecondNode)), _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.o.x, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeFacts(context)), _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.o.bV, $elm$json$Json$Decode$int));
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeNode = function (context) {
        return _Json_map4_fn($author$project$Test$Html$Internal$ElmHtml$InternalTypes$NodeRecord, _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.o.cd, $elm$json$Json$Decode$string), _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.o.fW, $elm$json$Json$Decode$list($author$project$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml(context))), _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.o.x, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeFacts(context)), _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.o.bV, $elm$json$Json$Decode$int));
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeTagger = function (_v0) {
        var taggers = _v0.a;
        var eventDecoder = _v0.b;
        return _Json_andThen_fn(function (tagger) {
            var nodeDecoder = $author$project$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml($author$project$Test$Html$Internal$ElmHtml$InternalTypes$HtmlContext_fn(_Utils_ap(taggers, _List_fromArray([tagger])), eventDecoder));
            return $elm$json$Json$Decode$at_fn(_List_fromArray([$author$project$Test$Internal$KernelConstants$kernelConstants.o.f1]), nodeDecoder);
        }, _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.o.hQ, $elm$json$Json$Decode$value));
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeElmHtml = function (eventDecoder) {
        return $author$project$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml($author$project$Test$Html$Internal$ElmHtml$InternalTypes$HtmlContext_fn(_List_Nil, eventDecoder));
    };
    var $author$project$Test$Html$Internal$ElmHtml$ToString$defaultFormatOptions = { b$: 0, b8: false };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$RawTextElements = 1;
    var $elm$core$List$append_fn = function (xs, ys) {
        if (!ys.b) {
            return xs;
        }
        else {
            return $elm$core$List$foldr_fn($elm$core$List$cons, ys, xs);
        }
    }, $elm$core$List$append = F2($elm$core$List$append_fn);
    var $elm$core$List$concat = function (lists) {
        return $elm$core$List$foldr_fn($elm$core$List$append, _List_Nil, lists);
    };
    var $elm$core$String$replace_fn = function (before, after, string) {
        return $elm$core$String$join_fn(after, $elm$core$String$split_fn(before, string));
    }, $elm$core$String$replace = F3($elm$core$String$replace_fn);
    var $author$project$Test$Html$Internal$ElmHtml$ToString$escapeRawText_fn = function (kind, rawText) {
        switch (kind) {
            case 0:
                return rawText;
            case 1:
                return rawText;
            default:
                return $elm$core$String$replace_fn("'", "&#039;", $elm$core$String$replace_fn("\"", "&quot;", $elm$core$String$replace_fn(">", "&gt;", $elm$core$String$replace_fn("<", "&lt;", $elm$core$String$replace_fn("&", "&amp;", rawText)))));
        }
    }, $author$project$Test$Html$Internal$ElmHtml$ToString$escapeRawText = F2($author$project$Test$Html$Internal$ElmHtml$ToString$escapeRawText_fn);
    var $elm$core$List$filter_fn = function (isGood, list) {
        return $elm$core$List$foldr_fn(F2(function (x, xs) {
            return isGood(x) ? _List_Cons(x, xs) : xs;
        }), _List_Nil, list);
    }, $elm$core$List$filter = F2($elm$core$List$filter_fn);
    var $elm$core$Dict$get_fn = function (targetKey, dict) {
        get: while (true) {
            if (dict.$ === -2) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var _v1 = _Utils_compare_fn(targetKey, key);
                switch (_v1) {
                    case 0:
                        var $temp$targetKey = targetKey, $temp$dict = left;
                        targetKey = $temp$targetKey;
                        dict = $temp$dict;
                        continue get;
                    case 1:
                        return $elm$core$Maybe$Just(value);
                    default:
                        var $temp$targetKey = targetKey, $temp$dict = right;
                        targetKey = $temp$targetKey;
                        dict = $temp$dict;
                        continue get;
                }
            }
        }
    }, $elm$core$Dict$get = F2($elm$core$Dict$get_fn);
    var $elm$core$List$map_fn = function (f, xs) {
        return $elm$core$List$foldr_fn(F2(function (x, acc) {
            return _List_Cons(f(x), acc);
        }), _List_Nil, xs);
    }, $elm$core$List$map = F2($elm$core$List$map_fn);
    var $elm$core$Tuple$mapFirst_fn = function (func, _v0) {
        var x = _v0.a;
        var y = _v0.b;
        return _Utils_Tuple2(func(x), y);
    }, $elm$core$Tuple$mapFirst = F2($elm$core$Tuple$mapFirst_fn);
    var $elm$core$Basics$neq = _Utils_notEqual;
    var $author$project$Test$Html$Internal$ElmHtml$ToString$propertyToAttributeName = function (propertyName) {
        switch (propertyName) {
            case "className":
                return "class";
            case "htmlFor":
                return "for";
            case "httpEquiv":
                return "http-equiv";
            case "acceptCharset":
                return "accept-charset";
            default:
                return propertyName;
        }
    };
    var $elm$core$Bitwise$and = _Bitwise_and;
    var $elm$core$String$repeatHelp_fn = function (n, chunk, result) {
        return (n <= 0) ? result : $elm$core$String$repeatHelp_fn(n >> 1, _Utils_ap(chunk, chunk), (!(n & 1)) ? result : _Utils_ap(result, chunk));
    }, $elm$core$String$repeatHelp = F3($elm$core$String$repeatHelp_fn);
    var $elm$core$String$repeat_fn = function (n, chunk) {
        return $elm$core$String$repeatHelp_fn(n, chunk, "");
    }, $elm$core$String$repeat = F2($elm$core$String$repeat_fn);
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$EscapableRawTextElements = 2;
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$NormalElements = 4;
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$VoidElements = 0;
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$escapableRawTextElements = _List_fromArray(["textarea", "title"]);
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$rawTextElements = _List_fromArray(["script", "style"]);
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$voidElements = _List_fromArray(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$toElementKind = function (element) {
        return $elm$core$List$member_fn(element, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$voidElements) ? 0 : ($elm$core$List$member_fn(element, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$rawTextElements) ? 1 : ($elm$core$List$member_fn(element, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$escapableRawTextElements) ? 2 : 4));
    };
    var $elm$core$String$toLower = _String_toLower;
    var $elm$core$String$trim = _String_trim;
    var $author$project$Test$Html$Internal$ElmHtml$ToString$nodeRecordToString_fn = function (options, _v1) {
        var facts = _v1.x;
        var children = _v1.dn;
        var tag = _v1.cd;
        var styles = function () {
            var _v7 = $elm$core$Dict$toList(facts.c_);
            if (!_v7.b) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var styleValues = _v7;
                return $elm$core$Maybe$Just(function (styleString) {
                    return "style=\"" + (styleString + "\"");
                }($elm$core$String$join_fn("", $elm$core$List$map_fn(function (_v8) {
                    var key = _v8.a;
                    var value = _v8.b;
                    return key + (":" + (value + ";"));
                }, styleValues))));
            }
        }();
        var stringAttributes = $elm$core$Maybe$Just($elm$core$String$join_fn(" ", $elm$core$List$map_fn(function (_v6) {
            var k = _v6.a;
            var v = _v6.b;
            return k + ("=\"" + (v + "\""));
        }, $elm$core$List$map_fn($elm$core$Tuple$mapFirst($author$project$Test$Html$Internal$ElmHtml$ToString$propertyToAttributeName), $elm$core$Dict$toList($elm$core$Dict$filter_fn_unwrapped(function (k, v) {
            return k !== "className";
        }, facts.cZ))))));
        var openTag = function (extras) {
            var trimmedExtras = $elm$core$List$filter_fn($elm$core$Basics$neq(""), $elm$core$List$map_fn($elm$core$String$trim, $elm$core$List$filterMap_fn(function (x) {
                return x;
            }, extras)));
            var filling = function () {
                if (!trimmedExtras.b) {
                    return "";
                }
                else {
                    var more = trimmedExtras;
                    return " " + $elm$core$String$join_fn(" ", more);
                }
            }();
            return "<" + (tag + (filling + ">"));
        };
        var closeTag = "</" + (tag + ">");
        var classes = $elm$core$Maybe$map_fn(function (name) {
            return "class=\"" + (name + "\"");
        }, $elm$core$Dict$get_fn("className", facts.cZ));
        var childrenStrings = $elm$core$List$map_fn($elm$core$Basics$append($elm$core$String$repeat_fn(options.b$, " ")), $elm$core$List$concat($elm$core$List$map_fn(A2($author$project$Test$Html$Internal$ElmHtml$ToString$nodeToLines, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$toElementKind(tag), options), children)));
        var boolToString = function (b) {
            if (b) {
                return "True";
            }
            else {
                return "False";
            }
        };
        var boolAttributes = $elm$core$Maybe$Just($elm$core$String$join_fn(" ", $elm$core$List$map_fn(function (_v3) {
            var k = _v3.a;
            var v = _v3.b;
            return k + ("=" + $elm$core$String$toLower(boolToString(v)));
        }, $elm$core$Dict$toList(facts.cr))));
        var _v2 = $author$project$Test$Html$Internal$ElmHtml$InternalTypes$toElementKind(tag);
        if (!_v2) {
            return _List_fromArray([
                openTag(_List_fromArray([classes, styles, stringAttributes, boolAttributes]))
            ]);
        }
        else {
            return _Utils_ap(_List_fromArray([
                openTag(_List_fromArray([classes, styles, stringAttributes, boolAttributes]))
            ]), _Utils_ap(childrenStrings, _List_fromArray([closeTag])));
        }
    }, $author$project$Test$Html$Internal$ElmHtml$ToString$nodeRecordToString = F2($author$project$Test$Html$Internal$ElmHtml$ToString$nodeRecordToString_fn);
    var $author$project$Test$Html$Internal$ElmHtml$ToString$nodeToLines_fn = function (kind, options, nodeType) {
        switch (nodeType.$) {
            case 0:
                var text = nodeType.a.ce;
                return _List_fromArray([
                    $author$project$Test$Html$Internal$ElmHtml$ToString$escapeRawText_fn(kind, text)
                ]);
            case 1:
                var record = nodeType.a;
                return $author$project$Test$Html$Internal$ElmHtml$ToString$nodeRecordToString_fn(options, record);
            case 2:
                var record = nodeType.a;
                return _List_Nil;
            case 3:
                var record = nodeType.a;
                return _List_fromArray([record.aH.by]);
            default:
                return _List_Nil;
        }
    }, $author$project$Test$Html$Internal$ElmHtml$ToString$nodeToLines = F3($author$project$Test$Html$Internal$ElmHtml$ToString$nodeToLines_fn);
    var $author$project$Test$Html$Internal$ElmHtml$ToString$nodeToStringWithOptions = function (options) {
        return A2($elm$core$Basics$composeR, A2($author$project$Test$Html$Internal$ElmHtml$ToString$nodeToLines, 1, options), $elm$core$String$join(options.b8 ? "\n" : ""));
    };
    var $author$project$HtmlPrinter$htmlToString = function (viewHtml) {
        var _v0 = _Json_run_fn($author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeElmHtml(F2(function (_v1, _v2) {
            return $elm$virtual_dom$VirtualDom$Normal($elm$json$Json$Decode$succeed(0));
        })), $author$project$HtmlPrinter$asJsonView(viewHtml));
        if (!_v0.$) {
            var str = _v0.a;
            return A2($author$project$Test$Html$Internal$ElmHtml$ToString$nodeToStringWithOptions, $author$project$Test$Html$Internal$ElmHtml$ToString$defaultFormatOptions, str);
        }
        else {
            var err = _v0.a;
            return "Error: " + $elm$json$Json$Decode$errorToString(err);
        }
    };
    var $elm$core$String$contains = _String_contains;
    var $author$project$RenderRequest$isFile = function (rawPath) {
        return _String_contains_fn(".", rawPath);
    };
    var $author$project$Path$join = function (parts) {
        return $elm$core$String$join_fn("/", $elm$core$List$map_fn($author$project$Path$normalize, parts));
    };
    var $elm$url$Url$Https = 1;
    var $author$project$RenderRequest$pathToUrl = function (path) {
        return { R: $elm$core$Maybe$Nothing, cC: "TODO", ca: path, cN: $elm$core$Maybe$Nothing, cP: 1, U: $elm$core$Maybe$Nothing };
    };
    var $author$project$RenderRequest$requestPayloadDecoder = function (config) {
        return _Json_decodeField_fn("payload", _Json_decodeField_fn("path", _Json_map1_fn(function (rawPath) {
            var path = $author$project$RenderRequest$dropTrailingIndexHtml(rawPath);
            var route = config.hV($author$project$RenderRequest$pathToUrl(path));
            var apiRoute = $author$project$Internal$ApiRoute$firstMatch_fn($elm$core$String$dropLeft_fn(1, path), config.gu($author$project$HtmlPrinter$htmlToString));
            if (!route.$) {
                if ($author$project$RenderRequest$isFile(rawPath)) {
                    if (!apiRoute.$) {
                        var justApi = apiRoute.a;
                        return $author$project$RenderRequest$Api(_Utils_Tuple2(path, justApi));
                    }
                    else {
                        return $author$project$RenderRequest$NotFound($author$project$Path$fromString(path));
                    }
                }
                else {
                    return $author$project$RenderRequest$Page({
                        dF: route,
                        ca: $author$project$Path$join(config.hF(route))
                    });
                }
            }
            else {
                if (!apiRoute.$) {
                    var justApi = apiRoute.a;
                    return $author$project$RenderRequest$Api(_Utils_Tuple2(path, justApi));
                }
                else {
                    return $author$project$RenderRequest$NotFound($author$project$Path$fromString(path));
                }
            }
        }, $elm$json$Json$Decode$string)));
    };
    var $author$project$RenderRequest$decoder = function (config) {
        return _Json_decodeField_fn("request", _Json_map3_fn(F3(function (includeHtml, requestThing, payload) {
            return $author$project$RenderRequest$SinglePage_fn(includeHtml, requestThing, payload);
        }), _Json_andThen_fn(function (kind) {
            if (kind === "single-page") {
                return _Json_map1_fn(function (jsonOnly) {
                    return jsonOnly ? 1 : 0;
                }, _Json_decodeField_fn("jsonOnly", $elm$json$Json$Decode$bool));
            }
            else {
                return $elm$json$Json$Decode$fail("Unhandled");
            }
        }, _Json_decodeField_fn("kind", $elm$json$Json$Decode$string)), $author$project$RenderRequest$requestPayloadDecoder(config), _Json_decodeField_fn("payload", $elm$json$Json$Decode$value)));
    };
    var $elm$json$Json$Encode$null = _Json_encodeNull;
    var $author$project$RenderRequest$default = $author$project$RenderRequest$SinglePage_fn(0, $author$project$RenderRequest$NotFound($author$project$Path$fromString("/error")), $elm$json$Json$Encode$null);
    var $author$project$TerminalText$blankStyle = { bg: false, O: $elm$core$Maybe$Nothing, bP: false };
    var $vito$elm_ansi$Ansi$Print = function (a) {
        return { $: 0, a: a };
    };
    var $vito$elm_ansi$Ansi$Remainder = function (a) {
        return { $: 1, a: a };
    };
    var $vito$elm_ansi$Ansi$encodeCode = function (code) {
        if (code.$ === 1) {
            return "";
        }
        else {
            var num = code.a;
            return $elm$core$String$fromInt(num);
        }
    };
    var $vito$elm_ansi$Ansi$encodeCodes = function (codes) {
        return $elm$core$String$join_fn(";", $elm$core$List$map_fn($vito$elm_ansi$Ansi$encodeCode, codes));
    };
    var $vito$elm_ansi$Ansi$completeParsing = function (parser) {
        switch (parser.a.$) {
            case 0:
                var _v1 = parser.a;
                var model = parser.b;
                var update = parser.c;
                return A2(update, $vito$elm_ansi$Ansi$Remainder("\u001B"), model);
            case 1:
                var _v2 = parser.a;
                var codes = _v2.a;
                var currentCode = _v2.b;
                var model = parser.b;
                var update = parser.c;
                return A2(update, $vito$elm_ansi$Ansi$Remainder("\u001B[" + $vito$elm_ansi$Ansi$encodeCodes(_Utils_ap(codes, _List_fromArray([currentCode])))), model);
            default:
                if (parser.a.a === "") {
                    var model = parser.b;
                    return model;
                }
                else {
                    var str = parser.a.a;
                    var model = parser.b;
                    var update = parser.c;
                    return A2(update, $vito$elm_ansi$Ansi$Print(str), model);
                }
        }
    };
    var $vito$elm_ansi$Ansi$Parser_fn = function (a, b, c) {
        return { $: 0, a: a, b: b, c: c };
    }, $vito$elm_ansi$Ansi$Parser = F3($vito$elm_ansi$Ansi$Parser_fn);
    var $vito$elm_ansi$Ansi$Unescaped = function (a) {
        return { $: 2, a: a };
    };
    var $vito$elm_ansi$Ansi$emptyParser_a0 = $vito$elm_ansi$Ansi$Unescaped(""), $vito$elm_ansi$Ansi$emptyParser = $vito$elm_ansi$Ansi$Parser($vito$elm_ansi$Ansi$emptyParser_a0);
    var $vito$elm_ansi$Ansi$CSI_fn = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $vito$elm_ansi$Ansi$CSI = F2($vito$elm_ansi$Ansi$CSI_fn);
    var $vito$elm_ansi$Ansi$CarriageReturn = { $: 13 };
    var $vito$elm_ansi$Ansi$CursorBack = function (a) {
        return { $: 17, a: a };
    };
    var $vito$elm_ansi$Ansi$CursorColumn = function (a) {
        return { $: 19, a: a };
    };
    var $vito$elm_ansi$Ansi$CursorDown = function (a) {
        return { $: 15, a: a };
    };
    var $vito$elm_ansi$Ansi$CursorForward = function (a) {
        return { $: 16, a: a };
    };
    var $vito$elm_ansi$Ansi$CursorUp = function (a) {
        return { $: 14, a: a };
    };
    var $vito$elm_ansi$Ansi$EraseDisplay = function (a) {
        return { $: 20, a: a };
    };
    var $vito$elm_ansi$Ansi$EraseLine = function (a) {
        return { $: 21, a: a };
    };
    var $vito$elm_ansi$Ansi$Escaped = { $: 0 };
    var $vito$elm_ansi$Ansi$Linebreak = { $: 12 };
    var $vito$elm_ansi$Ansi$RestoreCursorPosition = { $: 23 };
    var $vito$elm_ansi$Ansi$SaveCursorPosition = { $: 22 };
    var $vito$elm_ansi$Ansi$Custom_fn = function (a, b, c) {
        return { $: 16, a: a, b: b, c: c };
    }, $vito$elm_ansi$Ansi$Custom = F3($vito$elm_ansi$Ansi$Custom_fn);
    var $vito$elm_ansi$Ansi$SetBackground = function (a) {
        return { $: 3, a: a };
    };
    var $vito$elm_ansi$Ansi$SetForeground = function (a) {
        return { $: 2, a: a };
    };
    var $elm$core$Basics$clamp_fn = function (low, high, number) {
        return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
    }, $elm$core$Basics$clamp = F3($elm$core$Basics$clamp_fn);
    var $vito$elm_ansi$Ansi$Black = { $: 0 };
    var $vito$elm_ansi$Ansi$Blue = { $: 4 };
    var $vito$elm_ansi$Ansi$BrightBlack = { $: 8 };
    var $vito$elm_ansi$Ansi$BrightBlue = { $: 12 };
    var $vito$elm_ansi$Ansi$BrightCyan = { $: 14 };
    var $vito$elm_ansi$Ansi$BrightGreen = { $: 10 };
    var $vito$elm_ansi$Ansi$BrightMagenta = { $: 13 };
    var $vito$elm_ansi$Ansi$BrightRed = { $: 9 };
    var $vito$elm_ansi$Ansi$BrightWhite = { $: 15 };
    var $vito$elm_ansi$Ansi$BrightYellow = { $: 11 };
    var $vito$elm_ansi$Ansi$Cyan = { $: 6 };
    var $vito$elm_ansi$Ansi$Green = { $: 2 };
    var $vito$elm_ansi$Ansi$Magenta = { $: 5 };
    var $vito$elm_ansi$Ansi$Red = { $: 1 };
    var $vito$elm_ansi$Ansi$SetBlink = function (a) {
        return { $: 8, a: a };
    };
    var $vito$elm_ansi$Ansi$SetBold = function (a) {
        return { $: 4, a: a };
    };
    var $vito$elm_ansi$Ansi$SetFaint = function (a) {
        return { $: 5, a: a };
    };
    var $vito$elm_ansi$Ansi$SetFraktur = function (a) {
        return { $: 10, a: a };
    };
    var $vito$elm_ansi$Ansi$SetFramed = function (a) {
        return { $: 11, a: a };
    };
    var $vito$elm_ansi$Ansi$SetInverted = function (a) {
        return { $: 9, a: a };
    };
    var $vito$elm_ansi$Ansi$SetItalic = function (a) {
        return { $: 6, a: a };
    };
    var $vito$elm_ansi$Ansi$SetUnderline = function (a) {
        return { $: 7, a: a };
    };
    var $vito$elm_ansi$Ansi$White = { $: 7 };
    var $vito$elm_ansi$Ansi$Yellow = { $: 3 };
    var $vito$elm_ansi$Ansi$reset = _List_fromArray([
        $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Nothing),
        $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Nothing),
        $vito$elm_ansi$Ansi$SetBold(false),
        $vito$elm_ansi$Ansi$SetFaint(false),
        $vito$elm_ansi$Ansi$SetItalic(false),
        $vito$elm_ansi$Ansi$SetUnderline(false),
        $vito$elm_ansi$Ansi$SetBlink(false),
        $vito$elm_ansi$Ansi$SetInverted(false),
        $vito$elm_ansi$Ansi$SetFraktur(false),
        $vito$elm_ansi$Ansi$SetFramed(false)
    ]);
    var $vito$elm_ansi$Ansi$codeActions = function (code) {
        switch (code) {
            case 0:
                return $vito$elm_ansi$Ansi$reset;
            case 1:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBold(true)
                ]);
            case 2:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetFaint(true)
                ]);
            case 3:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetItalic(true)
                ]);
            case 4:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetUnderline(true)
                ]);
            case 5:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBlink(true)
                ]);
            case 7:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetInverted(true)
                ]);
            case 20:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetFraktur(true)
                ]);
            case 21:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBold(false)
                ]);
            case 22:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetFaint(false),
                    $vito$elm_ansi$Ansi$SetBold(false)
                ]);
            case 23:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetItalic(false),
                    $vito$elm_ansi$Ansi$SetFraktur(false)
                ]);
            case 24:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetUnderline(false)
                ]);
            case 25:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBlink(false)
                ]);
            case 27:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetInverted(false)
                ]);
            case 30:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Black))
                ]);
            case 31:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Red))
                ]);
            case 32:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Green))
                ]);
            case 33:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Yellow))
                ]);
            case 34:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Blue))
                ]);
            case 35:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Magenta))
                ]);
            case 36:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Cyan))
                ]);
            case 37:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$White))
                ]);
            case 39:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Nothing)
                ]);
            case 40:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Black))
                ]);
            case 41:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Red))
                ]);
            case 42:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Green))
                ]);
            case 43:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Yellow))
                ]);
            case 44:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Blue))
                ]);
            case 45:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Magenta))
                ]);
            case 46:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Cyan))
                ]);
            case 47:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$White))
                ]);
            case 49:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Nothing)
                ]);
            case 51:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetFramed(true)
                ]);
            case 54:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetFramed(false)
                ]);
            case 90:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightBlack))
                ]);
            case 91:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightRed))
                ]);
            case 92:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightGreen))
                ]);
            case 93:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightYellow))
                ]);
            case 94:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightBlue))
                ]);
            case 95:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightMagenta))
                ]);
            case 96:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightCyan))
                ]);
            case 97:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightWhite))
                ]);
            case 100:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightBlack))
                ]);
            case 101:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightRed))
                ]);
            case 102:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightGreen))
                ]);
            case 103:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightYellow))
                ]);
            case 104:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightBlue))
                ]);
            case 105:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightMagenta))
                ]);
            case 106:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightCyan))
                ]);
            case 107:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightWhite))
                ]);
            default:
                return _List_Nil;
        }
    };
    var $elm$core$Basics$modBy = _Basics_modBy;
    var $vito$elm_ansi$Ansi$colorCode = function (code) {
        switch (code) {
            case 0:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$Black);
            case 1:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$Red);
            case 2:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$Green);
            case 3:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$Yellow);
            case 4:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$Blue);
            case 5:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$Magenta);
            case 6:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$Cyan);
            case 7:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$White);
            case 8:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightBlack);
            case 9:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightRed);
            case 10:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightGreen);
            case 11:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightYellow);
            case 12:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightBlue);
            case 13:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightMagenta);
            case 14:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightCyan);
            case 15:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightWhite);
            default:
                if ((code >= 16) && (code < 232)) {
                    var scale = function (n) {
                        return (!n) ? 0 : (55 + (n * 40));
                    };
                    var c = code - 16;
                    var g = _Basics_modBy_fn(6, (c / 6) | 0);
                    var r = _Basics_modBy_fn(6, (((c / 6) | 0) / 6) | 0);
                    var b = _Basics_modBy_fn(6, c);
                    return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$Custom_fn(scale(r), scale(g), scale(b)));
                }
                else {
                    if ((code >= 232) && (code < 256)) {
                        var c = ((code - 232) * 10) + 8;
                        return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$Custom_fn(c, c, c));
                    }
                    else {
                        return $elm$core$Maybe$Nothing;
                    }
                }
        }
    };
    var $vito$elm_ansi$Ansi$captureArguments = function (list) {
        _v0$4: while (true) {
            if (list.b) {
                if (list.b.b && list.b.b.b) {
                    switch (list.a) {
                        case 38:
                            switch (list.b.a) {
                                case 5:
                                    var _v1 = list.b;
                                    var _v2 = _v1.b;
                                    var n = _v2.a;
                                    var xs = _v2.b;
                                    return _List_Cons($vito$elm_ansi$Ansi$SetForeground($vito$elm_ansi$Ansi$colorCode(n)), $vito$elm_ansi$Ansi$captureArguments(xs));
                                case 2:
                                    if (list.b.b.b.b && list.b.b.b.b.b) {
                                        var _v5 = list.b;
                                        var _v6 = _v5.b;
                                        var r = _v6.a;
                                        var _v7 = _v6.b;
                                        var g = _v7.a;
                                        var _v8 = _v7.b;
                                        var b = _v8.a;
                                        var xs = _v8.b;
                                        var c = A2($elm$core$Basics$clamp, 0, 255);
                                        return _List_Cons($vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Custom_fn(c(r), c(g), c(b)))), $vito$elm_ansi$Ansi$captureArguments(xs));
                                    }
                                    else {
                                        break _v0$4;
                                    }
                                default:
                                    break _v0$4;
                            }
                        case 48:
                            switch (list.b.a) {
                                case 5:
                                    var _v3 = list.b;
                                    var _v4 = _v3.b;
                                    var n = _v4.a;
                                    var xs = _v4.b;
                                    return _List_Cons($vito$elm_ansi$Ansi$SetBackground($vito$elm_ansi$Ansi$colorCode(n)), $vito$elm_ansi$Ansi$captureArguments(xs));
                                case 2:
                                    if (list.b.b.b.b && list.b.b.b.b.b) {
                                        var _v9 = list.b;
                                        var _v10 = _v9.b;
                                        var r = _v10.a;
                                        var _v11 = _v10.b;
                                        var g = _v11.a;
                                        var _v12 = _v11.b;
                                        var b = _v12.a;
                                        var xs = _v12.b;
                                        var c = A2($elm$core$Basics$clamp, 0, 255);
                                        return _List_Cons($vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Custom_fn(c(r), c(g), c(b)))), $vito$elm_ansi$Ansi$captureArguments(xs));
                                    }
                                    else {
                                        break _v0$4;
                                    }
                                default:
                                    break _v0$4;
                            }
                        default:
                            break _v0$4;
                    }
                }
                else {
                    break _v0$4;
                }
            }
            else {
                return _List_Nil;
            }
        }
        var n = list.a;
        var xs = list.b;
        return _Utils_ap($vito$elm_ansi$Ansi$codeActions(n), $vito$elm_ansi$Ansi$captureArguments(xs));
    };
    var $vito$elm_ansi$Ansi$completeBracketed_fn = function (_v0, actions) {
        var model = _v0.b;
        var update = _v0.c;
        return $vito$elm_ansi$Ansi$Parser_fn($vito$elm_ansi$Ansi$Unescaped(""), $elm$core$List$foldl_fn(update, model, actions), update);
    }, $vito$elm_ansi$Ansi$completeBracketed = F2($vito$elm_ansi$Ansi$completeBracketed_fn);
    var $vito$elm_ansi$Ansi$completeUnescaped = function (parser) {
        if (parser.a.$ === 2) {
            if (parser.a.a === "") {
                var model = parser.b;
                var update = parser.c;
                return model;
            }
            else {
                var str = parser.a.a;
                var model = parser.b;
                var update = parser.c;
                return A2(update, $vito$elm_ansi$Ansi$Print(str), model);
            }
        }
        else {
            var model = parser.b;
            return model;
        }
    };
    var $vito$elm_ansi$Ansi$CursorPosition_fn = function (a, b) {
        return { $: 18, a: a, b: b };
    }, $vito$elm_ansi$Ansi$CursorPosition = F2($vito$elm_ansi$Ansi$CursorPosition_fn);
    var $vito$elm_ansi$Ansi$cursorPosition = function (codes) {
        _v0$5: while (true) {
            if (codes.b) {
                if (codes.a.$ === 1) {
                    if (!codes.b.b) {
                        var _v4 = codes.a;
                        return _List_fromArray([
                            $vito$elm_ansi$Ansi$CursorPosition_fn(1, 1)
                        ]);
                    }
                    else {
                        if (codes.b.a.$ === 1) {
                            if (!codes.b.b.b) {
                                var _v1 = codes.a;
                                var _v2 = codes.b;
                                var _v3 = _v2.a;
                                return _List_fromArray([
                                    $vito$elm_ansi$Ansi$CursorPosition_fn(1, 1)
                                ]);
                            }
                            else {
                                break _v0$5;
                            }
                        }
                        else {
                            if (!codes.b.b.b) {
                                var _v7 = codes.a;
                                var _v8 = codes.b;
                                var col = _v8.a.a;
                                return _List_fromArray([
                                    $vito$elm_ansi$Ansi$CursorPosition_fn(1, col)
                                ]);
                            }
                            else {
                                break _v0$5;
                            }
                        }
                    }
                }
                else {
                    if (codes.b.b) {
                        if (codes.b.a.$ === 1) {
                            if (!codes.b.b.b) {
                                var row = codes.a.a;
                                var _v5 = codes.b;
                                var _v6 = _v5.a;
                                return _List_fromArray([
                                    $vito$elm_ansi$Ansi$CursorPosition_fn(row, 1)
                                ]);
                            }
                            else {
                                break _v0$5;
                            }
                        }
                        else {
                            if (!codes.b.b.b) {
                                var row = codes.a.a;
                                var _v9 = codes.b;
                                var col = _v9.a.a;
                                return _List_fromArray([
                                    $vito$elm_ansi$Ansi$CursorPosition_fn(row, col)
                                ]);
                            }
                            else {
                                break _v0$5;
                            }
                        }
                    }
                    else {
                        break _v0$5;
                    }
                }
            }
            else {
                break _v0$5;
            }
        }
        return _List_Nil;
    };
    var $vito$elm_ansi$Ansi$EraseAll = 2;
    var $vito$elm_ansi$Ansi$EraseToBeginning = 0;
    var $vito$elm_ansi$Ansi$EraseToEnd = 1;
    var $vito$elm_ansi$Ansi$eraseMode = function (code) {
        switch (code) {
            case 0:
                return 1;
            case 1:
                return 0;
            default:
                return 2;
        }
    };
    var $elm$core$String$toInt = _String_toInt;
    var $vito$elm_ansi$Ansi$parseChar_fn = function (_char, parser) {
        switch (parser.a.$) {
            case 2:
                var str = parser.a.a;
                var model = parser.b;
                var update = parser.c;
                switch (_char) {
                    case "\r":
                        return $vito$elm_ansi$Ansi$Parser_fn($vito$elm_ansi$Ansi$Unescaped(""), A2(update, $vito$elm_ansi$Ansi$CarriageReturn, $vito$elm_ansi$Ansi$completeUnescaped(parser)), update);
                    case "\n":
                        return $vito$elm_ansi$Ansi$Parser_fn($vito$elm_ansi$Ansi$Unescaped(""), A2(update, $vito$elm_ansi$Ansi$Linebreak, $vito$elm_ansi$Ansi$completeUnescaped(parser)), update);
                    case "\u001B":
                        return $vito$elm_ansi$Ansi$Parser_fn($vito$elm_ansi$Ansi$Escaped, $vito$elm_ansi$Ansi$completeUnescaped(parser), update);
                    default:
                        return $vito$elm_ansi$Ansi$Parser_fn($vito$elm_ansi$Ansi$Unescaped(_Utils_ap(str, _char)), model, update);
                }
            case 0:
                var _v2 = parser.a;
                var model = parser.b;
                var update = parser.c;
                if (_char === "[") {
                    return $vito$elm_ansi$Ansi$Parser_fn($vito$elm_ansi$Ansi$CSI_fn(_List_Nil, $elm$core$Maybe$Nothing), model, update);
                }
                else {
                    return $vito$elm_ansi$Ansi$Parser_fn($vito$elm_ansi$Ansi$Unescaped(_char), model, update);
                }
            default:
                var _v4 = parser.a;
                var codes = _v4.a;
                var currentCode = _v4.b;
                var model = parser.b;
                var update = parser.c;
                switch (_char) {
                    case "m":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, $vito$elm_ansi$Ansi$captureArguments($elm$core$List$map_fn($elm$core$Maybe$withDefault(0), _Utils_ap(codes, _List_fromArray([currentCode])))));
                    case "A":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_fromArray([
                            $vito$elm_ansi$Ansi$CursorUp($elm$core$Maybe$withDefault_fn(1, currentCode))
                        ]));
                    case "B":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_fromArray([
                            $vito$elm_ansi$Ansi$CursorDown($elm$core$Maybe$withDefault_fn(1, currentCode))
                        ]));
                    case "C":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_fromArray([
                            $vito$elm_ansi$Ansi$CursorForward($elm$core$Maybe$withDefault_fn(1, currentCode))
                        ]));
                    case "D":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_fromArray([
                            $vito$elm_ansi$Ansi$CursorBack($elm$core$Maybe$withDefault_fn(1, currentCode))
                        ]));
                    case "E":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_fromArray([
                            $vito$elm_ansi$Ansi$CursorDown($elm$core$Maybe$withDefault_fn(1, currentCode)),
                            $vito$elm_ansi$Ansi$CursorColumn(0)
                        ]));
                    case "F":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_fromArray([
                            $vito$elm_ansi$Ansi$CursorUp($elm$core$Maybe$withDefault_fn(1, currentCode)),
                            $vito$elm_ansi$Ansi$CursorColumn(0)
                        ]));
                    case "G":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_fromArray([
                            $vito$elm_ansi$Ansi$CursorColumn($elm$core$Maybe$withDefault_fn(0, currentCode))
                        ]));
                    case "H":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, $vito$elm_ansi$Ansi$cursorPosition(_Utils_ap(codes, _List_fromArray([currentCode]))));
                    case "J":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_fromArray([
                            $vito$elm_ansi$Ansi$EraseDisplay($vito$elm_ansi$Ansi$eraseMode($elm$core$Maybe$withDefault_fn(0, currentCode)))
                        ]));
                    case "K":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_fromArray([
                            $vito$elm_ansi$Ansi$EraseLine($vito$elm_ansi$Ansi$eraseMode($elm$core$Maybe$withDefault_fn(0, currentCode)))
                        ]));
                    case "f":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, $vito$elm_ansi$Ansi$cursorPosition(_Utils_ap(codes, _List_fromArray([currentCode]))));
                    case "s":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_fromArray([$vito$elm_ansi$Ansi$SaveCursorPosition]));
                    case "u":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_fromArray([$vito$elm_ansi$Ansi$RestoreCursorPosition]));
                    case ";":
                        return $vito$elm_ansi$Ansi$Parser_fn($vito$elm_ansi$Ansi$CSI_fn(_Utils_ap(codes, _List_fromArray([currentCode])), $elm$core$Maybe$Nothing), model, update);
                    default:
                        var c = _char;
                        var _v6 = $elm$core$String$toInt(c);
                        if (!_v6.$) {
                            var num = _v6.a;
                            return $vito$elm_ansi$Ansi$Parser_fn($vito$elm_ansi$Ansi$CSI_fn(codes, $elm$core$Maybe$Just(($elm$core$Maybe$withDefault_fn(0, currentCode) * 10) + num)), model, update);
                        }
                        else {
                            return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_Nil);
                        }
                }
        }
    }, $vito$elm_ansi$Ansi$parseChar = F2($vito$elm_ansi$Ansi$parseChar_fn);
    var $vito$elm_ansi$Ansi$parseInto_fn = function (model, update, ansi) {
        return $vito$elm_ansi$Ansi$completeParsing($elm$core$List$foldl_fn($vito$elm_ansi$Ansi$parseChar, $vito$elm_ansi$Ansi$Parser_fn($vito$elm_ansi$Ansi$emptyParser_a0, model, update), $elm$core$String$split_fn("", ansi)));
    }, $vito$elm_ansi$Ansi$parseInto = F3($vito$elm_ansi$Ansi$parseInto_fn);
    var $author$project$TerminalText$Style_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $author$project$TerminalText$Style = F2($author$project$TerminalText$Style_fn);
    var $author$project$TerminalText$parseInto_fn = function (action, _v0) {
        var pendingStyle = _v0.a;
        var soFar = _v0.b;
        switch (action.$) {
            case 0:
                var string = action.a;
                return _Utils_Tuple2($author$project$TerminalText$blankStyle, _List_Cons($author$project$TerminalText$Style_fn(pendingStyle, string), soFar));
            case 1:
                return _Utils_Tuple2(pendingStyle, soFar);
            case 2:
                var maybeColor = action.a;
                if (!maybeColor.$) {
                    var newColor = maybeColor.a;
                    return _Utils_Tuple2(_Utils_update(pendingStyle, {
                        O: $elm$core$Maybe$Just(newColor)
                    }), soFar);
                }
                else {
                    return _Utils_Tuple2($author$project$TerminalText$blankStyle, soFar);
                }
            case 4:
                var bool = action.a;
                return _Utils_Tuple2(_Utils_update(pendingStyle, { bg: bool }), soFar);
            case 5:
                return _Utils_Tuple2(pendingStyle, soFar);
            case 6:
                return _Utils_Tuple2(pendingStyle, soFar);
            case 7:
                var bool = action.a;
                return _Utils_Tuple2(_Utils_update(pendingStyle, { bP: bool }), soFar);
            case 3:
                return _Utils_Tuple2(pendingStyle, soFar);
            case 12:
                if (soFar.b) {
                    var next = soFar.a;
                    var rest = soFar.b;
                    return _Utils_Tuple2(pendingStyle, _List_Cons($author$project$TerminalText$Style_fn($author$project$TerminalText$blankStyle, "\n"), _List_Cons(next, rest)));
                }
                else {
                    return _Utils_Tuple2(pendingStyle, soFar);
                }
            default:
                return _Utils_Tuple2(pendingStyle, soFar);
        }
    }, $author$project$TerminalText$parseInto = F2($author$project$TerminalText$parseInto_fn);
    var $elm$core$Tuple$second = function (_v0) {
        var y = _v0.b;
        return y;
    };
    var $author$project$TerminalText$fromAnsiString = function (ansiString) {
        return $elm$core$List$reverse($vito$elm_ansi$Ansi$parseInto_fn(_Utils_Tuple2($author$project$TerminalText$blankStyle, _List_Nil), $author$project$TerminalText$parseInto, ansiString).b);
    };
    var $author$project$Pages$Internal$Platform$StaticResponses$NotFetched_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $author$project$Pages$Internal$Platform$StaticResponses$NotFetched = F2($author$project$Pages$Internal$Platform$StaticResponses$NotFetched_fn);
    var $author$project$Pages$Internal$Platform$StaticResponses$StaticResponses = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Pages$StaticHttpRequest$ApiRoute = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$DataSource$succeed = function (value) {
        return $author$project$Pages$StaticHttpRequest$ApiRoute(value);
    };
    var $author$project$Pages$Internal$Platform$StaticResponses$empty = $author$project$Pages$Internal$Platform$StaticResponses$StaticResponses($author$project$Pages$Internal$Platform$StaticResponses$NotFetched_fn($author$project$DataSource$succeed(0), $elm$core$Dict$empty));
    var $author$project$Pages$Internal$Platform$Cli$flagsDecoder = _Json_map2_fn(F2(function (staticHttpCache, isDevServer) {
        return { S: isDevServer, aw: staticHttpCache };
    }), $elm$json$Json$Decode$succeed($elm$core$Dict$empty), _Json_map1_fn(function (mode) {
        return mode === "dev-server";
    }, _Json_decodeField_fn("mode", $elm$json$Json$Decode$string)));
    var $author$project$Pages$StaticHttpRequest$Request_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $author$project$Pages$StaticHttpRequest$Request = F2($author$project$Pages$StaticHttpRequest$Request_fn);
    var $author$project$Pages$StaticHttpRequest$RequestError = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$DataSource$map2_fn = function (fn, request1, request2) {
        var _v0 = _Utils_Tuple2(request1, request2);
        _v0$1: while (true) {
            switch (_v0.a.$) {
                case 1:
                    var error = _v0.a.a;
                    return $author$project$Pages$StaticHttpRequest$RequestError(error);
                case 0:
                    switch (_v0.b.$) {
                        case 1:
                            break _v0$1;
                        case 0:
                            var _v1 = _v0.a;
                            var urls1 = _v1.a;
                            var lookupFn1 = _v1.b;
                            var _v2 = _v0.b;
                            var urls2 = _v2.a;
                            var lookupFn2 = _v2.b;
                            return $author$project$Pages$StaticHttpRequest$Request_fn(_Utils_ap(urls1, urls2), A3($author$project$DataSource$mapReq, fn, lookupFn1, lookupFn2));
                        default:
                            var _v3 = _v0.a;
                            var urls1 = _v3.a;
                            var lookupFn1 = _v3.b;
                            var value2 = _v0.b.a;
                            return $author$project$Pages$StaticHttpRequest$Request_fn(urls1, A3($author$project$DataSource$mapReq, fn, lookupFn1, F2(function (_v4, _v5) {
                                return $author$project$Pages$StaticHttpRequest$ApiRoute(value2);
                            })));
                    }
                default:
                    switch (_v0.b.$) {
                        case 1:
                            break _v0$1;
                        case 0:
                            var value2 = _v0.a.a;
                            var _v6 = _v0.b;
                            var urls1 = _v6.a;
                            var lookupFn1 = _v6.b;
                            return $author$project$Pages$StaticHttpRequest$Request_fn(urls1, A3($author$project$DataSource$mapReq, fn, F2(function (_v7, _v8) {
                                return $author$project$Pages$StaticHttpRequest$ApiRoute(value2);
                            }), lookupFn1));
                        default:
                            var value1 = _v0.a.a;
                            var value2 = _v0.b.a;
                            return $author$project$Pages$StaticHttpRequest$ApiRoute(A2(fn, value1, value2));
                    }
            }
        }
        var error = _v0.b.a;
        return $author$project$Pages$StaticHttpRequest$RequestError(error);
    }, $author$project$DataSource$map2 = F3($author$project$DataSource$map2_fn);
    var $author$project$DataSource$mapReq_fn = function (fn, lookupFn1, lookupFn2, maybeMock, rawResponses) {
        return $author$project$DataSource$map2_fn(fn, A2(lookupFn1, maybeMock, rawResponses), A2(lookupFn2, maybeMock, rawResponses));
    }, $author$project$DataSource$mapReq = F5($author$project$DataSource$mapReq_fn);
    var $author$project$DataSource$map3_fn = function (combineFn, request1, request2, request3) {
        return $author$project$DataSource$map2_fn($elm$core$Basics$apR, request3, $author$project$DataSource$map2_fn($elm$core$Basics$apR, request2, $author$project$DataSource$map2_fn($elm$core$Basics$apR, request1, $author$project$DataSource$succeed(combineFn))));
    }, $author$project$DataSource$map3 = F4($author$project$DataSource$map3_fn);
    var $author$project$Pages$Internal$Platform$StaticResponses$ApiResponse = { $: 0 };
    var $author$project$Pages$Internal$Platform$StaticResponses$Continue_fn = function (a, b, c) {
        return { $: 0, a: a, b: b, c: c };
    }, $author$project$Pages$Internal$Platform$StaticResponses$Continue = F3($author$project$Pages$Internal$Platform$StaticResponses$Continue_fn);
    var $author$project$Pages$Internal$Platform$StaticResponses$Errors = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Pages$Internal$Platform$StaticResponses$Finish = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Pages$StaticHttpRequest$Complete = { $: 2 };
    var $author$project$Pages$StaticHttpRequest$HasPermanentError = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Pages$StaticHttpRequest$Incomplete = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Pages$StaticHttpRequest$cacheRequestResolutionHelp_fn = function (foundUrls, rawResponses, request) {
        cacheRequestResolutionHelp: while (true) {
            switch (request.$) {
                case 1:
                    var error = request.a;
                    switch (error.$) {
                        case 0:
                            return $author$project$Pages$StaticHttpRequest$Incomplete(foundUrls);
                        case 1:
                            return $author$project$Pages$StaticHttpRequest$HasPermanentError(error);
                        default:
                            return $author$project$Pages$StaticHttpRequest$HasPermanentError(error);
                    }
                case 0:
                    var urlList = request.a;
                    var lookupFn = request.b;
                    var $temp$foundUrls = urlList, $temp$rawResponses = rawResponses, $temp$request = A2(lookupFn, $elm$core$Maybe$Nothing, rawResponses);
                    foundUrls = $temp$foundUrls;
                    rawResponses = $temp$rawResponses;
                    request = $temp$request;
                    continue cacheRequestResolutionHelp;
                default:
                    return $author$project$Pages$StaticHttpRequest$Complete;
            }
        }
    }, $author$project$Pages$StaticHttpRequest$cacheRequestResolutionHelp = F3($author$project$Pages$StaticHttpRequest$cacheRequestResolutionHelp_fn);
    var $author$project$Pages$StaticHttpRequest$cacheRequestResolution_fn = function (request, rawResponses) {
        return $author$project$Pages$StaticHttpRequest$cacheRequestResolutionHelp_fn(_List_Nil, rawResponses, request);
    }, $author$project$Pages$StaticHttpRequest$cacheRequestResolution = F2($author$project$Pages$StaticHttpRequest$cacheRequestResolution_fn);
    var $elm$core$Set$Set_elm_builtin = $elm$core$Basics$identity;
    var $elm$core$Dict$getMin = function (dict) {
        getMin: while (true) {
            if ((dict.$ === -1) && (dict.d.$ === -1)) {
                var left = dict.d;
                var $temp$dict = left;
                dict = $temp$dict;
                continue getMin;
            }
            else {
                return dict;
            }
        }
    };
    var $elm$core$Dict$moveRedLeft = function (dict) {
        if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
            if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v1 = dict.d;
                var lClr = _v1.a;
                var lK = _v1.b;
                var lV = _v1.c;
                var lLeft = _v1.d;
                var lRight = _v1.e;
                var _v2 = dict.e;
                var rClr = _v2.a;
                var rK = _v2.b;
                var rV = _v2.c;
                var rLeft = _v2.d;
                var _v3 = rLeft.a;
                var rlK = rLeft.b;
                var rlV = rLeft.c;
                var rlL = rLeft.d;
                var rlR = rLeft.e;
                var rRight = _v2.e;
                return $elm$core$Dict$RBNode_elm_builtin_fn(0, rlK, rlV, $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, lLeft, lRight), rlL), $elm$core$Dict$RBNode_elm_builtin_fn(1, rK, rV, rlR, rRight));
            }
            else {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v4 = dict.d;
                var lClr = _v4.a;
                var lK = _v4.b;
                var lV = _v4.c;
                var lLeft = _v4.d;
                var lRight = _v4.e;
                var _v5 = dict.e;
                var rClr = _v5.a;
                var rK = _v5.b;
                var rV = _v5.c;
                var rLeft = _v5.d;
                var rRight = _v5.e;
                if (clr === 1) {
                    return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_fn(0, rK, rV, rLeft, rRight));
                }
                else {
                    return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_fn(0, rK, rV, rLeft, rRight));
                }
            }
        }
        else {
            return dict;
        }
    };
    var $elm$core$Dict$moveRedRight = function (dict) {
        if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
            if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v1 = dict.d;
                var lClr = _v1.a;
                var lK = _v1.b;
                var lV = _v1.c;
                var _v2 = _v1.d;
                var _v3 = _v2.a;
                var llK = _v2.b;
                var llV = _v2.c;
                var llLeft = _v2.d;
                var llRight = _v2.e;
                var lRight = _v1.e;
                var _v4 = dict.e;
                var rClr = _v4.a;
                var rK = _v4.b;
                var rV = _v4.c;
                var rLeft = _v4.d;
                var rRight = _v4.e;
                return $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, $elm$core$Dict$RBNode_elm_builtin_fn(1, llK, llV, llLeft, llRight), $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, lRight, $elm$core$Dict$RBNode_elm_builtin_fn(0, rK, rV, rLeft, rRight)));
            }
            else {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v5 = dict.d;
                var lClr = _v5.a;
                var lK = _v5.b;
                var lV = _v5.c;
                var lLeft = _v5.d;
                var lRight = _v5.e;
                var _v6 = dict.e;
                var rClr = _v6.a;
                var rK = _v6.b;
                var rV = _v6.c;
                var rLeft = _v6.d;
                var rRight = _v6.e;
                if (clr === 1) {
                    return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_fn(0, rK, rV, rLeft, rRight));
                }
                else {
                    return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_fn(0, rK, rV, rLeft, rRight));
                }
            }
        }
        else {
            return dict;
        }
    };
    var $elm$core$Dict$removeHelpPrepEQGT_fn = function (targetKey, dict, color, key, value, left, right) {
        if ((left.$ === -1) && (!left.a)) {
            var _v1 = left.a;
            var lK = left.b;
            var lV = left.c;
            var lLeft = left.d;
            var lRight = left.e;
            return $elm$core$Dict$RBNode_elm_builtin_fn(color, lK, lV, lLeft, $elm$core$Dict$RBNode_elm_builtin_fn(0, key, value, lRight, right));
        }
        else {
            _v2$2: while (true) {
                if ((right.$ === -1) && (right.a === 1)) {
                    if (right.d.$ === -1) {
                        if (right.d.a === 1) {
                            var _v3 = right.a;
                            var _v4 = right.d;
                            var _v5 = _v4.a;
                            return $elm$core$Dict$moveRedRight(dict);
                        }
                        else {
                            break _v2$2;
                        }
                    }
                    else {
                        var _v6 = right.a;
                        var _v7 = right.d;
                        return $elm$core$Dict$moveRedRight(dict);
                    }
                }
                else {
                    break _v2$2;
                }
            }
            return dict;
        }
    }, $elm$core$Dict$removeHelpPrepEQGT = F7($elm$core$Dict$removeHelpPrepEQGT_fn);
    var $elm$core$Dict$removeMin = function (dict) {
        if ((dict.$ === -1) && (dict.d.$ === -1)) {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var lColor = left.a;
            var lLeft = left.d;
            var right = dict.e;
            if (lColor === 1) {
                if ((lLeft.$ === -1) && (!lLeft.a)) {
                    var _v3 = lLeft.a;
                    return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, value, $elm$core$Dict$removeMin(left), right);
                }
                else {
                    var _v4 = $elm$core$Dict$moveRedLeft(dict);
                    if (_v4.$ === -1) {
                        var nColor = _v4.a;
                        var nKey = _v4.b;
                        var nValue = _v4.c;
                        var nLeft = _v4.d;
                        var nRight = _v4.e;
                        return $elm$core$Dict$balance_fn(nColor, nKey, nValue, $elm$core$Dict$removeMin(nLeft), nRight);
                    }
                    else {
                        return $elm$core$Dict$RBEmpty_elm_builtin;
                    }
                }
            }
            else {
                return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, value, $elm$core$Dict$removeMin(left), right);
            }
        }
        else {
            return $elm$core$Dict$RBEmpty_elm_builtin;
        }
    };
    var $elm$core$Dict$removeHelp_fn = function (targetKey, dict) {
        if (dict.$ === -2) {
            return $elm$core$Dict$RBEmpty_elm_builtin;
        }
        else {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            if (_Utils_cmp(targetKey, key) < 0) {
                if ((left.$ === -1) && (left.a === 1)) {
                    var _v4 = left.a;
                    var lLeft = left.d;
                    if ((lLeft.$ === -1) && (!lLeft.a)) {
                        var _v6 = lLeft.a;
                        return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, value, $elm$core$Dict$removeHelp_fn(targetKey, left), right);
                    }
                    else {
                        var _v7 = $elm$core$Dict$moveRedLeft(dict);
                        if (_v7.$ === -1) {
                            var nColor = _v7.a;
                            var nKey = _v7.b;
                            var nValue = _v7.c;
                            var nLeft = _v7.d;
                            var nRight = _v7.e;
                            return $elm$core$Dict$balance_fn(nColor, nKey, nValue, $elm$core$Dict$removeHelp_fn(targetKey, nLeft), nRight);
                        }
                        else {
                            return $elm$core$Dict$RBEmpty_elm_builtin;
                        }
                    }
                }
                else {
                    return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, value, $elm$core$Dict$removeHelp_fn(targetKey, left), right);
                }
            }
            else {
                return $elm$core$Dict$removeHelpEQGT_fn(targetKey, $elm$core$Dict$removeHelpPrepEQGT_fn(targetKey, dict, color, key, value, left, right));
            }
        }
    }, $elm$core$Dict$removeHelp = F2($elm$core$Dict$removeHelp_fn);
    var $elm$core$Dict$removeHelpEQGT_fn = function (targetKey, dict) {
        if (dict.$ === -1) {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            if (_Utils_eq(targetKey, key)) {
                var _v1 = $elm$core$Dict$getMin(right);
                if (_v1.$ === -1) {
                    var minKey = _v1.b;
                    var minValue = _v1.c;
                    return $elm$core$Dict$balance_fn(color, minKey, minValue, left, $elm$core$Dict$removeMin(right));
                }
                else {
                    return $elm$core$Dict$RBEmpty_elm_builtin;
                }
            }
            else {
                return $elm$core$Dict$balance_fn(color, key, value, left, $elm$core$Dict$removeHelp_fn(targetKey, right));
            }
        }
        else {
            return $elm$core$Dict$RBEmpty_elm_builtin;
        }
    }, $elm$core$Dict$removeHelpEQGT = F2($elm$core$Dict$removeHelpEQGT_fn);
    var $elm$core$Dict$remove_fn = function (key, dict) {
        var _v0 = $elm$core$Dict$removeHelp_fn(key, dict);
        if ((_v0.$ === -1) && (!_v0.a)) {
            var _v1 = _v0.a;
            var k = _v0.b;
            var v = _v0.c;
            var l = _v0.d;
            var r = _v0.e;
            return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, l, r);
        }
        else {
            var x = _v0;
            return x;
        }
    }, $elm$core$Dict$remove = F2($elm$core$Dict$remove_fn);
    var $elm$core$Dict$diff_fn = function (t1, t2) {
        return $elm$core$Dict$foldl_fn_unwrapped(function (k, v, t) {
            return $elm$core$Dict$remove_fn(k, t);
        }, t1, t2);
    }, $elm$core$Dict$diff = F2($elm$core$Dict$diff_fn);
    var $elm$core$Set$diff_fn = function (_v0, _v1) {
        var dict1 = _v0;
        var dict2 = _v1;
        return $elm$core$Dict$diff_fn(dict1, dict2);
    }, $elm$core$Set$diff = F2($elm$core$Set$diff_fn);
    var $elm$core$Set$empty = $elm$core$Dict$empty;
    var $elm$core$Set$insert_fn = function (key, _v0) {
        var dict = _v0;
        return $elm$core$Dict$insert_fn(key, 0, dict);
    }, $elm$core$Set$insert = F2($elm$core$Set$insert_fn);
    var $elm$core$Set$fromList = function (list) {
        return $elm$core$List$foldl_fn($elm$core$Set$insert, $elm$core$Set$empty, list);
    };
    var $author$project$Pages$Internal$StaticHttpBody$encodeWithType_fn = function (typeName, otherFields) {
        return $elm$json$Json$Encode$object(_List_Cons(_Utils_Tuple2("type", $elm$json$Json$Encode$string(typeName)), otherFields));
    }, $author$project$Pages$Internal$StaticHttpBody$encodeWithType = F2($author$project$Pages$Internal$StaticHttpBody$encodeWithType_fn);
    var $author$project$Pages$Internal$StaticHttpBody$encode = function (body) {
        switch (body.$) {
            case 0:
                return $author$project$Pages$Internal$StaticHttpBody$encodeWithType_fn("empty", _List_Nil);
            case 1:
                var content = body.b;
                return $author$project$Pages$Internal$StaticHttpBody$encodeWithType_fn("string", _List_fromArray([
                    _Utils_Tuple2("content", $elm$json$Json$Encode$string(content))
                ]));
            default:
                var content = body.a;
                return $author$project$Pages$Internal$StaticHttpBody$encodeWithType_fn("json", _List_fromArray([
                    _Utils_Tuple2("content", content)
                ]));
        }
    };
    var $elm$core$String$foldl = _String_foldl;
    var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
    var $elm$core$Bitwise$xor = _Bitwise_xor;
    var $robinheghan$fnv1a$FNV1a$hasher_fn = function (_byte, hashValue) {
        var mixed = _byte ^ hashValue;
        return ((((mixed + (mixed << 1)) + (mixed << 4)) + (mixed << 7)) + (mixed << 8)) + (mixed << 24);
    }, $robinheghan$fnv1a$FNV1a$hasher = F2($robinheghan$fnv1a$FNV1a$hasher_fn);
    var $robinheghan$fnv1a$FNV1a$utf32ToUtf8_fn = function (_char, acc) {
        var _byte = $elm$core$Char$toCode(_char);
        return (_byte < 128) ? $robinheghan$fnv1a$FNV1a$hasher_fn(_byte, acc) : ((_byte < 2048) ? $robinheghan$fnv1a$FNV1a$hasher_fn(128 | (63 & _byte), $robinheghan$fnv1a$FNV1a$hasher_fn(192 | (_byte >>> 6), acc)) : ((_byte < 65536) ? $robinheghan$fnv1a$FNV1a$hasher_fn(128 | (63 & _byte), $robinheghan$fnv1a$FNV1a$hasher_fn(128 | (63 & (_byte >>> 6)), $robinheghan$fnv1a$FNV1a$hasher_fn(224 | (_byte >>> 12), acc))) : $robinheghan$fnv1a$FNV1a$hasher_fn(128 | (63 & _byte), $robinheghan$fnv1a$FNV1a$hasher_fn(128 | (63 & (_byte >>> 6)), $robinheghan$fnv1a$FNV1a$hasher_fn(128 | (63 & (_byte >>> 12)), $robinheghan$fnv1a$FNV1a$hasher_fn(240 | (_byte >>> 18), acc))))));
    }, $robinheghan$fnv1a$FNV1a$utf32ToUtf8 = F2($robinheghan$fnv1a$FNV1a$utf32ToUtf8_fn);
    var $robinheghan$fnv1a$FNV1a$hashWithSeed_fn = function (str, seed) {
        return _String_foldl_fn($robinheghan$fnv1a$FNV1a$utf32ToUtf8, seed, str) >>> 0;
    }, $robinheghan$fnv1a$FNV1a$hashWithSeed = F2($robinheghan$fnv1a$FNV1a$hashWithSeed_fn);
    var $robinheghan$fnv1a$FNV1a$initialSeed = 2166136261;
    var $robinheghan$fnv1a$FNV1a$hash = function (str) {
        return $robinheghan$fnv1a$FNV1a$hashWithSeed_fn(str, $robinheghan$fnv1a$FNV1a$initialSeed);
    };
    var $author$project$Pages$StaticHttp$Request$hashHeader = function (_v0) {
        var name = _v0.a;
        var value = _v0.b;
        return $elm$json$Json$Encode$string(name + (": " + value));
    };
    var $author$project$Pages$StaticHttp$Request$hash = function (requestDetails) {
        return $elm$core$String$fromInt($robinheghan$fnv1a$FNV1a$hash(_Json_encode_fn(0, $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("method", $elm$json$Json$Encode$string(requestDetails.dR)),
            _Utils_Tuple2("url", $elm$json$Json$Encode$string(requestDetails.el)),
            _Utils_Tuple2("headers", $elm$json$Json$Encode$list_fn($author$project$Pages$StaticHttp$Request$hashHeader, requestDetails.dH)),
            _Utils_Tuple2("body", $author$project$Pages$Internal$StaticHttpBody$encode(requestDetails.dl))
        ])))));
    };
    var $elm$core$List$isEmpty = function (xs) {
        if (!xs.b) {
            return true;
        }
        else {
            return false;
        }
    };
    var $elm$core$Dict$isEmpty = function (dict) {
        if (dict.$ === -2) {
            return true;
        }
        else {
            return false;
        }
    };
    var $elm$core$Set$isEmpty = function (_v0) {
        var dict = _v0;
        return $elm$core$Dict$isEmpty(dict);
    };
    var $elm$core$Set$foldl_fn = function (func, initialState, _v0) {
        var dict = _v0;
        return $elm$core$Dict$foldl_fn_unwrapped(function (key, _v1, state) {
            return A2(func, key, state);
        }, initialState, dict);
    }, $elm$core$Set$foldl_fn_unwrapped = function (func, initialState, _v0) {
        var dict = _v0;
        return $elm$core$Dict$foldl_fn_unwrapped(function (key, _v1, state) {
            return func(key, state);
        }, initialState, dict);
    }, $elm$core$Set$foldl = F3($elm$core$Set$foldl_fn);
    var $elm_community$dict_extra$Dict$Extra$removeMany_fn = function (set, dict) {
        return $elm$core$Set$foldl_fn($elm$core$Dict$remove, dict, set);
    }, $elm_community$dict_extra$Dict$Extra$removeMany = F2($elm_community$dict_extra$Dict$Extra$removeMany_fn);
    var $author$project$Pages$StaticHttpRequest$resolve_fn = function (request, rawResponses) {
        resolve: while (true) {
            switch (request.$) {
                case 1:
                    var error = request.a;
                    return $elm$core$Result$Err(error);
                case 0:
                    var lookupFn = request.b;
                    var _v1 = A2(lookupFn, $elm$core$Maybe$Nothing, rawResponses);
                    var nextRequest = _v1;
                    var $temp$request = nextRequest, $temp$rawResponses = rawResponses;
                    request = $temp$request;
                    rawResponses = $temp$rawResponses;
                    continue resolve;
                default:
                    var value = request.a;
                    return $elm$core$Result$Ok(value);
            }
        }
    }, $author$project$Pages$StaticHttpRequest$resolve = F2($author$project$Pages$StaticHttpRequest$resolve_fn);
    var $elm$core$Dict$member_fn = function (key, dict) {
        var _v0 = $elm$core$Dict$get_fn(key, dict);
        if (!_v0.$) {
            return true;
        }
        else {
            return false;
        }
    }, $elm$core$Dict$member = F2($elm$core$Dict$member_fn);
    var $elm$core$Set$member_fn = function (key, _v0) {
        var dict = _v0;
        return $elm$core$Dict$member_fn(key, dict);
    }, $elm$core$Set$member = F2($elm$core$Set$member_fn);
    var $elm_community$list_extra$List$Extra$uniqueHelp_fn = function (f, existing, remaining, accumulator) {
        uniqueHelp: while (true) {
            if (!remaining.b) {
                return $elm$core$List$reverse(accumulator);
            }
            else {
                var first = remaining.a;
                var rest = remaining.b;
                var computedFirst = f(first);
                if ($elm$core$Set$member_fn(computedFirst, existing)) {
                    var $temp$f = f, $temp$existing = existing, $temp$remaining = rest, $temp$accumulator = accumulator;
                    f = $temp$f;
                    existing = $temp$existing;
                    remaining = $temp$remaining;
                    accumulator = $temp$accumulator;
                    continue uniqueHelp;
                }
                else {
                    var $temp$f = f, $temp$existing = $elm$core$Set$insert_fn(computedFirst, existing), $temp$remaining = rest, $temp$accumulator = _List_Cons(first, accumulator);
                    f = $temp$f;
                    existing = $temp$existing;
                    remaining = $temp$remaining;
                    accumulator = $temp$accumulator;
                    continue uniqueHelp;
                }
            }
        }
    }, $elm_community$list_extra$List$Extra$uniqueHelp = F4($elm_community$list_extra$List$Extra$uniqueHelp_fn);
    var $elm_community$list_extra$List$Extra$uniqueBy_fn = function (f, list) {
        return $elm_community$list_extra$List$Extra$uniqueHelp_fn(f, $elm$core$Set$empty, list, _List_Nil);
    }, $elm_community$list_extra$List$Extra$uniqueBy = F2($elm_community$list_extra$List$Extra$uniqueBy_fn);
    var $author$project$Pages$StaticHttpRequest$resolveUrlsHelp_fn = function (rawResponses, soFar, request) {
        resolveUrlsHelp: while (true) {
            switch (request.$) {
                case 1:
                    var error = request.a;
                    if (!error.$) {
                        var next = error.b;
                        return $elm_community$list_extra$List$Extra$uniqueBy_fn($author$project$Pages$StaticHttp$Request$hash, _Utils_ap(soFar, next));
                    }
                    else {
                        return soFar;
                    }
                case 0:
                    var urlList = request.a;
                    var lookupFn = request.b;
                    var $temp$rawResponses = rawResponses, $temp$soFar = _Utils_ap(soFar, urlList), $temp$request = A2(lookupFn, $elm$core$Maybe$Nothing, rawResponses);
                    rawResponses = $temp$rawResponses;
                    soFar = $temp$soFar;
                    request = $temp$request;
                    continue resolveUrlsHelp;
                default:
                    return soFar;
            }
        }
    }, $author$project$Pages$StaticHttpRequest$resolveUrlsHelp = F3($author$project$Pages$StaticHttpRequest$resolveUrlsHelp_fn);
    var $author$project$Pages$StaticHttpRequest$resolveUrls_fn = function (request, rawResponses) {
        return $author$project$Pages$StaticHttpRequest$resolveUrlsHelp_fn(rawResponses, _List_Nil, request);
    }, $author$project$Pages$StaticHttpRequest$resolveUrls = F2($author$project$Pages$StaticHttpRequest$resolveUrls_fn);
    var $elm$core$List$singleton = function (value) {
        return _List_fromArray([value]);
    };
    var $author$project$TerminalText$text = function (value) {
        return $author$project$TerminalText$Style_fn($author$project$TerminalText$blankStyle, value);
    };
    var $author$project$Pages$StaticHttpRequest$toBuildError_fn = function (path, error) {
        switch (error.$) {
            case 0:
                var missingKey = error.a;
                return {
                    cw: true,
                    bA: _List_fromArray([
                        $author$project$TerminalText$text(missingKey)
                    ]),
                    ca: path,
                    a6: "Missing Http Response"
                };
            case 1:
                var decodeErrorMessage = error.a;
                return {
                    cw: true,
                    bA: _List_fromArray([
                        $author$project$TerminalText$text(decodeErrorMessage)
                    ]),
                    ca: path,
                    a6: "Static Http Decoding Error"
                };
            default:
                var decodeErrorMessage = error.a;
                return {
                    cw: true,
                    bA: _List_fromArray([
                        $author$project$TerminalText$text("I ran into a call to `DataSource.fail` with message: " + decodeErrorMessage)
                    ]),
                    ca: path,
                    a6: "Called Static Http Fail"
                };
        }
    }, $author$project$Pages$StaticHttpRequest$toBuildError = F2($author$project$Pages$StaticHttpRequest$toBuildError_fn);
    var $elm$core$Set$union_fn = function (_v0, _v1) {
        var dict1 = _v0;
        var dict2 = _v1;
        return $elm$core$Dict$union_fn(dict1, dict2);
    }, $elm$core$Set$union = F2($elm$core$Set$union_fn);
    var $elm$core$Dict$values = function (dict) {
        return $elm$core$Dict$foldr_fn_unwrapped(function (key, value, valueList) {
            return _List_Cons(value, valueList);
        }, _List_Nil, dict);
    };
    var $author$project$Pages$Internal$Platform$StaticResponses$nextStep_fn = function (model, maybeRoutes) {
        nextStep: while (true) {
            var errors = model.Q;
            var allRawResponses = model.N;
            var staticResponses = function () {
                var _v11 = model.bK;
                switch (_v11.$) {
                    case 1:
                        var s = _v11.a;
                        return s;
                    case 0:
                        var staticHttpResult = _v11.a;
                        return staticHttpResult;
                    default:
                        var staticHttpResult = _v11.b;
                        return staticHttpResult;
                }
            }();
            var request = function () {
                var request_ = staticResponses.a;
                return request_;
            }();
            var staticRequestsStatus = $author$project$Pages$StaticHttpRequest$cacheRequestResolution_fn(request, allRawResponses);
            var pendingRequests = function () {
                var rawResponses = staticResponses.b;
                var hasPermanentHttpError = !$elm$core$List$isEmpty(errors);
                var hasPermanentError = function () {
                    if (staticRequestsStatus.$ === 1) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }();
                var _v7 = function () {
                    if (!staticRequestsStatus.$) {
                        var newUrlsToFetch = staticRequestsStatus.a;
                        return _Utils_Tuple2(false, newUrlsToFetch);
                    }
                    else {
                        return _Utils_Tuple2(true, _List_Nil);
                    }
                }();
                var allUrlsKnown = _v7.a;
                var knownUrlsToFetch = _v7.b;
                var fetchedAllKnownUrls = $elm$core$Set$isEmpty($elm$core$Set$diff_fn($elm$core$Set$fromList($elm$core$List$map_fn($author$project$Pages$StaticHttp$Request$hash, knownUrlsToFetch)), $elm$core$Set$union_fn($elm$core$Set$fromList($elm$core$Dict$keys(allRawResponses)), $elm$core$Set$fromList($elm$core$Dict$keys(rawResponses)))));
                return (hasPermanentHttpError || (hasPermanentError || (allUrlsKnown && fetchedAllKnownUrls))) ? false : true;
            }();
            if (pendingRequests) {
                var urlsToPerform = $author$project$Pages$StaticHttpRequest$resolveUrls_fn(request, allRawResponses);
                var maskedToUnmasked = $elm$core$Dict$fromList($elm$core$List$map_fn(function (secureUrl) {
                    return _Utils_Tuple2($author$project$Pages$StaticHttp$Request$hash(secureUrl), secureUrl);
                }, urlsToPerform));
                var dictOfNewUrlsToPerform = $elm$core$Dict$fromList($elm$core$List$map_fn(function (url) {
                    return _Utils_Tuple2($author$project$Pages$StaticHttp$Request$hash(url), $elm$core$Maybe$Nothing);
                }, urlsToPerform));
                var newAllRawResponses = $elm$core$Dict$union_fn(allRawResponses, dictOfNewUrlsToPerform);
                var alreadyPerformed = $elm$core$Set$fromList($elm$core$Dict$keys(allRawResponses));
                var newThing = $elm$core$Dict$values($elm_community$dict_extra$Dict$Extra$removeMany_fn(alreadyPerformed, maskedToUnmasked));
                return _Utils_Tuple2(model.bK, $author$project$Pages$Internal$Platform$StaticResponses$Continue_fn(newAllRawResponses, newThing, maybeRoutes));
            }
            else {
                var allErrors = function () {
                    var failedRequests = function () {
                        var maybePermanentError = function () {
                            if (staticRequestsStatus.$ === 1) {
                                var theError = staticRequestsStatus.a;
                                return $elm$core$Maybe$Just(theError);
                            }
                            else {
                                return $elm$core$Maybe$Nothing;
                            }
                        }();
                        var decoderErrors = $elm$core$Maybe$withDefault_fn(_List_Nil, $elm$core$Maybe$map_fn($elm$core$List$singleton, $elm$core$Maybe$map_fn($author$project$Pages$StaticHttpRequest$toBuildError("TODO PATH"), maybePermanentError)));
                        return decoderErrors;
                    }();
                    return _Utils_ap(errors, failedRequests);
                }();
                var _v0 = model.bK;
                switch (_v0.$) {
                    case 1:
                        return _Utils_Tuple2(model.bK, ($elm$core$List$length(allErrors) > 0) ? $author$project$Pages$Internal$Platform$StaticResponses$Finish($author$project$Pages$Internal$Platform$StaticResponses$Errors(allErrors)) : $author$project$Pages$Internal$Platform$StaticResponses$Finish($author$project$Pages$Internal$Platform$StaticResponses$ApiResponse));
                    case 0:
                        return _Utils_Tuple2(model.bK, ($elm$core$List$length(allErrors) > 0) ? $author$project$Pages$Internal$Platform$StaticResponses$Finish($author$project$Pages$Internal$Platform$StaticResponses$Errors(allErrors)) : $author$project$Pages$Internal$Platform$StaticResponses$Finish($author$project$Pages$Internal$Platform$StaticResponses$ApiResponse));
                    default:
                        var pageFoundDataSource = _v0.a;
                        var _v1 = _v0.b;
                        var andThenRequest = _v0.c;
                        var pageFoundResult = $author$project$Pages$StaticHttpRequest$resolve_fn(pageFoundDataSource, allRawResponses);
                        if (!pageFoundResult.$) {
                            if (pageFoundResult.a.$ === 1) {
                                var _v3 = pageFoundResult.a;
                                var $temp$model = _Utils_update(model, {
                                    bK: $author$project$Pages$Internal$Platform$StaticResponses$StaticResponses(andThenRequest)
                                }), $temp$maybeRoutes = maybeRoutes;
                                model = $temp$model;
                                maybeRoutes = $temp$maybeRoutes;
                                continue nextStep;
                            }
                            else {
                                return _Utils_Tuple2($author$project$Pages$Internal$Platform$StaticResponses$empty, $author$project$Pages$Internal$Platform$StaticResponses$Finish($author$project$Pages$Internal$Platform$StaticResponses$ApiResponse));
                            }
                        }
                        else {
                            var error_ = pageFoundResult.a;
                            var failedRequests = function () {
                                var maybePermanentError = function () {
                                    if (staticRequestsStatus.$ === 1) {
                                        var theError = staticRequestsStatus.a;
                                        return $elm$core$Maybe$Just(theError);
                                    }
                                    else {
                                        return $elm$core$Maybe$Nothing;
                                    }
                                }();
                                var decoderErrors = $elm$core$Maybe$withDefault_fn(_List_Nil, $elm$core$Maybe$map_fn($elm$core$List$singleton, $elm$core$Maybe$map_fn($author$project$Pages$StaticHttpRequest$toBuildError("TODO PATH"), maybePermanentError)));
                                return decoderErrors;
                            }();
                            return _Utils_Tuple2(model.bK, $author$project$Pages$Internal$Platform$StaticResponses$Finish($author$project$Pages$Internal$Platform$StaticResponses$Errors(_Utils_ap(_List_fromArray([
                                $author$project$Pages$StaticHttpRequest$toBuildError_fn("get static routes", error_)
                            ]), _Utils_ap(failedRequests, errors)))));
                        }
                }
            }
        }
    }, $author$project$Pages$Internal$Platform$StaticResponses$nextStep = F2($author$project$Pages$Internal$Platform$StaticResponses$nextStep_fn);
    var $author$project$Pages$Internal$Platform$Effect$Batch = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$Pages$Internal$Platform$ToJsPayload$Errors = function (a) {
        return { $: 4, a: a };
    };
    var $author$project$Pages$Internal$Platform$Effect$FetchHttp = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Pages$Internal$NotFoundReason$NoMatchingRoute = { $: 0 };
    var $author$project$Pages$Internal$Platform$ToJsPayload$SendApiResponse = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Pages$Internal$Platform$Effect$SendSinglePage = function (a) {
        return { $: 3, a: a };
    };
    var $elm$core$Result$mapError_fn = function (f, result) {
        if (!result.$) {
            var v = result.a;
            return $elm$core$Result$Ok(v);
        }
        else {
            var e = result.a;
            return $elm$core$Result$Err(f(e));
        }
    }, $elm$core$Result$mapError = F2($elm$core$Result$mapError_fn);
    var $author$project$Pages$Internal$ResponseSketch$HotUpdate_fn = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $author$project$Pages$Internal$ResponseSketch$HotUpdate = F2($author$project$Pages$Internal$ResponseSketch$HotUpdate_fn);
    var $author$project$Pages$Internal$ResponseSketch$NotFound = function (a) {
        return { $: 3, a: a };
    };
    var $author$project$Pages$Internal$Platform$ToJsPayload$PageProgress = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Pages$Flags$PreRenderFlags = { $: 1 };
    var $author$project$Pages$Internal$Platform$Effect$SendSinglePageNew_fn = function (a, b) {
        return { $: 4, a: a, b: b };
    }, $author$project$Pages$Internal$Platform$Effect$SendSinglePageNew = F2($author$project$Pages$Internal$Platform$Effect$SendSinglePageNew_fn);
    var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
        switch (handler.$) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 2:
                return 2;
            default:
                return 3;
        }
    };
    var $elm$html$Html$br = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "br"), $elm$html$Html$br_fn = $elm$html$Html$br.f;
    var $elm$html$Html$code = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "code"), $elm$html$Html$code_fn = $elm$html$Html$code.f;
    var $elm$html$Html$div = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "div"), $elm$html$Html$div_fn = $elm$html$Html$div.f;
    var $elm$html$Html$h1 = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "h1"), $elm$html$Html$h1_fn = $elm$html$Html$h1.f;
    var $elm$html$Html$Attributes$stringProperty_fn = function (key, string) {
        return _VirtualDom_property_fn(key, $elm$json$Json$Encode$string(string));
    }, $elm$html$Html$Attributes$stringProperty = F2($elm$html$Html$Attributes$stringProperty_fn);
    var $elm$html$Html$Attributes$id_a0 = "id", $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty($elm$html$Html$Attributes$id_a0);
    var $elm$html$Html$li = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "li"), $elm$html$Html$li_fn = $elm$html$Html$li.f;
    var $author$project$Pages$Internal$NotFoundReason$moduleName = function (moduleContext) {
        return $elm$core$String$join_fn("/", _List_Cons("src", moduleContext.f_)) + ".elm";
    };
    var $elm$html$Html$p = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "p"), $elm$html$Html$p_fn = $elm$html$Html$p.f;
    var $author$project$Pages$Internal$NotFoundReason$recordToString = function (fields) {
        return "{ " + ($elm$core$String$join_fn(", ", $elm$core$List$map_fn(function (_v0) {
            var key = _v0.a;
            var value = _v0.b;
            return key + (" = " + value);
        }, fields)) + " }");
    };
    var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
    var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
    var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
    var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
    var $elm$html$Html$ul = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "ul"), $elm$html$Html$ul_fn = $elm$html$Html$ul.f;
    var $author$project$Pages$Internal$NotFoundReason$prerenderedOptionsView_fn = function (moduleContext, routes) {
        if (!routes.b) {
            return $elm$html$Html$div_fn(_List_Nil, _List_fromArray([
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$text("But this Page module has no pre-rendered routes! If you want to pre-render this page, add these "),
                $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                    $elm$html$Html$text("RouteParams")
                ])),
                $elm$html$Html$text(" to the module's "),
                $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                    $elm$html$Html$text("routes")
                ])),
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$code_fn(_List_fromArray([
                    _VirtualDom_style_fn("border-bottom", "dotted 2px"),
                    _VirtualDom_style_fn("font-weight", "bold")
                ]), _List_fromArray([
                    $elm$html$Html$text($author$project$Pages$Internal$NotFoundReason$recordToString(moduleContext.b7))
                ]))
            ]));
        }
        else {
            return $elm$html$Html$div_fn(_List_Nil, _List_fromArray([
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$text(" but these RouteParams were not present "),
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$code_fn(_List_fromArray([
                    _VirtualDom_style_fn("border-bottom", "dotted 2px"),
                    _VirtualDom_style_fn("font-weight", "bold")
                ]), _List_fromArray([
                    $elm$html$Html$text($author$project$Pages$Internal$NotFoundReason$recordToString(moduleContext.b7))
                ])),
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$text("The following RouteParams are pre-rendered:"),
                $elm$html$Html$ul_fn(_List_fromArray([
                    _VirtualDom_style_fn("padding-top", "30px")
                ]), $elm$core$List$map_fn(function (record) {
                    return $elm$html$Html$li_fn(_List_fromArray([
                        _VirtualDom_style_fn("list-style", "inside")
                    ]), _List_fromArray([
                        $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                            $elm$html$Html$text($author$project$Pages$Internal$NotFoundReason$recordToString(record))
                        ]))
                    ]));
                }, routes)),
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$p_fn(_List_Nil, _List_fromArray([
                    $elm$html$Html$text("Try changing "),
                    $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                        $elm$html$Html$text("routes")
                    ])),
                    $elm$html$Html$text(" in "),
                    $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                        $elm$html$Html$text($author$project$Pages$Internal$NotFoundReason$moduleName(moduleContext))
                    ])),
                    $elm$html$Html$text(" to make sure it includes these "),
                    $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                        $elm$html$Html$text("RouteParams")
                    ])),
                    $elm$html$Html$text(".")
                ]))
            ]));
        }
    }, $author$project$Pages$Internal$NotFoundReason$prerenderedOptionsView = F2($author$project$Pages$Internal$NotFoundReason$prerenderedOptionsView_fn);
    var $author$project$Path$toAbsolute = function (_v0) {
        var path = _v0;
        return "/" + path;
    };
    var $elm$html$Html$span = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "span"), $elm$html$Html$span_fn = $elm$html$Html$span.f;
    var $author$project$Pages$Internal$RoutePattern$segmentToString = function (segment) {
        if (!segment.$) {
            var string = segment.a;
            return string;
        }
        else {
            var name = segment.a;
            return ":" + name;
        }
    };
    var $author$project$Pages$Internal$RoutePattern$toString_ = function (segments) {
        return "/" + $elm$core$String$join_fn("/", $elm$core$List$map_fn($author$project$Pages$Internal$RoutePattern$segmentToString, segments));
    };
    var $author$project$Pages$Internal$RoutePattern$view = function (routePattern) {
        return $elm$html$Html$span_fn(_List_Nil, function () {
            var _v0 = routePattern.ev;
            if (_v0.$ === 1) {
                return _List_fromArray([
                    $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                        $elm$html$Html$text($author$project$Pages$Internal$RoutePattern$toString_(routePattern.eR))
                    ]))
                ]);
            }
            else {
                switch (_v0.a.$) {
                    case 0:
                        var optionalName = _v0.a.a;
                        return _List_fromArray([
                            $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                                $elm$html$Html$text($author$project$Pages$Internal$RoutePattern$toString_(routePattern.eR))
                            ])),
                            $elm$html$Html$text(" or "),
                            $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                                $elm$html$Html$text($author$project$Pages$Internal$RoutePattern$toString_(routePattern.eR) + ("/:" + optionalName))
                            ]))
                        ]);
                    case 1:
                        var _v1 = _v0.a;
                        return _List_fromArray([
                            $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                                $elm$html$Html$text($author$project$Pages$Internal$RoutePattern$toString_(routePattern.eR))
                            ]))
                        ]);
                    default:
                        var _v2 = _v0.a;
                        return _List_fromArray([
                            $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                                $elm$html$Html$text($author$project$Pages$Internal$RoutePattern$toString_(routePattern.eR))
                            ]))
                        ]);
                }
            }
        }());
    };
    var $author$project$Pages$Internal$NotFoundReason$document_fn = function (pathPatterns, payload) {
        return {
            dl: $elm$html$Html$div_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$id_a0, "not-found-reason"),
                _VirtualDom_style_fn("padding", "30px")
            ]), function () {
                var _v0 = payload.cR;
                switch (_v0.$) {
                    case 0:
                        return _List_fromArray([
                            $elm$html$Html$text("No route found for "),
                            $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                                $elm$html$Html$text($author$project$Path$toAbsolute(payload.ca))
                            ])),
                            $elm$html$Html$text(" Did you mean to go to one of these routes:"),
                            $elm$html$Html$ul_fn(_List_fromArray([
                                _VirtualDom_style_fn("padding-top", "30px")
                            ]), $elm$core$List$map_fn(function (route) {
                                return $elm$html$Html$li_fn(_List_fromArray([
                                    _VirtualDom_style_fn("list-style", "inside")
                                ]), _List_fromArray([
                                    $author$project$Pages$Internal$RoutePattern$view(route)
                                ]));
                            }, pathPatterns))
                        ]);
                    case 1:
                        var moduleContext = _v0.a;
                        var routes = _v0.b;
                        return _List_fromArray([
                            $elm$html$Html$h1_fn(_List_Nil, _List_fromArray([
                                $elm$html$Html$text("Page Not Found")
                            ])),
                            $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                                $elm$html$Html$text($author$project$Path$toAbsolute(payload.ca))
                            ])),
                            $elm$html$Html$text(" successfully matched the route "),
                            $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                            $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                            $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                                $author$project$Pages$Internal$RoutePattern$view(moduleContext.gb)
                            ])),
                            $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                            $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                            $elm$html$Html$text(" from the Route Module "),
                            $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                            $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                            $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                                $elm$html$Html$text($author$project$Pages$Internal$NotFoundReason$moduleName(moduleContext))
                            ])),
                            $author$project$Pages$Internal$NotFoundReason$prerenderedOptionsView_fn(moduleContext, routes)
                        ]);
                    default:
                        return _List_fromArray([
                            $elm$html$Html$text("Page not found"),
                            $elm$html$Html$text("TODO")
                        ]);
                }
            }()),
            a6: "Page not found"
        };
    }, $author$project$Pages$Internal$NotFoundReason$document = F2($author$project$Pages$Internal$NotFoundReason$document_fn);
    var $author$project$Pages$Internal$Platform$Cli$render404Page_fn = function (config, sharedData, model, path, notFoundReason) {
        var _v0 = _Utils_Tuple2(model.S, sharedData);
        if ((!_v0.a) && (!_v0.b.$)) {
            var justSharedData = _v0.b.a;
            var pathAndRoute = { ca: path, hE: config.hl };
            var pageData = config.gL(config.hk);
            var pageModel = A5(config.ez, $author$project$Pages$Flags$PreRenderFlags, justSharedData, pageData, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing).a;
            var viewValue = A4(config.aQ, pathAndRoute, $elm$core$Maybe$Nothing, justSharedData, pageData).aQ(pageModel);
            var byteEncodedPageData = $elm$bytes$Bytes$Encode$encode(config.gK($author$project$Pages$Internal$ResponseSketch$HotUpdate_fn(config.gL(config.hk), justSharedData)));
            return $author$project$Pages$Internal$Platform$Effect$SendSinglePageNew_fn(byteEncodedPageData, $author$project$Pages$Internal$Platform$ToJsPayload$PageProgress({
                ds: $elm$core$Dict$empty,
                Q: _List_Nil,
                bZ: A4(config.aQ, pathAndRoute, $elm$core$Maybe$Nothing, justSharedData, pageData).bZ,
                dH: _List_Nil,
                dJ: $author$project$HtmlPrinter$htmlToString(viewValue.dl),
                dK: true,
                hE: $author$project$Path$toAbsolute(path),
                aw: $elm$core$Dict$empty,
                Z: 404,
                a6: viewValue.a6
            }));
        }
        else {
            var notFoundDocument = $author$project$Pages$Internal$NotFoundReason$document_fn(config.hq, { ca: path, cR: notFoundReason });
            var byteEncodedPageData = $elm$bytes$Bytes$Encode$encode(config.gK($author$project$Pages$Internal$ResponseSketch$NotFound({ ca: path, cR: notFoundReason })));
            return $author$project$Pages$Internal$Platform$Effect$SendSinglePageNew_fn(byteEncodedPageData, $author$project$Pages$Internal$Platform$ToJsPayload$PageProgress({
                ds: $elm$core$Dict$empty,
                Q: _List_Nil,
                bZ: _List_Nil,
                dH: _List_Nil,
                dJ: $author$project$HtmlPrinter$htmlToString(notFoundDocument.dl),
                dK: true,
                hE: $author$project$Path$toAbsolute(path),
                aw: $elm$core$Dict$empty,
                Z: 404,
                a6: notFoundDocument.a6
            }));
        }
    }, $author$project$Pages$Internal$Platform$Cli$render404Page = F5($author$project$Pages$Internal$Platform$Cli$render404Page_fn);
    var $author$project$PageServerResponse$ErrorPage_fn = function (a, b) {
        return { $: 2, a: a, b: b };
    }, $author$project$PageServerResponse$ErrorPage = F2($author$project$PageServerResponse$ErrorPage_fn);
    var $author$project$Pages$Internal$ResponseSketch$Redirect = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$PageServerResponse$RenderPage_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $author$project$PageServerResponse$RenderPage = F2($author$project$PageServerResponse$RenderPage_fn);
    var $author$project$Pages$Internal$ResponseSketch$RenderPage = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$PageServerResponse$ServerResponse = function (a) {
        return { $: 1, a: a };
    };
    var $elm$core$Result$map_fn = function (func, ra) {
        if (!ra.$) {
            var a = ra.a;
            return $elm$core$Result$Ok(func(a));
        }
        else {
            var e = ra.a;
            return $elm$core$Result$Err(e);
        }
    }, $elm$core$Result$map = F2($elm$core$Result$map_fn);
    var $elm$core$Result$map2_fn = function (func, ra, rb) {
        if (ra.$ === 1) {
            var x = ra.a;
            return $elm$core$Result$Err(x);
        }
        else {
            var a = ra.a;
            if (rb.$ === 1) {
                var x = rb.a;
                return $elm$core$Result$Err(x);
            }
            else {
                var b = rb.a;
                return $elm$core$Result$Ok(A2(func, a, b));
            }
        }
    }, $elm$core$Result$map2_fn_unwrapped = function (func, ra, rb) {
        if (ra.$ === 1) {
            var x = ra.a;
            return $elm$core$Result$Err(x);
        }
        else {
            var a = ra.a;
            if (rb.$ === 1) {
                var x = rb.a;
                return $elm$core$Result$Err(x);
            }
            else {
                var b = rb.a;
                return $elm$core$Result$Ok(func(a, b));
            }
        }
    }, $elm$core$Result$map2 = F3($elm$core$Result$map2_fn);
    var $elm$core$Result$map3_fn = function (func, ra, rb, rc) {
        if (ra.$ === 1) {
            var x = ra.a;
            return $elm$core$Result$Err(x);
        }
        else {
            var a = ra.a;
            if (rb.$ === 1) {
                var x = rb.a;
                return $elm$core$Result$Err(x);
            }
            else {
                var b = rb.a;
                if (rc.$ === 1) {
                    var x = rc.a;
                    return $elm$core$Result$Err(x);
                }
                else {
                    var c = rc.a;
                    return $elm$core$Result$Ok(A3(func, a, b, c));
                }
            }
        }
    }, $elm$core$Result$map3_fn_unwrapped = function (func, ra, rb, rc) {
        if (ra.$ === 1) {
            var x = ra.a;
            return $elm$core$Result$Err(x);
        }
        else {
            var a = ra.a;
            if (rb.$ === 1) {
                var x = rb.a;
                return $elm$core$Result$Err(x);
            }
            else {
                var b = rb.a;
                if (rc.$ === 1) {
                    var x = rc.a;
                    return $elm$core$Result$Err(x);
                }
                else {
                    var c = rc.a;
                    return $elm$core$Result$Ok(func(a, b, c));
                }
            }
        }
    }, $elm$core$Result$map3 = F4($elm$core$Result$map3_fn);
    var $elm$core$Tuple$pair_fn = function (a, b) {
        return _Utils_Tuple2(a, b);
    }, $elm$core$Tuple$pair = F2($elm$core$Tuple$pair_fn);
    var $elm$json$Json$Encode$bool = _Json_wrap;
    var $elm_community$list_extra$List$Extra$groupWhile_fn = function (isSameGroup, items) {
        return $elm$core$List$foldr_fn(F2(function (x, acc) {
            if (!acc.b) {
                return _List_fromArray([
                    _Utils_Tuple2(x, _List_Nil)
                ]);
            }
            else {
                var _v1 = acc.a;
                var y = _v1.a;
                var restOfGroup = _v1.b;
                var groups = acc.b;
                return A2(isSameGroup, x, y) ? _List_Cons(_Utils_Tuple2(x, _List_Cons(y, restOfGroup)), groups) : _List_Cons(_Utils_Tuple2(x, _List_Nil), acc);
            }
        }), _List_Nil, items);
    }, $elm_community$list_extra$List$Extra$groupWhile_fn_unwrapped = function (isSameGroup, items) {
        return $elm$core$List$foldr_fn(F2(function (x, acc) {
            if (!acc.b) {
                return _List_fromArray([
                    _Utils_Tuple2(x, _List_Nil)
                ]);
            }
            else {
                var _v1 = acc.a;
                var y = _v1.a;
                var restOfGroup = _v1.b;
                var groups = acc.b;
                return isSameGroup(x, y) ? _List_Cons(_Utils_Tuple2(x, _List_Cons(y, restOfGroup)), groups) : _List_Cons(_Utils_Tuple2(x, _List_Nil), acc);
            }
        }), _List_Nil, items);
    }, $elm_community$list_extra$List$Extra$groupWhile = F2($elm_community$list_extra$List$Extra$groupWhile_fn);
    var $author$project$PageServerResponse$collectMultiValueHeaders = function (headers) {
        return $elm$core$List$map_fn(function (_v2) {
            var _v3 = _v2.a;
            var key = _v3.a;
            var firstValue = _v3.b;
            var otherValues = _v2.b;
            return _Utils_Tuple2(key, _List_Cons(firstValue, $elm$core$List$map_fn($elm$core$Tuple$second, otherValues)));
        }, $elm_community$list_extra$List$Extra$groupWhile_fn_unwrapped(function (_v0, _v1) {
            var key1 = _v0.a;
            var key2 = _v1.a;
            return _Utils_eq(key1, key2);
        }, headers));
    };
    var $elm$json$Json$Encode$int = _Json_wrap;
    var $elm$core$Tuple$mapSecond_fn = function (func, _v0) {
        var x = _v0.a;
        var y = _v0.b;
        return _Utils_Tuple2(x, func(y));
    }, $elm$core$Tuple$mapSecond = F2($elm$core$Tuple$mapSecond_fn);
    var $author$project$PageServerResponse$toJson = function (serverResponse) {
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("body", $elm$core$Maybe$withDefault_fn($elm$json$Json$Encode$null, $elm$core$Maybe$map_fn($elm$json$Json$Encode$string, serverResponse.dl))),
            _Utils_Tuple2("statusCode", $elm$json$Json$Encode$int(serverResponse.Z)),
            _Utils_Tuple2("headers", $elm$json$Json$Encode$object($elm$core$List$map_fn($elm$core$Tuple$mapSecond($elm$json$Json$Encode$list($elm$json$Json$Encode$string)), $author$project$PageServerResponse$collectMultiValueHeaders(serverResponse.dH)))),
            _Utils_Tuple2("kind", $elm$json$Json$Encode$string("server-response")),
            _Utils_Tuple2("isBase64Encoded", $elm$json$Json$Encode$bool(serverResponse.cD))
        ]));
    };
    var $elm$core$Result$toMaybe = function (result) {
        if (!result.$) {
            var v = result.a;
            return $elm$core$Maybe$Just(v);
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $elm$core$Maybe$andThen_fn = function (callback, maybeValue) {
        if (!maybeValue.$) {
            var value = maybeValue.a;
            return callback(value);
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    }, $elm$core$Maybe$andThen = F2($elm$core$Maybe$andThen_fn);
    var $author$project$PageServerResponse$toRedirect = function (response) {
        return $elm$core$Maybe$andThen_fn(function (location) {
            return (response.Z === 302) ? $elm$core$Maybe$Just({ g9: location, Z: 302 }) : $elm$core$Maybe$Nothing;
        }, $elm$core$Dict$get_fn("Location", $elm$core$Dict$fromList(response.dH)));
    };
    var $author$project$Path$toRelative = function (_v0) {
        var path = _v0;
        return path;
    };
    var $author$project$Pages$Internal$Platform$Cli$urlToRoute_fn = function (config, url) {
        return _String_startsWith_fn("/____elm-pages-internal____", url.ca) ? config.hl : config.hV(url);
    }, $author$project$Pages$Internal$Platform$Cli$urlToRoute = F2($author$project$Pages$Internal$Platform$Cli$urlToRoute_fn);
    var $elm$core$Result$withDefault_fn = function (def, result) {
        if (!result.$) {
            var a = result.a;
            return a;
        }
        else {
            return def;
        }
    }, $elm$core$Result$withDefault = F2($elm$core$Result$withDefault_fn);
    var $author$project$Pages$Internal$Platform$Cli$sendSinglePageProgress_fn = function (site, contentJson, config, model, info) {
        var _v0 = _Utils_Tuple2(info.ca, info.dF);
        var page = _v0.a;
        var route = _v0.b;
        var _v1 = model.aG;
        var includeHtml = _v1.a;
        var siteDataResult = $elm$core$Result$mapError_fn($author$project$Pages$StaticHttpRequest$toBuildError("Site.elm"), $author$project$Pages$StaticHttpRequest$resolve_fn($elm$core$Maybe$withDefault_fn($author$project$DataSource$succeed(_List_Nil), config.dG), model.N));
        var currentUrl = {
            R: $elm$core$Maybe$Nothing,
            cC: site.fz,
            ca: $author$project$Path$toRelative(page),
            cN: $elm$core$Maybe$Nothing,
            cP: 1,
            U: $elm$core$Maybe$Nothing
        };
        var pageDataResult = $elm$core$Result$mapError_fn($author$project$Pages$StaticHttpRequest$toBuildError(currentUrl.ca), $author$project$Pages$StaticHttpRequest$resolve_fn(config.ac($author$project$Pages$Internal$Platform$Cli$urlToRoute_fn(config, currentUrl)), contentJson));
        var pageFoundResult = $elm$core$Result$mapError_fn($author$project$Pages$StaticHttpRequest$toBuildError(currentUrl.ca), $author$project$Pages$StaticHttpRequest$resolve_fn(model.S ? config.e5(route) : $author$project$DataSource$succeed($elm$core$Maybe$Nothing), model.N));
        var sharedDataResult = $elm$core$Result$mapError_fn($author$project$Pages$StaticHttpRequest$toBuildError(currentUrl.ca), $author$project$Pages$StaticHttpRequest$resolve_fn(config.a3, contentJson));
        var renderedResult = function () {
            if (includeHtml === 1) {
                return $elm$core$Result$map_fn(function (okPageData) {
                    switch (okPageData.$) {
                        case 0:
                            var responseInfo = okPageData.a;
                            var pageData = okPageData.b;
                            return $author$project$PageServerResponse$RenderPage_fn({ dH: responseInfo.dH, Z: responseInfo.Z }, { bZ: _List_Nil, a6: "This page was not rendered because it is a JSON-only request.", aQ: "This page was not rendered because it is a JSON-only request." });
                        case 1:
                            var serverResponse = okPageData.a;
                            return $author$project$PageServerResponse$ServerResponse(serverResponse);
                        default:
                            var error = okPageData.a;
                            var record = okPageData.b;
                            return $author$project$PageServerResponse$ErrorPage_fn(error, record);
                    }
                }, pageDataResult);
            }
            else {
                return $elm$core$Result$map_fn(function (_v13) {
                    var pageData_ = _v13.a;
                    var sharedData = _v13.b;
                    switch (pageData_.$) {
                        case 0:
                            var responseInfo = pageData_.a;
                            var pageData = pageData_.b;
                            var currentPage = {
                                ca: page,
                                hE: $author$project$Pages$Internal$Platform$Cli$urlToRoute_fn(config, currentUrl)
                            };
                            var pageModel = A5(config.ez, $author$project$Pages$Flags$PreRenderFlags, sharedData, pageData, $elm$core$Maybe$Nothing, $elm$core$Maybe$Just({
                                X: currentPage.hE,
                                a1: $elm$core$Maybe$Nothing,
                                ca: { R: $elm$core$Maybe$Nothing, ca: currentPage.ca, U: $elm$core$Maybe$Nothing }
                            })).a;
                            var viewValue = A4(config.aQ, currentPage, $elm$core$Maybe$Nothing, sharedData, pageData).aQ(pageModel);
                            return $author$project$PageServerResponse$RenderPage_fn(responseInfo, {
                                bZ: A4(config.aQ, currentPage, $elm$core$Maybe$Nothing, sharedData, pageData).bZ,
                                a6: viewValue.a6,
                                aQ: $author$project$HtmlPrinter$htmlToString(viewValue.dl)
                            });
                        case 1:
                            var serverResponse = pageData_.a;
                            return $author$project$PageServerResponse$ServerResponse(serverResponse);
                        default:
                            var error = pageData_.a;
                            var record = pageData_.b;
                            var pageData = config.gL(error);
                            var currentPage = {
                                ca: page,
                                hE: $author$project$Pages$Internal$Platform$Cli$urlToRoute_fn(config, currentUrl)
                            };
                            var pageModel = A5(config.ez, $author$project$Pages$Flags$PreRenderFlags, sharedData, pageData, $elm$core$Maybe$Nothing, $elm$core$Maybe$Just({
                                X: currentPage.hE,
                                a1: $elm$core$Maybe$Nothing,
                                ca: { R: $elm$core$Maybe$Nothing, ca: currentPage.ca, U: $elm$core$Maybe$Nothing }
                            })).a;
                            var viewValue = A4(config.aQ, currentPage, $elm$core$Maybe$Nothing, sharedData, pageData).aQ(pageModel);
                            return $author$project$PageServerResponse$RenderPage_fn({
                                dH: record.dH,
                                Z: config.gM(error)
                            }, {
                                bZ: A4(config.aQ, currentPage, $elm$core$Maybe$Nothing, sharedData, pageData).bZ,
                                a6: viewValue.a6,
                                aQ: $author$project$HtmlPrinter$htmlToString(viewValue.dl)
                            });
                    }
                }, $elm$core$Result$map2_fn($elm$core$Tuple$pair, pageDataResult, sharedDataResult));
            }
        }();
        var _v2 = $elm$core$Result$map3_fn_unwrapped(function (a, b, c) {
            return _Utils_Tuple3(a, b, c);
        }, pageFoundResult, renderedResult, siteDataResult);
        if (!_v2.$) {
            var _v3 = _v2.a;
            var maybeNotFoundReason = _v3.a;
            var renderedOrApiResponse = _v3.b;
            var siteData = _v3.c;
            if (maybeNotFoundReason.$ === 1) {
                var byteEncodedPageData = function () {
                    if (!pageDataResult.$) {
                        var pageServerResponse = pageDataResult.a;
                        switch (pageServerResponse.$) {
                            case 0:
                                var pageData = pageServerResponse.b;
                                return true ? $elm$bytes$Bytes$Encode$encode(config.gK($elm$core$Result$withDefault_fn($author$project$Pages$Internal$ResponseSketch$RenderPage(pageData), $elm$core$Result$map_fn($author$project$Pages$Internal$ResponseSketch$HotUpdate(pageData), sharedDataResult)))) : $elm$bytes$Bytes$Encode$encode(config.gK($author$project$Pages$Internal$ResponseSketch$RenderPage(pageData)));
                            case 1:
                                var serverResponse = pageServerResponse.a;
                                return $elm$bytes$Bytes$Encode$encode($elm$core$Maybe$withDefault_fn($elm$bytes$Bytes$Encode$unsignedInt8(0), $elm$core$Maybe$map_fn(function (_v10) {
                                    var location = _v10.g9;
                                    return config.gK($author$project$Pages$Internal$ResponseSketch$Redirect(location));
                                }, $author$project$PageServerResponse$toRedirect(serverResponse))));
                            default:
                                var error = pageServerResponse.a;
                                var record = pageServerResponse.b;
                                return $elm$core$Result$withDefault_fn($elm$bytes$Bytes$Encode$encode($elm$bytes$Bytes$Encode$unsignedInt8(0)), $elm$core$Result$map_fn($elm$bytes$Bytes$Encode$encode, $elm$core$Result$map_fn(config.gK, $elm$core$Result$map_fn($author$project$Pages$Internal$ResponseSketch$HotUpdate(config.gL(error)), sharedDataResult))));
                        }
                    }
                    else {
                        return $elm$bytes$Bytes$Encode$encode($elm$bytes$Bytes$Encode$unsignedInt8(0));
                    }
                }();
                switch (renderedOrApiResponse.$) {
                    case 0:
                        var responseInfo = renderedOrApiResponse.a;
                        var rendered = renderedOrApiResponse.b;
                        return $author$project$Pages$Internal$Platform$Effect$SendSinglePageNew_fn(byteEncodedPageData, $author$project$Pages$Internal$Platform$ToJsPayload$PageProgress({
                            ds: $elm$core$Dict$empty,
                            Q: _List_Nil,
                            bZ: _Utils_ap(rendered.bZ, siteData),
                            dH: responseInfo.dH,
                            dJ: rendered.aQ,
                            dK: false,
                            hE: $author$project$Path$toRelative(page),
                            aw: $elm$core$Dict$empty,
                            Z: responseInfo.Z,
                            a6: rendered.a6
                        }));
                    case 1:
                        var serverResponse = renderedOrApiResponse.a;
                        return $elm$core$Maybe$withDefault_fn($author$project$Pages$Internal$Platform$Effect$SendSinglePage($author$project$Pages$Internal$Platform$ToJsPayload$SendApiResponse({
                            dl: $author$project$PageServerResponse$toJson(serverResponse),
                            aw: $elm$core$Dict$empty,
                            Z: serverResponse.Z
                        })), $elm$core$Maybe$map_fn(function (_v6) {
                            var location = _v6.g9;
                            return $author$project$Pages$Internal$Platform$Effect$SendSinglePageNew_fn(byteEncodedPageData, $author$project$Pages$Internal$Platform$ToJsPayload$PageProgress({
                                ds: $elm$core$Dict$empty,
                                Q: _List_Nil,
                                bZ: _List_Nil,
                                dH: serverResponse.dH,
                                dJ: "This is intentionally blank HTML",
                                dK: false,
                                hE: $author$project$Path$toRelative(page),
                                aw: $elm$core$Dict$empty,
                                Z: function () {
                                    if (includeHtml === 1) {
                                        return 200;
                                    }
                                    else {
                                        return serverResponse.Z;
                                    }
                                }(),
                                a6: "This is an intentionally blank title"
                            }));
                        }, $author$project$PageServerResponse$toRedirect(serverResponse)));
                    default:
                        var error = renderedOrApiResponse.a;
                        var responseInfo = renderedOrApiResponse.b;
                        return $author$project$Pages$Internal$Platform$Effect$SendSinglePageNew_fn(byteEncodedPageData, $author$project$Pages$Internal$Platform$ToJsPayload$PageProgress({
                            ds: $elm$core$Dict$empty,
                            Q: _List_Nil,
                            bZ: _List_Nil,
                            dH: responseInfo.dH,
                            dJ: "UNEXPECTED!",
                            dK: false,
                            hE: $author$project$Path$toRelative(page),
                            aw: $elm$core$Dict$empty,
                            Z: config.gM(error),
                            a6: "UNEXPECTED CASE"
                        }));
                }
            }
            else {
                var notFoundReason = maybeNotFoundReason.a;
                return $author$project$Pages$Internal$Platform$Cli$render404Page_fn(config, $elm$core$Result$toMaybe(sharedDataResult), model, page, notFoundReason);
            }
        }
        else {
            var error = _v2.a;
            return $author$project$Pages$Internal$Platform$Effect$SendSinglePage($author$project$Pages$Internal$Platform$ToJsPayload$Errors(_List_fromArray([error])));
        }
    }, $author$project$Pages$Internal$Platform$Cli$sendSinglePageProgress = F5($author$project$Pages$Internal$Platform$Cli$sendSinglePageProgress_fn);
    var $author$project$Pages$Internal$Platform$Cli$nextStepToEffect_fn = function (site, config, model, _v0) {
        nextStepToEffect: while (true) {
            var updatedStaticResponsesModel = _v0.a;
            var nextStep = _v0.b;
            if (!nextStep.$) {
                var updatedAllRawResponses = nextStep.a;
                var httpRequests = nextStep.b;
                var maybeRoutes = nextStep.c;
                var updatedUnprocessedPages = function () {
                    if (!maybeRoutes.$) {
                        var newRoutes = maybeRoutes.a;
                        return $elm$core$List$map_fn(function (route) {
                            return _Utils_Tuple2($author$project$Path$join(config.hF(route)), route);
                        }, newRoutes);
                    }
                    else {
                        return model.ba;
                    }
                }();
                var updatedModel = _Utils_update(model, { N: updatedAllRawResponses, bK: updatedStaticResponsesModel, ba: updatedUnprocessedPages });
                if ($elm$core$List$isEmpty(httpRequests)) {
                    var $temp$site = site, $temp$config = config, $temp$model = updatedModel, $temp$_v0 = $author$project$Pages$Internal$Platform$StaticResponses$nextStep_fn(updatedModel, $elm$core$Maybe$Nothing);
                    site = $temp$site;
                    config = $temp$config;
                    model = $temp$model;
                    _v0 = $temp$_v0;
                    continue nextStepToEffect;
                }
                else {
                    return _Utils_Tuple2(updatedModel, $author$project$Pages$Internal$Platform$Effect$Batch($elm$core$List$map_fn($author$project$Pages$Internal$Platform$Effect$FetchHttp, httpRequests)));
                }
            }
            else {
                var toJsPayload = nextStep.a;
                if (!toJsPayload.$) {
                    var sharedDataResult = $elm$core$Result$mapError_fn($author$project$Pages$StaticHttpRequest$toBuildError(""), $author$project$Pages$StaticHttpRequest$resolve_fn(config.a3, model.N));
                    var apiResponse = function () {
                        var _v4 = model.aG;
                        var requestPayload = _v4.b;
                        switch (requestPayload.$) {
                            case 1:
                                var _v6 = requestPayload.a;
                                var path = _v6.a;
                                var apiHandler = _v6.b;
                                var thing = apiHandler.e7(path);
                                return function (response) {
                                    if (!response.$) {
                                        if (!response.a.$) {
                                            var okResponse = response.a.a;
                                            return $author$project$Pages$Internal$Platform$Effect$SendSinglePage($author$project$Pages$Internal$Platform$ToJsPayload$SendApiResponse({ dl: okResponse, aw: $elm$core$Dict$empty, Z: 200 }));
                                        }
                                        else {
                                            var _v8 = response.a;
                                            return $author$project$Pages$Internal$Platform$Cli$render404Page_fn(config, $elm$core$Result$toMaybe(sharedDataResult), model, $author$project$Path$fromString(path), $author$project$Pages$Internal$NotFoundReason$NoMatchingRoute);
                                        }
                                    }
                                    else {
                                        var error = response.a;
                                        return $author$project$Pages$Internal$Platform$Effect$SendSinglePage($author$project$Pages$Internal$Platform$ToJsPayload$Errors(_List_fromArray([error])));
                                    }
                                }($elm$core$Result$mapError_fn($author$project$Pages$StaticHttpRequest$toBuildError("TODO - path from request"), $author$project$Pages$StaticHttpRequest$resolve_fn(thing, model.N)));
                            case 0:
                                var payload = requestPayload.a;
                                var pageFoundResult = $elm$core$Result$mapError_fn($author$project$Pages$StaticHttpRequest$toBuildError($author$project$Path$toAbsolute(payload.ca)), $author$project$Pages$StaticHttpRequest$resolve_fn(model.S ? config.e5(payload.dF) : $author$project$DataSource$succeed($elm$core$Maybe$Nothing), model.N));
                                if (!pageFoundResult.$) {
                                    if (pageFoundResult.a.$ === 1) {
                                        var _v10 = pageFoundResult.a;
                                        return $author$project$Pages$Internal$Platform$Cli$sendSinglePageProgress_fn(site, model.N, config, model, payload);
                                    }
                                    else {
                                        var notFoundReason = pageFoundResult.a.a;
                                        return $author$project$Pages$Internal$Platform$Cli$render404Page_fn(config, $elm$core$Result$toMaybe(sharedDataResult), model, payload.ca, notFoundReason);
                                    }
                                }
                                else {
                                    var error = pageFoundResult.a;
                                    return $author$project$Pages$Internal$Platform$Effect$SendSinglePage($author$project$Pages$Internal$Platform$ToJsPayload$Errors(_List_fromArray([error])));
                                }
                            default:
                                var path = requestPayload.a;
                                return $author$project$Pages$Internal$Platform$Cli$render404Page_fn(config, $elm$core$Result$toMaybe(sharedDataResult), model, path, $author$project$Pages$Internal$NotFoundReason$NoMatchingRoute);
                        }
                    }();
                    return _Utils_Tuple2(model, apiResponse);
                }
                else {
                    var errors = toJsPayload.a;
                    return _Utils_Tuple2(model, $author$project$Pages$Internal$Platform$Effect$SendSinglePage($author$project$Pages$Internal$Platform$ToJsPayload$Errors(errors)));
                }
            }
        }
    }, $author$project$Pages$Internal$Platform$Cli$nextStepToEffect = F4($author$project$Pages$Internal$Platform$Cli$nextStepToEffect_fn);
    var $author$project$Pages$Internal$Platform$StaticResponses$ApiRequest = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$DataSource$map_fn = function (fn, requestInfo) {
        switch (requestInfo.$) {
            case 1:
                var error = requestInfo.a;
                return $author$project$Pages$StaticHttpRequest$RequestError(error);
            case 0:
                var urls = requestInfo.a;
                var lookupFn = requestInfo.b;
                return $author$project$Pages$StaticHttpRequest$Request_fn(urls, A2($author$project$DataSource$mapLookupFn, fn, lookupFn));
            default:
                var value = requestInfo.a;
                return $author$project$Pages$StaticHttpRequest$ApiRoute(fn(value));
        }
    }, $author$project$DataSource$map = F2($author$project$DataSource$map_fn);
    var $author$project$DataSource$mapLookupFn_fn = function (fn, lookupFn, maybeMock, requests) {
        return $author$project$DataSource$map_fn(fn, A2(lookupFn, maybeMock, requests));
    }, $author$project$DataSource$mapLookupFn_fn_unwrapped = function (fn, lookupFn, maybeMock, requests) {
        return $author$project$DataSource$map_fn(fn, lookupFn(maybeMock, requests));
    }, $author$project$DataSource$mapLookupFn = F4($author$project$DataSource$mapLookupFn_fn);
    var $author$project$Pages$Internal$Platform$StaticResponses$renderApiRequest = function (request) {
        return $author$project$Pages$Internal$Platform$StaticResponses$ApiRequest($author$project$Pages$Internal$Platform$StaticResponses$NotFetched_fn($author$project$DataSource$map_fn(function (_v0) {
            return 0;
        }, request), $elm$core$Dict$empty));
    };
    var $author$project$Pages$Internal$Platform$StaticResponses$CheckIfHandled_fn = function (a, b, c) {
        return { $: 2, a: a, b: b, c: c };
    }, $author$project$Pages$Internal$Platform$StaticResponses$CheckIfHandled = F3($author$project$Pages$Internal$Platform$StaticResponses$CheckIfHandled_fn);
    var $author$project$Pages$Internal$Platform$StaticResponses$renderSingleRoute_fn = function (request, cliData) {
        return $author$project$Pages$Internal$Platform$StaticResponses$CheckIfHandled_fn(cliData, $author$project$Pages$Internal$Platform$StaticResponses$NotFetched_fn($author$project$DataSource$map_fn(function (_v0) {
            return 0;
        }, cliData), $elm$core$Dict$empty), $author$project$Pages$Internal$Platform$StaticResponses$NotFetched_fn($author$project$DataSource$map_fn(function (_v1) {
            return 0;
        }, request), $elm$core$Dict$empty));
    }, $author$project$Pages$Internal$Platform$StaticResponses$renderSingleRoute = F2($author$project$Pages$Internal$Platform$StaticResponses$renderSingleRoute_fn);
    var $author$project$Pages$Internal$Platform$Cli$initLegacy_fn = function (site, renderRequest, _v0, config) {
        var isDevServer = _v0.S;
        var staticHttpCache = _v0.aw;
        var unprocessedPages = function () {
            var serverRequestPayload = renderRequest.b;
            switch (serverRequestPayload.$) {
                case 0:
                    var pageData = serverRequestPayload.a;
                    return _List_fromArray([
                        _Utils_Tuple2(pageData.ca, pageData.dF)
                    ]);
                case 1:
                    return _List_Nil;
                default:
                    return _List_Nil;
            }
        }();
        var staticResponses = function () {
            var singleRequest = renderRequest.b;
            switch (singleRequest.$) {
                case 0:
                    var serverRequestPayload = singleRequest.a;
                    return $author$project$Pages$Internal$Platform$StaticResponses$renderSingleRoute_fn($author$project$DataSource$map3_fn(F3(function (_v3, _v4, _v5) {
                        return 0;
                    }), config.ac(serverRequestPayload.dF), config.a3, $elm$core$Maybe$withDefault_fn($author$project$DataSource$succeed(_List_Nil), config.dG)), isDevServer ? config.e5(serverRequestPayload.dF) : $author$project$DataSource$succeed($elm$core$Maybe$Nothing));
                case 1:
                    var _v6 = singleRequest.a;
                    var path = _v6.a;
                    var apiRequest = _v6.b;
                    return $author$project$Pages$Internal$Platform$StaticResponses$renderApiRequest($author$project$DataSource$map2_fn(F2(function (_v7, _v8) {
                        return 0;
                    }), apiRequest.e7(path), $elm$core$Maybe$withDefault_fn($author$project$DataSource$succeed(_List_Nil), config.dG)));
                default:
                    return $author$project$Pages$Internal$Platform$StaticResponses$renderApiRequest($author$project$DataSource$map2_fn(F2(function (_v9, _v10) {
                        return 0;
                    }), $author$project$DataSource$succeed(_List_Nil), $elm$core$Maybe$withDefault_fn($author$project$DataSource$succeed(_List_Nil), config.dG)));
            }
        }();
        var initialModel = { N: staticHttpCache, Q: _List_Nil, S: isDevServer, aG: renderRequest, bK: staticResponses, ba: unprocessedPages };
        return $author$project$Pages$Internal$Platform$Cli$nextStepToEffect_fn(site, config, initialModel, $author$project$Pages$Internal$Platform$StaticResponses$nextStep_fn(initialModel, $elm$core$Maybe$Nothing));
    }, $author$project$Pages$Internal$Platform$Cli$initLegacy = F4($author$project$Pages$Internal$Platform$Cli$initLegacy_fn);
    var $author$project$Pages$Internal$Platform$Cli$updateAndSendPortIfDone_fn = function (site, config, model) {
        return $author$project$Pages$Internal$Platform$Cli$nextStepToEffect_fn(site, config, model, $author$project$Pages$Internal$Platform$StaticResponses$nextStep_fn(model, $elm$core$Maybe$Nothing));
    }, $author$project$Pages$Internal$Platform$Cli$updateAndSendPortIfDone = F3($author$project$Pages$Internal$Platform$Cli$updateAndSendPortIfDone_fn);
    var $author$project$Pages$Internal$Platform$Cli$init_fn = function (site, renderRequest, config, flags) {
        var _v0 = _Json_run_fn($author$project$Pages$Internal$Platform$Cli$flagsDecoder, flags);
        if (!_v0.$) {
            var isDevServer = _v0.a.S;
            var staticHttpCache = _v0.a.aw;
            return $author$project$Pages$Internal$Platform$Cli$initLegacy_fn(site, renderRequest, { S: isDevServer, aw: staticHttpCache }, config);
        }
        else {
            var error = _v0.a;
            return $author$project$Pages$Internal$Platform$Cli$updateAndSendPortIfDone_fn(site, config, {
                N: $elm$core$Dict$empty,
                Q: _List_fromArray([
                    {
                        cw: true,
                        bA: _List_fromArray([
                            $author$project$TerminalText$text("Failed to parse flags: " + $elm$json$Json$Decode$errorToString(error))
                        ]),
                        ca: "",
                        a6: "Internal Error"
                    }
                ]),
                S: false,
                aG: renderRequest,
                bK: $author$project$Pages$Internal$Platform$StaticResponses$empty,
                ba: _List_Nil
            });
        }
    }, $author$project$Pages$Internal$Platform$Cli$init = F4($author$project$Pages$Internal$Platform$Cli$init_fn);
    var $author$project$BuildError$internal = function (string) {
        return {
            cw: true,
            bA: _List_fromArray([
                $author$project$TerminalText$text(string)
            ]),
            ca: "",
            a6: "Internal Error"
        };
    };
    var $elm$core$Platform$Sub$map = _Platform_map;
    var $author$project$Pages$Internal$Platform$Cli$mergeResult = function (r) {
        if (!r.$) {
            var rr = r.a;
            return rr;
        }
        else {
            var rr = r.a;
            return rr;
        }
    };
    var $author$project$Pages$Http$BadUrl = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Pages$Internal$Platform$ToJsPayload$DoHttp = function (a) {
        return { $: 2, a: a };
    };
    var $elm$core$Platform$Cmd$batch = _Platform_batch;
    var $elm$core$Result$fromMaybe_fn = function (err, maybe) {
        if (!maybe.$) {
            var v = maybe.a;
            return $elm$core$Result$Ok(v);
        }
        else {
            return $elm$core$Result$Err(err);
        }
    }, $elm$core$Result$fromMaybe = F2($elm$core$Result$fromMaybe_fn);
    var $elm$core$Platform$Cmd$map = _Platform_map;
    var $author$project$RenderRequest$maybeRequestPayload = function (renderRequest) {
        var rawJson = renderRequest.c;
        return $elm$core$Maybe$Just(rawJson);
    };
    var $elm$core$Basics$never = function (_v0) {
        never: while (true) {
            var nvr = _v0;
            var $temp$_v0 = nvr;
            _v0 = $temp$_v0;
            continue never;
        }
    };
    var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
    var $elm$core$Task$Perform = $elm$core$Basics$identity;
    var $elm$core$Task$succeed = _Scheduler_succeed;
    var $elm$core$Task$init = $elm$core$Task$succeed(0);
    var $elm$core$Task$andThen = _Scheduler_andThen;
    var $elm$core$Task$map_fn = function (func, taskA) {
        return _Scheduler_andThen_fn(function (a) {
            return $elm$core$Task$succeed(func(a));
        }, taskA);
    }, $elm$core$Task$map = F2($elm$core$Task$map_fn);
    var $elm$core$Task$map2_fn = function (func, taskA, taskB) {
        return _Scheduler_andThen_fn(function (a) {
            return _Scheduler_andThen_fn(function (b) {
                return $elm$core$Task$succeed(A2(func, a, b));
            }, taskB);
        }, taskA);
    }, $elm$core$Task$map2_fn_unwrapped = function (func, taskA, taskB) {
        return _Scheduler_andThen_fn(function (a) {
            return _Scheduler_andThen_fn(function (b) {
                return $elm$core$Task$succeed(func(a, b));
            }, taskB);
        }, taskA);
    }, $elm$core$Task$map2 = F3($elm$core$Task$map2_fn);
    var $elm$core$Task$sequence = function (tasks) {
        return $elm$core$List$foldr_fn($elm$core$Task$map2($elm$core$List$cons), $elm$core$Task$succeed(_List_Nil), tasks);
    };
    var $elm$core$Platform$sendToApp = _Platform_sendToApp;
    var $elm$core$Task$spawnCmd_fn = function (router, _v0) {
        var task = _v0;
        return _Scheduler_spawn(_Scheduler_andThen_fn($elm$core$Platform$sendToApp(router), task));
    }, $elm$core$Task$spawnCmd = F2($elm$core$Task$spawnCmd_fn);
    var $elm$core$Task$onEffects_fn = function (router, commands, state) {
        return $elm$core$Task$map_fn(function (_v0) {
            return 0;
        }, $elm$core$Task$sequence($elm$core$List$map_fn($elm$core$Task$spawnCmd(router), commands)));
    }, $elm$core$Task$onEffects = F3($elm$core$Task$onEffects_fn);
    var $elm$core$Task$onSelfMsg_fn = function (_v0, _v1, _v2) {
        return $elm$core$Task$succeed(0);
    }, $elm$core$Task$onSelfMsg = F3($elm$core$Task$onSelfMsg_fn);
    var $elm$core$Task$cmdMap_fn = function (tagger, _v0) {
        var task = _v0;
        return $elm$core$Task$map_fn(tagger, task);
    }, $elm$core$Task$cmdMap = F2($elm$core$Task$cmdMap_fn);
    _Platform_effectManagers["Task"] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
    var $elm$core$Task$command = _Platform_leaf("Task");
    var $elm$core$Task$perform_fn = function (toMessage, task) {
        return $elm$core$Task$command($elm$core$Task$map_fn(toMessage, task));
    }, $elm$core$Task$perform = F2($elm$core$Task$perform_fn);
    var $author$project$Pages$Internal$Platform$ToJsPayload$ApiResponse = { $: 5 };
    var $author$project$Pages$Internal$Platform$ToJsPayload$Port = function (a) {
        return { $: 3, a: a };
    };
    var $elm$core$Basics$composeL_fn = function (g, f, x) {
        return g(f(x));
    }, $elm$core$Basics$composeL = F3($elm$core$Basics$composeL_fn);
    var $elm$core$Dict$map_fn = function (func, dict) {
        if (dict.$ === -2) {
            return $elm$core$Dict$RBEmpty_elm_builtin;
        }
        else {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, A2(func, key, value), $elm$core$Dict$map_fn(func, left), $elm$core$Dict$map_fn(func, right));
        }
    }, $elm$core$Dict$map_fn_unwrapped = function (func, dict) {
        if (dict.$ === -2) {
            return $elm$core$Dict$RBEmpty_elm_builtin;
        }
        else {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, func(key, value), $elm$core$Dict$map_fn_unwrapped(func, left), $elm$core$Dict$map_fn_unwrapped(func, right));
        }
    }, $elm$core$Dict$map = F2($elm$core$Dict$map_fn);
    var $miniBill$elm_codec$Codec$dict_a0 = function (e) {
        return A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, $elm$json$Json$Encode$object, $elm$core$Dict$toList), $elm$core$Dict$map(function (_v0) {
            return e;
        }));
    }, $miniBill$elm_codec$Codec$dict_a1 = $elm$json$Json$Decode$dict, $miniBill$elm_codec$Codec$dict = A2($miniBill$elm_codec$Codec$composite, $miniBill$elm_codec$Codec$dict_a0, $miniBill$elm_codec$Codec$dict_a1);
    var $author$project$TerminalText$encoder = function (_v0) {
        var ansiStyle = _v0.a;
        var string = _v0.b;
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("bold", $elm$json$Json$Encode$bool(ansiStyle.bg)),
            _Utils_Tuple2("underline", $elm$json$Json$Encode$bool(ansiStyle.bP)),
            _Utils_Tuple2("color", $elm$json$Json$Encode$string(function () {
                var _v1 = $elm$core$Maybe$withDefault_fn($vito$elm_ansi$Ansi$White, ansiStyle.O);
                switch (_v1.$) {
                    case 1:
                        return "red";
                    case 4:
                        return "blue";
                    case 2:
                        return "green";
                    case 3:
                        return "yellow";
                    case 6:
                        return "cyan";
                    case 0:
                        return "black";
                    case 5:
                        return "magenta";
                    case 7:
                        return "white";
                    case 8:
                        return "BLACK";
                    case 9:
                        return "RED";
                    case 10:
                        return "GREEN";
                    case 11:
                        return "YELLOW";
                    case 12:
                        return "BLUE";
                    case 13:
                        return "MAGENTA";
                    case 14:
                        return "CYAN";
                    case 15:
                        return "WHITE";
                    default:
                        return "";
                }
            }())),
            _Utils_Tuple2("string", $elm$json$Json$Encode$string(string))
        ]));
    };
    var $author$project$BuildError$messagesEncoder_fn = function (title, messages) {
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("title", $elm$json$Json$Encode$string(title)),
            _Utils_Tuple2("message", $elm$json$Json$Encode$list_fn($author$project$TerminalText$encoder, messages))
        ]));
    }, $author$project$BuildError$messagesEncoder = F2($author$project$BuildError$messagesEncoder_fn);
    var $author$project$BuildError$encode = function (buildErrors) {
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("type", $elm$json$Json$Encode$string("compile-errors")),
            _Utils_Tuple2("errors", $elm$json$Json$Encode$list_fn(function (buildError) {
                return $elm$json$Json$Encode$object(_List_fromArray([
                    _Utils_Tuple2("path", $elm$json$Json$Encode$string(buildError.ca)),
                    _Utils_Tuple2("name", $elm$json$Json$Encode$string(buildError.a6)),
                    _Utils_Tuple2("problems", $elm$json$Json$Encode$list_fn($author$project$BuildError$messagesEncoder(buildError.a6), _List_fromArray([buildError.bA])))
                ]));
            }, buildErrors))
        ]));
    };
    var $author$project$TerminalText$cyan = function (inner) {
        return $author$project$TerminalText$Style_fn(_Utils_update($author$project$TerminalText$blankStyle, {
            O: $elm$core$Maybe$Just($vito$elm_ansi$Ansi$Cyan)
        }), inner);
    };
    var $elm$core$String$toUpper = _String_toUpper;
    var $author$project$BuildError$banner = function (title) {
        return _List_fromArray([
            $author$project$TerminalText$cyan("-- " + ($elm$core$String$toUpper(title) + " ----------------------------------------------------- elm-pages")),
            $author$project$TerminalText$text("\n\n")
        ]);
    };
    var $author$project$TerminalText$ansiPrefix = "\u001B";
    var $author$project$TerminalText$ansi = function (code) {
        return _Utils_ap($author$project$TerminalText$ansiPrefix, code);
    };
    var $author$project$TerminalText$colorToString = function (color) {
        return $author$project$TerminalText$ansi(function () {
            switch (color.$) {
                case 1:
                    return "[31m";
                case 4:
                    return "[34m";
                case 2:
                    return "[32m";
                case 3:
                    return "[33m";
                case 6:
                    return "[36m";
                default:
                    return "";
            }
        }());
    };
    var $elm$core$String$concat = function (strings) {
        return $elm$core$String$join_fn("", strings);
    };
    var $author$project$TerminalText$resetColors = $author$project$TerminalText$ansi("[0m");
    var $author$project$TerminalText$toString_ = function (_v0) {
        var ansiStyle = _v0.a;
        var innerText = _v0.b;
        return $elm$core$String$concat(_List_fromArray([
            $author$project$TerminalText$colorToString($elm$core$Maybe$withDefault_fn($vito$elm_ansi$Ansi$White, ansiStyle.O)),
            innerText,
            $author$project$TerminalText$resetColors
        ]));
    };
    var $author$project$TerminalText$toString = function (list) {
        return $elm$core$String$join_fn("", $elm$core$List$map_fn($author$project$TerminalText$toString_, list));
    };
    var $author$project$BuildError$errorToString = function (error) {
        return $author$project$TerminalText$toString(_Utils_ap($author$project$BuildError$banner(error.a6), error.bA));
    };
    var $author$project$BuildError$errorsToString = function (errors) {
        return $elm$core$String$join_fn("\n\n", $elm$core$List$map_fn($author$project$BuildError$errorToString, errors));
    };
    var $author$project$Pages$Internal$Platform$ToJsPayload$errorCodec = $miniBill$elm_codec$Codec$buildObject($miniBill$elm_codec$Codec$field_fn("errorsJson", $elm$core$Basics$identity, $miniBill$elm_codec$Codec$build_fn($author$project$BuildError$encode, $elm$json$Json$Decode$succeed(_List_fromArray([
        { cw: true, bA: _List_Nil, ca: "", a6: "TODO" }
    ]))), $miniBill$elm_codec$Codec$field_fn("errorString", $elm$core$Basics$identity, $miniBill$elm_codec$Codec$build_fn(A2($elm$core$Basics$composeR, $author$project$BuildError$errorsToString, $elm$json$Json$Encode$string), _Json_map1_fn(function (value) {
        return _List_fromArray([
            { cw: false, bA: _List_Nil, ca: "Intentionally empty", a6: value }
        ]);
    }, $elm$json$Json$Decode$string)), $miniBill$elm_codec$Codec$object(F2(function (errorString, _v0) {
        return errorString;
    })))));
    var $miniBill$elm_codec$Codec$int = $miniBill$elm_codec$Codec$build_fn($elm$json$Json$Encode$int, $elm$json$Json$Decode$int);
    var $author$project$Pages$Internal$Platform$ToJsPayload$ToJsSuccessPayloadNew = function (route) {
        return function (html) {
            return function (contentJson) {
                return function (errors) {
                    return function (head) {
                        return function (title) {
                            return function (staticHttpCache) {
                                return function (is404) {
                                    return function (statusCode) {
                                        return function (headers) {
                                            return { ds: contentJson, Q: errors, bZ: head, dH: headers, dJ: html, dK: is404, hE: route, aw: staticHttpCache, Z: statusCode, a6: title };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    var $miniBill$elm_codec$Codec$bool = $miniBill$elm_codec$Codec$build_fn($elm$json$Json$Encode$bool, $elm$json$Json$Decode$bool);
    var $author$project$Head$FullUrlToCurrentPage = { $: 2 };
    var $author$project$Head$currentPageFullUrl = $author$project$Head$FullUrlToCurrentPage;
    var $author$project$Head$Tag = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Head$node_fn = function (name, attributes) {
        return $author$project$Head$Tag({ bS: attributes, hc: name });
    }, $author$project$Head$node = F2($author$project$Head$node_fn);
    var $author$project$Head$Raw = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Head$raw = function (value) {
        return $author$project$Head$Raw(value);
    };
    var $author$project$Head$canonicalLink = function (maybePath) {
        return $author$project$Head$node_fn("link", _List_fromArray([
            _Utils_Tuple2("rel", $author$project$Head$raw("canonical")),
            _Utils_Tuple2("href", $elm$core$Maybe$withDefault_fn($author$project$Head$currentPageFullUrl, $elm$core$Maybe$map_fn($author$project$Head$raw, maybePath)))
        ]));
    };
    var $author$project$Head$joinPaths_fn = function (base, path) {
        return $author$project$Pages$Internal$String$chopEnd_fn("/", base) + ("/" + $author$project$Pages$Internal$String$chopStart_fn("/", path));
    }, $author$project$Head$joinPaths = F2($author$project$Head$joinPaths_fn);
    var $author$project$Pages$Url$join_fn = function (base, path) {
        return $author$project$Pages$Internal$String$chopEnd_fn("/", base) + ("/" + $author$project$Pages$Internal$String$chopStart_fn("/", path));
    }, $author$project$Pages$Url$join = F2($author$project$Pages$Url$join_fn);
    var $author$project$Pages$Url$toAbsoluteUrl_fn = function (canonicalSiteUrl, url) {
        if (url.$ === 1) {
            var externalUrl = url.a;
            return externalUrl;
        }
        else {
            var internalUrl = url.a;
            return $author$project$Pages$Url$join_fn(canonicalSiteUrl, internalUrl);
        }
    }, $author$project$Pages$Url$toAbsoluteUrl = F2($author$project$Pages$Url$toAbsoluteUrl_fn);
    var $author$project$Head$encodeProperty_fn = function (canonicalSiteUrl, currentPagePath, _v0) {
        var name = _v0.a;
        var value = _v0.b;
        switch (value.$) {
            case 0:
                var rawValue = value.a;
                return $elm$json$Json$Encode$list_fn($elm$json$Json$Encode$string, _List_fromArray([name, rawValue]));
            case 2:
                return $elm$json$Json$Encode$list_fn($elm$json$Json$Encode$string, _List_fromArray([
                    name,
                    $author$project$Head$joinPaths_fn(canonicalSiteUrl, currentPagePath)
                ]));
            default:
                var url = value.a;
                return $elm$json$Json$Encode$list_fn($elm$json$Json$Encode$string, _List_fromArray([
                    name,
                    $author$project$Pages$Url$toAbsoluteUrl_fn(canonicalSiteUrl, url)
                ]));
        }
    }, $author$project$Head$encodeProperty = F3($author$project$Head$encodeProperty_fn);
    var $author$project$Head$toJson_fn = function (canonicalSiteUrl, currentPagePath, tag) {
        switch (tag.$) {
            case 0:
                var headTag = tag.a;
                return $elm$json$Json$Encode$object(_List_fromArray([
                    _Utils_Tuple2("name", $elm$json$Json$Encode$string(headTag.hc)),
                    _Utils_Tuple2("attributes", $elm$json$Json$Encode$list_fn(A2($author$project$Head$encodeProperty, canonicalSiteUrl, currentPagePath), headTag.bS)),
                    _Utils_Tuple2("type", $elm$json$Json$Encode$string("head"))
                ]));
            case 1:
                var value = tag.a;
                return $elm$json$Json$Encode$object(_List_fromArray([
                    _Utils_Tuple2("contents", value),
                    _Utils_Tuple2("type", $elm$json$Json$Encode$string("json-ld"))
                ]));
            default:
                var key = tag.a;
                var value = tag.b;
                return $elm$json$Json$Encode$object(_List_fromArray([
                    _Utils_Tuple2("type", $elm$json$Json$Encode$string("root")),
                    _Utils_Tuple2("keyValuePair", $elm$json$Json$Encode$list_fn($elm$json$Json$Encode$string, _List_fromArray([key, value])))
                ]));
        }
    }, $author$project$Head$toJson = F3($author$project$Head$toJson_fn);
    var $author$project$Pages$Internal$Platform$ToJsPayload$headCodec_fn = function (canonicalSiteUrl, currentPagePath) {
        return $miniBill$elm_codec$Codec$build_fn(A2($author$project$Head$toJson, canonicalSiteUrl, currentPagePath), $elm$json$Json$Decode$succeed($author$project$Head$canonicalLink($elm$core$Maybe$Nothing)));
    }, $author$project$Pages$Internal$Platform$ToJsPayload$headCodec = F2($author$project$Pages$Internal$Platform$ToJsPayload$headCodec_fn);
    var $miniBill$elm_codec$Codec$map_fn = function (go, back, codec) {
        return {
            e0: _Json_map1_fn(go, $miniBill$elm_codec$Codec$decoder(codec)),
            bW: function (v) {
                return A2($miniBill$elm_codec$Codec$encoder, codec, back(v));
            }
        };
    }, $miniBill$elm_codec$Codec$map = F3($miniBill$elm_codec$Codec$map_fn);
    var $author$project$Pages$Internal$Platform$ToJsPayload$successCodecNew_fn = function (canonicalSiteUrl, currentPagePath) {
        return $miniBill$elm_codec$Codec$buildObject($miniBill$elm_codec$Codec$field_fn("headers", function ($) {
            return $.dH;
        }, $miniBill$elm_codec$Codec$map_fn($elm$core$Dict$toList, $elm$core$Dict$fromList, $miniBill$elm_codec$Codec$composite_fn($miniBill$elm_codec$Codec$dict_a0, $miniBill$elm_codec$Codec$dict_a1, $miniBill$elm_codec$Codec$string)), $miniBill$elm_codec$Codec$field_fn("statusCode", function ($) {
            return $.Z;
        }, $miniBill$elm_codec$Codec$int, $miniBill$elm_codec$Codec$field_fn("is404", function ($) {
            return $.dK;
        }, $miniBill$elm_codec$Codec$bool, $miniBill$elm_codec$Codec$field_fn("staticHttpCache", function ($) {
            return $.aw;
        }, $miniBill$elm_codec$Codec$composite_fn($miniBill$elm_codec$Codec$dict_a0, $miniBill$elm_codec$Codec$dict_a1, $miniBill$elm_codec$Codec$string), $miniBill$elm_codec$Codec$field_fn("title", function ($) {
            return $.a6;
        }, $miniBill$elm_codec$Codec$string, $miniBill$elm_codec$Codec$field_fn("head", function ($) {
            return $.bZ;
        }, $miniBill$elm_codec$Codec$composite_fn($miniBill$elm_codec$Codec$list_a0, $miniBill$elm_codec$Codec$list_a1, $author$project$Pages$Internal$Platform$ToJsPayload$headCodec_fn(canonicalSiteUrl, currentPagePath)), $miniBill$elm_codec$Codec$field_fn("errors", function ($) {
            return $.Q;
        }, $miniBill$elm_codec$Codec$composite_fn($miniBill$elm_codec$Codec$list_a0, $miniBill$elm_codec$Codec$list_a1, $miniBill$elm_codec$Codec$string), $miniBill$elm_codec$Codec$field_fn("contentJson", function ($) {
            return $.ds;
        }, $miniBill$elm_codec$Codec$composite_fn($miniBill$elm_codec$Codec$dict_a0, $miniBill$elm_codec$Codec$dict_a1, $miniBill$elm_codec$Codec$string), $miniBill$elm_codec$Codec$field_fn("html", function ($) {
            return $.dJ;
        }, $miniBill$elm_codec$Codec$string, $miniBill$elm_codec$Codec$field_fn("route", function ($) {
            return $.hE;
        }, $miniBill$elm_codec$Codec$string, $miniBill$elm_codec$Codec$object($author$project$Pages$Internal$Platform$ToJsPayload$ToJsSuccessPayloadNew))))))))))));
    }, $author$project$Pages$Internal$Platform$ToJsPayload$successCodecNew = F2($author$project$Pages$Internal$Platform$ToJsPayload$successCodecNew_fn);
    var $author$project$Pages$Internal$Platform$ToJsPayload$successCodecNew2_fn = function (canonicalSiteUrl, currentPagePath) {
        return $miniBill$elm_codec$Codec$buildCustom(A4($miniBill$elm_codec$Codec$variant1, "Port", $author$project$Pages$Internal$Platform$ToJsPayload$Port, $miniBill$elm_codec$Codec$string, A4($miniBill$elm_codec$Codec$variant1, "ApiResponse", $author$project$Pages$Internal$Platform$ToJsPayload$SendApiResponse, $miniBill$elm_codec$Codec$buildObject($miniBill$elm_codec$Codec$field_fn("statusCode", function ($) {
            return $.Z;
        }, $miniBill$elm_codec$Codec$int, $miniBill$elm_codec$Codec$field_fn("staticHttpCache", function ($) {
            return $.aw;
        }, $miniBill$elm_codec$Codec$composite_fn($miniBill$elm_codec$Codec$dict_a0, $miniBill$elm_codec$Codec$dict_a1, $miniBill$elm_codec$Codec$string), $miniBill$elm_codec$Codec$field_fn("body", function ($) {
            return $.dl;
        }, $miniBill$elm_codec$Codec$value, $miniBill$elm_codec$Codec$object(F3(function (body, staticHttpCache, statusCode) {
            return { dl: body, aw: staticHttpCache, Z: statusCode };
        })))))), A4($miniBill$elm_codec$Codec$variant1, "DoHttp", $author$project$Pages$Internal$Platform$ToJsPayload$DoHttp, $author$project$Pages$StaticHttp$Request$codec, A4($miniBill$elm_codec$Codec$variant1, "PageProgress", $author$project$Pages$Internal$Platform$ToJsPayload$PageProgress, $author$project$Pages$Internal$Platform$ToJsPayload$successCodecNew_fn(canonicalSiteUrl, currentPagePath), A3($miniBill$elm_codec$Codec$variant0, "ApiResponse", $author$project$Pages$Internal$Platform$ToJsPayload$ApiResponse, A4($miniBill$elm_codec$Codec$variant1, "Errors", $author$project$Pages$Internal$Platform$ToJsPayload$Errors, $author$project$Pages$Internal$Platform$ToJsPayload$errorCodec, $miniBill$elm_codec$Codec$custom(F7(function (errorsTag, vApiResponse, success, vDoHttp, vSendApiResponse, vPort, value) {
            switch (value.$) {
                case 5:
                    return vApiResponse;
                case 4:
                    var errorList = value.a;
                    return errorsTag(errorList);
                case 0:
                    var payload = value.a;
                    return success(payload);
                case 2:
                    var requestUrl = value.a;
                    return vDoHttp(requestUrl);
                case 1:
                    var record = value.a;
                    return vSendApiResponse(record);
                default:
                    var string = value.a;
                    return vPort(string);
            }
        })))))))));
    }, $author$project$Pages$Internal$Platform$ToJsPayload$successCodecNew2 = F2($author$project$Pages$Internal$Platform$ToJsPayload$successCodecNew2_fn);
    var $author$project$TerminalText$yellow = function (inner) {
        return $author$project$TerminalText$Style_fn(_Utils_update($author$project$TerminalText$blankStyle, {
            O: $elm$core$Maybe$Just($vito$elm_ansi$Ansi$Yellow)
        }), inner);
    };
    var $author$project$Pages$Internal$Platform$Cli$flatten_fn = function (site, renderRequest, config, list) {
        return $elm$core$Platform$Cmd$batch($author$project$Pages$Internal$Platform$Cli$flattenHelp_fn(_List_Nil, site, renderRequest, config, list));
    }, $author$project$Pages$Internal$Platform$Cli$flatten = F4($author$project$Pages$Internal$Platform$Cli$flatten_fn);
    var $author$project$Pages$Internal$Platform$Cli$flattenHelp_fn = function (soFar, site, renderRequest, config, list) {
        flattenHelp: while (true) {
            if (list.b) {
                var first = list.a;
                var rest = list.b;
                var $temp$soFar = _List_Cons($author$project$Pages$Internal$Platform$Cli$perform_fn(site, renderRequest, config, first), soFar), $temp$site = site, $temp$renderRequest = renderRequest, $temp$config = config, $temp$list = rest;
                soFar = $temp$soFar;
                site = $temp$site;
                renderRequest = $temp$renderRequest;
                config = $temp$config;
                list = $temp$list;
                continue flattenHelp;
            }
            else {
                return soFar;
            }
        }
    }, $author$project$Pages$Internal$Platform$Cli$flattenHelp = F5($author$project$Pages$Internal$Platform$Cli$flattenHelp_fn);
    var $author$project$Pages$Internal$Platform$Cli$perform_fn = function (site, renderRequest, config, effect) {
        var canonicalSiteUrl = site.fz;
        switch (effect.$) {
            case 0:
                return $elm$core$Platform$Cmd$none;
            case 2:
                var list = effect.a;
                return $author$project$Pages$Internal$Platform$Cli$flatten_fn(site, renderRequest, config, list);
            case 1:
                var unmasked = effect.a;
                if (unmasked.el === "$$elm-pages$$headers") {
                    var _v1 = $elm$core$Result$fromMaybe_fn($author$project$Pages$Http$BadUrl("$$elm-pages$$headers is only available on server-side request (not on build)."), $elm$core$Maybe$map_fn(function (json) {
                        return $author$project$RequestsAndPending$Response_fn($elm$core$Maybe$Nothing, $author$project$RequestsAndPending$JsonBody(json));
                    }, $author$project$RenderRequest$maybeRequestPayload(renderRequest)));
                    if (!_v1.$) {
                        var okResponse = _v1.a;
                        return $elm$core$Task$perform_fn($author$project$Pages$Internal$Platform$Cli$GotDataBatch, $elm$core$Task$succeed(_List_fromArray([
                            { cT: unmasked, cU: okResponse }
                        ])));
                    }
                    else {
                        var error = _v1.a;
                        return $elm$core$Task$perform_fn($author$project$Pages$Internal$Platform$Cli$GotBuildError, $elm$core$Task$succeed({
                            cw: true,
                            bA: _List_fromArray([
                                $author$project$TerminalText$text("I got an error making an HTTP request to this URL: "),
                                $author$project$TerminalText$yellow(unmasked.el),
                                $author$project$TerminalText$text(_Json_encode_fn(2, $author$project$Pages$Internal$StaticHttpBody$encode(unmasked.dl))),
                                $author$project$TerminalText$text("\n\n"),
                                function () {
                                    switch (error.$) {
                                        case 3:
                                            var metadata = error.a;
                                            var body = error.b;
                                            return $author$project$TerminalText$text($elm$core$String$join_fn("\n", _List_fromArray([
                                                "Bad status: " + $elm$core$String$fromInt(metadata.Z),
                                                "Status message: " + metadata.a4,
                                                "Body: " + body
                                            ])));
                                        case 0:
                                            return $author$project$TerminalText$text("Invalid url: " + unmasked.el);
                                        case 1:
                                            return $author$project$TerminalText$text("Timeout");
                                        default:
                                            return $author$project$TerminalText$text("Network error");
                                    }
                                }()
                            ]),
                            ca: "",
                            a6: "Static HTTP Error"
                        }));
                    }
                }
                else {
                    return _Platform_map_fn($elm$core$Basics$never, config.hS(A2($miniBill$elm_codec$Codec$encoder, $author$project$Pages$Internal$Platform$ToJsPayload$successCodecNew2_fn(canonicalSiteUrl, ""), $author$project$Pages$Internal$Platform$ToJsPayload$DoHttp(unmasked))));
                }
            case 3:
                var info = effect.a;
                var currentPagePath = function () {
                    if (!info.$) {
                        var toJsSuccessPayloadNew = info.a;
                        return toJsSuccessPayloadNew.hE;
                    }
                    else {
                        return "";
                    }
                }();
                return _Platform_map_fn($elm$core$Basics$never, config.hS(A2($miniBill$elm_codec$Codec$encoder, $author$project$Pages$Internal$Platform$ToJsPayload$successCodecNew2_fn(canonicalSiteUrl, currentPagePath), info)));
            case 4:
                var rawBytes = effect.a;
                var info = effect.b;
                var currentPagePath = function () {
                    if (!info.$) {
                        var toJsSuccessPayloadNew = info.a;
                        return toJsSuccessPayloadNew.hE;
                    }
                    else {
                        return "";
                    }
                }();
                return _Platform_map_fn($elm$core$Basics$never, config.hK({
                    gx: rawBytes,
                    hm: A2($miniBill$elm_codec$Codec$encoder, $author$project$Pages$Internal$Platform$ToJsPayload$successCodecNew2_fn(canonicalSiteUrl, currentPagePath), info)
                }));
            default:
                return $elm$core$Platform$Cmd$none;
        }
    }, $author$project$Pages$Internal$Platform$Cli$perform = F4($author$project$Pages$Internal$Platform$Cli$perform_fn);
    var $elm$core$Dict$update_fn = function (targetKey, alter, dictionary) {
        var _v0 = alter($elm$core$Dict$get_fn(targetKey, dictionary));
        if (!_v0.$) {
            var value = _v0.a;
            return $elm$core$Dict$insert_fn(targetKey, value, dictionary);
        }
        else {
            return $elm$core$Dict$remove_fn(targetKey, dictionary);
        }
    }, $elm$core$Dict$update = F3($elm$core$Dict$update_fn);
    var $author$project$Pages$Internal$Platform$StaticResponses$insertAll_fn = function (newEntries, dict) {
        insertAll: while (true) {
            if (!newEntries.b) {
                return dict;
            }
            else {
                var info = newEntries.a;
                var rest = newEntries.b;
                var $temp$newEntries = rest, $temp$dict = $elm$core$Dict$update_fn($author$project$Pages$StaticHttp$Request$hash(info.cT), function (_v1) {
                    return $elm$core$Maybe$Just($elm$core$Maybe$Just(info.cU));
                }, dict);
                newEntries = $temp$newEntries;
                dict = $temp$dict;
                continue insertAll;
            }
        }
    }, $author$project$Pages$Internal$Platform$StaticResponses$insertAll = F2($author$project$Pages$Internal$Platform$StaticResponses$insertAll_fn);
    var $author$project$Pages$Internal$Platform$StaticResponses$batchUpdate_fn = function (newEntries, model) {
        return _Utils_update(model, {
            N: $author$project$Pages$Internal$Platform$StaticResponses$insertAll_fn(newEntries, model.N)
        });
    }, $author$project$Pages$Internal$Platform$StaticResponses$batchUpdate = F2($author$project$Pages$Internal$Platform$StaticResponses$batchUpdate_fn);
    var $author$project$Pages$Internal$Platform$Cli$update_fn = function (site, config, msg, model) {
        switch (msg.$) {
            case 0:
                var batch = msg.a;
                var updatedModel = $author$project$Pages$Internal$Platform$StaticResponses$batchUpdate_fn(batch, model);
                return $author$project$Pages$Internal$Platform$Cli$nextStepToEffect_fn(site, config, updatedModel, $author$project$Pages$Internal$Platform$StaticResponses$nextStep_fn(updatedModel, $elm$core$Maybe$Nothing));
            case 2:
                var updatedModel = model;
                return $author$project$Pages$Internal$Platform$Cli$nextStepToEffect_fn(site, config, updatedModel, $author$project$Pages$Internal$Platform$StaticResponses$nextStep_fn(updatedModel, $elm$core$Maybe$Nothing));
            default:
                var buildError = msg.a;
                var updatedModel = _Utils_update(model, {
                    Q: _List_Cons(buildError, model.Q)
                });
                return $author$project$Pages$Internal$Platform$Cli$nextStepToEffect_fn(site, config, updatedModel, $author$project$Pages$Internal$Platform$StaticResponses$nextStep_fn(updatedModel, $elm$core$Maybe$Nothing));
        }
    }, $author$project$Pages$Internal$Platform$Cli$update = F4($author$project$Pages$Internal$Platform$Cli$update_fn);
    var $elm$core$Platform$worker = _Platform_worker;
    var $author$project$Pages$Internal$Platform$Cli$cliApplication = function (config) {
        var getSiteConfig = function (fullConfig) {
            getSiteConfig: while (true) {
                var _v0 = fullConfig.hM;
                if (!_v0.$) {
                    var mySite = _v0.a;
                    return mySite;
                }
                else {
                    var $temp$fullConfig = fullConfig;
                    fullConfig = $temp$fullConfig;
                    continue getSiteConfig;
                }
            }
        };
        var site = getSiteConfig(config);
        return $elm$core$Platform$worker({
            ez: function (flags) {
                var renderRequest = $elm$core$Result$withDefault_fn($author$project$RenderRequest$default, _Json_run_fn($author$project$RenderRequest$decoder(config), flags));
                return $elm$core$Tuple$mapSecond_fn(A3($author$project$Pages$Internal$Platform$Cli$perform, site, renderRequest, config), $author$project$Pages$Internal$Platform$Cli$init_fn(site, renderRequest, config, flags));
            },
            eT: function (_v1) {
                return $elm$core$Platform$Sub$batch(_List_fromArray([
                    _Platform_map_fn(function (jsonValue) {
                        var decoder = _Json_andThen_fn(function (tag) {
                            if (tag === "BuildError") {
                                return _Json_map1_fn($author$project$Pages$Internal$Platform$Cli$GotBuildError, $elm$json$Json$Decode$oneOf(_List_fromArray([
                                    _Json_decodeField_fn("data", _Json_map2_fn(F2(function (message, title) {
                                        return { cw: true, bA: message, ca: "", a6: title };
                                    }), _Json_map1_fn($author$project$TerminalText$fromAnsiString, _Json_decodeField_fn("message", $elm$json$Json$Decode$string)), _Json_decodeField_fn("title", $elm$json$Json$Decode$string))),
                                    _Json_map1_fn(function (errorJson) {
                                        return $author$project$BuildError$internal(_Json_encode_fn(2, errorJson));
                                    }, _Json_decodeField_fn("data", $elm$json$Json$Decode$value))
                                ])));
                            }
                            else {
                                return $elm$json$Json$Decode$fail("Unhandled msg");
                            }
                        }, _Json_decodeField_fn("tag", $elm$json$Json$Decode$string));
                        return $author$project$Pages$Internal$Platform$Cli$mergeResult($elm$core$Result$mapError_fn(function (error) {
                            return $author$project$Pages$Internal$Platform$Cli$GotBuildError($author$project$BuildError$internal("From location 1: " + $elm$json$Json$Decode$errorToString(error)));
                        }, _Json_run_fn(decoder, jsonValue)));
                    }, config.gT),
                    _Platform_map_fn(function (newBatch) {
                        return $author$project$Pages$Internal$Platform$Cli$mergeResult($elm$core$Result$mapError_fn(function (error) {
                            return $author$project$Pages$Internal$Platform$Cli$GotBuildError($author$project$BuildError$internal("From location 2: " + $elm$json$Json$Decode$errorToString(error)));
                        }, $elm$core$Result$map_fn($author$project$Pages$Internal$Platform$Cli$GotDataBatch, _Json_run_fn($author$project$Pages$Internal$Platform$Cli$batchDecoder, newBatch))));
                    }, config.gW)
                ]));
            },
            cj: F2(function (msg, model) {
                return $elm$core$Tuple$mapSecond_fn(A3($author$project$Pages$Internal$Platform$Cli$perform, site, model.aG, config), $author$project$Pages$Internal$Platform$Cli$update_fn(site, config, msg, model));
            })
        });
    };
    var $author$project$Main$DataErrorPage____ = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Main$MsgGlobal = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Main$OnPageChange = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Route$Feed__ = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Route$Stories__Id_ = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$DataSource$combine_a0 = $author$project$DataSource$map2($elm$core$List$cons), $author$project$DataSource$combine_a1 = $author$project$DataSource$succeed(_List_Nil), $author$project$DataSource$combine = A2($elm$core$List$foldr, $author$project$DataSource$combine_a0, $author$project$DataSource$combine_a1);
    var $author$project$RouteBuilder$buildWithLocalState_fn = function (config, builderState) {
        var record = builderState;
        return {
            ac: record.ac,
            e5: record.e5,
            bZ: record.bZ,
            ez: config.ez,
            eD: record.eD,
            gg: record.gg,
            eT: F5(function (maybePageUrl, routeParams, path, model, sharedModel) {
                return A5(config.eT, maybePageUrl, routeParams, path, sharedModel, model);
            }),
            cj: F5(function (pageUrl, staticPayload, msg, model, sharedModel) {
                var _v1 = A5(config.cj, pageUrl, sharedModel, staticPayload, msg, model);
                var updatedModel = _v1.a;
                var cmd = _v1.b;
                return _Utils_Tuple3(updatedModel, cmd, $elm$core$Maybe$Nothing);
            }),
            aQ: F3(function (model, sharedModel, staticPayload) {
                return A3(config.aQ, model, sharedModel, staticPayload);
            })
        };
    }, $author$project$RouteBuilder$buildWithLocalState = F2($author$project$RouteBuilder$buildWithLocalState_fn);
    var $elm$url$Url$Builder$toQueryPair = function (_v0) {
        var key = _v0.a;
        var value = _v0.b;
        return key + ("=" + value);
    };
    var $elm$url$Url$Builder$toQuery = function (parameters) {
        if (!parameters.b) {
            return "";
        }
        else {
            return "?" + $elm$core$String$join_fn("&", $elm$core$List$map_fn($elm$url$Url$Builder$toQueryPair, parameters));
        }
    };
    var $elm$url$Url$Builder$crossOrigin_fn = function (prePath, pathSegments, parameters) {
        return prePath + ("/" + ($elm$core$String$join_fn("/", pathSegments) + $elm$url$Url$Builder$toQuery(parameters)));
    }, $elm$url$Url$Builder$crossOrigin = F3($elm$url$Url$Builder$crossOrigin_fn);
    var $author$project$Story$Common_fn = function (title, url, domain, time_ago, comments_count, id) {
        return { fC: comments_count, gJ: domain, g1: id, hR: time_ago, a6: title, el: url };
    }, $author$project$Story$Common = F6($author$project$Story$Common_fn);
    var $author$project$Story$Item_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $author$project$Story$Item = F2($author$project$Story$Item_fn);
    var $author$project$Story$Job = { $: 1 };
    var $author$project$Story$Story = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Story$StoryRecord_fn = function (points, user, type_) {
        return { ht: points, ci: type_, hW: user };
    }, $author$project$Story$StoryRecord = F3($author$project$Story$StoryRecord_fn);
    var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom_a0 = $elm$core$Basics$apR, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom = $elm$json$Json$Decode$map2($NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom_a0);
    var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$hardcoded_a0 = $elm$json$Json$Decode$succeed, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$hardcoded_a1 = $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$hardcoded = A2($elm$core$Basics$composeR, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$hardcoded_a0, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$hardcoded_a1);
    var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn = function (key, valDecoder, decoder) {
        return _Json_map2_fn($NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom_a0, _Json_decodeField_fn(key, valDecoder), decoder);
    }, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required = F3($NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn);
    var $author$project$Story$entryDecoder = function (type_) {
        return (type_ === "job") ? $elm$json$Json$Decode$succeed($author$project$Story$Job) : _Json_map1_fn($author$project$Story$Story, A2($NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$hardcoded, type_, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("user", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("points", $elm$json$Json$Decode$int, $elm$json$Json$Decode$succeed($author$project$Story$StoryRecord)))));
    };
    var $elm$json$Json$Decode$null = _Json_decodeNull;
    var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder_fn = function (path, valDecoder, fallback) {
        var nullOr = function (decoder) {
            return $elm$json$Json$Decode$oneOf(_List_fromArray([
                decoder,
                $elm$json$Json$Decode$null(fallback)
            ]));
        };
        var handleResult = function (input) {
            var _v0 = _Json_run_fn($elm$json$Json$Decode$at_fn(path, $elm$json$Json$Decode$value), input);
            if (!_v0.$) {
                var rawValue = _v0.a;
                var _v1 = _Json_run_fn(nullOr(valDecoder), rawValue);
                if (!_v1.$) {
                    var finalResult = _v1.a;
                    return $elm$json$Json$Decode$succeed(finalResult);
                }
                else {
                    return $elm$json$Json$Decode$at_fn(path, nullOr(valDecoder));
                }
            }
            else {
                return $elm$json$Json$Decode$succeed(fallback);
            }
        };
        return _Json_andThen_fn(handleResult, $elm$json$Json$Decode$value);
    }, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder = F3($NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder_fn);
    var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn = function (key, valDecoder, fallback, decoder) {
        return _Json_map2_fn($NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom_a0, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder_fn(_List_fromArray([key]), valDecoder, fallback), decoder);
    }, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional = F4($NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn);
    var $author$project$Story$decoder = _Json_map2_fn($author$project$Story$Item, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("id", $elm$json$Json$Decode$int, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("comments_count", $elm$json$Json$Decode$int, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("time_ago", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("domain", $elm$json$Json$Decode$string, "", $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("url", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("title", $elm$json$Json$Decode$string, $elm$json$Json$Decode$succeed($author$project$Story$Common))))))), _Json_andThen_fn($author$project$Story$entryDecoder, _Json_decodeField_fn("type", $elm$json$Json$Decode$string)));
    var $author$project$DataSource$Http$emptyBody = $author$project$Pages$Internal$StaticHttpBody$EmptyBody;
    var $author$project$DataSource$Http$ExpectJson = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$DataSource$Http$expectJson = $author$project$DataSource$Http$ExpectJson;
    var $author$project$DataSource$Http$BadStatus__fn = function (a, b) {
        return { $: 3, a: a, b: b };
    }, $author$project$DataSource$Http$BadStatus_ = F2($author$project$DataSource$Http$BadStatus__fn);
    var $author$project$Pages$StaticHttpRequest$DecoderError = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$DataSource$Http$GoodStatus__fn = function (a, b) {
        return { $: 4, a: a, b: b };
    }, $author$project$DataSource$Http$GoodStatus_ = F2($author$project$DataSource$Http$GoodStatus__fn);
    var $author$project$Pages$StaticHttpRequest$MissingHttpResponse_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $author$project$Pages$StaticHttpRequest$MissingHttpResponse = F2($author$project$Pages$StaticHttpRequest$MissingHttpResponse_fn);
    var $elm$core$Result$andThen_fn = function (callback, result) {
        if (!result.$) {
            var value = result.a;
            return callback(value);
        }
        else {
            var msg = result.a;
            return $elm$core$Result$Err(msg);
        }
    }, $elm$core$Result$andThen = F2($elm$core$Result$andThen_fn);
    var $elm$bytes$Bytes$Decode$decode_fn = function (_v0, bs) {
        var decoder = _v0;
        return _Bytes_decode_fn(decoder, bs);
    }, $elm$bytes$Bytes$Decode$decode = F2($elm$bytes$Bytes$Decode$decode_fn);
    var $author$project$DataSource$Http$expectToString = function (expect) {
        switch (expect.$) {
            case 0:
                return "ExpectJson";
            case 1:
                return "ExpectString";
            case 2:
                return "ExpectResponse";
            case 4:
                return "ExpectBytes";
            case 5:
                return "ExpectWhatever";
            default:
                return "ExpectBytesResponse";
        }
    };
    var $author$project$RequestsAndPending$get_fn = function (key, requestsAndPending) {
        return $elm$core$Maybe$andThen_fn($elm$core$Basics$identity, $elm$core$Dict$get_fn(key, requestsAndPending));
    }, $author$project$RequestsAndPending$get = F2($author$project$RequestsAndPending$get_fn);
    var $author$project$DataSource$Http$requestToString = function (requestDetails) {
        return requestDetails.el;
    };
    var $author$project$DataSource$Http$toResult = function (result) {
        if (result.$ === 1) {
            var error = result.a;
            return $author$project$Pages$StaticHttpRequest$RequestError(error);
        }
        else {
            var okValue = result.a;
            return $author$project$Pages$StaticHttpRequest$ApiRoute(okValue);
        }
    };
    var $author$project$DataSource$Http$request_fn = function (request__, expect) {
        var request_ = _Utils_update(request__, {
            dH: _List_Cons(_Utils_Tuple2("elm-pages-internal", $author$project$DataSource$Http$expectToString(expect)), request__.dH)
        });
        return $author$project$Pages$StaticHttpRequest$Request_fn(_List_fromArray([request_]), F2(function (maybeMockResolver, rawResponseDict) {
            return $author$project$DataSource$Http$toResult($elm$core$Result$andThen_fn(function (_v2) {
                var maybeResponse = _v2.a;
                var body = _v2.b;
                var _v3 = _Utils_Tuple3(expect, body, maybeResponse);
                _v3$6: while (true) {
                    switch (_v3.b.$) {
                        case 2:
                            if (!_v3.a.$) {
                                var decoder = _v3.a.a;
                                var json = _v3.b.a;
                                return $elm$core$Result$mapError_fn(function (error) {
                                    return $author$project$Pages$StaticHttpRequest$DecoderError($elm$json$Json$Decode$errorToString(error));
                                }, _Json_run_fn(decoder, json));
                            }
                            else {
                                break _v3$6;
                            }
                        case 1:
                            switch (_v3.a.$) {
                                case 1:
                                    var mapStringFn = _v3.a.a;
                                    var string = _v3.b.a;
                                    return $elm$core$Result$Ok(mapStringFn(string));
                                case 2:
                                    if (!_v3.c.$) {
                                        var mapResponse = _v3.a.a;
                                        var asStringBody = _v3.b.a;
                                        var rawResponse = _v3.c.a;
                                        var asMetadata = { dH: rawResponse.dH, Z: rawResponse.Z, a4: rawResponse.a4, el: rawResponse.el };
                                        var rawResponseToResponse = ((200 <= rawResponse.Z) && (rawResponse.Z < 300)) ? $author$project$DataSource$Http$GoodStatus__fn(asMetadata, asStringBody) : $author$project$DataSource$Http$BadStatus__fn(asMetadata, asStringBody);
                                        return $elm$core$Result$Ok(mapResponse(rawResponseToResponse));
                                    }
                                    else {
                                        break _v3$6;
                                    }
                                default:
                                    break _v3$6;
                            }
                        case 0:
                            switch (_v3.a.$) {
                                case 3:
                                    if (!_v3.c.$) {
                                        var mapResponse = _v3.a.a;
                                        var rawBytesBody = _v3.b.a;
                                        var rawResponse = _v3.c.a;
                                        var asMetadata = { dH: rawResponse.dH, Z: rawResponse.Z, a4: rawResponse.a4, el: rawResponse.el };
                                        var rawResponseToResponse = ((200 <= rawResponse.Z) && (rawResponse.Z < 300)) ? $author$project$DataSource$Http$GoodStatus__fn(asMetadata, rawBytesBody) : $author$project$DataSource$Http$BadStatus__fn(asMetadata, rawBytesBody);
                                        return $elm$core$Result$Ok(mapResponse(rawResponseToResponse));
                                    }
                                    else {
                                        break _v3$6;
                                    }
                                case 4:
                                    var bytesDecoder = _v3.a.a;
                                    var rawBytes = _v3.b.a;
                                    return $elm$core$Result$fromMaybe_fn($author$project$Pages$StaticHttpRequest$DecoderError("Bytes decoding failed."), $elm$bytes$Bytes$Decode$decode_fn(bytesDecoder, rawBytes));
                                default:
                                    break _v3$6;
                            }
                        default:
                            if (_v3.a.$ === 5) {
                                var whateverValue = _v3.a.a;
                                var _v4 = _v3.b;
                                return $elm$core$Result$Ok(whateverValue);
                            }
                            else {
                                break _v3$6;
                            }
                    }
                }
                return $elm$core$Result$Err($author$project$Pages$StaticHttpRequest$DecoderError("Internal error - unexpected body, expect, and raw response combination."));
            }, function (maybeResponse) {
                if (!maybeResponse.$) {
                    var rawResponse = maybeResponse.a;
                    return $elm$core$Result$Ok(rawResponse);
                }
                else {
                    return $elm$core$Result$Err($author$project$Pages$StaticHttpRequest$MissingHttpResponse_fn($author$project$DataSource$Http$requestToString(request_), _List_fromArray([request_])));
                }
            }(function () {
                if (!maybeMockResolver.$) {
                    var mockResolver = maybeMockResolver.a;
                    return mockResolver(request_);
                }
                else {
                    return $author$project$RequestsAndPending$get_fn($author$project$Pages$StaticHttp$Request$hash(request_), rawResponseDict);
                }
            }())));
        }));
    }, $author$project$DataSource$Http$request = F2($author$project$DataSource$Http$request_fn);
    var $author$project$DataSource$Http$get_fn = function (url, decoder) {
        return $author$project$DataSource$Http$request_fn(function (okUrl) {
            return { dl: $author$project$DataSource$Http$emptyBody, dH: _List_Nil, dR: "GET", el: okUrl };
        }(url), $author$project$DataSource$Http$expectJson(decoder));
    }, $author$project$DataSource$Http$get = F2($author$project$DataSource$Http$get_fn);
    var $elm$url$Url$Builder$QueryParameter_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $elm$url$Url$Builder$QueryParameter = F2($elm$url$Url$Builder$QueryParameter_fn);
    var $elm$url$Url$percentEncode = _Url_percentEncode;
    var $elm$url$Url$Builder$int_fn = function (key, value) {
        return $elm$url$Url$Builder$QueryParameter_fn($elm$url$Url$percentEncode(key), $elm$core$String$fromInt(value));
    }, $elm$url$Url$Builder$int = F2($elm$url$Url$Builder$int_fn);
    var $author$project$Internal$Request$Parser = $elm$core$Basics$identity;
    var $author$project$Server$Request$map_fn = function (mapFn, _v0) {
        var decoder = _v0;
        return _Json_map1_fn(function (_v1) {
            var result = _v1.a;
            var errors = _v1.b;
            return _Utils_Tuple2($elm$core$Result$map_fn(mapFn, result), errors);
        }, decoder);
    }, $author$project$Server$Request$map = F2($author$project$Server$Request$map_fn);
    var $author$project$Server$Request$unwrap = function (_v0) {
        var decoder_ = _v0;
        return decoder_;
    };
    var $author$project$Server$Request$andThen_fn = function (toRequestB, _v0) {
        var requestA = _v0;
        return _Json_andThen_fn(function (value) {
            if (!value.a.$) {
                var okValue = value.a.a;
                return $author$project$Server$Request$unwrap(toRequestB(okValue));
            }
            else {
                var error = value.a.a;
                var errors = value.b;
                return $elm$json$Json$Decode$succeed(_Utils_Tuple2($elm$core$Result$Err(error), errors));
            }
        }, requestA);
    }, $author$project$Server$Request$andThen = F2($author$project$Server$Request$andThen_fn);
    var $author$project$QueryParams$QueryParams = $elm$core$Basics$identity;
    var $author$project$QueryParams$fromString = $elm$core$Basics$identity;
    var $elm$core$List$head = function (list) {
        if (list.b) {
            var x = list.a;
            var xs = list.b;
            return $elm$core$Maybe$Just(x);
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $author$project$QueryParams$addToParametersHelp_fn = function (value, maybeList) {
        if (maybeList.$ === 1) {
            return $elm$core$Maybe$Just(_List_fromArray([value]));
        }
        else {
            var list = maybeList.a;
            return $elm$core$Maybe$Just(_List_Cons(value, list));
        }
    }, $author$project$QueryParams$addToParametersHelp = F2($author$project$QueryParams$addToParametersHelp_fn);
    var $elm$url$Url$percentDecode = _Url_percentDecode;
    var $author$project$QueryParams$addParam_fn = function (segment, dict) {
        var _v0 = $elm$core$String$split_fn("=", segment);
        if ((_v0.b && _v0.b.b) && (!_v0.b.b.b)) {
            var rawKey = _v0.a;
            var _v1 = _v0.b;
            var rawValue = _v1.a;
            var _v2 = $elm$url$Url$percentDecode(rawKey);
            if (_v2.$ === 1) {
                return dict;
            }
            else {
                var key = _v2.a;
                var _v3 = $elm$url$Url$percentDecode(rawValue);
                if (_v3.$ === 1) {
                    return dict;
                }
                else {
                    var value = _v3.a;
                    return $elm$core$Dict$update_fn(key, $author$project$QueryParams$addToParametersHelp(value), dict);
                }
            }
        }
        else {
            return dict;
        }
    }, $author$project$QueryParams$addParam = F2($author$project$QueryParams$addParam_fn);
    var $author$project$QueryParams$prepareQuery = function (maybeQuery) {
        if (maybeQuery.$ === 1) {
            return $elm$core$Dict$empty;
        }
        else {
            var qry = maybeQuery.a;
            return $elm$core$List$foldr_fn($author$project$QueryParams$addParam, $elm$core$Dict$empty, $elm$core$String$split_fn("&", qry));
        }
    };
    var $author$project$QueryParams$toDict = function (_v0) {
        var queryParams = _v0;
        return $author$project$QueryParams$prepareQuery($elm$core$Maybe$Just(queryParams));
    };
    var $author$project$Server$Request$findFirstQueryParam_fn = function (name, queryString) {
        return $elm$core$Maybe$andThen_fn($elm$core$List$head, $elm$core$Dict$get_fn(name, $author$project$QueryParams$toDict($author$project$QueryParams$fromString(queryString))));
    }, $author$project$Server$Request$findFirstQueryParam = F2($author$project$Server$Request$findFirstQueryParam_fn);
    var $elm$url$Url$Http = 0;
    var $elm$url$Url$Url_fn = function (protocol, host, port_, path, query, fragment) {
        return { R: fragment, cC: host, ca: path, cN: port_, cP: protocol, U: query };
    }, $elm$url$Url$Url = F6($elm$url$Url$Url_fn);
    var $elm$core$String$indexes = _String_indexes;
    var $elm$core$String$isEmpty = function (string) {
        return string === "";
    };
    var $elm$url$Url$chompBeforePath_fn = function (protocol, path, params, frag, str) {
        if ($elm$core$String$isEmpty(str) || _String_contains_fn("@", str)) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var _v0 = _String_indexes_fn(":", str);
            if (!_v0.b) {
                return $elm$core$Maybe$Just($elm$url$Url$Url_fn(protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
            }
            else {
                if (!_v0.b.b) {
                    var i = _v0.a;
                    var _v1 = $elm$core$String$toInt($elm$core$String$dropLeft_fn(i + 1, str));
                    if (_v1.$ === 1) {
                        return $elm$core$Maybe$Nothing;
                    }
                    else {
                        var port_ = _v1;
                        return $elm$core$Maybe$Just($elm$url$Url$Url_fn(protocol, $elm$core$String$left_fn(i, str), port_, path, params, frag));
                    }
                }
                else {
                    return $elm$core$Maybe$Nothing;
                }
            }
        }
    }, $elm$url$Url$chompBeforePath = F5($elm$url$Url$chompBeforePath_fn);
    var $elm$url$Url$chompBeforeQuery_fn = function (protocol, params, frag, str) {
        if ($elm$core$String$isEmpty(str)) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var _v0 = _String_indexes_fn("/", str);
            if (!_v0.b) {
                return $elm$url$Url$chompBeforePath_fn(protocol, "/", params, frag, str);
            }
            else {
                var i = _v0.a;
                return $elm$url$Url$chompBeforePath_fn(protocol, $elm$core$String$dropLeft_fn(i, str), params, frag, $elm$core$String$left_fn(i, str));
            }
        }
    }, $elm$url$Url$chompBeforeQuery = F4($elm$url$Url$chompBeforeQuery_fn);
    var $elm$url$Url$chompBeforeFragment_fn = function (protocol, frag, str) {
        if ($elm$core$String$isEmpty(str)) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var _v0 = _String_indexes_fn("?", str);
            if (!_v0.b) {
                return $elm$url$Url$chompBeforeQuery_fn(protocol, $elm$core$Maybe$Nothing, frag, str);
            }
            else {
                var i = _v0.a;
                return $elm$url$Url$chompBeforeQuery_fn(protocol, $elm$core$Maybe$Just($elm$core$String$dropLeft_fn(i + 1, str)), frag, $elm$core$String$left_fn(i, str));
            }
        }
    }, $elm$url$Url$chompBeforeFragment = F3($elm$url$Url$chompBeforeFragment_fn);
    var $elm$url$Url$chompAfterProtocol_fn = function (protocol, str) {
        if ($elm$core$String$isEmpty(str)) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var _v0 = _String_indexes_fn("#", str);
            if (!_v0.b) {
                return $elm$url$Url$chompBeforeFragment_fn(protocol, $elm$core$Maybe$Nothing, str);
            }
            else {
                var i = _v0.a;
                return $elm$url$Url$chompBeforeFragment_fn(protocol, $elm$core$Maybe$Just($elm$core$String$dropLeft_fn(i + 1, str)), $elm$core$String$left_fn(i, str));
            }
        }
    }, $elm$url$Url$chompAfterProtocol = F2($elm$url$Url$chompAfterProtocol_fn);
    var $elm$url$Url$fromString = function (str) {
        return _String_startsWith_fn("http://", str) ? $elm$url$Url$chompAfterProtocol_fn(0, $elm$core$String$dropLeft_fn(7, str)) : (_String_startsWith_fn("https://", str) ? $elm$url$Url$chompAfterProtocol_fn(1, $elm$core$String$dropLeft_fn(8, str)) : $elm$core$Maybe$Nothing);
    };
    var $author$project$Server$Request$ValidationError = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Server$Request$rawUrl = _Json_map1_fn(function (url_) {
        if (!url_.$) {
            var justValue = url_.a;
            return _Utils_Tuple2($elm$core$Result$Ok(justValue), _List_Nil);
        }
        else {
            return _Utils_Tuple2($elm$core$Result$Err($author$project$Server$Request$ValidationError("Internal error - expected rawUrl field but the adapter script didn't provide one.")), _List_Nil);
        }
    }, $elm$json$Json$Decode$maybe(_Json_decodeField_fn("rawUrl", $elm$json$Json$Decode$string)));
    var $author$project$Server$Request$succeed = function (value) {
        return $elm$json$Json$Decode$succeed(_Utils_Tuple2($elm$core$Result$Ok(value), _List_Nil));
    };
    var $author$project$Server$Request$queryParam = function (name) {
        return $author$project$Server$Request$andThen_fn(function (url_) {
            return $author$project$Server$Request$succeed($elm$core$Maybe$andThen_fn($author$project$Server$Request$findFirstQueryParam(name), $elm$core$Maybe$andThen_fn(function ($) {
                return $.U;
            }, $elm$url$Url$fromString(url_))));
        }, $author$project$Server$Request$rawUrl);
    };
    var $author$project$Server$Response$render = function (data) {
        return $author$project$PageServerResponse$RenderPage_fn({ dH: _List_Nil, Z: 200 }, data);
    };
    var $author$project$Route$Feed__$data = function (routeParams) {
        return $author$project$Server$Request$map_fn(function (maybePage) {
            var feed = function () {
                var _v0 = $elm$core$Maybe$withDefault_fn("top", routeParams.gO);
                switch (_v0) {
                    case "top":
                        return "news";
                    case "new":
                        return "newest";
                    case "show":
                        return "show";
                    case "ask":
                        return "ask";
                    case "job":
                        return "jobs";
                    default:
                        return "not-found";
                }
            }();
            var currentPage = $elm$core$Maybe$withDefault_fn(1, $elm$core$Maybe$andThen_fn($elm$core$String$toInt, maybePage));
            var getStoriesUrl = $elm$url$Url$Builder$crossOrigin_fn("https://node-hnapi.herokuapp.com", _List_fromArray([feed]), _List_fromArray([
                $elm$url$Url$Builder$int_fn("page", currentPage)
            ]));
            var getStories = $author$project$DataSource$Http$get_fn(getStoriesUrl, $elm$json$Json$Decode$list($author$project$Story$decoder));
            return $author$project$DataSource$map_fn(function (stories) {
                return $author$project$Server$Response$render({ bU: currentPage, bL: stories });
            }, getStories);
        }, $author$project$Server$Request$queryParam("page"));
    };
    var $author$project$Pages$Url$Internal = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Pages$Url$fromPath = function (path) {
        return $author$project$Pages$Url$Internal($author$project$Path$toAbsolute(path));
    };
    var $author$project$Head$Twitter$Regular = 0;
    var $author$project$Head$Twitter$Summary = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Head$Seo$buildSummary_fn = function (_v0, summarySize) {
        var locale = _v0.ae;
        var siteName = _v0.ah;
        var description = _v0.gI;
        var canonicalUrlOverride = _v0.V;
        var image = _v0.L;
        var title = _v0.a6;
        return {
            aT: _List_Nil,
            aB: $elm$core$Maybe$Nothing,
            V: canonicalUrlOverride,
            gI: description,
            L: image,
            ae: locale,
            ah: siteName,
            a6: title,
            a7: $author$project$Head$Twitter$Summary({
                gI: $elm$core$Maybe$Just(description),
                L: $elm$core$Maybe$Just({ _: image._, el: image.el }),
                fi: $elm$core$Maybe$Nothing,
                hO: summarySize,
                a6: title
            }),
            aP: $elm$core$Maybe$Nothing
        };
    }, $author$project$Head$Seo$buildSummary = F2($author$project$Head$Seo$buildSummary_fn);
    var $author$project$Head$Seo$summary = function (config) {
        return $author$project$Head$Seo$buildSummary_fn(config, 0);
    };
    var $author$project$Route$Feed__$title = function (routeParams) {
        return $elm$core$Maybe$withDefault_fn("", $elm$core$Maybe$map_fn(function (feedName) {
            return feedName + " | ";
        }, routeParams.gO)) + "elm-pages Hacker News";
    };
    var $author$project$Head$Seo$Content_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $author$project$Head$Seo$Content = F2($author$project$Head$Seo$Content_fn);
    var $author$project$Head$Seo$Website = { $: 0 };
    var $author$project$Head$metaName_fn = function (name, content) {
        return $author$project$Head$node_fn("meta", _List_fromArray([
            _Utils_Tuple2("name", $author$project$Head$Raw(name)),
            _Utils_Tuple2("content", content)
        ]));
    }, $author$project$Head$metaName = F2($author$project$Head$metaName_fn);
    var $author$project$Head$metaProperty_fn = function (property, content) {
        return $author$project$Head$node_fn("meta", _List_fromArray([
            _Utils_Tuple2("property", $author$project$Head$raw(property)),
            _Utils_Tuple2("content", content)
        ]));
    }, $author$project$Head$metaProperty = F2($author$project$Head$metaProperty_fn);
    var $dillonkearns$elm_bcp47_language_tag$LanguageTag$Country$toCodeString = function (_v0) {
        var rawCode = _v0;
        return rawCode;
    };
    var $dillonkearns$elm_bcp47_language_tag$LanguageTag$Language$toCodeString = function (_v0) {
        var rawCode = _v0;
        return rawCode;
    };
    var $author$project$Head$Seo$localeToString = function (_v0) {
        var language = _v0.a;
        var territory = _v0.b;
        return $dillonkearns$elm_bcp47_language_tag$LanguageTag$Language$toCodeString(language) + ("_" + $dillonkearns$elm_bcp47_language_tag$LanguageTag$Country$toCodeString(territory));
    };
    var $author$project$Head$Twitter$cardValue = function (card) {
        switch (card.$) {
            case 0:
                var details = card.a;
                var _v1 = details.hO;
                if (!_v1) {
                    return "summary";
                }
                else {
                    return "summary_large_image";
                }
            case 1:
                return "app";
            default:
                return "player";
        }
    };
    var $author$project$Head$FullUrl = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Head$urlAttribute = function (value) {
        return $author$project$Head$FullUrl(value);
    };
    var $author$project$Head$Twitter$rawTags = function (card) {
        return _List_Cons(_Utils_Tuple2("twitter:card", $elm$core$Maybe$Just($author$project$Head$raw($author$project$Head$Twitter$cardValue(card)))), function () {
            switch (card.$) {
                case 0:
                    var details = card.a;
                    return _List_fromArray([
                        _Utils_Tuple2("twitter:title", $elm$core$Maybe$Just($author$project$Head$raw(details.a6))),
                        _Utils_Tuple2("twitter:site", $elm$core$Maybe$map_fn($author$project$Head$raw, details.fi)),
                        _Utils_Tuple2("twitter:description", $elm$core$Maybe$map_fn($author$project$Head$raw, details.gI)),
                        _Utils_Tuple2("twitter:image", $elm$core$Maybe$map_fn($author$project$Head$urlAttribute, $elm$core$Maybe$map_fn(function ($) {
                            return $.el;
                        }, details.L))),
                        _Utils_Tuple2("twitter:image:alt", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn(function ($) {
                            return $._;
                        }, details.L)))
                    ]);
                case 1:
                    var details = card.a;
                    return _List_fromArray([
                        _Utils_Tuple2("twitter:title", $elm$core$Maybe$Just($author$project$Head$raw(details.a6))),
                        _Utils_Tuple2("twitter:site", $elm$core$Maybe$Just($author$project$Head$raw(details.fi))),
                        _Utils_Tuple2("twitter:description", $elm$core$Maybe$map_fn($author$project$Head$raw, details.gI)),
                        _Utils_Tuple2("twitter:image", $elm$core$Maybe$map_fn($author$project$Head$urlAttribute, $elm$core$Maybe$map_fn(function ($) {
                            return $.el;
                        }, details.L))),
                        _Utils_Tuple2("twitter:image:alt", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn(function ($) {
                            return $._;
                        }, details.L))),
                        _Utils_Tuple2("twitter:app:name:iphone", $elm$core$Maybe$map_fn($author$project$Head$raw, details.de)),
                        _Utils_Tuple2("twitter:app:name:ipad", $elm$core$Maybe$map_fn($author$project$Head$raw, details.dd)),
                        _Utils_Tuple2("twitter:app:name:googleplay", $elm$core$Maybe$map_fn($author$project$Head$raw, details.dc)),
                        _Utils_Tuple2("twitter:app:id:iphone", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn($elm$core$String$fromInt, details.db))),
                        _Utils_Tuple2("twitter:app:id:ipad", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn($elm$core$String$fromInt, details.da))),
                        _Utils_Tuple2("twitter:app:id:googleplay", $elm$core$Maybe$map_fn($author$project$Head$raw, details.c9)),
                        _Utils_Tuple2("twitter:app:url:iphone", $elm$core$Maybe$map_fn($author$project$Head$raw, details.dh)),
                        _Utils_Tuple2("twitter:app:url:ipad", $elm$core$Maybe$map_fn($author$project$Head$raw, details.dg)),
                        _Utils_Tuple2("twitter:app:url:googleplay", $elm$core$Maybe$map_fn($author$project$Head$raw, details.df)),
                        _Utils_Tuple2("twitter:app:country", $elm$core$Maybe$map_fn($author$project$Head$raw, details.c8))
                    ]);
                default:
                    var details = card.a;
                    return _List_fromArray([
                        _Utils_Tuple2("twitter:title", $elm$core$Maybe$Just($author$project$Head$raw(details.a6))),
                        _Utils_Tuple2("twitter:site", $elm$core$Maybe$Just($author$project$Head$raw(details.fi))),
                        _Utils_Tuple2("twitter:description", $elm$core$Maybe$map_fn($author$project$Head$raw, details.gI)),
                        _Utils_Tuple2("twitter:image", $elm$core$Maybe$Just($author$project$Head$urlAttribute(details.L.el))),
                        _Utils_Tuple2("twitter:image:alt", $elm$core$Maybe$Just($author$project$Head$raw(details.L._)))
                    ]);
            }
        }());
    };
    var $author$project$Head$Seo$tagsForAudio = function (audio) {
        return _List_fromArray([
            _Utils_Tuple2("og:audio", $elm$core$Maybe$Just($author$project$Head$raw(audio.el))),
            _Utils_Tuple2("og:audio:secure_url", $elm$core$Maybe$Just($author$project$Head$raw(audio.el))),
            _Utils_Tuple2("og:audio:type", $elm$core$Maybe$map_fn($author$project$Head$raw, audio.J))
        ]);
    };
    var $author$project$Head$Seo$tagsForImage = function (image) {
        return _List_fromArray([
            _Utils_Tuple2("og:image", $elm$core$Maybe$Just($author$project$Head$urlAttribute(image.el))),
            _Utils_Tuple2("og:image:secure_url", $elm$core$Maybe$Just($author$project$Head$urlAttribute(image.el))),
            _Utils_Tuple2("og:image:alt", $elm$core$Maybe$Just($author$project$Head$raw(image._))),
            _Utils_Tuple2("og:image:width", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn($elm$core$String$fromInt, $elm$core$Maybe$map_fn(function ($) {
                return $.ak;
            }, image.P)))),
            _Utils_Tuple2("og:image:height", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn($elm$core$String$fromInt, $elm$core$Maybe$map_fn(function ($) {
                return $.ad;
            }, image.P))))
        ]);
    };
    var $author$project$Head$Seo$tagsForVideo = function (video) {
        return _List_fromArray([
            _Utils_Tuple2("og:video", $elm$core$Maybe$Just($author$project$Head$raw(video.el))),
            _Utils_Tuple2("og:video:secure_url", $elm$core$Maybe$Just($author$project$Head$raw(video.el))),
            _Utils_Tuple2("og:video:width", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn($elm$core$String$fromInt, $elm$core$Maybe$map_fn(function ($) {
                return $.ak;
            }, video.P)))),
            _Utils_Tuple2("og:video:height", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn($elm$core$String$fromInt, $elm$core$Maybe$map_fn(function ($) {
                return $.ad;
            }, video.P))))
        ]);
    };
    var $author$project$Head$Seo$tagsForCommon = function (common) {
        return _Utils_ap($author$project$Head$Seo$tagsForImage(common.L), _Utils_ap($elm$core$Maybe$withDefault_fn(_List_Nil, $elm$core$Maybe$map_fn($author$project$Head$Seo$tagsForAudio, common.aB)), _Utils_ap($elm$core$Maybe$withDefault_fn(_List_Nil, $elm$core$Maybe$map_fn($author$project$Head$Seo$tagsForVideo, common.aP)), _Utils_ap(_List_fromArray([
            _Utils_Tuple2("og:title", $elm$core$Maybe$Just($author$project$Head$raw(common.a6))),
            _Utils_Tuple2("og:url", $elm$core$Maybe$Just($elm$core$Maybe$withDefault_fn($author$project$Head$currentPageFullUrl, $elm$core$Maybe$map_fn($author$project$Head$raw, common.V)))),
            _Utils_Tuple2("og:description", $elm$core$Maybe$Just($author$project$Head$raw(common.gI))),
            _Utils_Tuple2("og:site_name", $elm$core$Maybe$Just($author$project$Head$raw(common.ah))),
            _Utils_Tuple2("og:locale", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn($author$project$Head$Seo$localeToString, common.ae)))
        ]), _Utils_ap($elm$core$List$map_fn(function (alternateLocale) {
            return _Utils_Tuple2("og:locale:alternate", $elm$core$Maybe$Just($author$project$Head$raw($author$project$Head$Seo$localeToString(alternateLocale))));
        }, common.aT), $author$project$Head$Twitter$rawTags(common.a7))))));
    };
    var $author$project$Head$Seo$tags = function (_v0) {
        var common = _v0.a;
        var details = _v0.b;
        return $elm$core$List$append_fn(_List_fromArray([
            $author$project$Head$canonicalLink(common.V),
            $author$project$Head$metaName_fn("description", $author$project$Head$raw(common.gI))
        ]), $elm$core$List$filterMap_fn(function (_v2) {
            var name = _v2.a;
            var maybeContent = _v2.b;
            return $elm$core$Maybe$map_fn(function (metaContent) {
                return $author$project$Head$metaProperty_fn(name, metaContent);
            }, maybeContent);
        }, _Utils_ap($author$project$Head$Seo$tagsForCommon(common), function () {
            switch (details.$) {
                case 0:
                    return _List_fromArray([
                        _Utils_Tuple2("og:type", $elm$core$Maybe$Just($author$project$Head$raw("website")))
                    ]);
                case 1:
                    var articleDetails = details.a;
                    return _Utils_ap(_List_fromArray([
                        _Utils_Tuple2("og:type", $elm$core$Maybe$Just($author$project$Head$raw("article"))),
                        _Utils_Tuple2("article:section", $elm$core$Maybe$map_fn($author$project$Head$raw, articleDetails.d1)),
                        _Utils_Tuple2("article:published_time", $elm$core$Maybe$map_fn($author$project$Head$raw, articleDetails.d$)),
                        _Utils_Tuple2("article:modified_time", $elm$core$Maybe$map_fn($author$project$Head$raw, articleDetails.dS)),
                        _Utils_Tuple2("article:expiration_time", $elm$core$Maybe$map_fn($author$project$Head$raw, articleDetails.dC))
                    ]), $elm$core$List$map_fn(function (tag) {
                        return _Utils_Tuple2("article:tag", $elm$core$Maybe$Just($author$project$Head$raw(tag)));
                    }, articleDetails.aN));
                case 2:
                    var bookDetails = details.a;
                    return _Utils_ap(_List_fromArray([
                        _Utils_Tuple2("og:type", $elm$core$Maybe$Just($author$project$Head$raw("book"))),
                        _Utils_Tuple2("og:isbn", $elm$core$Maybe$map_fn($author$project$Head$raw, bookDetails.dM)),
                        _Utils_Tuple2("og:release_date", $elm$core$Maybe$map_fn($author$project$Head$raw, bookDetails.d0))
                    ]), $elm$core$List$map_fn(function (tag) {
                        return _Utils_Tuple2("book:tag", $elm$core$Maybe$Just($author$project$Head$raw(tag)));
                    }, bookDetails.aN));
                case 3:
                    var songDetails = details.a;
                    return _List_fromArray([
                        _Utils_Tuple2("og:type", $elm$core$Maybe$Just($author$project$Head$raw("music.song"))),
                        _Utils_Tuple2("music:duration", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn($elm$core$String$fromInt, songDetails.dz))),
                        _Utils_Tuple2("music:album:disc", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn($elm$core$String$fromInt, songDetails.dx))),
                        _Utils_Tuple2("music:album:track", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn($elm$core$String$fromInt, songDetails.ei)))
                    ]);
                default:
                    var profileDetails = details.a;
                    return _List_fromArray([
                        _Utils_Tuple2("og:type", $elm$core$Maybe$Just($author$project$Head$raw("profile"))),
                        _Utils_Tuple2("profile:first_name", $elm$core$Maybe$Just($author$project$Head$raw(profileDetails.dD))),
                        _Utils_Tuple2("profile:last_name", $elm$core$Maybe$Just($author$project$Head$raw(profileDetails.dN))),
                        _Utils_Tuple2("profile:username", $elm$core$Maybe$map_fn($author$project$Head$raw, profileDetails.em))
                    ]);
            }
        }())));
    };
    var $author$project$Head$Seo$website = function (common) {
        return $author$project$Head$Seo$tags($author$project$Head$Seo$Content_fn(common, $author$project$Head$Seo$Website));
    };
    var $author$project$Route$Feed__$head = function (_static) {
        return $author$project$Head$Seo$website($author$project$Head$Seo$summary({
            V: $elm$core$Maybe$Nothing,
            gI: "A demo of elm-pages 3 server-rendered routes.",
            L: {
                _: "elm-pages logo",
                P: $elm$core$Maybe$Nothing,
                J: $elm$core$Maybe$Nothing,
                el: $author$project$Pages$Url$fromPath($author$project$Path$join(_List_fromArray(["images", "icon-png.png"])))
            },
            ae: $elm$core$Maybe$Nothing,
            ah: "elm-pages Hacker News",
            a6: $author$project$Route$Feed__$title(_static.bE)
        }));
    };
    var $author$project$Effect$None = { $: 0 };
    var $author$project$Effect$none = $author$project$Effect$None;
    var $author$project$Route$Feed__$init_fn = function (maybePageUrl, sharedModel, _static) {
        return _Utils_Tuple2({}, $author$project$Effect$none);
    }, $author$project$Route$Feed__$init = F3($author$project$Route$Feed__$init_fn);
    var $author$project$RouteBuilder$WithData = $elm$core$Basics$identity;
    var $author$project$DataSource$addUrls_fn = function (urlsToAdd, requestInfo) {
        switch (requestInfo.$) {
            case 1:
                var error = requestInfo.a;
                return $author$project$Pages$StaticHttpRequest$RequestError(error);
            case 0:
                var initialUrls = requestInfo.a;
                var _function = requestInfo.b;
                return $author$project$Pages$StaticHttpRequest$Request_fn(_Utils_ap(initialUrls, urlsToAdd), _function);
            default:
                var value = requestInfo.a;
                return $author$project$Pages$StaticHttpRequest$ApiRoute(value);
        }
    }, $author$project$DataSource$addUrls = F2($author$project$DataSource$addUrls_fn);
    var $author$project$DataSource$lookup_fn = function (maybeMockResolver, requestInfo, rawResponses) {
        lookup: while (true) {
            switch (requestInfo.$) {
                case 1:
                    var error = requestInfo.a;
                    return $elm$core$Result$Err(error);
                case 0:
                    var urls = requestInfo.a;
                    var lookupFn = requestInfo.b;
                    var $temp$maybeMockResolver = maybeMockResolver, $temp$requestInfo = $author$project$DataSource$addUrls_fn(urls, A2(lookupFn, maybeMockResolver, rawResponses)), $temp$rawResponses = rawResponses;
                    maybeMockResolver = $temp$maybeMockResolver;
                    requestInfo = $temp$requestInfo;
                    rawResponses = $temp$rawResponses;
                    continue lookup;
                default:
                    var value = requestInfo.a;
                    return $elm$core$Result$Ok(value);
            }
        }
    }, $author$project$DataSource$lookup = F3($author$project$DataSource$lookup_fn);
    var $author$project$DataSource$lookupUrls = function (requestInfo) {
        switch (requestInfo.$) {
            case 1:
                return _List_Nil;
            case 0:
                var urls = requestInfo.a;
                return urls;
            default:
                return _List_Nil;
        }
    };
    var $author$project$DataSource$andThen_fn = function (fn, requestInfo) {
        return $author$project$Pages$StaticHttpRequest$Request_fn($author$project$DataSource$lookupUrls(requestInfo), F2(function (maybeMockResolver, rawResponses) {
            return function (result) {
                if (result.$ === 1) {
                    var error = result.a;
                    return $author$project$Pages$StaticHttpRequest$RequestError(error);
                }
                else {
                    var value = result.a;
                    var _v1 = fn(value);
                    switch (_v1.$) {
                        case 0:
                            var values = _v1.a;
                            var _function = _v1.b;
                            return $author$project$Pages$StaticHttpRequest$Request_fn(values, _function);
                        case 1:
                            var error = _v1.a;
                            return $author$project$Pages$StaticHttpRequest$RequestError(error);
                        default:
                            var finalValue = _v1.a;
                            return $author$project$Pages$StaticHttpRequest$ApiRoute(finalValue);
                    }
                }
            }($author$project$DataSource$lookup_fn(maybeMockResolver, requestInfo, rawResponses));
        }));
    }, $author$project$DataSource$andThen = F2($author$project$DataSource$andThen_fn);
    var $author$project$Server$Request$methodToString = function (method_) {
        switch (method_.$) {
            case 0:
                return "CONNECT";
            case 1:
                return "DELETE";
            case 2:
                return "GET";
            case 3:
                return "HEAD";
            case 4:
                return "OPTIONS";
            case 5:
                return "PATCH";
            case 6:
                return "POST";
            case 7:
                return "PUT";
            case 8:
                return "TRACE";
            default:
                var nonStandardMethod = method_.a;
                return nonStandardMethod;
        }
    };
    var $author$project$Server$Request$errorToString = function (validationError_) {
        switch (validationError_.$) {
            case 0:
                var message = validationError_.a;
                return message;
            case 1:
                var validationErrors = validationError_.a;
                return "Server.Request.oneOf failed in the following " + ($elm$core$String$fromInt($elm$core$List$length(validationErrors)) + (" ways:\n\n" + $elm$core$String$join_fn("\n\n", $elm$core$List$indexedMap_fn(F2(function (index, error) {
                    return "(" + ($elm$core$String$fromInt(index + 1) + (") " + $author$project$Server$Request$errorToString(error)));
                }), validationErrors))));
            case 2:
                var record = validationError_.a;
                return "Did not match formPost because\n" + $elm$core$String$join_fn("\n", $elm$core$List$filterMap_fn($elm$core$Basics$identity, _List_fromArray([
                    $elm$core$Maybe$map_fn(function (method_) {
                        return "- Form post must have method POST, but the method was " + $author$project$Server$Request$methodToString(method_);
                    }, record.dR),
                    $elm$core$Maybe$map_fn(function (contentType) {
                        return "- Forms must have Content-Type application/x-www-form-urlencoded, but the Content-Type was " + contentType;
                    }, record.aX)
                ])));
            default:
                var record = validationError_.a;
                return "Missing query param \"" + (record.cK + ("\". Query string was `" + (record.cm + "`")));
        }
    };
    var $turboMaCk$non_empty_list_alias$List$NonEmpty$toList = function (_v0) {
        var h = _v0.a;
        var t = _v0.b;
        return _List_Cons(h, t);
    };
    var $author$project$Server$Request$errorsToString = function (validationErrors) {
        return $elm$core$String$join_fn("\n", $elm$core$List$map_fn($author$project$Server$Request$errorToString, $turboMaCk$non_empty_list_alias$List$NonEmpty$toList(validationErrors)));
    };
    var $author$project$Pages$StaticHttpRequest$UserCalledStaticHttpFail = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$DataSource$fail = function (errorMessage) {
        return $author$project$Pages$StaticHttpRequest$RequestError($author$project$Pages$StaticHttpRequest$UserCalledStaticHttpFail(errorMessage));
    };
    var $author$project$Server$Request$getDecoder = function (_v0) {
        var decoder = _v0;
        return _Json_map1_fn(function (_v1) {
            var result = _v1.a;
            var validationErrors = _v1.b;
            var _v2 = _Utils_Tuple2(result, validationErrors);
            if (!_v2.a.$) {
                if (!_v2.b.b) {
                    var value = _v2.a.a;
                    return $elm$core$Result$Ok(value);
                }
                else {
                    var _v3 = _v2.b;
                    var firstError = _v3.a;
                    var rest = _v3.b;
                    return $elm$core$Result$Err(_Utils_Tuple2(firstError, rest));
                }
            }
            else {
                var fatalError = _v2.a.a;
                var errors = _v2.b;
                return $elm$core$Result$Err(_Utils_Tuple2(fatalError, errors));
            }
        }, decoder);
    };
    var $author$project$RouteBuilder$serverRender = function (_v0) {
        var head = _v0.bZ;
        var data = _v0.ac;
        return {
            ac: function (routeParams) {
                return $author$project$DataSource$andThen_fn(function (rendered) {
                    if (!rendered.$) {
                        var okRendered = rendered.a;
                        return okRendered;
                    }
                    else {
                        var error = rendered.a;
                        return $author$project$DataSource$fail($author$project$Server$Request$errorsToString(error));
                    }
                }, $author$project$DataSource$Http$get_fn("$$elm-pages$$headers", $author$project$Server$Request$getDecoder(data(routeParams))));
            },
            e5: F3(function (moduleContext, toRecord, routeParams) {
                return $author$project$DataSource$succeed($elm$core$Maybe$Nothing);
            }),
            bZ: head,
            eD: "serverless",
            bI: true,
            gg: $author$project$DataSource$succeed(_List_Nil)
        };
    };
    var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
    var $author$project$Route$Feed__$subscriptions_fn = function (maybePageUrl, routeParams, path, sharedModel, model) {
        return $elm$core$Platform$Sub$none;
    }, $author$project$Route$Feed__$subscriptions = F5($author$project$Route$Feed__$subscriptions_fn);
    var $author$project$Route$Feed__$update_fn = function (pageUrl, sharedModel, _static, msg, model) {
        return _Utils_Tuple2(model, $author$project$Effect$none);
    }, $author$project$Route$Feed__$update = F5($author$project$Route$Feed__$update_fn);
    var $elm$html$Html$Attributes$class_a0 = "className", $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty($elm$html$Html$Attributes$class_a0);
    var $elm$html$Html$main_ = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "main"), $elm$html$Html$main__fn = $elm$html$Html$main_.f;
    var $elm$html$Html$a = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "a"), $elm$html$Html$a_fn = $elm$html$Html$a.f;
    var $elm$virtual_dom$VirtualDom$attribute_fn = function (key, value) {
        return _VirtualDom_attribute_fn(_VirtualDom_noOnOrFormAction(key), _VirtualDom_noJavaScriptOrHtmlUri(value));
    }, $elm$virtual_dom$VirtualDom$attribute = F2($elm$virtual_dom$VirtualDom$attribute_fn);
    var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
    var $elm$html$Html$Attributes$href = function (url) {
        return $elm$html$Html$Attributes$stringProperty_fn("href", _VirtualDom_noJavaScriptUri(url));
    };
    var $author$project$Route$baseUrl = "/";
    var $author$project$Route$baseUrlAsPath = $elm$core$List$filter_fn(A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty), $elm$core$String$split_fn("/", $author$project$Route$baseUrl));
    var $author$project$Pages$Internal$Router$maybeToList = function (maybeString) {
        if (!maybeString.$) {
            var string = maybeString.a;
            return _List_fromArray([string]);
        }
        else {
            return _List_Nil;
        }
    };
    var $author$project$Route$routeToPath = function (route) {
        if (!route.$) {
            var params = route.a;
            return $elm$core$List$concat(_List_fromArray([
                _List_fromArray(["stories"]),
                _List_fromArray([params.g1])
            ]));
        }
        else {
            var params = route.a;
            return $elm$core$List$concat(_List_fromArray([
                $author$project$Pages$Internal$Router$maybeToList(params.gO)
            ]));
        }
    };
    var $author$project$Route$toPath = function (route) {
        return $author$project$Path$fromString($elm$core$String$join_fn("/", _Utils_ap($author$project$Route$baseUrlAsPath, $author$project$Route$routeToPath(route))));
    };
    var $author$project$Route$toString = function (route) {
        return $author$project$Path$toAbsolute($author$project$Route$toPath(route));
    };
    var $author$project$Route$Feed__$paginationView_fn = function (stories, routeParams, page) {
        return $elm$html$Html$div_fn(_List_fromArray([
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "news-view")
        ]), _List_fromArray([
            $elm$html$Html$div_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "news-list-nav")
            ]), _List_fromArray([
                (page > 1) ? $elm$html$Html$a_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "page-link"),
                    $elm$html$Html$Attributes$href($author$project$Route$toString($author$project$Route$Feed__(routeParams)) + ("?page=" + $elm$core$String$fromInt(page - 1))),
                    $elm$virtual_dom$VirtualDom$attribute_fn("aria-label", "Previous Page")
                ]), _List_fromArray([
                    $elm$html$Html$text("< prev")
                ])) : $elm$html$Html$span_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "page-link disabled"),
                    $elm$virtual_dom$VirtualDom$attribute_fn("aria-hidden", "true")
                ]), _List_fromArray([
                    $elm$html$Html$text("< prev")
                ])),
                $elm$html$Html$span_fn(_List_Nil, _List_fromArray([
                    $elm$html$Html$text("page " + $elm$core$String$fromInt(page))
                ])),
                ($elm$core$List$length(stories) > 28) ? $elm$html$Html$a_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "page-link"),
                    $elm$html$Html$Attributes$href($author$project$Route$toString($author$project$Route$Feed__(routeParams)) + ("?page=" + $elm$core$String$fromInt(page + 1))),
                    $elm$virtual_dom$VirtualDom$attribute_fn("aria-label", "Next Page")
                ]), _List_fromArray([
                    $elm$html$Html$text("more >")
                ])) : $elm$html$Html$span_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "page-link"),
                    $elm$virtual_dom$VirtualDom$attribute_fn("aria-hidden", "true")
                ]), _List_fromArray([
                    $elm$html$Html$text("more >")
                ]))
            ]))
        ]));
    }, $author$project$Route$Feed__$paginationView = F3($author$project$Route$Feed__$paginationView_fn);
    var $author$project$Story$domainView = function (domain) {
        return $elm$html$Html$span_fn(_List_fromArray([
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "host")
        ]), _List_fromArray([
            $elm$html$Html$text($elm$core$String$isEmpty(domain) ? "" : ("(" + (domain + ")")))
        ]));
    };
    var $author$project$Route$toLink_fn = function (toAnchorTag, route) {
        return toAnchorTag(_List_fromArray([
            $elm$html$Html$Attributes$href($author$project$Route$toString(route)),
            $elm$virtual_dom$VirtualDom$attribute_fn("elm-pages:prefetch", "")
        ]));
    }, $author$project$Route$toLink = F2($author$project$Route$toLink_fn);
    var $author$project$Route$link_fn = function (attributes, children, route) {
        return $author$project$Route$toLink_fn(function (anchorAttrs) {
            return $elm$html$Html$a_fn(_Utils_ap(anchorAttrs, attributes), children);
        }, route);
    }, $author$project$Route$link = F3($author$project$Route$link_fn);
    var $elm$html$Html$Attributes$rel_a0 = "rel", $elm$html$Html$Attributes$rel = _VirtualDom_attribute($elm$html$Html$Attributes$rel_a0);
    var $elm$html$Html$Attributes$target_a0 = "target", $elm$html$Html$Attributes$target = $elm$html$Html$Attributes$stringProperty($elm$html$Html$Attributes$target_a0);
    var $author$project$Story$view = function (_v0) {
        var story = _v0.a;
        var entry = _v0.b;
        return $elm$html$Html$li_fn(_List_fromArray([
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "news-item")
        ]), _List_fromArray([
            $elm$html$Html$span_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "score")
            ]), _List_fromArray([
                function () {
                    if (!entry.$) {
                        var points = entry.a.ht;
                        return $elm$html$Html$text($elm$core$String$fromInt(points));
                    }
                    else {
                        return $elm$html$Html$text("");
                    }
                }()
            ])),
            $elm$html$Html$span_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "title")
            ]), function () {
                var _v2 = _String_startsWith_fn("item?id=", story.el);
                if (!_v2) {
                    return _List_fromArray([
                        $elm$html$Html$a_fn(_List_fromArray([
                            $elm$html$Html$Attributes$href(story.el),
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$target_a0, "_blank"),
                            _VirtualDom_attribute_fn($elm$html$Html$Attributes$rel_a0, "noreferrer")
                        ]), _List_fromArray([
                            $elm$html$Html$text(story.a6)
                        ])),
                        $elm$html$Html$text(" "),
                        $author$project$Story$domainView(story.gJ)
                    ]);
                }
                else {
                    return _List_fromArray([
                        $author$project$Route$link_fn(_List_Nil, _List_fromArray([
                            $elm$html$Html$text(story.a6)
                        ]), $author$project$Route$Stories__Id_({
                            g1: $elm$core$String$fromInt(story.g1)
                        }))
                    ]);
                }
            }()),
            $elm$html$Html$br_fn(_List_Nil, _List_Nil),
            $elm$html$Html$span_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "meta")
            ]), function () {
                if (entry.$ === 1) {
                    return _List_fromArray([
                        $author$project$Route$link_fn(_List_Nil, _List_fromArray([
                            $elm$html$Html$text(story.hR)
                        ]), $author$project$Route$Stories__Id_({
                            g1: $elm$core$String$fromInt(story.g1)
                        }))
                    ]);
                }
                else {
                    var record = entry.a;
                    return _List_fromArray([
                        $elm$html$Html$text("by "),
                        $elm$html$Html$a_fn(_List_fromArray([
                            $elm$html$Html$Attributes$href("TODO user page link")
                        ]), _List_fromArray([
                            $elm$html$Html$text(record.hW)
                        ])),
                        $elm$html$Html$text(" " + (story.hR + " | ")),
                        $author$project$Route$link_fn(_List_Nil, _List_fromArray([
                            (story.fC > 0) ? $elm$html$Html$text($elm$core$String$fromInt(story.fC) + " comments") : $elm$html$Html$text("discuss")
                        ]), $author$project$Route$Stories__Id_({
                            g1: $elm$core$String$fromInt(story.g1)
                        })),
                        (record.ci !== "link") ? $elm$html$Html$span_fn(_List_fromArray([
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "label")
                        ]), _List_fromArray([
                            $elm$html$Html$text(" " + record.ci)
                        ])) : $elm$html$Html$text("")
                    ]);
                }
            }())
        ]));
    };
    var $author$project$Route$Feed__$view_fn = function (maybeUrl, sharedModel, model, _static) {
        return {
            dl: _List_fromArray([
                $author$project$Route$Feed__$paginationView_fn(_static.ac.bL, _static.bE, _static.ac.bU),
                $elm$html$Html$main__fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "news-list")
                ]), _List_fromArray([
                    $elm$html$Html$ul_fn(_List_Nil, $elm$core$List$map_fn($author$project$Story$view, _static.ac.bL))
                ]))
            ]),
            a6: $author$project$Route$Feed__$title(_static.bE)
        };
    }, $author$project$Route$Feed__$view = F4($author$project$Route$Feed__$view_fn);
    var $author$project$Route$Feed__$route = $author$project$RouteBuilder$buildWithLocalState_fn({ ez: $author$project$Route$Feed__$init, eT: $author$project$Route$Feed__$subscriptions, cj: $author$project$Route$Feed__$update, aQ: $author$project$Route$Feed__$view }, $author$project$RouteBuilder$serverRender({ ac: $author$project$Route$Feed__$data, bZ: $author$project$Route$Feed__$head }));
    var $author$project$Route$Stories$Id_$Data = function (story) {
        return { bM: story };
    };
    var $author$project$Route$Stories$Id_$data = function (routeParams) {
        return $author$project$Server$Request$succeed($author$project$DataSource$map_fn(function (story) {
            return $author$project$Server$Response$render($author$project$Route$Stories$Id_$Data(story));
        }, $author$project$DataSource$Http$get_fn("https://node-hnapi.herokuapp.com/item/" + routeParams.g1, _Json_map2_fn($elm$core$Tuple$pair, $author$project$Story$decoder, _Json_decodeField_fn("comments", _Json_map1_fn($elm$json$Json$Encode$encode(0), $elm$json$Json$Decode$value))))));
    };
    var $author$project$Route$Stories$Id_$head = function (_static) {
        return $author$project$Head$Seo$website($author$project$Head$Seo$summary({
            V: $elm$core$Maybe$Nothing,
            gI: "A demo of elm-pages 3 server-rendered routes.",
            L: {
                _: "elm-pages logo",
                P: $elm$core$Maybe$Nothing,
                J: $elm$core$Maybe$Nothing,
                el: $author$project$Pages$Url$fromPath($author$project$Path$join(_List_fromArray(["images", "icon-png.png"])))
            },
            ae: $elm$core$Maybe$Nothing,
            ah: "elm-pages Hacker News",
            a6: function (_v0) {
                var common = _v0.a;
                return common.a6;
            }(_static.ac.bM.a)
        }));
    };
    var $author$project$Route$Stories$Id_$init_fn = function (maybePageUrl, sharedModel, _static) {
        return _Utils_Tuple2({}, $author$project$Effect$none);
    }, $author$project$Route$Stories$Id_$init = F3($author$project$Route$Stories$Id_$init_fn);
    var $author$project$Route$Stories$Id_$subscriptions_fn = function (maybePageUrl, routeParams, path, sharedModel, model) {
        return $elm$core$Platform$Sub$none;
    }, $author$project$Route$Stories$Id_$subscriptions = F5($author$project$Route$Stories$Id_$subscriptions_fn);
    var $author$project$Route$Stories$Id_$update_fn = function (pageUrl, sharedModel, _static, msg, model) {
        return _Utils_Tuple2(model, $author$project$Effect$none);
    }, $author$project$Route$Stories$Id_$update = F5($author$project$Route$Stories$Id_$update_fn);
    var $elm$json$Json$Decode$decodeString = _Json_runOnString;
    var $elm$virtual_dom$VirtualDom$node = function (tag) {
        return _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, _VirtualDom_noScript(tag));
    };
    var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
    var $elm$virtual_dom$VirtualDom$property_fn = function (key, value) {
        return _VirtualDom_property_fn(_VirtualDom_noInnerHtmlOrFormAction(key), _VirtualDom_noJavaScriptOrHtmlUri(value));
    }, $elm$virtual_dom$VirtualDom$property = F2($elm$virtual_dom$VirtualDom$property_fn);
    var $elm$html$Html$Attributes$property = $elm$virtual_dom$VirtualDom$property;
    var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
        return _VirtualDom_keyedNodeNS_fn(_VirtualDom_keyedNode_a0, _VirtualDom_noScript(tag));
    };
    var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
    var $elm$html$Html$Keyed$ul = $elm$html$Html$Keyed$node("ul");
    var $author$project$Route$Stories$Id_$storyView = function (_v0) {
        var _v1 = _v0.a;
        var story = _v1.a;
        var entry = _v1.b;
        var commentsJson = _v0.b;
        return $elm$html$Html$div_fn(_List_fromArray([
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "item-view")
        ]), _List_fromArray([
            $elm$html$Html$div_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "item-view-header")
            ]), _List_fromArray([
                $elm$html$Html$a_fn(_List_fromArray([
                    $elm$html$Html$Attributes$href(story.el),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$target_a0, "_blank"),
                    _VirtualDom_attribute_fn($elm$html$Html$Attributes$rel_a0, "noreferrer")
                ]), _List_fromArray([
                    $elm$html$Html$h1_fn(_List_Nil, _List_fromArray([
                        $elm$html$Html$text(story.a6)
                    ]))
                ])),
                $elm$html$Html$text(" "),
                $author$project$Story$domainView(story.gJ),
                $elm$html$Html$p_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "meta")
                ]), _Utils_ap(function () {
                    if (!entry.$) {
                        var user = entry.a.hW;
                        var points = entry.a.ht;
                        return _List_fromArray([
                            $elm$html$Html$text($elm$core$String$fromInt(points) + " points | "),
                            $elm$html$Html$text("by "),
                            $elm$html$Html$a_fn(_List_fromArray([
                                $elm$html$Html$Attributes$href("/users/" + user)
                            ]), _List_fromArray([
                                $elm$html$Html$text(user)
                            ]))
                        ]);
                    }
                    else {
                        return _List_Nil;
                    }
                }(), _List_fromArray([
                    $elm$html$Html$text(" " + (story.hR + " ago"))
                ])))
            ])),
            $elm$html$Html$div_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "item-view-comments")
            ]), _List_fromArray([
                $elm$html$Html$p_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "item-view-comments-header")
                ]), _List_fromArray([
                    (story.fC > 0) ? $elm$html$Html$text($elm$core$String$fromInt(story.fC) + " comments") : $elm$html$Html$text("No comments yet.")
                ])),
                A2($elm$html$Html$Keyed$ul, _List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "comment-children")
                ]), $elm$core$List$indexedMap_fn(F2(function (index, comment) {
                    return _Utils_Tuple2($elm$core$String$fromInt(index), A3($elm$html$Html$node, "news-comment", _List_fromArray([
                        $elm$virtual_dom$VirtualDom$property_fn("commentBody", comment)
                    ]), _List_Nil));
                }), $elm$core$Result$withDefault_fn(_List_Nil, _Json_runOnString_fn($elm$json$Json$Decode$list($elm$json$Json$Decode$value), commentsJson))))
            ]))
        ]));
    };
    var $author$project$Route$Stories$Id_$view_fn = function (maybeUrl, sharedModel, model, _static) {
        return {
            dl: _List_fromArray([
                $author$project$Route$Stories$Id_$storyView(_static.ac.bM)
            ]),
            a6: function (_v0) {
                var common = _v0.a;
                return common.a6;
            }(_static.ac.bM.a)
        };
    }, $author$project$Route$Stories$Id_$view = F4($author$project$Route$Stories$Id_$view_fn);
    var $author$project$Route$Stories$Id_$route = $author$project$RouteBuilder$buildWithLocalState_fn({ ez: $author$project$Route$Stories$Id_$init, eT: $author$project$Route$Stories$Id_$subscriptions, cj: $author$project$Route$Stories$Id_$update, aQ: $author$project$Route$Stories$Id_$view }, $author$project$RouteBuilder$serverRender({ ac: $author$project$Route$Stories$Id_$data, bZ: $author$project$Route$Stories$Id_$head }));
    var $author$project$Main$getStaticRoutes = $author$project$DataSource$map_fn($elm$core$List$concat, $elm$core$List$foldr_fn($author$project$DataSource$combine_a0, $author$project$DataSource$combine_a1, _List_fromArray([
        $author$project$DataSource$map_fn($elm$core$List$map($author$project$Route$Stories__Id_), $author$project$Route$Stories$Id_$route.gg),
        $author$project$DataSource$map_fn($elm$core$List$map($author$project$Route$Feed__), $author$project$Route$Feed__$route.gg)
    ])));
    var $author$project$Internal$ApiRoute$ApiRouteBuilder_fn = function (a, b, c, d, e) {
        return { $: 0, a: a, b: b, c: c, d: d, e: e };
    }, $author$project$Internal$ApiRoute$ApiRouteBuilder = F5($author$project$Internal$ApiRoute$ApiRouteBuilder_fn);
    var $author$project$Pattern$HybridSegment = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$Pattern$Literal = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Pattern$NoPendingSlash = 1;
    var $author$project$Pattern$Pattern_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $author$project$Pattern$Pattern = F2($author$project$Pattern$Pattern_fn);
    var $author$project$Pattern$addLiteral_fn = function (newLiteral, _v0) {
        var segments = _v0.a;
        var state = _v0.b;
        if (!state) {
            return $author$project$Pattern$Pattern_fn(_Utils_ap(segments, _List_fromArray([
                $author$project$Pattern$Literal(newLiteral)
            ])), 1);
        }
        else {
            var _v2 = $elm$core$List$reverse(segments);
            if (_v2.b) {
                if (!_v2.a.$) {
                    var literalSegment = _v2.a.a;
                    var rest = _v2.b;
                    return $author$project$Pattern$Pattern_fn(_Utils_ap($elm$core$List$reverse(rest), _List_fromArray([
                        $author$project$Pattern$Literal(_Utils_ap(literalSegment, newLiteral))
                    ])), 1);
                }
                else {
                    var last = _v2.a;
                    var rest = _v2.b;
                    return $author$project$Pattern$Pattern_fn(_Utils_ap($elm$core$List$reverse(rest), _List_fromArray([
                        $author$project$Pattern$HybridSegment(_Utils_Tuple3(last, $author$project$Pattern$Literal(newLiteral), _List_Nil))
                    ])), 1);
                }
            }
            else {
                return $author$project$Pattern$Pattern_fn(_Utils_ap(segments, _List_fromArray([
                    $author$project$Pattern$Literal(newLiteral)
                ])), state);
            }
        }
    }, $author$project$Pattern$addLiteral = F2($author$project$Pattern$addLiteral_fn);
    var $author$project$ApiRoute$literal_fn = function (segment, _v0) {
        var patterns = _v0.a;
        var pattern = _v0.b;
        var handler = _v0.c;
        var toString = _v0.d;
        var constructor = _v0.e;
        return $author$project$Internal$ApiRoute$ApiRouteBuilder_fn($author$project$Pattern$addLiteral_fn(segment, patterns), _Utils_ap(pattern, segment), handler, function (values) {
            return _Utils_ap(toString(values), segment);
        }, constructor);
    }, $author$project$ApiRoute$literal = F2($author$project$ApiRoute$literal_fn);
    var $author$project$Site$canonicalUrl = "https://hacker-news-elm-pages.netlify.app";
    var $author$project$Head$manifestLink = function (path) {
        return $author$project$Head$node_fn("link", _List_fromArray([
            _Utils_Tuple2("rel", $author$project$Head$raw("manifest")),
            _Utils_Tuple2("href", $author$project$Head$raw(path))
        ]));
    };
    var $author$project$ApiRoute$encodeStaticFileBody = function (fileBody) {
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("body", $elm$json$Json$Encode$string(fileBody)),
            _Utils_Tuple2("kind", $elm$json$Json$Encode$string("static-file"))
        ]));
    };
    var $elm$core$List$concatMap_fn = function (f, list) {
        return $elm$core$List$concat($elm$core$List$map_fn(f, list));
    }, $elm$core$List$concatMap = F2($elm$core$List$concatMap_fn);
    var $elm$regex$Regex$find_a0 = _Regex_infinity, $elm$regex$Regex$find = _Regex_findAtMost($elm$regex$Regex$find_a0);
    var $author$project$Internal$ApiRoute$pathToMatches_fn = function (path, _v0) {
        var pattern = _v0.b;
        return $elm$core$List$reverse($elm$core$List$filterMap_fn($elm$core$Basics$identity, $elm$core$List$concatMap_fn(function ($) {
            return $.gh;
        }, _Regex_findAtMost_fn($elm$regex$Regex$find_a0, $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString(pattern)), path))));
    }, $author$project$Internal$ApiRoute$pathToMatches = F2($author$project$Internal$ApiRoute$pathToMatches_fn);
    var $author$project$Internal$ApiRoute$tryMatch_fn = function (path, _v0) {
        var pattern = _v0.b;
        var handler = _v0.c;
        var matches = $elm$core$List$reverse($elm$core$List$filterMap_fn($elm$core$Basics$identity, $elm$core$List$concatMap_fn(function ($) {
            return $.gh;
        }, _Regex_findAtMost_fn($elm$regex$Regex$find_a0, $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString(pattern)), path))));
        return $elm$core$Maybe$Just(handler(matches));
    }, $author$project$Internal$ApiRoute$tryMatch = F2($author$project$Internal$ApiRoute$tryMatch_fn);
    var $author$project$ApiRoute$preRender_fn = function (buildUrls, fullHandler) {
        var patterns = fullHandler.a;
        var pattern = fullHandler.b;
        var toString = fullHandler.d;
        var constructor = fullHandler.e;
        var preBuiltMatches = buildUrls(constructor(_List_Nil));
        var buildTimeRoutes__ = $author$project$DataSource$map_fn($elm$core$List$map(toString), buildUrls(constructor(_List_Nil)));
        return {
            es: buildTimeRoutes__,
            dG: $elm$core$Maybe$Nothing,
            e5: function (path) {
                var matches = $author$project$Internal$ApiRoute$pathToMatches_fn(path, fullHandler);
                return $author$project$DataSource$map_fn($elm$core$List$member(matches), preBuiltMatches);
            },
            eD: "prerender",
            e7: function (path) {
                var matches = $author$project$Internal$ApiRoute$pathToMatches_fn(path, fullHandler);
                var routeFound = $author$project$DataSource$map_fn($elm$core$List$member(matches), preBuiltMatches);
                return $author$project$DataSource$andThen_fn(function (found) {
                    return found ? $elm$core$Maybe$withDefault_fn($author$project$DataSource$succeed($elm$core$Maybe$Nothing), $elm$core$Maybe$map_fn($author$project$DataSource$map(A2($elm$core$Basics$composeR, $author$project$ApiRoute$encodeStaticFileBody, $elm$core$Maybe$Just)), $author$project$Internal$ApiRoute$tryMatch_fn(path, fullHandler))) : $author$project$DataSource$succeed($elm$core$Maybe$Nothing);
                }, routeFound);
            },
            fd: patterns,
            ff: $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("^" + (pattern + "$")))
        };
    }, $author$project$ApiRoute$preRender = F2($author$project$ApiRoute$preRender_fn);
    var $author$project$ApiRoute$single = function (handler) {
        return $author$project$ApiRoute$preRender_fn(function (constructor) {
            return $author$project$DataSource$succeed(_List_fromArray([constructor]));
        }, handler);
    };
    var $author$project$Pattern$empty = $author$project$Pattern$Pattern_fn(_List_Nil, 1);
    var $author$project$ApiRoute$succeed = function (a) {
        return $author$project$Internal$ApiRoute$ApiRouteBuilder_fn($author$project$Pattern$empty, "", function (_v0) {
            return a;
        }, function (_v1) {
            return "";
        }, function (list) {
            return list;
        });
    };
    var $elm$core$Basics$round = _Basics_round;
    var $elm$core$String$cons = _String_cons;
    var $elm$core$String$fromChar = function (_char) {
        return _String_cons_fn(_char, "");
    };
    var $elm$core$String$padLeft_fn = function (n, _char, string) {
        return _Utils_ap($elm$core$String$repeat_fn(n - $elm$core$String$length(string), $elm$core$String$fromChar(_char)), string);
    }, $elm$core$String$padLeft = F3($elm$core$String$padLeft_fn);
    var $elm$core$Char$fromCode = _Char_fromCode;
    var $noahzgordon$elm_color_extra$Color$Convert$toRadix = function (n) {
        var getChr = function (c) {
            return (c < 10) ? $elm$core$String$fromInt(c) : $elm$core$String$fromChar($elm$core$Char$fromCode(87 + c));
        };
        return (n < 16) ? getChr(n) : _Utils_ap($noahzgordon$elm_color_extra$Color$Convert$toRadix((n / 16) | 0), getChr(_Basics_modBy_fn(16, n)));
    };
    var $noahzgordon$elm_color_extra$Color$Convert$toHex_a0 = $noahzgordon$elm_color_extra$Color$Convert$toRadix, $noahzgordon$elm_color_extra$Color$Convert$toHex_a1 = A2($elm$core$String$padLeft, 2, "0"), $noahzgordon$elm_color_extra$Color$Convert$toHex = A2($elm$core$Basics$composeR, $noahzgordon$elm_color_extra$Color$Convert$toHex_a0, $noahzgordon$elm_color_extra$Color$Convert$toHex_a1);
    var $avh4$elm_color$Color$toRgba = function (_v0) {
        var r = _v0.a;
        var g = _v0.b;
        var b = _v0.c;
        var a = _v0.d;
        return { cn: a, e_: b, e4: g, fe: r };
    };
    var $noahzgordon$elm_color_extra$Color$Convert$colorToHex = function (cl) {
        var _v0 = $avh4$elm_color$Color$toRgba(cl);
        var blue = _v0.e_;
        var green = _v0.e4;
        var red = _v0.fe;
        return $elm$core$String$join_fn("", _List_Cons("#", $elm$core$List$map_fn(A2($elm$core$Basics$composeR, $elm$core$Basics$round, $noahzgordon$elm_color_extra$Color$Convert$toHex), _List_fromArray([red * 255, green * 255, blue * 255]))));
    };
    var $author$project$Pages$Manifest$displayModeToAttribute = function (displayMode) {
        switch (displayMode) {
            case 0:
                return "fullscreen";
            case 1:
                return "standalone";
            case 2:
                return "minimal-ui";
            default:
                return "browser";
        }
    };
    var $danyx23$elm_mimetype$MimeType$Image = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Pages$Manifest$encodeMaybeObject = function (list) {
        return $elm$json$Json$Encode$object($elm$core$List$filterMap_fn(function (_v0) {
            var key = _v0.a;
            var maybeValue = _v0.b;
            if (!maybeValue.$) {
                var value = maybeValue.a;
                return $elm$core$Maybe$Just(_Utils_Tuple2(key, value));
            }
            else {
                return $elm$core$Maybe$Nothing;
            }
        }, list));
    };
    var $author$project$Pages$Manifest$nonEmptyList = function (list) {
        return $elm$core$List$isEmpty(list) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(list);
    };
    var $author$project$Pages$Manifest$purposeToString = function (purpose) {
        switch (purpose) {
            case 0:
                return "monochrome";
            case 1:
                return "maskable";
            default:
                return "any";
        }
    };
    var $author$project$Pages$Manifest$purposesString = function (purposes) {
        return $elm$core$String$join_fn(" ", $elm$core$List$map_fn($author$project$Pages$Manifest$purposeToString, purposes));
    };
    var $author$project$Pages$Manifest$sizesString = function (sizes) {
        return $elm$core$String$join_fn(" ", $elm$core$List$map_fn(function (_v0) {
            var x = _v0.a;
            var y = _v0.b;
            return $elm$core$String$fromInt(x) + ("x" + $elm$core$String$fromInt(y));
        }, sizes));
    };
    var $danyx23$elm_mimetype$MimeType$toString = function (mimeType) {
        switch (mimeType.$) {
            case 0:
                var img = mimeType.a;
                switch (img.$) {
                    case 0:
                        return "image/jpeg";
                    case 1:
                        return "image/png";
                    case 2:
                        return "image/gif";
                    default:
                        var type_ = img.a;
                        return "image/" + type_;
                }
            case 1:
                var audio = mimeType.a;
                switch (audio.$) {
                    case 0:
                        return "audio/mp3";
                    case 2:
                        return "audio/wav";
                    case 1:
                        return "audio/ogg";
                    default:
                        var type_ = audio.a;
                        return "audio/" + type_;
                }
            case 2:
                var video = mimeType.a;
                switch (video.$) {
                    case 0:
                        return "video/mp4";
                    case 1:
                        return "video/mpeg";
                    case 2:
                        return "video/quicktime";
                    case 3:
                        return "video/avi";
                    case 4:
                        return "video/webm";
                    default:
                        var type_ = video.a;
                        return "video/" + type_;
                }
            case 3:
                var text = mimeType.a;
                switch (text.$) {
                    case 0:
                        return "text/plain";
                    case 1:
                        return "text/html";
                    case 2:
                        return "text/css";
                    case 3:
                        return "text/xml";
                    case 4:
                        return "application/json";
                    default:
                        var type_ = text.a;
                        return "text/" + type_;
                }
            case 4:
                var app = mimeType.a;
                switch (app.$) {
                    case 0:
                        return "application/msword";
                    case 1:
                        return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
                    case 2:
                        return "application/vnd.ms-excel";
                    case 3:
                        return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                    case 4:
                        return "application/vnd.ms-powerpoint";
                    case 5:
                        return "application/vnd.openxmlformats-officedocument.presentationml.presentation";
                    case 6:
                        return "application/pdf";
                    default:
                        var type_ = app.a;
                        return "application/" + type_;
                }
            default:
                var type_ = mimeType.a;
                return type_;
        }
    };
    var $author$project$Pages$Manifest$encodeIcon_fn = function (canonicalSiteUrl, icon) {
        return $author$project$Pages$Manifest$encodeMaybeObject(_List_fromArray([
            _Utils_Tuple2("src", $elm$core$Maybe$Just($elm$json$Json$Encode$string($author$project$Pages$Url$toAbsoluteUrl_fn(canonicalSiteUrl, icon.cY)))),
            _Utils_Tuple2("type", $elm$core$Maybe$map_fn($elm$json$Json$Encode$string, $elm$core$Maybe$map_fn($danyx23$elm_mimetype$MimeType$toString, $elm$core$Maybe$map_fn($danyx23$elm_mimetype$MimeType$Image, icon.J)))),
            _Utils_Tuple2("sizes", $elm$core$Maybe$map_fn($elm$json$Json$Encode$string, $elm$core$Maybe$map_fn($author$project$Pages$Manifest$sizesString, $author$project$Pages$Manifest$nonEmptyList(icon.cW)))),
            _Utils_Tuple2("purpose", $elm$core$Maybe$map_fn($elm$json$Json$Encode$string, $elm$core$Maybe$map_fn($author$project$Pages$Manifest$purposesString, $author$project$Pages$Manifest$nonEmptyList(icon.cQ))))
        ]));
    }, $author$project$Pages$Manifest$encodeIcon = F2($author$project$Pages$Manifest$encodeIcon_fn);
    var $author$project$Pages$Manifest$orientationToString = function (orientation) {
        switch (orientation) {
            case 0:
                return "any";
            case 1:
                return "natural";
            case 2:
                return "landscape";
            case 3:
                return "landscape-primary";
            case 4:
                return "landscape-secondary";
            case 5:
                return "portrait";
            case 6:
                return "portrait-primary";
            default:
                return "portrait-secondary";
        }
    };
    var $dillonkearns$elm_bcp47_language_tag$LanguageTag$ExtendedLanguage$toCodeString = function (_v0) {
        var rawCode = _v0;
        return rawCode;
    };
    var $dillonkearns$elm_bcp47_language_tag$LanguageTag$Script$toCodeString = function (_v0) {
        var rawCode = _v0;
        return rawCode;
    };
    var $dillonkearns$elm_bcp47_language_tag$LanguageTag$Variant$toCodeString = function (_v0) {
        var rawCode = _v0;
        return rawCode;
    };
    var $elm_community$list_extra$List$Extra$unique = function (list) {
        return $elm_community$list_extra$List$Extra$uniqueHelp_fn($elm$core$Basics$identity, $elm$core$Set$empty, list, _List_Nil);
    };
    var $dillonkearns$elm_bcp47_language_tag$LanguageTag$toString = function (languageTag) {
        if (languageTag.$ === 1) {
            var customCode = languageTag.a;
            return customCode;
        }
        else {
            var language = languageTag.a;
            var options = languageTag.b;
            return $elm$core$String$join_fn("-", _Utils_ap($elm_community$list_extra$List$Extra$unique($elm$core$List$filterMap_fn($elm$core$Basics$identity, _List_fromArray([
                $elm$core$Maybe$Just($dillonkearns$elm_bcp47_language_tag$LanguageTag$Language$toCodeString(language)),
                $elm$core$Maybe$map_fn($dillonkearns$elm_bcp47_language_tag$LanguageTag$ExtendedLanguage$toCodeString, options.e1),
                $elm$core$Maybe$map_fn($dillonkearns$elm_bcp47_language_tag$LanguageTag$Script$toCodeString, options.fg),
                $elm$core$Maybe$map_fn($dillonkearns$elm_bcp47_language_tag$LanguageTag$Country$toCodeString, options.hz)
            ]))), $elm$core$List$map_fn($dillonkearns$elm_bcp47_language_tag$LanguageTag$Variant$toCodeString, options.fl)));
        }
    };
    var $author$project$Pages$Manifest$Category$toString = function (_v0) {
        var raw = _v0;
        return raw;
    };
    var $author$project$Pages$Manifest$toJson_fn = function (canonicalSiteUrl, config) {
        return $author$project$Pages$Manifest$encodeMaybeObject(_List_fromArray([
            _Utils_Tuple2("dir", $elm$core$Maybe$Just($elm$json$Json$Encode$string("auto"))),
            _Utils_Tuple2("lang", $elm$core$Maybe$Just($elm$json$Json$Encode$string($dillonkearns$elm_bcp47_language_tag$LanguageTag$toString(config.bv)))),
            _Utils_Tuple2("icons", $elm$core$Maybe$Just($elm$json$Json$Encode$list_fn($author$project$Pages$Manifest$encodeIcon(canonicalSiteUrl), config.g0))),
            _Utils_Tuple2("background_color", $elm$core$Maybe$map_fn($elm$json$Json$Encode$string, $elm$core$Maybe$map_fn($noahzgordon$elm_color_extra$Color$Convert$colorToHex, config.bd))),
            _Utils_Tuple2("orientation", $elm$core$Maybe$Just($elm$json$Json$Encode$string($author$project$Pages$Manifest$orientationToString(config.bC)))),
            _Utils_Tuple2("display", $elm$core$Maybe$Just($elm$json$Json$Encode$string($author$project$Pages$Manifest$displayModeToAttribute(config.bk)))),
            _Utils_Tuple2("categories", $elm$core$Maybe$Just($elm$json$Json$Encode$list_fn($elm$json$Json$Encode$string, $elm$core$List$map_fn($author$project$Pages$Manifest$Category$toString, config.aW)))),
            _Utils_Tuple2("description", $elm$core$Maybe$Just($elm$json$Json$Encode$string(config.gI))),
            _Utils_Tuple2("iarc_rating_id", $elm$core$Maybe$map_fn($elm$json$Json$Encode$string, config.bt)),
            _Utils_Tuple2("name", $elm$core$Maybe$Just($elm$json$Json$Encode$string(config.hc))),
            _Utils_Tuple2("prefer_related_applications", $elm$core$Maybe$Just($elm$json$Json$Encode$bool(false))),
            _Utils_Tuple2("related_applications", $elm$core$Maybe$Just($elm$json$Json$Encode$list_fn(function (_v0) {
                return $elm$json$Json$Encode$object(_List_Nil);
            }, _List_Nil))),
            _Utils_Tuple2("theme_color", $elm$core$Maybe$map_fn($elm$json$Json$Encode$string, $elm$core$Maybe$map_fn($noahzgordon$elm_color_extra$Color$Convert$colorToHex, config.bN))),
            _Utils_Tuple2("start_url", $elm$core$Maybe$Just($elm$json$Json$Encode$string($author$project$Path$toAbsolute(config.hP)))),
            _Utils_Tuple2("short_name", $elm$core$Maybe$map_fn($elm$json$Json$Encode$string, config.bJ)),
            _Utils_Tuple2("scope", $elm$core$Maybe$Just($elm$json$Json$Encode$string("/")))
        ]));
    }, $author$project$Pages$Manifest$toJson = F2($author$project$Pages$Manifest$toJson_fn);
    var $author$project$ApiRoute$withGlobalHeadTags_fn = function (globalHeadTags, _v0) {
        var handler = _v0;
        return _Utils_update(handler, {
            dG: $elm$core$Maybe$Just(globalHeadTags)
        });
    }, $author$project$ApiRoute$withGlobalHeadTags = F2($author$project$ApiRoute$withGlobalHeadTags_fn);
    var $author$project$Pages$Manifest$generator_fn = function (canonicalSiteUrl, config) {
        return $author$project$ApiRoute$withGlobalHeadTags_fn($author$project$DataSource$succeed(_List_fromArray([
            $author$project$Head$manifestLink("/manifest.json")
        ])), $author$project$ApiRoute$single($author$project$ApiRoute$literal_fn("manifest.json", $author$project$ApiRoute$succeed($author$project$DataSource$map_fn(A2($elm$core$Basics$composeR, $author$project$Pages$Manifest$toJson(canonicalSiteUrl), $elm$json$Json$Encode$encode(0)), config)))));
    }, $author$project$Pages$Manifest$generator = F2($author$project$Pages$Manifest$generator_fn);
    var $author$project$Pages$Manifest$Portrait = 5;
    var $author$project$Pages$Manifest$Standalone = 1;
    var $dillonkearns$elm_bcp47_language_tag$LanguageTag$LanguageTag_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $dillonkearns$elm_bcp47_language_tag$LanguageTag$LanguageTag = F2($dillonkearns$elm_bcp47_language_tag$LanguageTag$LanguageTag_fn);
    var $dillonkearns$elm_bcp47_language_tag$LanguageTag$build_fn = function (options, language) {
        return $dillonkearns$elm_bcp47_language_tag$LanguageTag$LanguageTag_fn(language, options);
    }, $dillonkearns$elm_bcp47_language_tag$LanguageTag$build = F2($dillonkearns$elm_bcp47_language_tag$LanguageTag$build_fn);
    var $dillonkearns$elm_bcp47_language_tag$LanguageTag$emptySubtags = { e1: $elm$core$Maybe$Nothing, hz: $elm$core$Maybe$Nothing, fg: $elm$core$Maybe$Nothing, fl: _List_Nil };
    var $dillonkearns$elm_bcp47_language_tag$LanguageTag$Language$Language = $elm$core$Basics$identity;
    var $dillonkearns$elm_bcp47_language_tag$LanguageTag$Language$en = "en";
    var $dillonkearns$elm_bcp47_language_tag$LanguageTag$Country$Country = $elm$core$Basics$identity;
    var $dillonkearns$elm_bcp47_language_tag$LanguageTag$Country$us = "us";
    var $author$project$Pages$Manifest$usEnglish = $dillonkearns$elm_bcp47_language_tag$LanguageTag$build_fn(_Utils_update($dillonkearns$elm_bcp47_language_tag$LanguageTag$emptySubtags, {
        hz: $elm$core$Maybe$Just($dillonkearns$elm_bcp47_language_tag$LanguageTag$Country$us)
    }), $dillonkearns$elm_bcp47_language_tag$LanguageTag$Language$en);
    var $author$project$Pages$Manifest$init = function (options) {
        return { bd: $elm$core$Maybe$Nothing, aW: _List_Nil, gI: options.gI, bk: 1, bt: $elm$core$Maybe$Nothing, g0: options.g0, bv: $author$project$Pages$Manifest$usEnglish, hc: options.hc, bC: 5, bJ: $elm$core$Maybe$Nothing, hP: options.hP, bN: $elm$core$Maybe$Nothing };
    };
    var $author$project$Api$manifest = $author$project$Pages$Manifest$init({
        gI: "elm-pages port of Hacker News",
        g0: _List_Nil,
        hc: "Hacker News Clone",
        hP: $author$project$Route$toPath($author$project$Route$Feed__({ gO: $elm$core$Maybe$Nothing }))
    });
    var $author$project$Api$routes_fn = function (getStaticRoutes, htmlToString) {
        return _List_fromArray([
            $author$project$Pages$Manifest$generator_fn($author$project$Site$canonicalUrl, $author$project$DataSource$succeed($author$project$Api$manifest))
        ]);
    }, $author$project$Api$routes = F2($author$project$Api$routes_fn);
    var $author$project$Pattern$segmentToJson = function (segment) {
        switch (segment.$) {
            case 0:
                var literalString = segment.a;
                return $elm$json$Json$Encode$object(_List_fromArray([
                    _Utils_Tuple2("kind", $elm$json$Json$Encode$string("literal")),
                    _Utils_Tuple2("value", $elm$json$Json$Encode$string(literalString))
                ]));
            case 1:
                return $elm$json$Json$Encode$object(_List_fromArray([
                    _Utils_Tuple2("kind", $elm$json$Json$Encode$string("dynamic"))
                ]));
            default:
                var _v1 = segment.a;
                var first = _v1.a;
                var second = _v1.b;
                var rest = _v1.c;
                return $elm$json$Json$Encode$object(_List_fromArray([
                    _Utils_Tuple2("kind", $elm$json$Json$Encode$string("hybrid")),
                    _Utils_Tuple2("value", $elm$json$Json$Encode$list_fn($author$project$Pattern$segmentToJson, _List_Cons(first, _List_Cons(second, rest))))
                ]));
        }
    };
    var $author$project$Pattern$toJson = function (_v0) {
        var segments = _v0.a;
        return $elm$json$Json$Encode$list_fn($author$project$Pattern$segmentToJson, segments);
    };
    var $author$project$Internal$ApiRoute$toPattern = function (_v0) {
        var pattern = _v0.fd;
        return pattern;
    };
    var $author$project$ApiRoute$toJson = function (apiRoute) {
        var kind = apiRoute.eD;
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("pathPattern", $author$project$Pattern$toJson($author$project$Internal$ApiRoute$toPattern(apiRoute))),
            _Utils_Tuple2("kind", $elm$json$Json$Encode$string(kind))
        ]));
    };
    var $author$project$Main$apiPatterns = function () {
        var apiPatternsString = $elm$core$List$map_fn($author$project$ApiRoute$toJson, $author$project$Api$routes_fn($author$project$Main$getStaticRoutes, function (_v0) {
            return "";
        }));
        return $author$project$ApiRoute$single($author$project$ApiRoute$literal_fn("api-patterns.json", $author$project$ApiRoute$succeed(function (json) {
            return $author$project$DataSource$succeed(_Json_encode_fn(0, json));
        }($elm$json$Json$Encode$list_fn($elm$core$Basics$identity, apiPatternsString)))));
    }();
    var $author$project$Main$DataFeed__ = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$Main$DataStories__Id_ = function (a) {
        return { $: 3, a: a };
    };
    var $elm$bytes$Bytes$Decode$Decoder = $elm$core$Basics$identity;
    var $elm$bytes$Bytes$Decode$fail = _Bytes_decodeFailure;
    var $elm$bytes$Bytes$Decode$map_fn = function (func, _v0) {
        var decodeA = _v0;
        return F2(function (bites, offset) {
            var _v1 = A2(decodeA, bites, offset);
            var aOffset = _v1.a;
            var a = _v1.b;
            return _Utils_Tuple2(aOffset, func(a));
        });
    }, $elm$bytes$Bytes$Decode$map = F2($elm$bytes$Bytes$Decode$map_fn);
    var $elm$bytes$Bytes$Decode$andThen_fn = function (callback, _v0) {
        var decodeA = _v0;
        return F2(function (bites, offset) {
            var _v1 = A2(decodeA, bites, offset);
            var newOffset = _v1.a;
            var a = _v1.b;
            var _v2 = callback(a);
            var decodeB = _v2;
            return A2(decodeB, bites, newOffset);
        });
    }, $elm$bytes$Bytes$Decode$andThen = F2($elm$bytes$Bytes$Decode$andThen_fn);
    var $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn = function (d, d2) {
        return $elm$bytes$Bytes$Decode$andThen_fn(function (v) {
            return $elm$bytes$Bytes$Decode$map_fn(v, d);
        }, d2);
    }, $lamdera$codecs$Lamdera$Wire3$andMapDecode = F2($lamdera$codecs$Lamdera$Wire3$andMapDecode_fn);
    var $lamdera$codecs$Lamdera$Wire3$endianness = 0;
    var $elm$bytes$Bytes$Decode$float64 = function (endianness) {
        return _Bytes_read_f64(!endianness);
    };
    var $lamdera$codecs$Lamdera$Wire3$decodeFloat64 = $elm$bytes$Bytes$Decode$float64($lamdera$codecs$Lamdera$Wire3$endianness);
    var $lamdera$codecs$Lamdera$Wire3$identityFloatToInt = $elm$core$Basics$floor;
    var $elm$bytes$Bytes$Decode$succeed = function (a) {
        return F2(function (_v0, offset) {
            return _Utils_Tuple2(offset, a);
        });
    };
    var $elm$bytes$Bytes$Decode$unsignedInt8 = _Bytes_read_u8;
    var $lamdera$codecs$Lamdera$Wire3$intDivBy_fn = function (b, a) {
        var v = a / b;
        return (v < 0) ? (-$elm$core$Basics$floor(-v)) : $elm$core$Basics$floor(v);
    }, $lamdera$codecs$Lamdera$Wire3$intDivBy = F2($lamdera$codecs$Lamdera$Wire3$intDivBy_fn);
    var $lamdera$codecs$Lamdera$Wire3$unsignedToSigned = function (i) {
        return (_Basics_modBy_fn(2, i) === 1) ? $lamdera$codecs$Lamdera$Wire3$intDivBy_fn(-2, i + 1) : $lamdera$codecs$Lamdera$Wire3$intDivBy_fn(2, i);
    };
    var $lamdera$codecs$Lamdera$Wire3$decodeInt64 = function () {
        var d = $lamdera$codecs$Lamdera$Wire3$andMapDecode($elm$bytes$Bytes$Decode$unsignedInt8);
        return $elm$bytes$Bytes$Decode$andThen_fn(function (n0) {
            return (n0 <= 215) ? $elm$bytes$Bytes$Decode$map_fn($lamdera$codecs$Lamdera$Wire3$unsignedToSigned, $elm$bytes$Bytes$Decode$succeed(n0)) : ((n0 < 252) ? $elm$bytes$Bytes$Decode$map_fn($lamdera$codecs$Lamdera$Wire3$unsignedToSigned, d($elm$bytes$Bytes$Decode$succeed(function (b0) {
                return (((n0 - 216) * 256) + b0) + 216;
            }))) : ((n0 === 252) ? $elm$bytes$Bytes$Decode$map_fn($lamdera$codecs$Lamdera$Wire3$unsignedToSigned, d(d($elm$bytes$Bytes$Decode$succeed(F2(function (b0, b1) {
                return (b0 * 256) + b1;
            }))))) : ((n0 === 253) ? $elm$bytes$Bytes$Decode$map_fn($lamdera$codecs$Lamdera$Wire3$unsignedToSigned, d(d(d($elm$bytes$Bytes$Decode$succeed(F3(function (b0, b1, b2) {
                return (((b0 * 256) + b1) * 256) + b2;
            })))))) : ((n0 === 254) ? $elm$bytes$Bytes$Decode$map_fn($lamdera$codecs$Lamdera$Wire3$unsignedToSigned, d(d(d(d($elm$bytes$Bytes$Decode$succeed(F4(function (b0, b1, b2, b3) {
                return (((((b0 * 256) + b1) * 256) + b2) * 256) + b3;
            }))))))) : $elm$bytes$Bytes$Decode$map_fn($lamdera$codecs$Lamdera$Wire3$identityFloatToInt, $lamdera$codecs$Lamdera$Wire3$decodeFloat64)))));
        }, $elm$bytes$Bytes$Decode$unsignedInt8);
    }();
    var $lamdera$codecs$Lamdera$Wire3$decodeInt = $lamdera$codecs$Lamdera$Wire3$decodeInt64;
    var $elm$bytes$Bytes$Decode$Done = function (a) {
        return { $: 1, a: a };
    };
    var $elm$bytes$Bytes$Decode$Loop = function (a) {
        return { $: 0, a: a };
    };
    var $elm$bytes$Bytes$Decode$loopHelp_fn = function (state, callback, bites, offset) {
        loopHelp: while (true) {
            var _v0 = callback(state);
            var decoder = _v0;
            var _v1 = A2(decoder, bites, offset);
            var newOffset = _v1.a;
            var step = _v1.b;
            if (!step.$) {
                var newState = step.a;
                var $temp$state = newState, $temp$callback = callback, $temp$bites = bites, $temp$offset = newOffset;
                state = $temp$state;
                callback = $temp$callback;
                bites = $temp$bites;
                offset = $temp$offset;
                continue loopHelp;
            }
            else {
                var result = step.a;
                return _Utils_Tuple2(newOffset, result);
            }
        }
    }, $elm$bytes$Bytes$Decode$loopHelp = F4($elm$bytes$Bytes$Decode$loopHelp_fn);
    var $elm$bytes$Bytes$Decode$loop_fn = function (state, callback) {
        return A2($elm$bytes$Bytes$Decode$loopHelp, state, callback);
    }, $elm$bytes$Bytes$Decode$loop = F2($elm$bytes$Bytes$Decode$loop_fn);
    var $lamdera$codecs$Lamdera$Wire3$decodeList = function (decoder) {
        var listStep = function (_v0) {
            var n = _v0.a;
            var xs = _v0.b;
            return (n <= 0) ? $elm$bytes$Bytes$Decode$succeed($elm$bytes$Bytes$Decode$Done(xs)) : $elm$bytes$Bytes$Decode$map_fn(function (x) {
                return $elm$bytes$Bytes$Decode$Loop(_Utils_Tuple2(n - 1, _List_Cons(x, xs)));
            }, decoder);
        };
        return $elm$bytes$Bytes$Decode$andThen_fn(function (len) {
            return $elm$bytes$Bytes$Decode$map_fn($elm$core$List$reverse, $elm$bytes$Bytes$Decode$loop_fn(_Utils_Tuple2(len, _List_Nil), listStep));
        }, $lamdera$codecs$Lamdera$Wire3$decodeInt64);
    };
    var $lamdera$codecs$Lamdera$Wire3$succeedDecode = $elm$bytes$Bytes$Decode$succeed;
    var $lamdera$codecs$Lamdera$Wire3$andThenDecode = $elm$bytes$Bytes$Decode$andThen;
    var $lamdera$codecs$Lamdera$Wire3$decodeUnsignedInt8 = $elm$bytes$Bytes$Decode$unsignedInt8;
    var $lamdera$codecs$Lamdera$Wire3$failDecode = $elm$bytes$Bytes$Decode$fail;
    var $elm$bytes$Bytes$Decode$string = function (n) {
        return _Bytes_read_string(n);
    };
    var $lamdera$codecs$Lamdera$Wire3$decodeString = $elm$bytes$Bytes$Decode$andThen_fn($elm$bytes$Bytes$Decode$string, $lamdera$codecs$Lamdera$Wire3$decodeInt64);
    var $author$project$Story$w3_decode_Common = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeInt, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeInt, $lamdera$codecs$Lamdera$Wire3$succeedDecode(F6(function (comments_count0, domain0, id0, time_ago0, title0, url0) {
        return { fC: comments_count0, gJ: domain0, g1: id0, hR: time_ago0, a6: title0, el: url0 };
    }))))))));
    var $author$project$Story$w3_decode_StoryRecord = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeInt, $lamdera$codecs$Lamdera$Wire3$succeedDecode(F3(function (points0, type_0, user0) {
        return { ht: points0, ci: type_0, hW: user0 };
    })))));
    var $author$project$Story$w3_decode_Entry = $elm$bytes$Bytes$Decode$andThen_fn(function (w3v) {
        switch (w3v) {
            case 0:
                return $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Story$Job);
            case 1:
                return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Story$w3_decode_StoryRecord, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Story$Story));
            default:
                return $lamdera$codecs$Lamdera$Wire3$failDecode;
        }
    }, $lamdera$codecs$Lamdera$Wire3$decodeUnsignedInt8);
    var $author$project$Story$w3_decode_Item = $elm$bytes$Bytes$Decode$andThen_fn(function (w3v) {
        if (!w3v) {
            return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Story$w3_decode_Entry, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Story$w3_decode_Common, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Story$Item)));
        }
        else {
            return $lamdera$codecs$Lamdera$Wire3$failDecode;
        }
    }, $lamdera$codecs$Lamdera$Wire3$decodeUnsignedInt8);
    var $author$project$Route$Feed__$w3_decode_Data = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeList($author$project$Story$w3_decode_Item), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeInt, $lamdera$codecs$Lamdera$Wire3$succeedDecode(F2(function (currentPage0, stories0) {
        return { bU: currentPage0, bL: stories0 };
    }))));
    var $lamdera$codecs$Lamdera$Wire3$decodePair_fn = function (c_a, c_b) {
        return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn(c_b, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn(c_a, $elm$bytes$Bytes$Decode$succeed(F2(function (a, b) {
            return _Utils_Tuple2(a, b);
        }))));
    }, $lamdera$codecs$Lamdera$Wire3$decodePair = F2($lamdera$codecs$Lamdera$Wire3$decodePair_fn);
    var $author$project$Route$Stories$Id_$w3_decode_Data = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodePair_fn($author$project$Story$w3_decode_Item, $lamdera$codecs$Lamdera$Wire3$decodeString), $lamdera$codecs$Lamdera$Wire3$succeedDecode(function (story0) {
        return { bM: story0 };
    }));
    var $author$project$Main$byteDecodePageData = function (route) {
        if (route.$ === 1) {
            return $elm$bytes$Bytes$Decode$fail;
        }
        else {
            if (route.a.$ === 1) {
                return $elm$bytes$Bytes$Decode$map_fn($author$project$Main$DataFeed__, $author$project$Route$Feed__$w3_decode_Data);
            }
            else {
                return $elm$bytes$Bytes$Decode$map_fn($author$project$Main$DataStories__Id_, $author$project$Route$Stories$Id_$w3_decode_Data);
            }
        }
    };
    var $elm$bytes$Bytes$Encode$F64_fn = function (a, b) {
        return { $: 7, a: a, b: b };
    }, $elm$bytes$Bytes$Encode$F64 = F2($elm$bytes$Bytes$Encode$F64_fn);
    var $elm$bytes$Bytes$Encode$float64 = $elm$bytes$Bytes$Encode$F64;
    var $lamdera$codecs$Lamdera$Wire3$encodeFloat64 = function (f) {
        return $elm$bytes$Bytes$Encode$F64_fn($lamdera$codecs$Lamdera$Wire3$endianness, f);
    };
    var $lamdera$codecs$Lamdera$Wire3$signedToUnsigned = function (i) {
        return (i < 0) ? (((-2) * i) - 1) : (2 * i);
    };
    var $lamdera$codecs$Lamdera$Wire3$encodeInt64 = function (i) {
        var n = $lamdera$codecs$Lamdera$Wire3$signedToUnsigned(i);
        var n0 = _Basics_modBy_fn(256, n);
        var n1 = _Basics_modBy_fn(256, $lamdera$codecs$Lamdera$Wire3$intDivBy_fn(256, n));
        var n2 = _Basics_modBy_fn(256, $lamdera$codecs$Lamdera$Wire3$intDivBy_fn(256, $lamdera$codecs$Lamdera$Wire3$intDivBy_fn(256, n)));
        var n3 = _Basics_modBy_fn(256, $lamdera$codecs$Lamdera$Wire3$intDivBy_fn(256, $lamdera$codecs$Lamdera$Wire3$intDivBy_fn(256, $lamdera$codecs$Lamdera$Wire3$intDivBy_fn(256, n))));
        var ei = function (e) {
            return $elm$bytes$Bytes$Encode$sequence($elm$core$List$map_fn($elm$bytes$Bytes$Encode$unsignedInt8, e));
        };
        return (n <= 215) ? ei(_List_fromArray([n])) : ((n <= 9431) ? ei(_List_fromArray([
            216 + $lamdera$codecs$Lamdera$Wire3$intDivBy_fn(256, n - 216),
            _Basics_modBy_fn(256, n - 216)
        ])) : ((_Utils_cmp(n, 256 * 256) < 0) ? ei(_List_fromArray([252, n1, n0])) : ((_Utils_cmp(n, (256 * 256) * 256) < 0) ? ei(_List_fromArray([253, n2, n1, n0])) : ((_Utils_cmp(n, ((256 * 256) * 256) * 256) < 0) ? ei(_List_fromArray([254, n3, n2, n1, n0])) : $elm$bytes$Bytes$Encode$sequence(_List_fromArray([
            $elm$bytes$Bytes$Encode$unsignedInt8(255),
            $lamdera$codecs$Lamdera$Wire3$encodeFloat64(i)
        ]))))));
    };
    var $lamdera$codecs$Lamdera$Wire3$encodeInt = $lamdera$codecs$Lamdera$Wire3$encodeInt64;
    var $lamdera$codecs$Lamdera$Wire3$encodeList_fn = function (enc, s) {
        return $elm$bytes$Bytes$Encode$sequence(_List_Cons($lamdera$codecs$Lamdera$Wire3$encodeInt64($elm$core$List$length(s)), $elm$core$List$map_fn(enc, s)));
    }, $lamdera$codecs$Lamdera$Wire3$encodeList = F2($lamdera$codecs$Lamdera$Wire3$encodeList_fn);
    var $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength = function (s) {
        return $elm$bytes$Bytes$Encode$sequence(s);
    };
    var $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8 = $elm$bytes$Bytes$Encode$unsignedInt8;
    var $elm$bytes$Bytes$Encode$getStringWidth = _Bytes_getStringWidth;
    var $elm$bytes$Bytes$Encode$Utf8_fn = function (a, b) {
        return { $: 9, a: a, b: b };
    }, $elm$bytes$Bytes$Encode$Utf8 = F2($elm$bytes$Bytes$Encode$Utf8_fn);
    var $elm$bytes$Bytes$Encode$string = function (str) {
        return $elm$bytes$Bytes$Encode$Utf8_fn(_Bytes_getStringWidth(str), str);
    };
    var $lamdera$codecs$Lamdera$Wire3$encodeString = function (s) {
        return $elm$bytes$Bytes$Encode$sequence(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeInt64($elm$bytes$Bytes$Encode$getStringWidth(s)),
            $elm$bytes$Bytes$Encode$string(s)
        ]));
    };
    var $author$project$Story$w3_encode_Common = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeInt(w3_rec_var0.fC),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.gJ),
            $lamdera$codecs$Lamdera$Wire3$encodeInt(w3_rec_var0.g1),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.hR),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.a6),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.el)
        ]));
    };
    var $author$project$Story$w3_encode_StoryRecord = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeInt(w3_rec_var0.ht),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.ci),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.hW)
        ]));
    };
    var $author$project$Story$w3_encode_Entry = function (w3v) {
        if (w3v.$ === 1) {
            return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(0)
            ]));
        }
        else {
            var v0 = w3v.a;
            return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(1),
                $author$project$Story$w3_encode_StoryRecord(v0)
            ]));
        }
    };
    var $author$project$Story$w3_encode_Item = function (w3v) {
        var v0 = w3v.a;
        var v1 = w3v.b;
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(0),
            $author$project$Story$w3_encode_Common(v0),
            $author$project$Story$w3_encode_Entry(v1)
        ]));
    };
    var $author$project$Route$Feed__$w3_encode_Data = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeInt(w3_rec_var0.bU),
            $lamdera$codecs$Lamdera$Wire3$encodeList_fn($author$project$Story$w3_encode_Item, w3_rec_var0.bL)
        ]));
    };
    var $lamdera$codecs$Lamdera$Wire3$encodePair_fn = function (c_a, c_b, _v0) {
        var a = _v0.a;
        var b = _v0.b;
        return $elm$bytes$Bytes$Encode$sequence(_List_fromArray([
            c_a(a),
            c_b(b)
        ]));
    }, $lamdera$codecs$Lamdera$Wire3$encodePair = F3($lamdera$codecs$Lamdera$Wire3$encodePair_fn);
    var $author$project$Route$Stories$Id_$w3_encode_Data = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodePair_fn($author$project$Story$w3_encode_Item, $lamdera$codecs$Lamdera$Wire3$encodeString, w3_rec_var0.bM)
        ]));
    };
    var $author$project$ErrorPage$w3_encode_ErrorPage = function (w3v) {
        if (w3v.$ === 1) {
            var v0 = w3v.a;
            return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(0),
                $lamdera$codecs$Lamdera$Wire3$encodeString(v0)
            ]));
        }
        else {
            return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(1)
            ]));
        }
    };
    var $author$project$Main$byteEncodePageData = function (pageData) {
        switch (pageData.$) {
            case 1:
                var thisPageData = pageData.a;
                return $author$project$ErrorPage$w3_encode_ErrorPage(thisPageData);
            case 0:
                return $elm$bytes$Bytes$Encode$unsignedInt8(0);
            case 2:
                var thisPageData = pageData.a;
                return $author$project$Route$Feed__$w3_encode_Data(thisPageData);
            default:
                var thisPageData = pageData.a;
                return $author$project$Route$Stories$Id_$w3_encode_Data(thisPageData);
        }
    };
    var $author$project$Site$head = $author$project$DataSource$succeed(_List_Nil);
    var $author$project$Site$config = { fz: $author$project$Site$canonicalUrl, bZ: $author$project$Site$head };
    var $author$project$Main$Data404NotFoundPage____ = { $: 0 };
    var $author$project$Server$Response$map_fn = function (mapFn, pageServerResponse) {
        switch (pageServerResponse.$) {
            case 0:
                var response = pageServerResponse.a;
                var data = pageServerResponse.b;
                return $author$project$PageServerResponse$RenderPage_fn(response, mapFn(data));
            case 1:
                var serverResponse = pageServerResponse.a;
                return $author$project$PageServerResponse$ServerResponse(serverResponse);
            default:
                var error = pageServerResponse.a;
                var response = pageServerResponse.b;
                return $author$project$PageServerResponse$ErrorPage_fn(error, response);
        }
    }, $author$project$Server$Response$map = F2($author$project$Server$Response$map_fn);
    var $author$project$Server$Response$mapError_fn = function (mapFn, pageServerResponse) {
        switch (pageServerResponse.$) {
            case 0:
                var response = pageServerResponse.a;
                var data = pageServerResponse.b;
                return $author$project$PageServerResponse$RenderPage_fn(response, data);
            case 1:
                var serverResponse = pageServerResponse.a;
                return $author$project$PageServerResponse$ServerResponse(serverResponse);
            default:
                var error = pageServerResponse.a;
                var response = pageServerResponse.b;
                return $author$project$PageServerResponse$ErrorPage_fn(mapFn(error), response);
        }
    }, $author$project$Server$Response$mapError = F2($author$project$Server$Response$mapError_fn);
    var $author$project$Server$Response$withStatusCode_fn = function (statusCode, serverResponse) {
        switch (serverResponse.$) {
            case 0:
                var response = serverResponse.a;
                var data = serverResponse.b;
                return $author$project$PageServerResponse$RenderPage_fn(_Utils_update(response, { Z: statusCode }), data);
            case 1:
                var response = serverResponse.a;
                return $author$project$PageServerResponse$ServerResponse(_Utils_update(response, { Z: statusCode }));
            default:
                var error = serverResponse.a;
                return $elm$core$Basics$never(error);
        }
    }, $author$project$Server$Response$withStatusCode = F2($author$project$Server$Response$withStatusCode_fn);
    var $author$project$Main$dataForRoute = function (route) {
        if (route.$ === 1) {
            return $author$project$DataSource$succeed($author$project$Server$Response$mapError_fn($elm$core$Basics$never, $author$project$Server$Response$withStatusCode_fn(404, $author$project$Server$Response$render($author$project$Main$Data404NotFoundPage____))));
        }
        else {
            if (route.a.$ === 1) {
                var routeParams = route.a.a;
                return $author$project$DataSource$map_fn($author$project$Server$Response$map($author$project$Main$DataFeed__), $author$project$Route$Feed__$route.ac(routeParams));
            }
            else {
                var routeParams = route.a.a;
                return $author$project$DataSource$map_fn($author$project$Server$Response$map($author$project$Main$DataStories__Id_), $author$project$Route$Stories$Id_$route.ac(routeParams));
            }
        }
    };
    var $lamdera$codecs$Lamdera$Wire3$decodeUnit = $elm$bytes$Bytes$Decode$succeed(0), $lamdera$codecs$Lamdera$Wire3$decodeUnit_fn = $lamdera$codecs$Lamdera$Wire3$decodeUnit.f;
    var $author$project$Shared$w3_decode_Data = $lamdera$codecs$Lamdera$Wire3$decodeUnit;
    var $author$project$ErrorPage$InternalError = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$ErrorPage$NotFound = { $: 0 };
    var $author$project$ErrorPage$w3_decode_ErrorPage = $elm$bytes$Bytes$Decode$andThen_fn(function (w3v) {
        switch (w3v) {
            case 0:
                return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$ErrorPage$InternalError));
            case 1:
                return $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$ErrorPage$NotFound);
            default:
                return $lamdera$codecs$Lamdera$Wire3$failDecode;
        }
    }, $lamdera$codecs$Lamdera$Wire3$decodeUnsignedInt8);
    var $author$project$Main$w3_decode_PageData = $elm$bytes$Bytes$Decode$andThen_fn(function (w3v) {
        switch (w3v) {
            case 0:
                return $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Main$Data404NotFoundPage____);
            case 1:
                return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$ErrorPage$w3_decode_ErrorPage, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Main$DataErrorPage____));
            case 2:
                return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Route$Feed__$w3_decode_Data, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Main$DataFeed__));
            case 3:
                return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Route$Stories$Id_$w3_decode_Data, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Main$DataStories__Id_));
            default:
                return $lamdera$codecs$Lamdera$Wire3$failDecode;
        }
    }, $lamdera$codecs$Lamdera$Wire3$decodeUnsignedInt8);
    var $author$project$Pages$Internal$NotFoundReason$NotPrerendered_fn = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $author$project$Pages$Internal$NotFoundReason$NotPrerendered = F2($author$project$Pages$Internal$NotFoundReason$NotPrerendered_fn);
    var $author$project$Pages$Internal$NotFoundReason$NotPrerenderedOrHandledByFallback_fn = function (a, b) {
        return { $: 2, a: a, b: b };
    }, $author$project$Pages$Internal$NotFoundReason$NotPrerenderedOrHandledByFallback = F2($author$project$Pages$Internal$NotFoundReason$NotPrerenderedOrHandledByFallback_fn);
    var $author$project$Pages$Internal$NotFoundReason$UnhandledServerRoute = function (a) {
        return { $: 3, a: a };
    };
    var $author$project$Pages$Internal$NotFoundReason$w3_decode_Record = $lamdera$codecs$Lamdera$Wire3$decodeList($lamdera$codecs$Lamdera$Wire3$decodePair_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$decodeString));
    var $lamdera$codecs$Lamdera$Wire3$decodeMaybe = function (decVal) {
        return $elm$bytes$Bytes$Decode$andThen_fn(function (c) {
            switch (c) {
                case 0:
                    return $lamdera$codecs$Lamdera$Wire3$succeedDecode($elm$core$Maybe$Nothing);
                case 1:
                    return $elm$bytes$Bytes$Decode$map_fn($elm$core$Maybe$Just, decVal);
                default:
                    return $lamdera$codecs$Lamdera$Wire3$failDecode;
            }
        }, $elm$bytes$Bytes$Decode$unsignedInt8);
    };
    var $author$project$Pages$Internal$RoutePattern$Optional = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Pages$Internal$RoutePattern$OptionalSplat = { $: 2 };
    var $author$project$Pages$Internal$RoutePattern$RequiredSplat = { $: 1 };
    var $author$project$Pages$Internal$RoutePattern$w3_decode_Ending = $elm$bytes$Bytes$Decode$andThen_fn(function (w3v) {
        switch (w3v) {
            case 0:
                return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$RoutePattern$Optional));
            case 1:
                return $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$RoutePattern$OptionalSplat);
            case 2:
                return $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$RoutePattern$RequiredSplat);
            default:
                return $lamdera$codecs$Lamdera$Wire3$failDecode;
        }
    }, $lamdera$codecs$Lamdera$Wire3$decodeUnsignedInt8);
    var $author$project$Pages$Internal$RoutePattern$DynamicSegment = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Pages$Internal$RoutePattern$StaticSegment = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Pages$Internal$RoutePattern$w3_decode_Segment = $elm$bytes$Bytes$Decode$andThen_fn(function (w3v) {
        switch (w3v) {
            case 0:
                return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$RoutePattern$DynamicSegment));
            case 1:
                return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$RoutePattern$StaticSegment));
            default:
                return $lamdera$codecs$Lamdera$Wire3$failDecode;
        }
    }, $lamdera$codecs$Lamdera$Wire3$decodeUnsignedInt8);
    var $author$project$Pages$Internal$RoutePattern$w3_decode_RoutePattern = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeList($author$project$Pages$Internal$RoutePattern$w3_decode_Segment), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($author$project$Pages$Internal$RoutePattern$w3_decode_Ending), $lamdera$codecs$Lamdera$Wire3$succeedDecode(F2(function (ending0, segments0) {
        return { ev: ending0, eR: segments0 };
    }))));
    var $author$project$Pages$Internal$NotFoundReason$w3_decode_ModuleContext = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Pages$Internal$RoutePattern$w3_decode_RoutePattern, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeList($lamdera$codecs$Lamdera$Wire3$decodeString), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Pages$Internal$NotFoundReason$w3_decode_Record, $lamdera$codecs$Lamdera$Wire3$succeedDecode(F3(function (matchedRouteParams0, moduleName0, routePattern0) {
        return { b7: matchedRouteParams0, f_: moduleName0, gb: routePattern0 };
    })))));
    var $author$project$Pages$Internal$NotFoundReason$w3_decode_NotFoundReason = $elm$bytes$Bytes$Decode$andThen_fn(function (w3v) {
        switch (w3v) {
            case 0:
                return $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$NotFoundReason$NoMatchingRoute);
            case 1:
                return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeList($author$project$Pages$Internal$NotFoundReason$w3_decode_Record), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Pages$Internal$NotFoundReason$w3_decode_ModuleContext, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$NotFoundReason$NotPrerendered)));
            case 2:
                return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeList($author$project$Pages$Internal$NotFoundReason$w3_decode_Record), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Pages$Internal$NotFoundReason$w3_decode_ModuleContext, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$NotFoundReason$NotPrerenderedOrHandledByFallback)));
            case 3:
                return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Pages$Internal$NotFoundReason$w3_decode_ModuleContext, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$NotFoundReason$UnhandledServerRoute));
            default:
                return $lamdera$codecs$Lamdera$Wire3$failDecode;
        }
    }, $lamdera$codecs$Lamdera$Wire3$decodeUnsignedInt8);
    var $author$project$Path$w3_decode_Path = $elm$bytes$Bytes$Decode$andThen_fn(function (w3v) {
        if (!w3v) {
            return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$succeedDecode($elm$core$Basics$identity));
        }
        else {
            return $lamdera$codecs$Lamdera$Wire3$failDecode;
        }
    }, $lamdera$codecs$Lamdera$Wire3$decodeUnsignedInt8);
    var $author$project$Pages$Internal$ResponseSketch$w3_decode_ResponseSketch_fn = function (w3_x_c_data, w3_x_c_shared) {
        return $elm$bytes$Bytes$Decode$andThen_fn(function (w3v) {
            switch (w3v) {
                case 0:
                    return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn(w3_x_c_shared, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn(w3_x_c_data, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$ResponseSketch$HotUpdate)));
                case 1:
                    return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Pages$Internal$NotFoundReason$w3_decode_NotFoundReason, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Path$w3_decode_Path, $lamdera$codecs$Lamdera$Wire3$succeedDecode(F2(function (path0, reason0) {
                        return { ca: path0, cR: reason0 };
                    })))), $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$ResponseSketch$NotFound));
                case 2:
                    return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$ResponseSketch$Redirect));
                case 3:
                    return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn(w3_x_c_data, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$ResponseSketch$RenderPage));
                default:
                    return $lamdera$codecs$Lamdera$Wire3$failDecode;
            }
        }, $lamdera$codecs$Lamdera$Wire3$decodeUnsignedInt8);
    }, $author$project$Pages$Internal$ResponseSketch$w3_decode_ResponseSketch = F2($author$project$Pages$Internal$ResponseSketch$w3_decode_ResponseSketch_fn);
    var $author$project$Main$decodeResponse = $author$project$Pages$Internal$ResponseSketch$w3_decode_ResponseSketch_fn($author$project$Main$w3_decode_PageData, $author$project$Shared$w3_decode_Data);
    var $lamdera$codecs$Lamdera$Wire3$encodeUnit = function (_v0) {
        return $elm$bytes$Bytes$Encode$sequence(_List_Nil);
    };
    var $author$project$Shared$w3_encode_Data = $lamdera$codecs$Lamdera$Wire3$encodeUnit;
    var $author$project$Main$w3_encode_PageData = function (w3v) {
        switch (w3v.$) {
            case 0:
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(0)
                ]));
            case 1:
                var v0 = w3v.a;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(1),
                    $author$project$ErrorPage$w3_encode_ErrorPage(v0)
                ]));
            case 2:
                var v0 = w3v.a;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(2),
                    $author$project$Route$Feed__$w3_encode_Data(v0)
                ]));
            default:
                var v0 = w3v.a;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(3),
                    $author$project$Route$Stories$Id_$w3_encode_Data(v0)
                ]));
        }
    };
    var $author$project$Pages$Internal$NotFoundReason$w3_encode_Record_a0 = A2($lamdera$codecs$Lamdera$Wire3$encodePair, $lamdera$codecs$Lamdera$Wire3$encodeString, $lamdera$codecs$Lamdera$Wire3$encodeString), $author$project$Pages$Internal$NotFoundReason$w3_encode_Record = $lamdera$codecs$Lamdera$Wire3$encodeList($author$project$Pages$Internal$NotFoundReason$w3_encode_Record_a0);
    var $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn = function (encVal, s) {
        if (s.$ === 1) {
            return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                $elm$bytes$Bytes$Encode$unsignedInt8(0)
            ]));
        }
        else {
            var v = s.a;
            return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                $elm$bytes$Bytes$Encode$unsignedInt8(1),
                encVal(v)
            ]));
        }
    }, $lamdera$codecs$Lamdera$Wire3$encodeMaybe = F2($lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn);
    var $author$project$Pages$Internal$RoutePattern$w3_encode_Ending = function (w3v) {
        switch (w3v.$) {
            case 0:
                var v0 = w3v.a;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(0),
                    $lamdera$codecs$Lamdera$Wire3$encodeString(v0)
                ]));
            case 2:
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(1)
                ]));
            default:
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(2)
                ]));
        }
    };
    var $author$project$Pages$Internal$RoutePattern$w3_encode_Segment = function (w3v) {
        if (w3v.$ === 1) {
            var v0 = w3v.a;
            return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(0),
                $lamdera$codecs$Lamdera$Wire3$encodeString(v0)
            ]));
        }
        else {
            var v0 = w3v.a;
            return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(1),
                $lamdera$codecs$Lamdera$Wire3$encodeString(v0)
            ]));
        }
    };
    var $author$project$Pages$Internal$RoutePattern$w3_encode_RoutePattern = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($author$project$Pages$Internal$RoutePattern$w3_encode_Ending, w3_rec_var0.ev),
            $lamdera$codecs$Lamdera$Wire3$encodeList_fn($author$project$Pages$Internal$RoutePattern$w3_encode_Segment, w3_rec_var0.eR)
        ]));
    };
    var $author$project$Pages$Internal$NotFoundReason$w3_encode_ModuleContext = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeList_fn($author$project$Pages$Internal$NotFoundReason$w3_encode_Record_a0, w3_rec_var0.b7),
            $lamdera$codecs$Lamdera$Wire3$encodeList_fn($lamdera$codecs$Lamdera$Wire3$encodeString, w3_rec_var0.f_),
            $author$project$Pages$Internal$RoutePattern$w3_encode_RoutePattern(w3_rec_var0.gb)
        ]));
    };
    var $author$project$Pages$Internal$NotFoundReason$w3_encode_NotFoundReason = function (w3v) {
        switch (w3v.$) {
            case 0:
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(0)
                ]));
            case 1:
                var v0 = w3v.a;
                var v1 = w3v.b;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(1),
                    $author$project$Pages$Internal$NotFoundReason$w3_encode_ModuleContext(v0),
                    $lamdera$codecs$Lamdera$Wire3$encodeList_fn($author$project$Pages$Internal$NotFoundReason$w3_encode_Record, v1)
                ]));
            case 2:
                var v0 = w3v.a;
                var v1 = w3v.b;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(2),
                    $author$project$Pages$Internal$NotFoundReason$w3_encode_ModuleContext(v0),
                    $lamdera$codecs$Lamdera$Wire3$encodeList_fn($author$project$Pages$Internal$NotFoundReason$w3_encode_Record, v1)
                ]));
            default:
                var v0 = w3v.a;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(3),
                    $author$project$Pages$Internal$NotFoundReason$w3_encode_ModuleContext(v0)
                ]));
        }
    };
    var $author$project$Path$w3_encode_Path = function (w3v) {
        var v0 = w3v;
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(0),
            $lamdera$codecs$Lamdera$Wire3$encodeString(v0)
        ]));
    };
    var $author$project$Pages$Internal$ResponseSketch$w3_encode_ResponseSketch_fn = function (w3_x_c_data, w3_x_c_shared, w3v) {
        switch (w3v.$) {
            case 1:
                var v0 = w3v.a;
                var v1 = w3v.b;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(0),
                    w3_x_c_data(v0),
                    w3_x_c_shared(v1)
                ]));
            case 3:
                var v0 = w3v.a;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(1),
                    function (w3_rec_var0) {
                        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                            $author$project$Path$w3_encode_Path(w3_rec_var0.ca),
                            $author$project$Pages$Internal$NotFoundReason$w3_encode_NotFoundReason(w3_rec_var0.cR)
                        ]));
                    }(v0)
                ]));
            case 2:
                var v0 = w3v.a;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(2),
                    $lamdera$codecs$Lamdera$Wire3$encodeString(v0)
                ]));
            default:
                var v0 = w3v.a;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(3),
                    w3_x_c_data(v0)
                ]));
        }
    }, $author$project$Pages$Internal$ResponseSketch$w3_encode_ResponseSketch = F3($author$project$Pages$Internal$ResponseSketch$w3_encode_ResponseSketch_fn);
    var $author$project$Main$encodeResponse_a0 = $author$project$Main$w3_encode_PageData, $author$project$Main$encodeResponse_a1 = $author$project$Shared$w3_encode_Data, $author$project$Main$encodeResponse = A2($author$project$Pages$Internal$ResponseSketch$w3_encode_ResponseSketch, $author$project$Main$encodeResponse_a0, $author$project$Main$encodeResponse_a1);
    var $author$project$Main$fetchPageData_fn = function (url, details) {
        fetchPageData: while (true) {
            var $temp$url = url, $temp$details = details;
            url = $temp$url;
            details = $temp$details;
            continue fetchPageData;
        }
    }, $author$project$Main$fetchPageData = F2($author$project$Main$fetchPageData_fn);
    var $author$project$Effect$Cmd = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Effect$fromCmd = $author$project$Effect$Cmd;
    var $author$project$Main$fromJsPort = _Platform_incomingPort("fromJsPort", $elm$json$Json$Decode$value);
    var $author$project$ApiRoute$getGlobalHeadTagsDataSource = function (_v0) {
        var handler = _v0;
        return handler.dG;
    };
    var $author$project$Main$globalHeadTags = $author$project$DataSource$map_fn($elm$core$List$concat, $elm$core$List$foldr_fn($author$project$DataSource$combine_a0, $author$project$DataSource$combine_a1, _List_Cons($author$project$Site$config.bZ, $elm$core$List$filterMap_fn($author$project$ApiRoute$getGlobalHeadTagsDataSource, $author$project$Api$routes_fn($author$project$Main$getStaticRoutes, $author$project$HtmlPrinter$htmlToString)))));
    var $author$project$Main$gotBatchSub = _Platform_incomingPort("gotBatchSub", $elm$json$Json$Decode$value);
    var $author$project$Main$stringToString = function (string) {
        return "\"" + (string + "\"");
    };
    var $author$project$Main$maybeToString = function (maybeString) {
        if (!maybeString.$) {
            var string = maybeString.a;
            return "Just " + $author$project$Main$stringToString(string);
        }
        else {
            return "Nothing";
        }
    };
    var $author$project$Main$handleRoute = function (maybeRoute) {
        if (maybeRoute.$ === 1) {
            return $author$project$DataSource$succeed($elm$core$Maybe$Nothing);
        }
        else {
            if (maybeRoute.a.$ === 1) {
                var routeParams = maybeRoute.a.a;
                return A3($author$project$Route$Feed__$route.e5, {
                    f_: _List_fromArray(["Feed__"]),
                    gb: {
                        ev: $elm$core$Maybe$Just($author$project$Pages$Internal$RoutePattern$Optional("feed")),
                        eR: _List_Nil
                    }
                }, function (param) {
                    return _List_fromArray([
                        _Utils_Tuple2("feed", $author$project$Main$maybeToString(param.gO))
                    ]);
                }, routeParams);
            }
            else {
                var routeParams = maybeRoute.a.a;
                return A3($author$project$Route$Stories$Id_$route.e5, {
                    f_: _List_fromArray(["Stories", "Id_"]),
                    gb: {
                        ev: $elm$core$Maybe$Nothing,
                        eR: _List_fromArray([
                            $author$project$Pages$Internal$RoutePattern$StaticSegment("stories"),
                            $author$project$Pages$Internal$RoutePattern$DynamicSegment("id")
                        ])
                    }
                }, function (param) {
                    return _List_fromArray([
                        _Utils_Tuple2("id", $author$project$Main$stringToString(param.g1))
                    ]);
                }, routeParams);
            }
        }
    };
    var $lamdera$codecs$Lamdera$Wire3$decodeBytes_ = _LamderaCodecs_decodeBytes;
    var $author$project$Main$hotReloadData = _Platform_incomingPort("hotReloadData", $lamdera$codecs$Lamdera$Wire3$decodeBytes_);
    var $author$project$Main$ModelErrorPage____ = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$Main$ModelFeed__ = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Main$ModelStories__Id_ = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Main$MsgErrorPage____ = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$Main$MsgFeed__ = function (a) {
        return { $: 3, a: a };
    };
    var $author$project$Main$MsgStories__Id_ = function (a) {
        return { $: 4, a: a };
    };
    var $author$project$Effect$Batch = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$Effect$batch = $author$project$Effect$Batch;
    var $author$project$ErrorPage$init = function (errorPage) {
        return _Utils_Tuple2({ aY: 0 }, $author$project$Effect$none);
    };
    var $author$project$Effect$FetchRouteData = function (a) {
        return { $: 3, a: a };
    };
    var $author$project$Effect$map_fn = function (fn, effect) {
        switch (effect.$) {
            case 0:
                return $author$project$Effect$None;
            case 1:
                var cmd = effect.a;
                return $author$project$Effect$Cmd(_Platform_map_fn(fn, cmd));
            case 2:
                var list = effect.a;
                return $author$project$Effect$Batch($elm$core$List$map_fn($author$project$Effect$map(fn), list));
            default:
                var fetchInfo = effect.a;
                return $author$project$Effect$FetchRouteData({
                    dl: fetchInfo.dl,
                    ca: fetchInfo.ca,
                    c5: A2($elm$core$Basics$composeR, fetchInfo.c5, fn)
                });
        }
    }, $author$project$Effect$map = F2($author$project$Effect$map_fn);
    var $elm$core$Maybe$map2_fn = function (func, ma, mb) {
        if (ma.$ === 1) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var a = ma.a;
            if (mb.$ === 1) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var b = mb.a;
                return $elm$core$Maybe$Just(A2(func, a, b));
            }
        }
    }, $elm$core$Maybe$map2_fn_unwrapped = function (func, ma, mb) {
        if (ma.$ === 1) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var a = ma.a;
            if (mb.$ === 1) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var b = mb.a;
                return $elm$core$Maybe$Just(func(a, b));
            }
        }
    }, $elm$core$Maybe$map2 = F3($elm$core$Maybe$map2_fn);
    var $elm$core$Tuple$mapBoth_fn = function (funcA, funcB, _v0) {
        var x = _v0.a;
        var y = _v0.b;
        return _Utils_Tuple2(funcA(x), funcB(y));
    }, $elm$core$Tuple$mapBoth = F3($elm$core$Tuple$mapBoth_fn);
    var $author$project$ErrorPage$notFound = $author$project$ErrorPage$NotFound;
    var $author$project$Shared$OnPageChange = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Shared$data = $author$project$DataSource$succeed(0);
    var $author$project$Shared$init_fn = function (flags, maybePagePath) {
        return _Utils_Tuple2({ cc: false }, $author$project$Effect$none);
    }, $author$project$Shared$init = F2($author$project$Shared$init_fn);
    var $author$project$Shared$subscriptions_fn = function (_v0, _v1) {
        return $elm$core$Platform$Sub$none;
    }, $author$project$Shared$subscriptions = F2($author$project$Shared$subscriptions_fn);
    var $author$project$Shared$update_fn = function (msg, model) {
        if (!msg.$) {
            return _Utils_Tuple2(_Utils_update(model, { cc: false }), $author$project$Effect$none);
        }
        else {
            var globalMsg = msg.a;
            return _Utils_Tuple2(model, $author$project$Effect$none);
        }
    }, $author$project$Shared$update = F2($author$project$Shared$update_fn);
    var $elm$html$Html$header = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "header"), $elm$html$Html$header_fn = $elm$html$Html$header.f;
    var $elm$html$Html$nav = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "nav"), $elm$html$Html$nav_fn = $elm$html$Html$nav.f;
    var $elm$html$Html$strong = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "strong"), $elm$html$Html$strong_fn = $elm$html$Html$strong.f;
    var $author$project$Shared$headerView = $elm$html$Html$header_fn(_List_fromArray([
        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "header")
    ]), _List_fromArray([
        $elm$html$Html$nav_fn(_List_fromArray([
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "inner")
        ]), _List_fromArray([
            $elm$html$Html$a_fn(_List_fromArray([
                $elm$html$Html$Attributes$href("/")
            ]), _List_fromArray([
                $elm$html$Html$strong_fn(_List_Nil, _List_fromArray([
                    $elm$html$Html$text("HN")
                ]))
            ])),
            $elm$html$Html$a_fn(_List_fromArray([
                $elm$html$Html$Attributes$href("/new")
            ]), _List_fromArray([
                $elm$html$Html$strong_fn(_List_Nil, _List_fromArray([
                    $elm$html$Html$text("New")
                ]))
            ])),
            $elm$html$Html$a_fn(_List_fromArray([
                $elm$html$Html$Attributes$href("/show")
            ]), _List_fromArray([
                $elm$html$Html$strong_fn(_List_Nil, _List_fromArray([
                    $elm$html$Html$text("Show")
                ]))
            ])),
            $elm$html$Html$a_fn(_List_fromArray([
                $elm$html$Html$Attributes$href("/ask")
            ]), _List_fromArray([
                $elm$html$Html$strong_fn(_List_Nil, _List_fromArray([
                    $elm$html$Html$text("Ask")
                ]))
            ])),
            $elm$html$Html$a_fn(_List_fromArray([
                $elm$html$Html$Attributes$href("/job")
            ]), _List_fromArray([
                $elm$html$Html$strong_fn(_List_Nil, _List_fromArray([
                    $elm$html$Html$text("Jobs")
                ]))
            ])),
            $elm$html$Html$a_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "github"),
                $elm$html$Html$Attributes$href("https://github.com/dillonkearns/elm-pages"),
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$target_a0, "_blank"),
                _VirtualDom_attribute_fn($elm$html$Html$Attributes$rel_a0, "noreferrer")
            ]), _List_fromArray([
                $elm$html$Html$text("Built with elm-pages")
            ]))
        ]))
    ]));
    var $author$project$Shared$view_fn = function (sharedData, page, model, toMsg, pageView) {
        return {
            dl: $elm$html$Html$div_fn(_List_Nil, _List_Cons($author$project$Shared$headerView, pageView.dl)),
            a6: pageView.a6
        };
    }, $author$project$Shared$view = F5($author$project$Shared$view_fn);
    var $author$project$Shared$template = {
        ac: $author$project$Shared$data,
        ez: $author$project$Shared$init,
        f3: $elm$core$Maybe$Just($author$project$Shared$OnPageChange),
        eT: $author$project$Shared$subscriptions,
        cj: $author$project$Shared$update,
        aQ: $author$project$Shared$view
    };
    var $author$project$Main$init_fn = function (currentGlobalModel, userFlags, sharedData, pageData, navigationKey, maybePagePath) {
        var _v0 = $elm$core$Maybe$withDefault_fn(A2($author$project$Shared$template.ez, userFlags, maybePagePath), $elm$core$Maybe$map_fn(function (m) {
            return _Utils_Tuple2(m, $author$project$Effect$none);
        }, currentGlobalModel));
        var sharedModel = _v0.a;
        var globalCmd = _v0.b;
        var _v1 = function () {
            var _v2 = _Utils_Tuple2($elm$core$Maybe$map2_fn($elm$core$Tuple$pair, $elm$core$Maybe$andThen_fn(function ($) {
                return $.X;
            }, maybePagePath), $elm$core$Maybe$map_fn(function ($) {
                return $.ca;
            }, maybePagePath)), pageData);
            _v2$2: while (true) {
                if (!_v2.a.$) {
                    if (_v2.a.a.a.$ === 1) {
                        if (_v2.b.$ === 2) {
                            var _v3 = _v2.a.a;
                            var routeParams = _v3.a.a;
                            var justPath = _v3.b;
                            var thisPageData = _v2.b.a;
                            return $elm$core$Tuple$mapBoth_fn($author$project$Main$ModelFeed__, $author$project$Effect$map($author$project$Main$MsgFeed__), A3($author$project$Route$Feed__$route.ez, $elm$core$Maybe$andThen_fn(function ($) {
                                return $.a1;
                            }, maybePagePath), sharedModel, { ac: thisPageData, ca: justPath.ca, bE: routeParams, a3: sharedData }));
                        }
                        else {
                            break _v2$2;
                        }
                    }
                    else {
                        if (_v2.b.$ === 3) {
                            var _v4 = _v2.a.a;
                            var routeParams = _v4.a.a;
                            var justPath = _v4.b;
                            var thisPageData = _v2.b.a;
                            return $elm$core$Tuple$mapBoth_fn($author$project$Main$ModelStories__Id_, $author$project$Effect$map($author$project$Main$MsgStories__Id_), A3($author$project$Route$Stories$Id_$route.ez, $elm$core$Maybe$andThen_fn(function ($) {
                                return $.a1;
                            }, maybePagePath), sharedModel, { ac: thisPageData, ca: justPath.ca, bE: routeParams, a3: sharedData }));
                        }
                        else {
                            break _v2$2;
                        }
                    }
                }
                else {
                    break _v2$2;
                }
            }
            return $elm$core$Tuple$mapBoth_fn($author$project$Main$ModelErrorPage____, $author$project$Effect$map($author$project$Main$MsgErrorPage____), $author$project$ErrorPage$init(function () {
                if (pageData.$ === 1) {
                    var errorPage = pageData.a;
                    return errorPage;
                }
                else {
                    return $author$project$ErrorPage$notFound;
                }
            }()));
        }();
        var templateModel = _v1.a;
        var templateCmd = _v1.b;
        return _Utils_Tuple2({ ab: maybePagePath, i: sharedModel, A: templateModel }, $author$project$Effect$batch(_List_fromArray([
            templateCmd,
            $author$project$Effect$map_fn($author$project$Main$MsgGlobal, globalCmd)
        ])));
    }, $author$project$Main$init = F6($author$project$Main$init_fn);
    var $author$project$ErrorPage$internalError = $author$project$ErrorPage$InternalError;
    var $author$project$ApiRoute$getBuildTimeRoutes = function (_v0) {
        var handler = _v0;
        return handler.es;
    };
    var $author$project$Main$routePatterns = $author$project$ApiRoute$single($author$project$ApiRoute$literal_fn("route-patterns.json", $author$project$ApiRoute$succeed(function (json) {
        return $author$project$DataSource$succeed(_Json_encode_fn(0, json));
    }($elm$json$Json$Encode$list_fn(function (_v0) {
        var pathPattern = _v0.eK;
        var kind = _v0.eD;
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("kind", $elm$json$Json$Encode$string(kind)),
            _Utils_Tuple2("pathPattern", $elm$json$Json$Encode$string(pathPattern))
        ]));
    }, _List_fromArray([
        { eD: $author$project$Route$Stories$Id_$route.eD, eK: "/stories/:id" },
        { eD: $author$project$Route$Feed__$route.eD, eK: "/" },
        { eD: $author$project$Route$Feed__$route.eD, eK: "/:feed" }
    ]))))));
    var $author$project$Main$pathsToGenerateHandler = $author$project$ApiRoute$single($author$project$ApiRoute$literal_fn("all-paths.json", $author$project$ApiRoute$succeed($author$project$DataSource$map2_fn(F2(function (pageRoutes, apiRoutes) {
        return _Json_encode_fn(0, $elm$json$Json$Encode$list_fn($elm$json$Json$Encode$string, _Utils_ap(pageRoutes, $elm$core$List$map_fn(function (api) {
            return "/" + api;
        }, apiRoutes))));
    }), $author$project$DataSource$map_fn($elm$core$List$map(function (route) {
        return $author$project$Path$toAbsolute($author$project$Route$toPath(route));
    }), $author$project$Main$getStaticRoutes), $author$project$DataSource$map_fn($elm$core$List$concat, $elm$core$List$foldr_fn($author$project$DataSource$combine_a0, $author$project$DataSource$combine_a1, $elm$core$List$map_fn($author$project$ApiRoute$getBuildTimeRoutes, _List_Cons($author$project$Main$routePatterns, _List_Cons($author$project$Main$apiPatterns, $author$project$Api$routes_fn($author$project$Main$getStaticRoutes, function (_v0) {
        return "";
    }))))))))));
    var $author$project$Effect$perform_fn = function (helpers, effect) {
        var key = helpers.g6;
        var fromPageMsg = helpers.gU;
        switch (effect.$) {
            case 0:
                return $elm$core$Platform$Cmd$none;
            case 1:
                var cmd = effect.a;
                return _Platform_map_fn(fromPageMsg, cmd);
            case 2:
                var list = effect.a;
                return $elm$core$Platform$Cmd$batch($elm$core$List$map_fn($author$project$Effect$perform(helpers), list));
            default:
                var fetchInfo = effect.a;
                return helpers.gQ({ dl: fetchInfo.dl, ca: fetchInfo.ca, c5: fetchInfo.c5 });
        }
    }, $author$project$Effect$perform = F2($author$project$Effect$perform_fn);
    var $author$project$Main$routePatterns3 = _List_fromArray([
        {
            ev: $elm$core$Maybe$Nothing,
            eR: _List_fromArray([
                $author$project$Pages$Internal$RoutePattern$StaticSegment("stories"),
                $author$project$Pages$Internal$RoutePattern$DynamicSegment("id")
            ])
        },
        {
            ev: $elm$core$Maybe$Just($author$project$Pages$Internal$RoutePattern$Optional("feed")),
            eR: _List_Nil
        }
    ]);
    var $lamdera$codecs$Lamdera$Wire3$encodeBytes_ = _LamderaCodecs_encodeBytes;
    var $author$project$Main$sendPageData = _Platform_outgoingPort("sendPageData", function ($) {
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("binaryPageData", $lamdera$codecs$Lamdera$Wire3$encodeBytes_($.gx)),
            _Utils_Tuple2("oldThing", $elm$core$Basics$identity($.hm))
        ]));
    });
    var $author$project$ErrorPage$statusCode = function (error) {
        if (!error.$) {
            return 404;
        }
        else {
            return 500;
        }
    };
    var $author$project$Main$templateSubscriptions_fn = function (route, path, model) {
        var _v0 = _Utils_Tuple2(model.A, route);
        _v0$2: while (true) {
            if (!_v0.b.$) {
                if (_v0.b.a.$ === 1) {
                    if (!_v0.a.$) {
                        var templateModel = _v0.a.a;
                        var routeParams = _v0.b.a.a;
                        return _Platform_map_fn($author$project$Main$MsgFeed__, A5($author$project$Route$Feed__$route.eT, $elm$core$Maybe$Nothing, routeParams, path, templateModel, model.i));
                    }
                    else {
                        break _v0$2;
                    }
                }
                else {
                    if (_v0.a.$ === 1) {
                        var templateModel = _v0.a.a;
                        var routeParams = _v0.b.a.a;
                        return _Platform_map_fn($author$project$Main$MsgStories__Id_, A5($author$project$Route$Stories$Id_$route.eT, $elm$core$Maybe$Nothing, routeParams, path, templateModel, model.i));
                    }
                    else {
                        break _v0$2;
                    }
                }
            }
            else {
                break _v0$2;
            }
        }
        return $elm$core$Platform$Sub$none;
    }, $author$project$Main$templateSubscriptions = F3($author$project$Main$templateSubscriptions_fn);
    var $author$project$Main$toJsPort = _Platform_outgoingPort("toJsPort", $elm$core$Basics$identity);
    var $elm$core$Maybe$map3_fn = function (func, ma, mb, mc) {
        if (ma.$ === 1) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var a = ma.a;
            if (mb.$ === 1) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var b = mb.a;
                if (mc.$ === 1) {
                    return $elm$core$Maybe$Nothing;
                }
                else {
                    var c = mc.a;
                    return $elm$core$Maybe$Just(A3(func, a, b, c));
                }
            }
        }
    }, $elm$core$Maybe$map3_fn_unwrapped = function (func, ma, mb, mc) {
        if (ma.$ === 1) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var a = ma.a;
            if (mb.$ === 1) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var b = mb.a;
                if (mc.$ === 1) {
                    return $elm$core$Maybe$Nothing;
                }
                else {
                    var c = mc.a;
                    return $elm$core$Maybe$Just(func(a, b, c));
                }
            }
        }
    }, $elm$core$Maybe$map3 = F4($elm$core$Maybe$map3_fn);
    var $author$project$Main$mapBoth_fn = function (fnA, fnB, _v0) {
        var a = _v0.a;
        var b = _v0.b;
        var c = _v0.c;
        return _Utils_Tuple3(fnA(a), fnB(b), c);
    }, $author$project$Main$mapBoth = F3($author$project$Main$mapBoth_fn);
    var $author$project$ErrorPage$update_fn = function (errorPage, msg, model) {
        return _Utils_Tuple2(_Utils_update(model, { aY: model.aY + 1 }), $author$project$Effect$none);
    }, $author$project$ErrorPage$update = F3($author$project$ErrorPage$update_fn);
    var $author$project$Main$update_fn = function (sharedData, pageData, navigationKey, msg, model) {
        switch (msg.$) {
            case 2:
                var msg_ = msg.a;
                var _v1 = function () {
                    var _v2 = _Utils_Tuple2(model.A, pageData);
                    if ((_v2.a.$ === 2) && (_v2.b.$ === 1)) {
                        var pageModel = _v2.a.a;
                        var thisPageData = _v2.b.a;
                        return $elm$core$Tuple$mapBoth_fn($author$project$Main$ModelErrorPage____, $author$project$Effect$map($author$project$Main$MsgErrorPage____), $author$project$ErrorPage$update_fn(thisPageData, msg_, pageModel));
                    }
                    else {
                        return _Utils_Tuple2(model.A, $author$project$Effect$none);
                    }
                }();
                var updatedPageModel = _v1.a;
                var pageCmd = _v1.b;
                return _Utils_Tuple2(_Utils_update(model, { A: updatedPageModel }), pageCmd);
            case 0:
                var msg_ = msg.a;
                var _v3 = A2($author$project$Shared$template.cj, msg_, model.i);
                var sharedModel = _v3.a;
                var globalCmd = _v3.b;
                return _Utils_Tuple2(_Utils_update(model, { i: sharedModel }), $author$project$Effect$map_fn($author$project$Main$MsgGlobal, globalCmd));
            case 1:
                var record = msg.a;
                return function (_v4) {
                    var updatedModel = _v4.a;
                    var cmd = _v4.b;
                    var _v5 = $author$project$Shared$template.f3;
                    if (_v5.$ === 1) {
                        return _Utils_Tuple2(updatedModel, cmd);
                    }
                    else {
                        var thingy = _v5.a;
                        var _v6 = A2($author$project$Shared$template.cj, thingy({ R: record.R, ca: record.ca, U: record.U }), model.i);
                        var updatedGlobalModel = _v6.a;
                        var globalCmd = _v6.b;
                        return _Utils_Tuple2(_Utils_update(updatedModel, { i: updatedGlobalModel }), $author$project$Effect$batch(_List_fromArray([
                            cmd,
                            $author$project$Effect$map_fn($author$project$Main$MsgGlobal, globalCmd)
                        ])));
                    }
                }($author$project$Main$init_fn($elm$core$Maybe$Just(model.i), $author$project$Pages$Flags$PreRenderFlags, sharedData, pageData, navigationKey, $elm$core$Maybe$Just({
                    X: record.X,
                    a1: $elm$core$Maybe$Just({
                        R: record.R,
                        cC: record.cC,
                        ca: record.ca,
                        cN: record.cN,
                        cP: record.cP,
                        U: $elm$core$Maybe$map_fn($author$project$QueryParams$fromString, record.U)
                    }),
                    ca: { R: record.R, ca: record.ca, U: record.U }
                })));
            case 3:
                var msg_ = msg.a;
                var _v7 = function () {
                    var _v9 = _Utils_Tuple3(model.A, pageData, $elm$core$Maybe$map3_fn_unwrapped(function (a, b, c) {
                        return _Utils_Tuple3(a, b, c);
                    }, $elm$core$Maybe$andThen_fn(function ($) {
                        return $.X;
                    }, model.ab), $elm$core$Maybe$andThen_fn(function ($) {
                        return $.a1;
                    }, model.ab), $elm$core$Maybe$map_fn(function ($) {
                        return $.ca;
                    }, model.ab)));
                    if ((((!_v9.a.$) && (_v9.b.$ === 2)) && (!_v9.c.$)) && (_v9.c.a.a.$ === 1)) {
                        var pageModel = _v9.a.a;
                        var thisPageData = _v9.b.a;
                        var _v10 = _v9.c.a;
                        var routeParams = _v10.a.a;
                        var pageUrl = _v10.b;
                        var justPage = _v10.c;
                        return function (_v11) {
                            var a = _v11.a;
                            var b = _v11.b;
                            var c = _v11.c;
                            if (!c.$) {
                                var sharedMsg = c.a;
                                return _Utils_Tuple3(a, b, A2($author$project$Shared$template.cj, sharedMsg, model.i));
                            }
                            else {
                                return _Utils_Tuple3(a, b, _Utils_Tuple2(model.i, $author$project$Effect$none));
                            }
                        }($author$project$Main$mapBoth_fn($author$project$Main$ModelFeed__, $author$project$Effect$map($author$project$Main$MsgFeed__), A5($author$project$Route$Feed__$route.cj, pageUrl, { ac: thisPageData, ca: justPage.ca, bE: routeParams, a3: sharedData }, msg_, pageModel, model.i)));
                    }
                    else {
                        return _Utils_Tuple3(model.A, $author$project$Effect$none, _Utils_Tuple2(model.i, $author$project$Effect$none));
                    }
                }();
                var updatedPageModel = _v7.a;
                var pageCmd = _v7.b;
                var _v8 = _v7.c;
                var newGlobalModel = _v8.a;
                var newGlobalCmd = _v8.b;
                return _Utils_Tuple2(_Utils_update(model, { i: newGlobalModel, A: updatedPageModel }), $author$project$Effect$batch(_List_fromArray([
                    pageCmd,
                    $author$project$Effect$map_fn($author$project$Main$MsgGlobal, newGlobalCmd)
                ])));
            default:
                var msg_ = msg.a;
                var _v13 = function () {
                    var _v15 = _Utils_Tuple3(model.A, pageData, $elm$core$Maybe$map3_fn_unwrapped(function (a, b, c) {
                        return _Utils_Tuple3(a, b, c);
                    }, $elm$core$Maybe$andThen_fn(function ($) {
                        return $.X;
                    }, model.ab), $elm$core$Maybe$andThen_fn(function ($) {
                        return $.a1;
                    }, model.ab), $elm$core$Maybe$map_fn(function ($) {
                        return $.ca;
                    }, model.ab)));
                    if ((((_v15.a.$ === 1) && (_v15.b.$ === 3)) && (!_v15.c.$)) && (!_v15.c.a.a.$)) {
                        var pageModel = _v15.a.a;
                        var thisPageData = _v15.b.a;
                        var _v16 = _v15.c.a;
                        var routeParams = _v16.a.a;
                        var pageUrl = _v16.b;
                        var justPage = _v16.c;
                        return function (_v17) {
                            var a = _v17.a;
                            var b = _v17.b;
                            var c = _v17.c;
                            if (!c.$) {
                                var sharedMsg = c.a;
                                return _Utils_Tuple3(a, b, A2($author$project$Shared$template.cj, sharedMsg, model.i));
                            }
                            else {
                                return _Utils_Tuple3(a, b, _Utils_Tuple2(model.i, $author$project$Effect$none));
                            }
                        }($author$project$Main$mapBoth_fn($author$project$Main$ModelStories__Id_, $author$project$Effect$map($author$project$Main$MsgStories__Id_), A5($author$project$Route$Stories$Id_$route.cj, pageUrl, { ac: thisPageData, ca: justPage.ca, bE: routeParams, a3: sharedData }, msg_, pageModel, model.i)));
                    }
                    else {
                        return _Utils_Tuple3(model.A, $author$project$Effect$none, _Utils_Tuple2(model.i, $author$project$Effect$none));
                    }
                }();
                var updatedPageModel = _v13.a;
                var pageCmd = _v13.b;
                var _v14 = _v13.c;
                var newGlobalModel = _v14.a;
                var newGlobalCmd = _v14.b;
                return _Utils_Tuple2(_Utils_update(model, { i: newGlobalModel, A: updatedPageModel }), $author$project$Effect$batch(_List_fromArray([
                    pageCmd,
                    $author$project$Effect$map_fn($author$project$Main$MsgGlobal, newGlobalCmd)
                ])));
        }
    }, $author$project$Main$update = F5($author$project$Main$update_fn);
    var $elm_community$list_extra$List$Extra$findMap_fn = function (f, list) {
        findMap: while (true) {
            if (!list.b) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var a = list.a;
                var tail = list.b;
                var _v1 = f(a);
                if (!_v1.$) {
                    var b = _v1.a;
                    return $elm$core$Maybe$Just(b);
                }
                else {
                    var $temp$f = f, $temp$list = tail;
                    f = $temp$f;
                    list = $temp$list;
                    continue findMap;
                }
            }
        }
    }, $elm_community$list_extra$List$Extra$findMap = F2($elm_community$list_extra$List$Extra$findMap_fn);
    var $author$project$Pages$Internal$Router$withLeadingSlash = function (string) {
        return _String_startsWith_fn("/", string) ? string : ("/" + string);
    };
    var $author$project$Pages$Internal$Router$withTrailingSlash = function (string) {
        return _String_endsWith_fn("/", string) ? string : (string + "/");
    };
    var $author$project$Pages$Internal$Router$normalizePath = function (path) {
        return $author$project$Pages$Internal$Router$withTrailingSlash($author$project$Pages$Internal$Router$withLeadingSlash(path));
    };
    var $author$project$Pages$Internal$Router$toRegex = function (pattern) {
        return $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString(pattern));
    };
    var $author$project$Pages$Internal$Router$submatches_fn = function (pattern, path) {
        return $elm$core$List$concatMap_fn(function ($) {
            return $.gh;
        }, _Regex_findAtMost_fn($elm$regex$Regex$find_a0, $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString(pattern)), path));
    }, $author$project$Pages$Internal$Router$submatches = F2($author$project$Pages$Internal$Router$submatches_fn);
    var $author$project$Pages$Internal$Router$tryMatch_fn = function (_v0, path) {
        var toRoute = _v0.eW;
        var pattern = _v0.fd;
        return toRoute($author$project$Pages$Internal$Router$submatches_fn(pattern, $author$project$Pages$Internal$Router$normalizePath(path)));
    }, $author$project$Pages$Internal$Router$tryMatch = F2($author$project$Pages$Internal$Router$tryMatch_fn);
    var $author$project$Pages$Internal$Router$firstMatch_fn = function (matchers, path) {
        return $elm_community$list_extra$List$Extra$findMap_fn(function (matcher) {
            return _Regex_contains_fn($author$project$Pages$Internal$Router$toRegex(matcher.fd), $author$project$Pages$Internal$Router$normalizePath(path)) ? $author$project$Pages$Internal$Router$tryMatch_fn(matcher, path) : $elm$core$Maybe$Nothing;
        }, matchers);
    }, $author$project$Pages$Internal$Router$firstMatch = F2($author$project$Pages$Internal$Router$firstMatch_fn);
    var $author$project$Route$matchers = _List_fromArray([
        {
            fd: "^\\/stories\\/(?:([^/]+))\\/?$",
            eW: function (matches) {
                if ((matches.b && (!matches.a.$)) && (!matches.b.b)) {
                    var id = matches.a.a;
                    return $elm$core$Maybe$Just($author$project$Route$Stories__Id_({ g1: id }));
                }
                else {
                    return $elm$core$Maybe$Nothing;
                }
            }
        },
        {
            fd: "^\\/(?:([^/]+))?\\/?$",
            eW: function (matches) {
                if (matches.b && (!matches.b.b)) {
                    var feed = matches.a;
                    return $elm$core$Maybe$Just($author$project$Route$Feed__({ gO: feed }));
                }
                else {
                    return $elm$core$Maybe$Nothing;
                }
            }
        }
    ]);
    var $author$project$Route$withoutBaseUrl = function (path) {
        return _String_startsWith_fn($author$project$Route$baseUrl, path) ? $elm$core$String$dropLeft_fn($elm$core$String$length($author$project$Route$baseUrl), path) : path;
    };
    var $author$project$Route$urlToRoute = function (url) {
        return $author$project$Pages$Internal$Router$firstMatch_fn($author$project$Route$matchers, $author$project$Route$withoutBaseUrl(url.ca));
    };
    var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
    var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
    var $author$project$View$map_fn = function (fn, doc) {
        return {
            dl: $elm$core$List$map_fn($elm$html$Html$map(fn), doc.dl),
            a6: doc.a6
        };
    }, $author$project$View$map = F2($author$project$View$map_fn);
    var $author$project$ErrorPage$Increment = 0;
    var $elm$html$Html$button = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "button"), $elm$html$Html$button_fn = $elm$html$Html$button.f;
    var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
    var $elm$html$Html$Events$on_fn = function (event, decoder) {
        return _VirtualDom_on_fn(event, $elm$virtual_dom$VirtualDom$Normal(decoder));
    }, $elm$html$Html$Events$on = F2($elm$html$Html$Events$on_fn);
    var $elm$html$Html$Events$onClick = function (msg) {
        return $elm$html$Html$Events$on_fn("click", $elm$json$Json$Decode$succeed(msg));
    };
    var $author$project$ErrorPage$view_fn = function (error, model) {
        return {
            dl: _List_fromArray([
                $elm$html$Html$div_fn(_List_Nil, _List_fromArray([
                    $elm$html$Html$p_fn(_List_Nil, _List_fromArray([
                        $elm$html$Html$text("Page not found. Maybe try another URL?")
                    ])),
                    $elm$html$Html$div_fn(_List_Nil, _List_fromArray([
                        $elm$html$Html$button_fn(_List_fromArray([
                            $elm$html$Html$Events$onClick(0)
                        ]), _List_fromArray([
                            $elm$html$Html$text($elm$core$String$fromInt(model.aY))
                        ]))
                    ]))
                ]))
            ]),
            a6: "This is a NotFound Error"
        };
    }, $author$project$ErrorPage$view = F2($author$project$ErrorPage$view_fn);
    var $author$project$Main$view_fn = function (page, maybePageUrl, globalData, pageData) {
        var _v0 = _Utils_Tuple2(page.hE, pageData);
        _v0$3: while (true) {
            switch (_v0.b.$) {
                case 1:
                    var data = _v0.b.a;
                    return {
                        bZ: _List_Nil,
                        aQ: function (model) {
                            var _v1 = model.A;
                            if (_v1.$ === 2) {
                                var subModel = _v1.a;
                                return A5($author$project$Shared$template.aQ, globalData, page, model.i, $author$project$Main$MsgGlobal, $author$project$View$map_fn($author$project$Main$MsgErrorPage____, $author$project$ErrorPage$view_fn(data, subModel)));
                            }
                            else {
                                return {
                                    dl: $elm$html$Html$text("Model mismatch"),
                                    a6: "Model mismatch"
                                };
                            }
                        }
                    };
                case 2:
                    if ((!_v0.a.$) && (_v0.a.a.$ === 1)) {
                        var s = _v0.a.a.a;
                        var data = _v0.b.a;
                        return {
                            bZ: $author$project$Route$Feed__$route.bZ({ ac: data, ca: page.ca, bE: s, a3: globalData }),
                            aQ: function (model) {
                                var _v2 = model.A;
                                if (!_v2.$) {
                                    var subModel = _v2.a;
                                    return A5($author$project$Shared$template.aQ, globalData, page, model.i, $author$project$Main$MsgGlobal, $author$project$View$map_fn($author$project$Main$MsgFeed__, A4($author$project$Route$Feed__$route.aQ, maybePageUrl, model.i, subModel, { ac: data, ca: page.ca, bE: s, a3: globalData })));
                                }
                                else {
                                    return {
                                        dl: $elm$html$Html$text("Model mismatch"),
                                        a6: "Model mismatch"
                                    };
                                }
                            }
                        };
                    }
                    else {
                        break _v0$3;
                    }
                case 3:
                    if ((!_v0.a.$) && (!_v0.a.a.$)) {
                        var s = _v0.a.a.a;
                        var data = _v0.b.a;
                        return {
                            bZ: $author$project$Route$Stories$Id_$route.bZ({ ac: data, ca: page.ca, bE: s, a3: globalData }),
                            aQ: function (model) {
                                var _v3 = model.A;
                                if (_v3.$ === 1) {
                                    var subModel = _v3.a;
                                    return A5($author$project$Shared$template.aQ, globalData, page, model.i, $author$project$Main$MsgGlobal, $author$project$View$map_fn($author$project$Main$MsgStories__Id_, A4($author$project$Route$Stories$Id_$route.aQ, maybePageUrl, model.i, subModel, { ac: data, ca: page.ca, bE: s, a3: globalData })));
                                }
                                else {
                                    return {
                                        dl: $elm$html$Html$text("Model mismatch"),
                                        a6: "Model mismatch"
                                    };
                                }
                            }
                        };
                    }
                    else {
                        break _v0$3;
                    }
                default:
                    break _v0$3;
            }
        }
        return {
            bZ: _List_Nil,
            aQ: function (_v4) {
                return {
                    dl: $elm$html$Html$div_fn(_List_Nil, _List_fromArray([
                        $elm$html$Html$text("This page could not be found.")
                    ])),
                    a6: "Page not found"
                };
            }
        };
    }, $author$project$Main$view = F4($author$project$Main$view_fn);
    var $author$project$Main$config = {
        gu: function (htmlToString) {
            return _List_Cons($author$project$Main$pathsToGenerateHandler, _List_Cons($author$project$Main$routePatterns, _List_Cons($author$project$Main$apiPatterns, $author$project$Api$routes_fn($author$project$Main$getStaticRoutes, htmlToString))));
        },
        gw: _List_Nil,
        gz: $author$project$Main$byteDecodePageData,
        gA: $author$project$Main$byteEncodePageData,
        gD: $author$project$Effect$fromCmd,
        ac: $author$project$Main$dataForRoute,
        gH: $author$project$Main$decodeResponse,
        gK: $author$project$Main$encodeResponse,
        gL: $author$project$Main$DataErrorPage____,
        gM: $author$project$ErrorPage$statusCode,
        gP: $author$project$Main$fetchPageData,
        gT: $author$project$Main$fromJsPort($elm$core$Basics$identity),
        gV: $author$project$DataSource$map_fn($elm$core$List$map($elm$core$Maybe$Just), $author$project$Main$getStaticRoutes),
        dG: $elm$core$Maybe$Just($author$project$Main$globalHeadTags),
        gW: $author$project$Main$gotBatchSub($elm$core$Basics$identity),
        e5: $author$project$Main$handleRoute,
        g_: $author$project$Main$hotReloadData($elm$core$Basics$identity),
        ez: $author$project$Main$init($elm$core$Maybe$Nothing),
        g3: $author$project$ErrorPage$internalError,
        hk: $author$project$ErrorPage$notFound,
        hl: $elm$core$Maybe$Nothing,
        f3: $author$project$Main$OnPageChange,
        hq: $author$project$Main$routePatterns3,
        hr: $author$project$Effect$perform,
        hF: function (route) {
            return $elm$core$Maybe$withDefault_fn(_List_Nil, $elm$core$Maybe$map_fn($author$project$Route$routeToPath, route));
        },
        hK: $author$project$Main$sendPageData,
        a3: $author$project$Shared$template.ac,
        hM: $elm$core$Maybe$Just($author$project$Site$config),
        eT: F3(function (route, path, model) {
            return $elm$core$Platform$Sub$batch(_List_fromArray([
                _Platform_map_fn($author$project$Main$MsgGlobal, A2($author$project$Shared$template.eT, path, model.i)),
                $author$project$Main$templateSubscriptions_fn(route, path, model)
            ]));
        }),
        hS: $author$project$Main$toJsPort,
        cj: $author$project$Main$update,
        hV: $author$project$Route$urlToRoute,
        aQ: $author$project$Main$view
    };
    var $author$project$Main$main = $author$project$Pages$Internal$Platform$Cli$cliApplication($author$project$Main$config);
    _Platform_export({ "Main": { "init": $author$project$Main$main($elm$json$Json$Decode$value)(0) } });
    var isBackend = false && typeof isLamdera !== "undefined";
    function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder) {
        var result = _Json_run_fn(flagDecoder, _Json_wrap(args ? args["flags"] : undefined));
        // @TODO need to figure out how to get this to automatically escape by mode?
        //$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
        $elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
        var managers = {};
        var initPair = init(result.a);
        var model = (args && args["model"]) || initPair.a;
        var stepper = stepperBuilder(sendToApp, model);
        var ports = _Platform_setupEffects(managers, sendToApp);
        var pos = 0;
        //console.log('managers', managers)
        //console.log('ports', ports)
        var dead = false;
        var upgradeMode = false;
        function mtime() {
            if (!isBackend) {
                return 0;
            }
            const hrTime = process.hrtime();
            return Math.floor(hrTime[0] * 1000000 + hrTime[1] / 1000);
        }
        function sendToApp(msg, viewMetadata) {
            if (dead) {
                return;
            }
            if (upgradeMode) {
                // console.log('sendToApp.inactive',msg)
                // No more messages should run in upgrade mode
                // @TODO redirect messages somewhere
                _Platform_enqueueEffects(managers, $elm$core$Platform$Cmd$none, $elm$core$Platform$Sub$none);
                return;
            }
            //console.log('sendToApp.active',msg)
            var start = mtime();
            var serializeDuration, logDuration = null;
            start = mtime();
            var pair = A2(update, msg, model);
            const updateDuration = mtime() - start;
            start = mtime();
            if (isBackend && loggingEnabled) {
                pos = pos + 1;
                const s = $author$project$LBR$serialize(msg);
                serializeDuration = mtime() - start;
                start = mtime();
                insertEvent(pos, global.config.version, s.a, updateDuration, serializeDuration, $elm$core$Maybe$withDefault_fn(null, s.b));
                logDuration = mtime() - start;
            }
            // console.log(`model size: ${global.sizeof(pair.a)}`)
            // console.log(pair.a)
            stepper(model = pair.a, viewMetadata);
            //console.log('cmds', pair.b);
            _Platform_enqueueEffects(managers, pair.b, subscriptions(model));
            const stepEnqueueDuration = mtime() - start;
            if (isBackend) {
                //console.log({serialize: serializeDuration, log: logDuration, update: updateDuration, stepEnqueue: stepEnqueueDuration})
            }
        }
        if ((args && args["model"]) === undefined) {
            _Platform_enqueueEffects(managers, initPair.b, subscriptions(model));
        }
        var fns = {};
        const die = function () {
            console.log("App dying");
            managers = null;
            model = null;
            stepper = null;
            ports = null;
        };
        return ports ? { ports: ports, gm: function () { return model; }, eum: function () { upgradeMode = true; }, die: die, fns: fns } : {};
    }
}(this));
