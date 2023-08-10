export default {
  PORT: process.env.PORT || '3000',
  DB:
    process.env.DB ||
    'mongodb+srv://akshay:1234@cluster0.mo21foo.mongodb.net/test',
  IS_DOCUMENT_DB: process.env.IS_DOCUMENT_DB || 'false',
  RDS_FILE: process.env.RDS_FILE || 'rds-combined-ca-bundle.pem',
  IS_CONSOLE_LOG: process.env.IS_CONSOLE_LOG || 'true',
  S3_UNPROCESSED_BUCKET: process.env.S3_UNPROCESSED_BUCKET || '',
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY || '',
  AWS_SECRET_KEY: process.env.AWS_SECRET_KEY || '',
  JWT_SECRET_KEY : process.env.JWT_SECRET || '9bfe60120bff251210dc7c9181508f138d08c899d58375b3d837293330727b587d467170df859a64211d796b2ff290fda4b56f64fcf37f694c14a237c59b7cfb'
};
