import * as pulumi from "@pulumi/pulumi";

export type DmsTaskMigrationType = 'full-load' | 'cdc' | 'full-load-and-cdc'

// Workaround for the issue https://github.com/pulumi/pulumi/issues/13561
export interface ProjectConfig {
    vpcCidrBlock: string;
    subnetCidrBlock: string;
}

console.log("Running initial setup...");

const config = new pulumi.Config();

// Return a dictionary with configuration values
export const autoConfig = config.requireObject<ProjectConfig>(pulumi.getProject())