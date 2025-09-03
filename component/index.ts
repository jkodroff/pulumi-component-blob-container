import * as pulumi from "@pulumi/pulumi";

// TODO: Rename this class to reflect the name of the component, e.g. "VirtualNetworkArgs"
export interface MyComponentArgs {
  // TODO: Add input properties in the following form:
  // inputProperty: pulumi.Input<T>
}

// TODO: Rename this class to something descriptive, e.g. "VirutalNetwork"
export class MyComponent extends pulumi.ComponentResource {
  constructor(name: string, args: MyComponentArgs, opts: pulumi.CustomResourceOptions) {
    // TODO: Replace `pulumi-components` with the name of your package, e.g. `networking`
    // TODO: Replace `MyComponent` in this string with the name of your component.
    super("pulumi-components:index:MyComponent", name, args, opts);

    this.registerOutputs({
      // TODO: Add all outputs here in the following form:
      // outputName: this.someResource.someProperty,
    })
  }
}