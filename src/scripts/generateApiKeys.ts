import 'reflect-metadata';
import { AppDataSource } from '../data-source';
import { ApiKeyService } from '../service/ApiKeyService';

const clientName = process.argv[2];

if (!clientName) {
  console.error('Please provide a client name');
  process.exit(1);
}

AppDataSource.initialize().then(async () => {
  const apiKey = await ApiKeyService.generateKey(clientName);
  console.log(`Generated API key for ${clientName}: ${apiKey.key}`);
  process.exit(0);
}).catch(error => {
  console.error('Error generating API key:', error);
  process.exit(1);
});
