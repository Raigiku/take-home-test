import {
  FiniteString,
  MinString,
  NoWhitespaceString,
  PositiveInt,
} from '../src/domain/primitive';
import { ValidationException } from '../src/domain/core';
import {
  GetGithubCommitsInteractorErrors,
  GetGithubCommitsInteractorInput,
} from '../src/interactor/github-commit';
import { GithubAccountName } from '../src/domain/github-account';
import { GithubRepositoryName } from '../src/domain/github-repository';
import { GithubBranchName } from '../src/domain/github-branch';

describe('GetGithubCommitsInteractorInput', () => {
  describe('parse', () => {
    it('given the account name has spaces then throw error', () => {
      try {
        GetGithubCommitsInteractorInput.parse('te st', 'test', 'test', 1, 1);
      } catch (e) {
        if (e instanceof ValidationException) {
          const errors = e.data as GetGithubCommitsInteractorErrors;
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
        GetGithubCommitsInteractorInput.parse('', 'test', 'test', 1, 1);
      } catch (e) {
        if (e instanceof ValidationException) {
          const errors = e.data as GetGithubCommitsInteractorErrors;
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
        GetGithubCommitsInteractorInput.parse(
          new Array(GithubAccountName.maxLength + 1 + 1).join('t'),
          'test',
          'test',
          1,
          1,
        );
      } catch (e) {
        if (e instanceof ValidationException) {
          const errors = e.data as GetGithubCommitsInteractorErrors;
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
        GetGithubCommitsInteractorInput.parse('test', 'te st', 'test', 1, 1);
      } catch (e) {
        if (e instanceof ValidationException) {
          const errors = e.data as GetGithubCommitsInteractorErrors;
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
        GetGithubCommitsInteractorInput.parse('test', '', 'test', 1, 1);
      } catch (e) {
        if (e instanceof ValidationException) {
          const errors = e.data as GetGithubCommitsInteractorErrors;
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
        GetGithubCommitsInteractorInput.parse(
          'test',
          new Array(GithubRepositoryName.maxLength + 1 + 1).join('t'),
          'test',
          1,
          1,
        );
      } catch (e) {
        if (e instanceof ValidationException) {
          const errors = e.data as GetGithubCommitsInteractorErrors;
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

    it('given the branch name has spaces then throw error', () => {
      try {
        GetGithubCommitsInteractorInput.parse('test', 'test', 'te st', 1, 1);
      } catch (e) {
        if (e instanceof ValidationException) {
          const errors = e.data as GetGithubCommitsInteractorErrors;
          expect(errors.branchName).toContain(
            NoWhitespaceString.hasWhitespacesMsg,
          );
          return;
        }
      }
      expect(true).toBe(false);
    });

    it('given the branch name is lower than the minimum length then throw error', () => {
      try {
        GetGithubCommitsInteractorInput.parse('test', 'test', '', 1, 1);
      } catch (e) {
        if (e instanceof ValidationException) {
          const errors = e.data as GetGithubCommitsInteractorErrors;
          expect(errors.branchName).toContain(
            MinString.lengthIncorrectMsg(GithubBranchName.minLength),
          );
          return;
        }
      }
      expect(true).toBe(false);
    });

    it('given the page is not positive then throw error', () => {
      try {
        GetGithubCommitsInteractorInput.parse('test', 'test', 'test', -1, 1);
      } catch (e) {
        if (e instanceof ValidationException) {
          const errors = e.data as GetGithubCommitsInteractorErrors;
          expect(errors.page).toContain(PositiveInt.isNotPositiveMsg);
          return;
        }
      }
      expect(true).toBe(false);
    });

    it('given the page is not an integer then throw error', () => {
      try {
        GetGithubCommitsInteractorInput.parse('test', 'test', 'test', 1.3, 1);
      } catch (e) {
        if (e instanceof ValidationException) {
          const errors = e.data as GetGithubCommitsInteractorErrors;
          expect(errors.page).toContain(PositiveInt.isNotIntMsg);
          return;
        }
      }
      expect(true).toBe(false);
    });

    it('given the elements per page is not positive then throw error', () => {
      try {
        GetGithubCommitsInteractorInput.parse('test', 'test', 'test', 1, -1);
      } catch (e) {
        if (e instanceof ValidationException) {
          const errors = e.data as GetGithubCommitsInteractorErrors;
          expect(errors.elementsPerPage).toContain(
            PositiveInt.isNotPositiveMsg,
          );
          return;
        }
      }
      expect(true).toBe(false);
    });

    it('given the elements per page is not an integer then throw error', () => {
      try {
        GetGithubCommitsInteractorInput.parse('test', 'test', 'test', 1, NaN);
      } catch (e) {
        if (e instanceof ValidationException) {
          const errors = e.data as GetGithubCommitsInteractorErrors;
          expect(errors.elementsPerPage).toContain(PositiveInt.isNotIntMsg);
          return;
        }
      }
      expect(true).toBe(false);
    });
  });
});
