const fdk=require('@fnproject/fdk');

fdk.handle(function(input){
    let n1 = 1, n2 = 2, nextTerm, sum = 0, series_arr = [];
    let series_str = '';

        console.log('Generating the Series of length: %d', parseInt(input.length));

        for (let i = 1; i <= parseInt(input.length); i++) {
                series_arr.push(n1)
                series_str += n1 + ', ';
                sum += n1;
                nextTerm = n1 + n2;
                n1 = n2;
                n2 = nextTerm;
        }
        console.log('Fibonacci Series: %s', series_arr);
        console.log('Series Sum: %d', sum);

        return {'Number length': input.length,'fibonacci_series': series_str, 'series_sum': sum}
})
