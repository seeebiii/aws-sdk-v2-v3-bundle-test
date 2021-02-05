import { DynamoDBClient, GetItemCommand, UpdateItemCommand } from '@aws-sdk/client-dynamodb';

const client = new DynamoDBClient({apiVersion: '2012-08-10'});

async function demo() {
  await client.send(new GetItemCommand(/*...*/));
  await client.send(new UpdateItemCommand(/*...*/));
}

demo()
.then(() => console.log('done'))
.catch(() => process.exit(1));
