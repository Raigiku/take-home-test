import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  GetGithubCommitsInteractor,
  GetGithubCommitsInteractorInput,
} from '../../interactor/github-commit';
import { PaginationQueryDto } from '../core';
import { GetGithubCommitsParamDto } from './request';
import {
  GetGithubCommitsErrorsDto,
  GetGithubCommitsResponseDto,
} from './response';

@ApiTags('github-commits')
@Controller()
export class GithubCommitController {
  constructor(
    private readonly getGithubCommentsInt: GetGithubCommitsInteractor,
  ) {}

  @Get(
    'accounts/:accountName/repositories/:repositoryName/branches/:branchName/commits',
  )
  @ApiResponse({ status: 400, type: GetGithubCommitsErrorsDto })
  @ApiResponse({ status: 200, type: GetGithubCommitsResponseDto })
  async getCommits(
    @Param() params: GetGithubCommitsParamDto,
    @Query() queries: PaginationQueryDto,
  ): Promise<GetGithubCommitsResponseDto[]> {
    const input = GetGithubCommitsInteractorInput.parse(
      params.accountName,
      params.repositoryName,
      params.branchName,
      queries.page,
      queries.elementsPerPage,
    );
    const output = await this.getGithubCommentsInt.execute(input);
    return output;
  }
}
