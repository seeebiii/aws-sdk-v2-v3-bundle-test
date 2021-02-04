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

|SDK Version|Included|Minified|File Size        |File Size (Pretty)|Result file name|
|-----------|--------|--------|----------------:|-----------------:|----------------|
|v2         |❌      |❌       |206 Byte         |206 Byte          |index.js        |
|v2         |❌      |✅       |132 Byte         |132 Byte          |index_min.js    |
|v2         |✅      |❌       |11,000,000 Byte  |11 MB             |index_all.js    |
|v2         |✅      |✅       |5,100,000 Byte   |5.1 MB            |index_all_min.js|
|v3         |❌      |❌       |1,300 Byte       |1,3 KB            |index.js        |
|v3         |❌      |✅       |690 Byte         |690 Byte          |index_min.js    |
|v3         |✅      |❌       |935,000 Byte     |935 KB            |index_all.js    |
|v3         |✅      |✅       |435,000 Byte     |435 KB            |index_all_min.js|

For generating the results, I have used some variations of [`esbuild`](https://esbuild.github.io/) options:

- **Included** means whether the AWS SDK is included in the output file,
- **Minified** means whether the output file is [minified](https://esbuild.github.io/api/#minify).

See the [run.sh script](run.sh) for details and try reproducing them on your machine :)

## Interpretation

The results shouldn't be too surprising:

1. If you don't include the AWS SDK v2 and you minify it, the resulting artifact has the smallest size.

2. In case you need to bundle the AWS SDK with your code, then better choose AWS SDK v3 because it results in much smaller artifact sizes.
   In this case it's a factor of **11x smaller** - this is quite a difference!

## Questions?

Feel free to reach out via [Twitter](https://twitter.com/seeebiii) or visit my website - I'm a [Freelance Software Engineer](https://www.sebastianhesse.de) focusing on serverless cloud projects.
