import * as pulumi from "@pulumi/pulumi";
import * as s3 from "@pulumi/aws/s3";

export const mitchBucket1 = new s3.Bucket("mitchBucket1", {});
export const mitchBucket2 = new s3.Bucket("mitchBucket2", {});
export const mitchBucket3 = new s3.Bucket("mitchBucket3", {});