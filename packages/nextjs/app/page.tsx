import type { NextPage } from "next";
import Approver from "~~/components/ApproverView";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Blockchain Based Document Approval System</span>
            <span className="block text-4xl font-bold">DocChainApprove</span>
          </h1>
          <p className="text-center text-lg">
            A proof-of-concept implementation of a blockchain-based document approval system.
          </p>
          <div className="card w-200 bg-neutral text-neutral-content mt-10">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Proposal to Approve or Deny</h2>
              <p>Overview of pending approval request </p>
              <Approver></Approver>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
