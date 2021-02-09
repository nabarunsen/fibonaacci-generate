

# Login and Invoke Cloud Shell
```Login to Oracle Cloud
Go to Developer Services then select Functions
Click on Getting Started
Click on  Launch Cloud Shell
```
# Setup fn CLI on Cloud Shell
```
Use the context for your region
fn list context
fn use context ap-sydney-1
```

# Update the context with the function's compartment ID
```
fn update context oracle.compartment-id ocid1.compartment.oc1..aaaaaaaa3ttzrypqr2ekxy3wsd55vtfy4xmd5yp2ngsk5q4tcjlqkjztowqa
```

# Update the context with the location of the Registry you want to use
```
fn update context registry syd.ocir.io/sdpp2doajzit/[OCIR-REPO]
```

# Generate an Auth Token
Click on Generate an Auth Token and Note down thw auth token

# Log into the Registry using the Auth Token as your password
```
docker login -u 'sdpp2doajzit/oracleidentitycloudservice/nabarun.sen@gmail.com' syd.ocir.io
password will be auth token
```
# Verify your setup by listing applications in the compartment
```
fn list apps
```
# Create, deploy, and invoke your function
```
Generate a 'hello-world' boilerplate function
fn init --runtime node fngenfibo
```

# Switch into the generated directory
```
cd fngenfibo
```
# Update func.js file
```
cat func.js

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

```
# Deploy your function
```
fn -v deploy --app fiboapp
```
# Invoke your function
```
fn invoke fiboapp hello-java
```
