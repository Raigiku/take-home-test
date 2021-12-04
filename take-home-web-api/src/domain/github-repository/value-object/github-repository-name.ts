import { FiniteString, NoWhitespaceString } from '../../primitive';

export class GithubRepositoryName {
  static minLength = 1;
  static maxLength = 100;

  static validate(val: string, errors: string[]): void {
    // the name of github repositories can only be between 1-100 characters
    FiniteString.validate(val, this.minLength, this.maxLength, errors);
    // the name of github repositories cannot have whitespaces
    NoWhitespaceString.validate(val, errors);
  }
}
