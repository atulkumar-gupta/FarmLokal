import axios from 'axios';
import Redis from 'ioredis';

const redis = new Redis();

export async function getToken() {
  const cached = await redis.get('oauth_token');
  if (cached) return cached;

  const res = await axios.post('https://mock.oauth/token');
  const token = res.data.access_token;

  await redis.set('oauth_token', token, 'EX', 300);
  return token;
}