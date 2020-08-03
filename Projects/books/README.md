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
