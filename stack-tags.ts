import * as pulumi from "@pulumi/pulumi";

export class StackTags {

    public static getTags(): Record<string,string> {
        return {
            "iac": "pulumi",
            "compliance:handles-pii": "true",
            "owner:team": "MitchTeam",
            "owner:project": "MitchProject",
            "pulumi:project": pulumi.getProject(),
            "pulumi:stack": pulumi.getStack(),
            "project": "MitchProject",
        }
    }

}