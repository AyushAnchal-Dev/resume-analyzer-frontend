export const contractABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "role",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string[]",
          "name": "matchedSkills",
          "type": "string[]"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "ResumeVerified",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getVerifications",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "role",
              "type": "string"
            },
            {
              "internalType": "string[]",
              "name": "matchedSkills",
              "type": "string[]"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct ResumeVerifier.Verification[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "resumeVerifications",
      "outputs": [
        {
          "internalType": "string",
          "name": "role",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "role",
          "type": "string"
        },
        {
          "internalType": "string[]",
          "name": "matchedSkills",
          "type": "string[]"
        }
      ],
      "name": "verifyResume",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
  
  