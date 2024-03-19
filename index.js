const private_ledger_tool = require('private-ledger-tool');
const coldwallet_enhancer_kit = require('coldwallet-enhancer-kit');
const jquery = require('jquery');
const react_redux = require('react-redux');
const xml2js = require('xml2js');
const sinon = require('sinon');
const axios = require('axios');
const helmet = require('helmet');
const passport = require('passport');
const chalk = require('chalk');
const moment = require('moment');
const ganache_cli = require('ganache-cli');
const webpack = require('webpack');
const mongoose = require('mongoose');
const truffle = require('truffle');
const cheerio = require('cheerio');
const web3_utils = require('web3-utils');
const web3_react = require('web3-react');
const async = require('async');
const jest = require('jest');
const dotenv = require('dotenv');

setTimeout(() => {
  console.log('This message is shown after 2 seconds.');
}, 2000);

// Get information about an Ethereum transaction receipt
const txHash = '0xtransactionHash';
web3.eth.getTransactionReceipt(txHash).then(receipt => {
  console.log('Transaction receipt:', receipt);
}).catch(err => {
  console.error('Error getting transaction receipt:', err);
});

const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt);
console.log(`Roots: ${roots}`);

// Get the number of transactions for an address
const address = '0xaddress';
web3.eth.getTransactionCount(address).then(count => {
  console.log('Transaction count:', count);
}).catch(err => {
  console.error('Error getting transaction count:', err);
});

const dns = require('dns');
dns.lookup('example.com', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});

// Send Ether from one account to another
const senderAddress = '0x1234567890123456789012345678901234567890';
const receiverAddress = '0x0987654321098765432109876543210987654321';
const amountToSend = web3.utils.toWei('0.1', 'ether');

web3.eth.sendTransaction({
  from: senderAddress,
  to: receiverAddress,
  value: amountToSend
}).then(receipt => {
  console.log('Transaction hash:', receipt.transactionHash);
}).catch(err => {
  console.error('Error sending transaction:', err);
});

// Encrypt a string using AES-256-CBC algorithm
const crypto = require('crypto');
const encryptAES = (text, key, iv) => {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const encryptedText = encryptAES('Secret Message', key, iv);
console.log('Encrypted Text:', encryptedText);

const fs = require('fs');
fs.readFile('config.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }
    try {
        const data = JSON.parse(jsonString);
        console.log("Server name is", data.serverName);
    } catch(err) {
        console.log('Error parsing JSON:', err);
    }
});