import * as pulumi from "@pulumi/pulumi";
import * as pulumiAzureNative from "@pulumi/azure-native";
export declare class MyResourceGroup extends pulumi.ComponentResource {
    /**
     * Returns true if the given object is an instance of MyResourceGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is MyResourceGroup;
    readonly myResourceGroup: pulumi.Output<pulumiAzureNative.resources.ResourceGroup>;
    /**
     * Create a MyResourceGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: MyResourceGroupArgs, opts?: pulumi.ComponentResourceOptions);
}
/**
 * The set of arguments for constructing a MyResourceGroup resource.
 */
export interface MyResourceGroupArgs {
}
