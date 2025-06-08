// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Lottery {
    address public manager;
    address[] public players;
    address public lastWinner;
    uint public lotteryId;
    uint public ticketPrice = 0.01 ether;
    bool public lotteryOpen;

    mapping(uint => address) public lotteryWinners;
    mapping(address => uint) public playerTickets;

    event NewPlayer(address indexed player, uint tickets);
    event WinnerSelected(address indexed winner, uint amount);
    event LotteryStateChanged(bool isOpen);

    constructor() {
        manager = msg.sender;
        lotteryOpen = true;
        lotteryId = 1;
    }

    modifier onlyManager() {
        require(msg.sender == manager, "Only manager can call this");
        _;
    }

    modifier lotteryIsOpen() {
        require(lotteryOpen, "Lottery is currently closed");
        _;
    }

    function enterLottery(uint numTickets) public payable lotteryIsOpen {
        require(msg.value == ticketPrice * numTickets, "Incorrect ETH sent");
        require(numTickets > 0, "Must buy at least one ticket");
        
        if (playerTickets[msg.sender] == 0) {
            players.push(msg.sender);
        }
        
        playerTickets[msg.sender] += numTickets;
        emit NewPlayer(msg.sender, numTickets);
    }

    function getPlayers() public view returns (address[] memory) {
        return players;
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function getPlayerTicketCount(address player) public view returns (uint) {
        return playerTickets[player];
    }

    function toggleLotteryState() public onlyManager {
        lotteryOpen = !lotteryOpen;
        emit LotteryStateChanged(lotteryOpen);
    }

    function pickWinner() public onlyManager {
        require(!lotteryOpen, "Lottery must be closed to pick a winner");
        require(players.length > 0, "No players in the lottery");

        uint totalTickets = 0;
        for (uint i = 0; i < players.length; i++) {
            totalTickets += playerTickets[players[i]];
        }

        uint randomNumber = uint(keccak256(abi.encodePacked(block.prevrandao, block.timestamp, players.length))) % totalTickets;
        uint cumulativeTickets = 0;
        address winner;

        for (uint i = 0; i < players.length; i++) {
            cumulativeTickets += playerTickets[players[i]];
            if (randomNumber < cumulativeTickets) {
                winner = players[i];
                break;
            }
        }

        uint prizeAmount = address(this).balance * 90 / 100; // 90% to winner
        uint managerFee = address(this).balance - prizeAmount; // 10% to manager

        payable(winner).transfer(prizeAmount);
        payable(manager).transfer(managerFee);

        lastWinner = winner;
        lotteryWinners[lotteryId] = winner;
        emit WinnerSelected(winner, prizeAmount);

        // Reset for next lottery
        lotteryId++;
        delete players;
        for (uint i = 0; i < players.length; i++) {
            playerTickets[players[i]] = 0;
        }
    }
}