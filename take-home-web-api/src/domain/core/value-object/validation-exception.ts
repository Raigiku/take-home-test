export class ValidationException extends Error {
  constructor(data: any) {
    super(JSON.stringify(data));
  }
}
