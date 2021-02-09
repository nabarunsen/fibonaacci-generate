

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
fn init --runtime java hello-java
```

# Switch into the generated directory
```
cd hello-java
```

# Deploy your function
```
fn -v deploy --app fiboapp
```
# Invoke your function
```
fn invoke fiboapp hello-java
```






