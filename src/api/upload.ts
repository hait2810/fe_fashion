import { instance } from './axiosConfig';

export const Upload = async (data: any) => {
  const { data: response } = await instance.post('/upload', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};
