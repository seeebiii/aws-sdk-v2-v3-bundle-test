import AWS from 'aws-sdk';

const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

async function demo() {
  const data = await dynamodb.getItem({/*...*/}).promise();
  await dynamodb.updateItem({/*...*/}).promise();
}

demo()
.then(() => console.log('done'))
.catch(() => process.exit(1));
