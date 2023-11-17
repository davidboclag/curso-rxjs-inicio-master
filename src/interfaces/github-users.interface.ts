import { GitHubUser } from "./github-user.interfaces";

export interface GitHubUsersResp {
    total_count:        number;
    incomplete_results: boolean;
    items:              GitHubUser[];
}