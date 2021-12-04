export class InteractorError {
  get hasErrors(): boolean {
    return Object.values(this).some((prop) => prop.length > 0);
  }
}
