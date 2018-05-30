import request from '../utils/request';

export async function queryMyTrainingClubs() {
  return request('/api/my/training-clubs');
}
