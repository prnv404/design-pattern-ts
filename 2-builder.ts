/* The Team class represents a team with a team lead and a list of team members. */
class Team {
	private teamLead: string | null;
	private teamMembers: string[];

	constructor() {
		this.teamLead = null;
		this.teamMembers = [];
	}

	public TeamLead = (teamlead: string) => {
		this.teamLead = teamlead;
		this.teamMembers.push(teamlead);
	};

	public TeamMembers = (members: string[]) => {
		this.teamMembers = members;
	};

	public printTeam() {
		console.log(`Team Lead : ${this.teamLead}`);
		console.log(`Team memeber : ${this.teamMembers}`);
	}
}

/* The BrototypeTeamBuilder class is used to build a team by adding a team lead and team members. */
class BrototypeTeamBuilder {
	public team: Team;

	constructor() {
		this.team = new Team();
	}

	public AddTeamLead(teamlead: string) {
		this.team.TeamLead(teamlead);
		return this;
	}

	public AddTeamMembers(members: string[]) {
		this.team.TeamMembers(members);
		return this;
	}

	public Build() {
		return this.team;
	}
}

/* The code is creating a new instance of the `BrototypeTeamBuilder` class and using its methods to
build a team. */
const COMMUNICATION_TEAM = new BrototypeTeamBuilder()
	.AddTeamLead("JOSNA MARIA")
	.AddTeamMembers(["SAM SUNNY", "LEKSHMI", "SUNY RAJA"])
	.Build();

COMMUNICATION_TEAM.printTeam();
/*
output
Team Lead : JOSNA MARIA
Team memeber : SAM SUNNY,LEKSHMI,SUNY RAJA
*/

export {};
