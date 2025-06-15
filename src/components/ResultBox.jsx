import React from 'react';
import { CheckCircle, AlertCircle, ShieldCheck } from 'lucide-react';
import { getEthereumContract } from '../contract';

function ResultBox({ results, account, refresh }) {
  if (!results || results.length === 0) return null;

  const verifyOnChain = async (role, matchedSkills) => {
    if (!account) return alert("Connect wallet to verify.");
    try {
      const contract = await getEthereumContract();
      const tx = await contract.verifyResume(role, matchedSkills);
      await tx.wait();
      alert(`${role} verified on blockchain ✅`);
      refresh(); // refresh updated status
    } catch (err) {
      console.error("❌ Verification Error:", err);
      alert("Blockchain verification failed.");
    }
  };

  return (
    <div className="space-y-4 mt-6">
      <h2 className="text-xl font-semibold border-b pb-2 border-gray-300 dark:border-gray-600">
        Matched Job Roles & Skills
      </h2>

      {results.map((item, index) => (
        <div
          key={index}
          className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 shadow"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">
              {item.role}
            </h3>
            {item.verified ? (
              <span className="flex items-center gap-1 text-green-500 text-sm">
                <CheckCircle size={16} /> Verified
              </span>
            ) : (
              <span className="flex items-center gap-1 text-yellow-400 text-sm">
                <AlertCircle size={16} /> Not Verified
              </span>
            )}
          </div>

          <div className="mt-2 text-sm flex flex-wrap gap-2">
            <span className="font-medium w-full">Matched Skills:</span>
            {item.matchedSkills.length === 0 ? (
              <span className="italic text-gray-500">None</span>
            ) : (
              item.matchedSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                >
                  {skill}
                </span>
              ))
            )}
          </div>

          {item.filename && (
            <p className="text-xs text-gray-500 mt-1">
              From file: <em>{item.filename}</em>
            </p>
          )}

          {!item.verified && item.matchedSkills.length > 0 && (
            <button
              onClick={() => verifyOnChain(item.role, item.matchedSkills)}
              className="mt-3 inline-flex items-center gap-1 text-sm px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              <ShieldCheck size={16} /> Verify on Blockchain
            </button>
          )}

          {item.timestamp && (
            <p className="text-xs text-gray-400 mt-2">
              Verified on: {new Date(item.timestamp * 1000).toLocaleString()}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default ResultBox;