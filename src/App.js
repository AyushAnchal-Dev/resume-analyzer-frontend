import React, { useState, useEffect, useCallback } from 'react';
import ConnectWallet from './components/ConnectWallet';
import UploadForm from './components/UploadForm';
import ResultBox from './components/ResultBox';
import { getEthereumContract } from './contract';

function App() {
  const [account, setAccount] = useState('');
  const [results, setResults] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // ✅ Blockchain verification fetch
  const fetchVerifications = useCallback(async () => {
    if (!account) return;
    try {
      const contract = await getEthereumContract();
      const data = await contract.getVerifications(account);

      setResults(prev =>
        prev.map(result => {
          const matched = data.find(v => v.role === result.role);
          return matched
            ? { ...result, verified: true, timestamp: Number(matched.timestamp) }
            : result;
        })
      );
    } catch (err) {
      console.error("❌ Fetch verification error:", err);
    }
  }, [account]);

  useEffect(() => {
    fetchVerifications();
  }, [fetchVerifications]);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} min-h-screen transition-all duration-300`}>
      <div className="max-w-4xl mx-auto px-6 py-10">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight">
            Resume <span className="text-blue-500">Analyzer</span> & <span className="text-blue-400">Verifier</span>
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm flex items-center space-x-1 bg-gray-200 dark:bg-gray-700 px-4 py-1 rounded shadow hover:scale-105 transition"
          >
            <span>{darkMode ? '☀️ Light' : '🌙 Dark'}</span>
          </button>
        </div>

        {/* Main Area */}
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 space-y-6">
          <ConnectWallet setAccount={setAccount} account={account} />
          <UploadForm account={account} setResults={setResults} />
          {results.length > 0 && (
            <ResultBox results={results} account={account} refresh={fetchVerifications} />
          )}
        </div>

        {/* Footer */}
        <footer className="text-center text-xs text-gray-500 mt-10">
          Powered by <span className="text-blue-500 font-medium">AI</span> + <span className="text-green-400 font-medium">Blockchain</span>
        </footer>
      </div>
    </div>
  );
}

export default App;