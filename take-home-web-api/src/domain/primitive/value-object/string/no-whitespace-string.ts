export class NoWhitespaceString {
  static readonly hasWhitespacesMsg = 'cannot have white spaces';

  static validate(val: string, errors: string[]): void {
    const hasWhitespaces = val.includes(' ');
    if (hasWhitespaces) errors.push(this.hasWhitespacesMsg);
  }
}
