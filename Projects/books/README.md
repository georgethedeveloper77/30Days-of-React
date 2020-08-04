# booksstore

1. Product demo
2. Architecture Diagram
3. Setup the project-tree
4. Inialize Amplify
5. Adding Authentication with Cognito
6. Create S3 bucket to store Images
7. Lambda Functions to Process Books Orders(Pipeline Resolvers)
8. Adding GraphQL Amplify
9. Processing Books Orders
10. Connecting to Cloud Resources from React
11. Verifying the Customer Orders
12. View Past Orders of a customer and Orders by Customers
13. Hosting App on S3

 # Named profiles
1. nano ~/.aws/credentials
2. nano ~/.aws/config
3. aws ec2 describe-instances --profile user1
4. export AWS_PROFILE=user1

=>
# amplify configure
Follow these steps to set up access to your AWS account:

Sign in to your AWS administrator account:
https://console.aws.amazon.com/
Press Enter to continue

Specify the AWS Region
? region: us-east-2
Specify the username of the new IAM user:
? user name: amplify-ras
Complete the user creation using the AWS console
https://console.aws.amazon.com/iam/home?region=undefined#/users$new?step=final&accessKey&userNames=amplify-ras&permissionType=policies&policies=arn:aws:iam::aws:policy%2FAdministratorAccess
Press Enter to continue

Enter the access key of the newly created user:
? accessKeyId: ********\*\*\*\*********
? secretAccessKey: ******************\*\*\*\*******************
This would update/create the AWS Profile in your local machine
? Profile Name: georgethedeveloper77

Successfully set up the new user.

=>
# amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project smartbooks
? Enter a name for the environment prod
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path: src
? Distribution Directory Path: build
? Build Command: npm run-script build
? Start Command: npm run-script start
For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use georgethedeveloper77


# amplify add auth
Using service: Cognito, provided by: awscloudformation
 The current configured provider is Amazon Cognito.
 Do you want to use the default authentication and security configuration? Default configuration
 Warning: you will not be able to edit these selections.
 How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? No, I am done.

5. # amplify add storage
? Please select from one of the below mentioned services: Content (Images, audio, video, etc.)
? Please provide a friendly name for your resource that will be used to label this category in the pro
ject: BookImages
? Please provide bucket name: smartbooksd676574327a14bd69ae685af0d87f43f
? Who should have access: Auth and guest users
? What kind of access do you want for Authenticated users? create/update, read, delete
? What kind of access do you want for Guest users? read
? Do you want to add a Lambda Trigger for your S3 Bucket? No

6. # amplify add function
? Select which capability you want to add: Lambda function (serverless function)
? Provide a friendly name for your resource to be used as a label for this category in the project: pr
ocessPayment
? Provide the AWS Lambda function name: processPayment
? Choose the runtime that you want to use: NodeJS
? Choose the function template that you want to use: Hello World
? Do you want to access other resources in this project from your Lambda function? No
? Do you want to invoke this function on a recurring schedule? No
? Do you want to configure Lambda layers for this function? No
? Do you want to edit the local lambda function now? No
7. #  amplify add function
? Select which capability you want to add: Lambda function (serverless function)
? Provide a friendly name for your resource to be used as a label for this category in the project: cr
eateOrder
? Provide the AWS Lambda function name: createOrder
? Choose the runtime that you want to use: NodeJS
? Choose the function template that you want to use: Hello World
8. # Pipeline reserver
   # amplify add api
? Please select from one of the below mentioned services: GraphQL
? Provide API name: smartbooks
? Choose the default authorization type for the API Amazon Cognito User Pool
Use a Cognito user pool configured as a part of this project.
? Do you want to configure advanced settings for the GraphQL API Yes, I want to make some additional c
hanges.
? Configure additional auth types? Yes
? Choose the additional authorization types you want to configure for the API API key
API key configuration
? Enter a description for the API key: Guest user access to books
? After how many days from now the API key should expire (1-365): 365
? Configure conflict detection? No
? Do you have an annotated GraphQL schema? No
? Do you want a guided schema creation? Yes
? What best describes your project: Single object with fields (e.g., “Todo” with ID, name, description
)
? Do you want to edit the schema now? Yes
Please edit the file in your editor: /home/ras/Documents/PROJECTS/REACT P/30Days/Projects/books/amplify/backend/api/smartbooks/schema.graphql
? Press enter to continue 

GraphQL schema compiled successfully.
9.  # amplify push => create cloud resources
                      userpool, s3 bucket, AppSync Api, DynamoDB Tables, Lambda functions
10. # 