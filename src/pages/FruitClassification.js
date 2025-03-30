import React, { useState } from 'react';

function FruitClassification() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = () => {
    // Fake API: Dữ liệu giả để phát triển frontend
    const fakeResult = 'Chín';
    setResult(fakeResult);

    // API Thực Tế: Thay thế đoạn code dưới đây khi có backend
    /*
    const formData = new FormData();
    formData.append('image', file);
    const res = await axios.post('http://your-api-endpoint/classify', formData);
    setResult(res.data.result);
    */
  };

  return (
    <div className="fruit-classification">
      <h1>Phân Loại Trái Cây</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Phân Loại</button>
      {result && <p>Kết Quả: {result}</p>}
    </div>
  );
}

export default FruitClassification;