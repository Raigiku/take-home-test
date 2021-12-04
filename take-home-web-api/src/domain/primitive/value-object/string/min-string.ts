export class MinString {
  static lengthIncorrectMsg(min: number): string {
    return `has to have ${min} or more characters`;
  }

  static validate(val: string, min: number, errors: string[]): void {
    const isLengthCorrect = val.length >= min;
    if (!isLengthCorrect) errors.push(this.lengthIncorrectMsg(min));
  }
}
