export abstract class StoreValidators {
  public static stateNameRegex: RegExp = new RegExp('^[a-zA-Z0-9_]+$');

  public static stateNameErrorMessage(name: string) {
    return `${name} is not a valid state name. It needs to be a valid object property name.`;
  }

  public static checkCorrectStateName(name: string) {
    if (!name) {
      throw new Error(`States must register a 'name' property`);
    }

    if (!this.stateNameRegex.test(name)) {
      throw new Error(this.stateNameErrorMessage(name));
    }
  }
}
