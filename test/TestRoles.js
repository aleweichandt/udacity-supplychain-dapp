// This script is designed to test the solidity smart contract - SuppyChain.sol -- and the various functions within
// Declare a variable and assign the compiled smart contract artifact
var SupplyChain = artifacts.require('SupplyChain')

contract('SupplyChain', function(accounts) {
    const ownerID = accounts[0]
    const originFarmerID = accounts[1]
    const distributorID = accounts[2]
    const retailerID = accounts[3]
    const consumerID = accounts[4]

    it("Can assign and remove farmer role", async () => {
        const supplyChain = await SupplyChain.deployed()
        // ensure is not farmer
        const wasFarmer = await supplyChain.isFarmer(originFarmerID, {from: ownerID});
        assert.equal(false, wasFarmer);
        // add farmer role
        await supplyChain.addFarmer(originFarmerID, {from: ownerID});
        // ensure is now farmer
        const isFarmer = await supplyChain.isFarmer(originFarmerID, {from: ownerID});
        assert.equal(true, isFarmer);
        // renounce farmer role
        await supplyChain.renounceFarmer({ from: originFarmerID });
         // ensure not farmer anymore
         const notFarmer = await supplyChain.isFarmer(originFarmerID, {from: ownerID});
         assert.equal(false, notFarmer);
    });

    it("Can assign and remove distributor role", async () => {
        const supplyChain = await SupplyChain.deployed()
        // ensure is not distributor
        const wasDistributor = await supplyChain.isDistributor(distributorID, {from: ownerID});
        assert.equal(false, wasDistributor);
        // add distributor role
        await supplyChain.addDistributor(distributorID, {from: ownerID});
        // ensure is now distributor
        const isDistributor = await supplyChain.isDistributor(distributorID, {from: ownerID});
        assert.equal(true, isDistributor);
        // renounce distributor role
        await supplyChain.renounceDistributor({ from: distributorID });
         // ensure not distributor anymore
         const notDistributor = await supplyChain.isDistributor(distributorID, {from: ownerID});
         assert.equal(false, notDistributor);
    });

    it("Can assign and remove retailer role", async () => {
        const supplyChain = await SupplyChain.deployed()
        // ensure is not retailer
        const wasRetailer = await supplyChain.isRetailer(retailerID, {from: ownerID});
        assert.equal(false, wasRetailer);
        // add retailer role
        await supplyChain.addRetailer(retailerID, {from: ownerID});
        // ensure is now retailer
        const isRetailer = await supplyChain.isRetailer(retailerID, {from: ownerID});
        assert.equal(true, isRetailer);
        // renounce retailer role
        await supplyChain.renounceRetailer({ from: retailerID });
         // ensure not retailer anymore
         const notRetailer= await supplyChain.isRetailer(retailerID, {from: ownerID});
         assert.equal(false, notRetailer);
    });

    it("Can assign and remove consumer role", async () => {
        const supplyChain = await SupplyChain.deployed()
        // ensure is not consumer
        const wasConsumer = await supplyChain.isConsumer(consumerID, {from: ownerID});
        assert.equal(false, wasConsumer);
        // add consumer role
        await supplyChain.addConsumer(consumerID, {from: ownerID});
        // ensure is now consumer
        const isConsumer = await supplyChain.isConsumer(consumerID, {from: ownerID});
        assert.equal(true, isConsumer);
        // renounce consumer role
        await supplyChain.renounceConsumer({ from: consumerID });
         // ensure not consumer anymore
         const notConsumer = await supplyChain.isConsumer(consumerID, {from: ownerID});
         assert.equal(false, notConsumer);
    });
});