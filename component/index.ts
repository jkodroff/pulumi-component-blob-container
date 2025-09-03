import * as pulumi from "@pulumi/pulumi";
import * as rg from "@jkodroff/component";
import * as azure from "@pulumi/azure-native";

export interface MyBlobContainerArgs {
  // TODO: Add input properties in the following form:
  // inputProperty: pulumi.Input<T>
}

export class MyBlobContainer extends pulumi.ComponentResource {
  public readonly blobContainer: azure.storage.BlobContainer;

  constructor(name: string, args: MyBlobContainerArgs, opts: pulumi.CustomResourceOptions) {
    super("pulumi-components:index:MyBlobContainer", name, args, opts);

    const resourceGroup = new rg.MyResourceGroup(`${name}-resource-group`);

    this.blobContainer = new azure.storage.BlobContainer(`${name}-blob-container`, {
      resourceGroupName: resourceGroup.myResourceGroup.name,
      accountName: name,
    });

    this.registerOutputs({
      blobContainer: this.blobContainer,
    });
  }
}