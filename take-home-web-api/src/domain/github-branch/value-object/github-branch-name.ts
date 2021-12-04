import { MinString, NoWhitespaceString } from '../../primitive';

export class GithubBranchName {
  static minLength = 1;

  static validate(val: string, errors: string[]): void {
    // the name of github branches have at least 1 character
    MinString.validate(val, this.minLength, errors);
    // the name of github branches cannot have whitespaces
    NoWhitespaceString.validate(val, errors);
  }
}
