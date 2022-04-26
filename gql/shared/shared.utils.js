import AWS from 'aws-sdk';

AWS.config.update({
    credentials: {
        accessKeyId: process.env.AWS_KEY,
        secretAccessKey: process.env.AWS_SECRET,
        region: process.env.AWS_REGION,
    },
});

export const uploadToS3 = async (file, userId, folderName) => {
    const { filename, createReadStream } = await file;
    const readStream = createReadStream();
    const objectName = `${folderName}/${userId}-${Date.now()}-${filename}`;
    const { Location } = await new AWS.S3()
        .upload({
            Bucket: 'test-instaclone-uploads',
            Key: objectName,
            ACL: 'public-read',
            Body: readStream,
        })
        .promise();
    return Location;
};

export const deleteFromS3 = async (url) => {
    let routes = url.split('/').slice(-2).join('/');
    const data = new AWS.S3()
        .deleteObject({
            Bucket: 'test-instaclone-uploads',
            Key: routes,
        })
        .promise();

    return data;
};
