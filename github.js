class Github {
  constructor() {
    this.client_id = '427895caf8825e11a550';
    this.client_secret = '0c2d51559fc209f943b19482882e6a2cf3abae0a';

    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    return {
      // 'profile: profile', same as just 'profile'
      profile,
      repos
    }
  }
}
