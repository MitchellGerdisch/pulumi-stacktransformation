import * as pulumi from "@pulumi/pulumi";

export class StackTags {

    public static getTags(): Record<string,string> {
        return {
            "system": "cpe",
            "idp": "modivcare/data-lake/landing",
            "iac": "pulumi",
            "compliance:handles-pii": "true",
            "owner:team": "Data Platform",
            "owner:project": "Data Lake Landing",
            "owner:contact": "CloudPlatformEngineering@modivcare.com",
            "pulumi:project": pulumi.getProject(),
            "pulumi:stack": pulumi.getStack(),
            "project": "PRJ0035899"
        }
    }

}