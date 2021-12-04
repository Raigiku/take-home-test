export class FiniteString {
  static lengthIncorrectMsg(min: number, max: number): string {
    return `has to have between ${min}-${max} characters`;
  }

  static validate(
    val: string,
    min: number,
    max: number,
    errors: string[],
  ): void {
    const isLengthCorrect = val.length >= min && val.length <= max;
    if (!isLengthCorrect) errors.push(this.lengthIncorrectMsg(min, max));
  }
}
