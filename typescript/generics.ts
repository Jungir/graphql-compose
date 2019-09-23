//generics
function identity<anything>(arg: Array<anything>): Array<anything>{
    console.log(arg.splice(1));
    return arg;
}