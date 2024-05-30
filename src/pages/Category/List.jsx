import { useEffect } from "react";
import { useState } from "react";
import categoryApi from "../../apis/categoryApi";

export default function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Call API
    categoryApi.getAll().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Category List</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
