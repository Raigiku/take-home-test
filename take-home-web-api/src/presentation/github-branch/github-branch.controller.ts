import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  GetGithubBranchesInteractor,
  GetGithubBranchesInteractorInput,
} from '../../interactor/github-branch';
import {
  GetGithubBranchesErrorsDto,
  GetGithubBranchesParamDto,
  GetGithubBranchesResponseDto,
} from '.';

@ApiTags('github-branches')
@Controller()
export class GithubBranchController {
  constructor(
    private readonly getGithubBranchesInt: GetGithubBranchesInteractor,
  ) {}

  @Get('accounts/:accountName/repositories/:repositoryName/branches')
  @ApiResponse({ status: 400, type: GetGithubBranchesErrorsDto })
  @ApiResponse({ status: 200, type: GetGithubBranchesResponseDto })
  async getBranches(
    @Param() params: GetGithubBranchesParamDto,
  ): Promise<GetGithubBranchesResponseDto[]> {
    const input = GetGithubBranchesInteractorInput.parse(
      params.accountName,
      params.repositoryName,
    );
    const output = await this.getGithubBranchesInt.execute(input);
    return output;
  }
}
