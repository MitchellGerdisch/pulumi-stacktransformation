import * as aws from "@pulumi/aws";

import { autoConfig } from "./config";

export const mitchVpc1 = new aws.ec2.Vpc("mitchVpc1", {
  cidrBlock: autoConfig.vpcCidrBlock,
});
export const mitchSubnet1 = new aws.ec2.Subnet("mitchSubnet1", { 
  vpcId: mitchVpc1.id,
  cidrBlock: autoConfig.subnetCidrBlock,
}) 

export const mitchVpc2 = new aws.ec2.Vpc("mitchVpc2", {
  cidrBlock: autoConfig.vpcCidrBlock,
});
export const mitchSubnet2 = new aws.ec2.Subnet("mitchSubnet2", { 
  vpcId: mitchVpc2.id,
  cidrBlock: autoConfig.subnetCidrBlock,
}) 

export const mitchVpc3 = new aws.ec2.Vpc("mitchVpc3", {
  cidrBlock: autoConfig.vpcCidrBlock,
});
export const mitchSubnet3 = new aws.ec2.Subnet("mitchSubnet3", { 
  vpcId: mitchVpc3.id,
  cidrBlock: autoConfig.subnetCidrBlock,
}) 