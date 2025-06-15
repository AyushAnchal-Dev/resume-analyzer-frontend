import React, { useState } from 'react';
import axios from 'axios';

function UploadForm({ account, setResults }) {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setResumes([...e.target.files]);
  };

  const handleAnalyze = async () => {
    if (resumes.length === 0) return alert("Please upload at least one resume.");
    if (!account) return alert("Please connect your wallet first.");

    const formData = new FormData();
    resumes.forEach(file => formData.append('resumes', file));

    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/analyze-multiple', formData);

      if (res.data.success && res.data.results) {
        setResults(res.data.results);
      } else {
        alert("Skill extraction failed. Try again.");
      }
    } catch (err) {
      console.error("❌ Analyze Error:", err);
      alert("Internal Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="file"
        accept=".pdf"
        multiple
        onChange={handleChange}
        className="w-full text-sm text-gray-700 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-2"
      />
      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 text-white rounded shadow"
      >
        {loading ? 'Analyzing...' : 'Analyze Resume(s)'}
      </button>
    </div>
  );
}

export default UploadForm;