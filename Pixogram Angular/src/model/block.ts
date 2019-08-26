export class Block {
    id: number;
    userId: number;
    blockedId: number;

    constructor(userId, blockedId) {
        this.userId = userId;
        this.blockedId = blockedId;
    }
}