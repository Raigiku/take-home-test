import { FiniteString, NoWhitespaceString } from '../src/domain/primitive';
import { ValidationException } from '../src/domain/core';
import { GithubAccountName } from '../src/domain/github-account';
import { GithubRepositoryName } from '../src/domain/github-repository';
import {
  GetGithubBranchesInteractorErrors,
  GetGithubBranchesInteractorInput,
} from '../src/interactor/github-branch';

describe('GetGithubBranchesInteractorInput', () => {
  describe('parse', () => {
    it('given the account name has spaces then throw error', () => {
      try {
        GetGithubBranchesInteractorInput.parse('te st', 'test');
      } catch (e) {
        if (e instanceof ValidationException) {
          const errors = e.data as GetGithubBranchesInteractorErrors;
          expect(errors.accountName).toContain(
            NoWhitespaceString.hasWhitespacesMsg,
          );
          return;
        }
      }
      expect(true).toBe(false);
    });

    it('given the account name is not between 1-39 characters then throw error', () => {
      // test characters lower than min length
      try {
        GetGithubBranchesInteractorInput.parse('', 'test');
      } catch (e) {
        if (e instanceof ValidationException) {
          const errors = e.data as GetGithubBranchesInteractorErrors;
          expect(errors.accountName).toContain(
            FiniteString.lengthIncorrectMsg(
              GithubAccountName.minLength,
              GithubAccountName.maxLength,
            ),
          );
        }
      }
      // test characters higher than max length
      try {
        GetGithubBranchesInteractorInput.parse(
          new Array(GithubAccountName.maxLength + 1 + 1).join('t'),
          'test',
        );
      } catch (e) {
        if (e instanceof ValidationException) {
          const errors = e.data as GetGithubBranchesInteractorErrors;
          expect(errors.accountName).toContain(
            FiniteString.lengthIncorrectMsg(
              GithubAccountName.minLength,
              GithubAccountName.maxLength,
            ),
          );
          return;
        }
      }
      expect(true).toBe(false);
    });

    it('given the repository name has spaces then throw error', () => {
      try {
        GetGithubBranchesInteractorInput.parse('test', 'te st');
      } catch (e) {
        if (e instanceof ValidationException) {
          const errors = e.data as GetGithubBranchesInteractorErrors;
          expect(errors.repositoryName).toContain(
            NoWhitespaceString.hasWhitespacesMsg,
          );
          return;
        }
      }
      expect(true).toBe(false);
    });

    it('given the repository name is not between 1-100 characters then throw error', () => {
      // test characters lower than min length
      try {
        GetGithubBranchesInteractorInput.parse('test', '');
      } catch (e) {
        if (e instanceof ValidationException) {
          const errors = e.data as GetGithubBranchesInteractorErrors;
          expect(errors.repositoryName).toContain(
            FiniteString.lengthIncorrectMsg(
              GithubRepositoryName.minLength,
              GithubRepositoryName.maxLength,
            ),
          );
        }
      }
      // test characters higher than max length
      try {
        GetGithubBranchesInteractorInput.parse(
          'test',
          new Array(GithubRepositoryName.maxLength + 1 + 1).join('t'),
        );
      } catch (e) {
        if (e instanceof ValidationException) {
          const errors = e.data as GetGithubBranchesInteractorErrors;
          expect(errors.repositoryName).toContain(
            FiniteString.lengthIncorrectMsg(
              GithubRepositoryName.minLength,
              GithubRepositoryName.maxLength,
            ),
          );
          return;
        }
      }
      expect(true).toBe(false);
    });
  });
});
