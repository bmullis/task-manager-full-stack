import { useState, useEffect } from 'react';
import axios from 'axios';

const fetchResources = (resource, token) => {
  const [resources, setResources] = useState([]);

  useEffect(
    () => {
      (async (resource) => {
        const config = {
          headers: {
            'Authorization': token
          }
        };
        const response = await axios.get(`/${resource}`, config);

        setResources(response.data)
      })(resource);
    }, [resource]);

  return resources;
};

export default fetchResources;