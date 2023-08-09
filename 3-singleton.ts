class CommunicationTeam {
	private teamLead: string | null;
	private teamMembers: string[];
	static instance: CommunicationTeam;

	constructor() {
		this.teamLead = null;
		this.teamMembers = [];
	}

	public static GetInstance(): CommunicationTeam {
		if (!CommunicationTeam.instance) {
			CommunicationTeam.instance = new CommunicationTeam();
		}
		return CommunicationTeam.instance;
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

const COMMUNICATOIN_TEAM = CommunicationTeam.GetInstance();

COMMUNICATOIN_TEAM.TeamLead("JOSNA MARIA");

COMMUNICATOIN_TEAM.TeamMembers(["SAM SUNNY", "LEKSHMI"]);

COMMUNICATOIN_TEAM.printTeam()


export {};
