# Crowdfunding-using-Blockchain
Developed a secure crowdfunding platform using Blockchain technology, React.js, and Node.js. Implemented smart contracts with Solidity for immutable transactions and a donor guarantee policy, ensuring transparency and fraud prevention.

We are proposing a novel form of blockchain-based crowdfunding. The utilisation of smart contract capabilities is based on the Ethereum open-source, public blockchain computing platform. When specific criteria are met, smart contracts—which are Solidity programmes stored on a blockchain—run. They automate the implementation of an agreement so that all parties can be certain of the result right away, without the need for a middleman or further delay. As a result, business logic is implemented using smart contracts in a secure blockchain environment.
 
When the intended amount of money is raised is reached, our suggested method will automatically transfer monies from donors to the beneficiary. The contributors will receive their contributions back if this preset requirement is not satisfied and the project is a failure. As a result, the donor has total authority over the funds.
The methodology for the proposed system is divided into two phases as follows:
1. Creation of Smart Contact
2. Working Model of Crowdfunding using Blockchain

Let us discuss each phase in detail.

1. Creation of Smart Contract
The figure below shows how we implemented a two-layer smart contract. Every time a new fundraising campaign is started, the first smart contract, also known as the Generator Smart Contract, deploys the second smart contract. The whole business logic needed to operate the campaign is contained in the second smart contract. As a result, it is known as the Campaign Smart Contract.
The generator smart contract distributes a copy of the campaign smart contract on the Ethereum network whenever the recipient starts a new campaign. The deployed smart campaign contact saves and administers the donations made to the campaign.
  

We have four modules under the System Implementation. It includes:
a)     Campaign Creation
b)     Create Request Module
c)     Request-Approval Module
d)     Finalize Module

Let us discuss each module in detail.

a) Campaign Creation

•	The person who will benefit or the project manager who needs money can start a campaign. The creator of the campaign is now recognised as this person. They give the pertinent information, including the campaign title, description, and goal amount.

•	In order for the Crowdfunding platform's auditors to accept the campaign, the campaign creator must also upload the relevant documentation, such as security certificates, Common Criteria, FIPS-140, PCL-DSS, and ISO 2700.

•	The campaign instance is shown on the front-end web application under Campaign Factory if the campaign is approved.

b) Create Request Module

•	Interested investors or donors will contribute to the campaign.

•	The beneficiary or the project manager, after having collected the required amount of money in the form of ether will generate a payment request.

•	The funding cannot be used by the campaign's creator directly. They must make a request for using the funds, along with the vendor's address, in order to utilise them to purchase something.

•	After that, a transaction will be made, and the block will be added to the blockchain. It prevents scams because the beneficiary cannot spend the money directly.

c) Request-Approval Module

•	All contributors will be made aware of the campaign creator's need to spend money when the creator requests it with supporting documentation.

•	Therefore, if the donor desires, he must approve the request. Only one approval from each contributor will count as a vote.

•	All participants should cast their votes within a predetermined window of time. The block will have records of every request approval. The contributor is not permitted to offer the okay once more after that.

d) Finalize Module

•	If more than the required percentage of donors approve—for example, two-thirds—then funds will be automatically sent to the vendor to whom the recipient must deliver payment.

•	The campaign designer should specifically identify the vendor and the address to whom money should be transmitted because all transactions are recorded in the blockchain.

•	Following the money transfer, a summary of transactions and information about the campaign will be shown. 
  


