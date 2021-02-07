# Comparing Bundle Sizes of AWS SDK for JavaScript v2 and v3

This is a small test project to compare the bundle size of Node.js files using the new v3 and old v2 AWS SDK for JavaScript.
I wanted to see the differences after reading [_What's new about AWS SDK for JavaScript v3?_ on cloudonaut.io](https://cloudonaut.io/whats-new-about-aws-sdk-for-javascript-v3/).
So I created small test files based on the example code of the blog post which was making calls to DynamoDB.

## Why It's Important to Know

Knowing these numbers might definitely be interesting for people wanting to use the AWS SDK on an environment like AWS Lambda where [bigger artifact size means slower startup time](https://www.sebastianhesse.de/2020/03/31/going-serverless-why-and-how-2/).
Especially since AWS Lambda still only provides AWS SDK v2 as a "pre-loaded" module.
It means if you want to use AWS SDK v2, you don't need to bundle it with your Lambda function.
However, if you want to use AWS SDK v3, you need to bundle the SDK with your Lambda function.
This has a negative impact on the artifact size as you can see below.

## Results

|SDK Version|Included|Minified|Bundler |Variation|File Size (pretty)|File Size        |
|-----------|--------|--------|--------|---------|-----------------:|----------------:|
|v2         |❌      |❌       |esbuild |         |206 Byte          |206 Byte         |
|v2         |❌      |✅       |esbuild |         |132 Byte          |132 Byte         |
|v2         |✅      |❌       |esbuild |         |11 MB             |11,000,000 Byte  |
|v2         |✅      |✅       |esbuild |         |5.1 MB            |5,100,000 Byte   |
|v2         |❌      |❌       |esbuild |direct   |231 Byte          |231 Byte         |
|v2         |❌      |✅       |esbuild |direct   |140 Byte          |140 Byte         |
|v2         |✅      |❌       |esbuild |direct   |640 KB            |640,000 Byte     |
|v2         |✅      |✅       |esbuild |direct   |306 KB            |306,000 Byte     |
|v2         |❌      |❌       |esbuild |es6      |1.3 KB            |1,300 Byte       |
|v2         |❌      |✅       |esbuild |es6      |701 Byte          |701 Byte         |
|v2         |✅      |❌       |esbuild |es6      |11 MB             |11,000,000 Byte  |
|v2         |✅      |✅       |esbuild |es6      |5.1 MB            |5,100,000 Byte   |
|v2         |❌      |❌       |webpack |         |1.5 KB            |1,500 Byte       |
|v2         |❌      |✅       |webpack |         |297 Byte          |297 Byte         |
|v2         |✅      |❌       |webpack |         |7.1 MB            |7,100,000 Byte   |
|v2         |✅      |✅       |webpack |         |5.7 MB            |5,700,000 Byte   |
|v2         |❌      |❌       |webpack |direct   |1.5 KB            |1,500 Byte       |
|v2         |❌      |✅       |webpack |direct   |288 Byte          |288 Byte         |
|v2         |✅      |❌       |webpack |direct   |742 KB            |742,000 Byte     |
|v2         |✅      |✅       |webpack |direct   |311 KB            |311,000 Byte     |
|v2         |❌      |❌       |webpack |es6      |2.0 KB            |2,000 Byte       |
|v2         |❌      |✅       |webpack |es6      |471 Byte          |471 Byte         |
|v2         |✅      |❌       |webpack |es6      |7.1 MB            |7,100,000 Byte   |
|v2         |✅      |✅       |webpack |es6      |5.1 MB            |5,100,000 Byte   |
|v3         |❌      |❌       |esbuild |         |1.3 KB            |1,300 Byte       |
|v3         |❌      |✅       |esbuild |         |690 Byte          |690 Byte         |
|v3         |✅      |❌       |esbuild |         |935 KB            |935,000 Byte     |
|v3         |✅      |✅       |esbuild |         |435 KB            |435,000 Byte     |
|v3         |❌      |❌       |esbuild |send     |1.4 KB            |1,400 Byte       |
|v3         |❌      |✅       |esbuild |send     |720 Byte          |720 Byte         |
|v3         |✅      |❌       |esbuild |send     |936 KB            |936,000 Byte     |
|v3         |✅      |✅       |esbuild |send     |435 KB            |435,000 Byte     |
|v3         |❌      |❌       |webpack |         |547 Byte          |547 Byte         |
|v3         |❌      |✅       |webpack |         |206 Byte          |206 Byte         |
|v3         |✅      |❌       |webpack |         |1.4 MB            |1,400,000 Byte   |
|v3         |✅      |✅       |webpack |         |350 KB            |350,000 Byte     |
|v3         |❌      |❌       |webpack |send     |586 Byte          |586 Byte         |
|v3         |❌      |✅       |webpack |send     |246 Byte          |246 Byte         |
|v3         |✅      |❌       |webpack |send     |1.3 MB            |1,300,000 Byte   |
|v3         |✅      |✅       |webpack |send     |131 KB            |131,000 Byte     |

### Glossary

For generating the results, I have used different options of [`esbuild`](https://esbuild.github.io/) and [`webpack`](https://webpack.js.org/):

- **Included** means whether the AWS SDK is included in the output file,
- **Minified** means whether the output file is minified.

There are also a few code variations:
- a normal one, see [sdk-v2/index.js](sdk-v2/index.js) and [sdk-v3/index.js](sdk-v3/index.js),
- **direct** is referencing the DynamoDB client directly in the code using `require('aws-sdk/clients/dynamodb')`, see [sdk-v2/index_direct.js](sdk-v2/index_direct.js),
- **es6** is using ES6 syntax, see [sdk-v2/index_es6.js](sdk-v2/index_es6.js),
- **send** is using `dynamodb.send(<new command>)` for AWS SDK v3, see [sdk-v3/index_send.js](sdk-v3/index_send.js).

See the [run.sh script](run.sh) for details and try reproducing them on your machine :)

## Interpretation

1. If you don't include the AWS SDK v2 and you minify it, the resulting artifact has the smallest size.

2. In case you need to bundle the AWS SDK with your code, then better choose AWS SDK v3 because it results in much smaller artifact sizes.
   In this case it's a factor of **11x smaller** - this is quite a difference!

3. There's no consistent winner between `esbuild` and `webpack` about which tool is producing the smallest artifact.
   Often it's just a difference of a few KB.
   However, it looks like `webpack` can better handle external dependencies with AWS SDK v2 but `esbuild` is better in doing that with AWS SDK v3.

## Questions?

Feel free to reach out via [Twitter](https://twitter.com/seeebiii) or visit my website - I'm a [Freelance Software Engineer](https://www.sebastianhesse.de) focusing on serverless cloud projects.
