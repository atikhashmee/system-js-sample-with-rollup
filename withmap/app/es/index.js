import { map } from 'lodash';

function printArra() {
    let arr = map([1, 2, 3], function(num){ return num * 3; });
    console.log(arr);
}

export default printArra;