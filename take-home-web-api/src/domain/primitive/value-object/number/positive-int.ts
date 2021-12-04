export class PositiveInt {
  static isNotPositiveMsg = 'has to be positive';
  static isNotIntMsg = 'has to be an integer';

  static validate(val: number, errors: string[]): void {
    const isPositive = val > 0;
    if (!isPositive) errors.push(this.isNotPositiveMsg);

    const isInteger = Number.isInteger(val);
    if (!isInteger) errors.push(this.isNotIntMsg);
  }
}
