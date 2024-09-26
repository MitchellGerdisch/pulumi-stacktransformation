import * as pulumi from "@pulumi/pulumi";
import {StackTags} from "./stack-tags";
import {isTaggable} from "./aws-resource-with-tags";

console.log("Registering stack transformation for auto-tagging resources...")

pulumi.runtime.registerStackTransformation(args => {
    const t = args.type
    const m = t.split(":")[0]
    if (isTaggable(t, m)) {
        console.log(`Auto applying tags for ${t}`);
        if (m == 'aws') {
            args.props["tags"] = {...args.props["tags"], ...StackTags.getTags()};
        }
        if (m == 'aws-native') {
            const tagsArray = Object.entries(StackTags.getTags()).map(([Key, Value]) => ({
                key: Key, value: Value
            }));
            args.props["tags"] = [...args.props["tags"] || [], ...tagsArray]
        }
        return {props: args.props, opts: args.opts};
    }
    return undefined;
});


