import { FiniteString, NoWhitespaceString } from '../../primitive';

export class GithubAccountName {
  static minLength = 1;
  static maxLength = 39;

  static validate(val: string, errors: string[]): void {
    // the name of github accounts can only be between 1-39 characters
    FiniteString.validate(val, this.minLength, this.maxLength, errors);
    // the name of github accounts cannot have whitespaces
    NoWhitespaceString.validate(val, errors);
  }
}
