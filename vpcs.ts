import * as aws from "@pulumi/aws";
export const mitchVpc1 = new aws.ec2.Vpc("mitchVpc1", {});
export const mitchSubnet1 = new aws.ec2.Subnet("mitchSubnet1", { 
  vpcId: mitchVpc1.id,
}) 
export const mitchVpc2 = new aws.ec2.Vpc("mitchVpc2", {});
export const mitchSubnet2 = new aws.ec2.Subnet("mitchSubnet2", { 
  vpcId: mitchVpc2.id,
}) 
export const mitchVpc3 = new aws.ec2.Vpc("mitchVpc3", {});
export const mitchSubnet3 = new aws.ec2.Subnet("mitchSubnet3", { 
  vpcId: mitchVpc3.id,
}) 