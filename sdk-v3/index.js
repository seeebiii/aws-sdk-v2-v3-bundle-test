import {DynamoDB} from '@aws-sdk/client-dynamodb';

const dynamodb = new DynamoDB({apiVersion: '2012-08-10'});

async function demo() {
  const data = await dynamodb.getItem({/*...*/}); // no .promise() needed anymore!
  await dynamodb.updateItem({/*...*/});
}

demo()
.then(() => console.log('done'))
.catch(() => process.exit(1));
