interface ITeam {
    AddToTeam(teamMember: string): void;
    PrintTeam(): void;
}

class Team implements ITeam {
    public teamLead: string;
    public teamMembers: string[];

    constructor(teamLead: string) {
        this.teamLead = teamLead;
        this.teamMembers = [teamLead];
    }

    public AddToTeam(teamMember: string) {
        this.teamMembers.push(teamMember);
    }

    public PrintTeam() {
        console.log(this.teamMembers);
    }
}

class BrototypeTeamFactory {
    static CREATE_TEAM(type: string, teamLead: string): ITeam {
        switch (type) {
            case "COMMUNICATION":
                return new Team(teamLead);
            case "ADVISOR":
                return new Team(teamLead);
            case "PLACEMENT":
                return new Team(teamLead);
            default:
                throw new Error("Invalid team type.");
        }
    }
}

const COMMUNICATION_TEAM = BrototypeTeamFactory.CREATE_TEAM("COMMUNICATION", "JOSNA MARIA");
const ADVISOR_TEAM = BrototypeTeamFactory.CREATE_TEAM("ADVISOR", "ARUNIMA");

COMMUNICATION_TEAM.AddToTeam("SAM SUNNY");
COMMUNICATION_TEAM.PrintTeam();
