export class ValidationException extends Error {
  constructor(readonly data: any) {
    super('validation error');
  }
}
